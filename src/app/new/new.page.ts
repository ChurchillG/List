import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onDoneClick() {
    // Add the logic you want to execute when the "Done" button is clicked
    console.log('Done button clicked');
    // You can add your custom logic here
  }

}
