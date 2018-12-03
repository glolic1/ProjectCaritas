import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule, MatSidenavModule, MatIconModule, MatToolbarModule,
    MatListModule, MatSelectModule, MatTableModule, MatPaginator,
     MatPaginatorModule, MatSortModule, MatInputModule, MatButtonModule} from '@angular/material';
import { UsersComponent } from './users/users.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PocetnaComponent } from './pocetna/pocetna.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ResidenceComponent,
    NotFoundComponent,
    PocetnaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
