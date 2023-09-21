import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import { MenuController } from '@ionic/angular';
import 'firebase/storage';
import { ChatService } from '../services/chat.service';



@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.page.html',
  styleUrls: ['./new-to-do.page.scss'],
})
export class NewToDoPage implements OnInit {
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef;

  mediaRecorder: MediaRecorder | null = null;
  chunks: BlobPart[] = [];
  isRecording: boolean = false;
  isBlocked=false;

  title: any;
  description: any;
  time: any;
  date = '';
  dateError:any;

  constructor(private loadingController: LoadingController,
    navCtrl: NavController, 
    private toastController: ToastController, 
    private router: Router,
    private alertController: AlertController, 
    private auth: AngularFireAuth, private db: AngularFirestore,
     private navController: NavController,
     public chatService: ChatService) { }

  ngOnInit() {
  }

validation(){
  this.dateError=null;

  if (this.date === '') {
    this.dateError = 'Please choose your date.';
    alert('Please choose your date.');
    return;
  }
}

getIondate($event: any) {
  this.date = $event.detail.value.split('T')[0];
}

  save(){
  
    this.db.collection('newList').add({
      title: this.title,
      description: this.description,
      date: this.date,
      time: this.time,
    });
    
    alert("Success");
    this.navController.navigateForward("/home");
  }


  startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        this.mediaRecorder = new MediaRecorder(stream);

        this.mediaRecorder.addEventListener('dataavailable', (event) => {
          this.chunks.push(event.data);
        });

        this.mediaRecorder.start();
        this.isRecording = true;
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  }

  async stopRecording() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
      this.mediaRecorder = null;

      const audioBlob = new Blob(this.chunks, { type: 'audio/mp3' });
      this.chunks = [];

      const filename = 'audio_' + Date.now() + '.mp3';
      const storageRef = firebase.storage().ref().child('audio/' + filename);
      const uploadTask = storageRef.put(audioBlob);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload progress:', progress);
        },
        (error) => {
          console.error('Error uploading audio:', error);
        },
        async () => {
          try {
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            console.log('Download URL:', downloadURL);
            // Send the audio message to the user using the ChatService
            //await this.chatService.sendAudioMessage(this.id, filename, downloadURL);
            // You can do further processing or update the UI as needed
          } catch (error) {
            console.error('Error sending audio message:', error);
          }
        }
      );

      // Update the audio player source
      const audioPlayerElement = this.audioPlayer.nativeElement;
      audioPlayerElement.src = URL.createObjectURL(audioBlob);
      this.isRecording = false;
    }
  }

 

}
