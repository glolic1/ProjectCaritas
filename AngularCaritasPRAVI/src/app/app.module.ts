import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule, MatSidenavModule, MatIconModule, MatToolbarModule,
    MatListModule, MatSelectModule, MatTableModule, MatPaginator,
     MatPaginatorModule, MatSortModule, MatInputModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatDatepickerModule, MatCheckboxModule, MatAutocompleteModule, DateAdapter, MAT_DATE_FORMATS, MatSnackBarModule} from '@angular/material';
import { UsersComponent } from './users/users.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { UserService } from './api/user-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserEditComponent } from './users/user-add/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceService } from './api/residence-service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ResidenceComponent,
    NotFoundComponent,
    PocetnaComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
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
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [UserService,HttpClient, ResidenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
