import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onFabClick() {
      // Navigate to the "Today" page using its route path
      this.router.navigate(['/new-to-do']);
   
  }

}
