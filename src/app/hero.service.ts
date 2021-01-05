import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [
    {id: 0, name: 'Windstorm'},
    {id: 1, name: 'Marcos'},
    {id: 2, name: 'Bombo'},
    {id: 3, name: 'Latouche'},
  ];

  constructor() { }

  public getHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }
}
