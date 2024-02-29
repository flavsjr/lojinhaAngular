import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatBadge } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
    AngularMaterialModule,
    MatMenuTrigger,
    MatBadge,
    MatIcon
  ]
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}
