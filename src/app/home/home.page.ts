import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToTodayPage() {
    // Navigate to the "Today" page using its route path
    this.router.navigate(['/today']);
  }
  
  goToTodayScheduled() {
    // Navigate to the "Today" page using its route path
    this.router.navigate(['/scheduled']);
  }
  goToTodayAll() {
    // Navigate to the "Today" page using its route path
    this.router.navigate(['/all']);
  }
  goToTodayCompleted() {
    // Navigate to the "Today" page using its route path
    this.router.navigate(['/completed']);
  }
  navigateToNewPage(){
    this.router.navigate(['/new-to-do']);
  }
}
