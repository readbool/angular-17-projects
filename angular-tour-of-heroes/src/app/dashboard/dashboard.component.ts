import { HeroService } from './../hero.service';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from '../hero';
import { RouterLink } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink, HeroSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(resolvedHeroes => this.heroes = resolvedHeroes.slice(1, 5));
  }
}
