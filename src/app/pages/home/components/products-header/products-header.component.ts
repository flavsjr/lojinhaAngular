import { Component, EventEmitter, Output } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { HeaderComponent } from '../../../../components/header/header.component';
import { AppComponent } from '../../../../app.component';
import { MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { AngularMaterialModule } from '../../../../components/shared/angular-material/angular-material.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [
        MatSidenavModule,
        MatGridListModule,
        MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatExpansionModule,
        MatListModule,
        MatTableModule,
        MatBadgeModule,
        MatSnackBarModule,
        AngularMaterialModule,
        MatSidenavModule,
  ],
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 12;

  constructor() { }

  ngOnInit(): void {
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

}
