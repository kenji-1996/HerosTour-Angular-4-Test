import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../objects/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
