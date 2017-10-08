import {Component, OnDestroy, OnInit} from '@angular/core';
import * as myGlobals from '../data/globals';
import {SelectedHeroService} from "../services/selected-hero.service";
import {isUndefined} from "util";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private sh: SelectedHeroService) {
    this.sh.selectedHeroObservable
      //.takeUntil(this.ngUnsubscribe)
      .subscribe((hero) => {
        //add your logic here!! for now I'm just gonna console log the selected hero
        this.selectedHero = hero;
      });
  }

  title = myGlobals.TITLE;
  selectedHero = null;

  ngOnDestroy() {
    this.selectedHero.unsubscribe();
  }

  ngOnInit(): void {

  }

}
