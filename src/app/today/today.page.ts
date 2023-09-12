import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFabClick() {
    // Add your custom logic here
    alert('Fab button clicked');
  }

}
