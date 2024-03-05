import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filtrar por cidade">
        <button class="primary" type="button">Buscar</button>
      </form>
    </section>
  `,
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
