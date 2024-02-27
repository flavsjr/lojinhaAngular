import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { AppComponent } from '../../../app.component';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { FiltersComponent } from './filters/filters.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AppComponent,
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    ProductsHeaderComponent,
    FiltersComponent,
    ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  cols = 3;

  constructor() { }

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }
}
