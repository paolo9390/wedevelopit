import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  web: string = 'wedevelopit.co.uk'
  message: string = 'Future home of something cool';

  constructor() { }

  ngOnInit() {
  }

}
