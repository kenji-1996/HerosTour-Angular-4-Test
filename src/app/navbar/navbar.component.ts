import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = myGlobals.TITLE;

  constructor() { }

  ngOnInit() {
  }

}
