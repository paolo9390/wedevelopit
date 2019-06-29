import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slogan: string = 'Creating Innovative, modern and rensponsive Web Applications';
  title: string = 'We Develop IT'
  subheading: string = 'Full MEAN Stack Web Developerment';

  constructor() { }

  ngOnInit() {
  }

}
