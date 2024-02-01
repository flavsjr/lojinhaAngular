import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <h1>Este é o Header</h1>
  `,
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}
