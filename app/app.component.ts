import { Component } from '@angular/core';

// import { Hero } from './hero';
// import { HeroesComponent } from './heroes.component';
// import { HeroService } from './hero.service';


@Component ({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app.component.css'],

})

export class AppComponent {
  title = 'Tour of Heroes';

} 