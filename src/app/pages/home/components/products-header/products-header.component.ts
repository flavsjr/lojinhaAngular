import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { HeaderComponent } from '../../../../components/header/header.component';
import { AppComponent } from '../../../../app.component';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';


@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [
    MatCard,
    MatMenu,
    MatMenuTrigger,
    MatIcon,
    HeaderComponent,
    AppComponent,
    MatDrawerContent,
    MatDrawerContainer,
    MatDrawer,
    ProductsHeaderComponent
  ],
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent implements OnInit {
  sort = 'desc';
  itemsShowCount = 12;

  constructor() { }

  ngOnInit(): void {
  }


  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }
}
