import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[] = [
    {id: 0, name: 'Windstorm'},
    {id: 1, name: 'Marcos'},
    {id: 2, name: 'Bombo'},
    {id: 3, name: 'Latouche'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
