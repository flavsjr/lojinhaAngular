import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styles: [],
  imports: [HeaderComponent, RouterModule, AngularMaterialModule,]
})
export class AppComponent {
  title = 'lojinhaAngular';
}