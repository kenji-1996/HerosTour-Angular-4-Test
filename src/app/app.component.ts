import { Component } from '@angular/core';
import * as myGlobals from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * Global items
 */
export class AppComponent {
  sub_title = myGlobals.SUB_TITLE;
}
