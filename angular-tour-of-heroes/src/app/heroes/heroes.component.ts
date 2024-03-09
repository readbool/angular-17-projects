import { HeroService } from './../hero.service';
import { Component, inject } from '@angular/core';
import { Hero } from '../hero';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'heroes-component',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor,
    NgIf,
    HeroDetailComponent,
    RouterLink
  ],
  providers: [
    HeroService
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  heroList: Hero[] = [];

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroList = heroes);
  }

  constructor(private heroService: HeroService) {
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroList.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroList = this.heroList.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
