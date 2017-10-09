import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SelectedHeroService {
  selectedHero = new BehaviorSubject<string>('');
  selectedHeroObservable = this.selectedHero.asObservable();

  changeSelectedHero(newHero:string):void{
    this.selectedHero.next(newHero)
  }
}
