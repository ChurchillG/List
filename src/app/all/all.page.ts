import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

  myList: any;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('newList')
    .valueChanges()
    .subscribe(data =>{
      
    this.myList=data;  
    console.log(data);

}); 
   
  }

  getData(){
    this.db.collection('newList')
    .valueChanges()
    .subscribe(data =>{
      
    this.myList=data;  
    console.log(data);

}); 


}
}
