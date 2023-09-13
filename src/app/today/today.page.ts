import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../services/data.service';

export interface User{
  id: string;
  date: string;
  description: string;
  time :string;
  title: string;
}

@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit {

  interviewList: User[] = [];
  

  constructor(private data: DataService,private router: Router) { }

  ngOnInit() {
    this.getInterview();
  }

  getInterview() {

    this.data.getAllUser().subscribe(res => {

      this.interviewList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching interview data');
    })

  }


  onFabClick() {
      // Navigate to the "Today" page using its route path
      this.router.navigate(['/new-to-do']);
   
  }

}
