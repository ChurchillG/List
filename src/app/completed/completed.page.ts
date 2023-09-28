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
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage implements OnInit {
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

        // Filter the interviewList to include only entries with dates greater than or equal to today's date
        const today = new Date();
        this.interviewList = this.interviewList.filter((interview) => {
          const interviewDate = new Date(interview.date);
          return interviewDate <= today;
        });

        // Sort the filtered interviewList by date in ascending order
        this.interviewList.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA.getTime() - dateB.getTime();
        });

        this.isLoading = false;
        this.isError = false;
      },
      (err:any) => {
        this.isLoading = false;
        this.isError = true;
        console.error('Error while fetching list data', err);
      }
    );
  }

  onFabClick() {
    // Navigate to the "Today" page using its route path
    this.router.navigate(['/new-to-do']);
  }
}
