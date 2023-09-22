import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

export interface User {
  id: string;
  date: string;
  description: string;
  time: string;
  title: string;
}

@Component({
  selector: 'app-scheduled',
  templateUrl: './scheduled.page.html',
  styleUrls: ['./scheduled.page.scss'],
})
export class ScheduledPage implements OnInit {
  interviewList: User[] = [];
  isLoading = false;
  isError = false;

  constructor(private data: DataService, private router: Router) {}

  ngOnInit() {
    this.getInterview();
  }

  getInterview() {
    this.isLoading = true;

    this.data.getAllUser().subscribe(
      (res: any[]) => {
        this.interviewList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
        this.isLoading = false;
        this.isError = false;
      },
      (err) => {
        this.isLoading = false;
        this.isError = true;
        console.error('Error while fetching interview data', err);
      }
    );
  }

  onFabClick() {
    // Navigate to the "Today" page using its route path
    this.router.navigate(['/new-to-do']);
  }
}
