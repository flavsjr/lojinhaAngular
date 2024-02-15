import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [AngularMaterialModule]
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}
