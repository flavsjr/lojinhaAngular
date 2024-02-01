import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <p>Este é o App</p>
  `,
  styles: [],
  imports: [HeaderComponent]
})
export class AppComponent {
  title = 'lojinhaAngular';
}