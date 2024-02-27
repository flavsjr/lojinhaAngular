import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListOption, MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FiltersComponent, MatExpansionModule,MatSelectionList, MatListOption, CommonModule],        
  templateUrl: 'filters.component.html' 
})
export class FiltersComponent implements OnInit {
  categories = ['shoes', 'sports'];

  constructor() { }

  ngOnInit(): void {
    
  }
}
