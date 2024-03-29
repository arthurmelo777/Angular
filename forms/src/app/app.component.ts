import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
  ],
  template: 
  `<main>
    <header class="brand-name">
      <img class="brand-logo" src="favicon.ico" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
  `,
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'homes';
}
