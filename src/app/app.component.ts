import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
  `,
  styles: [],
  imports: [HeaderComponent, AngularMaterialModule]
})
export class AppComponent {
  title = 'lojinhaAngular';
}