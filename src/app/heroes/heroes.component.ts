import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public selectedHero!: Hero;
  public heroes!: Hero[];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe( (heroes: Hero[]) => this.heroes = heroes);
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
