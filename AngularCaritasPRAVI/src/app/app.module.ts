import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule, MatSidenavModule, MatIconModule, MatToolbarModule,
    MatListModule, MatSelectModule, MatTableModule, MatPaginator,
     MatPaginatorModule, MatSortModule, MatInputModule, MatButtonModule, MatCardModule} from '@angular/material';
import { UsersComponent } from './users/users.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { UserService } from './api/user-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


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
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [UserService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
