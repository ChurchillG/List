import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduled',
  templateUrl: './scheduled.page.html',
  styleUrls: ['./scheduled.page.scss'],
})
export class ScheduledPage implements OnInit {
  scheduled : any[] =[];
  today:any;
  tomorrow:any;

  constructor() { }

  ngOnInit() {
    this.Select();
  }

Select(){
this.today = "Reminder for today";
this.tomorrow = "Reminder for tomorrow";
}

}
