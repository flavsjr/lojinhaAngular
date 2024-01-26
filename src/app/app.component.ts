import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Início da Loja</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'lojinhaAngular';
}