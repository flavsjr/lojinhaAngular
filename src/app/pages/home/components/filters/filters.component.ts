import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListOption, MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FiltersComponent, MatExpansionModule,MatSelectionList, MatListOption, CommonModule],        
  templateUrl: './filters.component.html' 
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();

  categories = ['shoes', 'sports', 'shirts', 'pants'];

  constructor() { }

  ngOnInit(): void {
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

}
