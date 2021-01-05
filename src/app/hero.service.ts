import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

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

  constructor(
    private messageService: MessageService
  ) {}

  public getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(this.heroes);
  }
}
