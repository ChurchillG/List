import { Component, OnInit } from '@angular/core';
//import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.page.html',
  styleUrls: ['./new-to-do.page.scss'],
})
export class NewToDoPage implements OnInit {

  title: any;
  description: any;
  date: any;
  time: any;

  constructor(private loadingController: LoadingController, navCtrl: NavController, private toastController: ToastController, private router: Router,
    private alertController: AlertController, private auth: AngularFireAuth, private db: AngularFirestore, private navController: NavController) { }

  ngOnInit() {
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

}
