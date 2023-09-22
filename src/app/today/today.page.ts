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
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit {
  interviewList: User[] = [];
  isLoading = false;
  isError = false;
  today: string | undefined; // Declare the 'today' variable

  constructor(private data: DataService, private router: Router) {}

  ngOnInit() {
    this.today = new Date().toISOString().slice(0, 10); // Get today's date in "YYYY-MM-DD" format
    this.getInterview();
  }

  getInterview() {
    this.isLoading = true;

    this.data.getAllUser().subscribe(
      (res: any[]) => {
        this.interviewList = res
          .map((e: any) => {
            const data = e.payload.doc.data();
            data.id = e.payload.doc.id;
            return data;
          })
          .filter((user: User) => user.date === this.today); // Filter by today's date
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
