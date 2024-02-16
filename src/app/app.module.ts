import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule} from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from "./app.routes";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./components/shared/angular-material/angular-material.module";

@NgModule({
    declarations: [
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        RouterOutlet,
        BrowserAnimationsModule,
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
        MatSidenavModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule
    ],
    providers: [],
    // bootstrap: [AppComponent]
})

export class AppModule { }
