import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from '../hero.service';
import { Hero } from '../objects/hero';
import {SelectedHeroService} from "../services/selected-hero.service";

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit,OnDestroy {

  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private sh: SelectedHeroService
  ) {}

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  ngOnDestroy() {
    this.changeSelectedHero('');
  }

  changeSelectedHero(name: string): void {
    if(name) {
      this.sh.changeSelectedHero(name);
    }
  }
}
