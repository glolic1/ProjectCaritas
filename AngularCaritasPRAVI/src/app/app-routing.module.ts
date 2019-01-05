import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UsersComponent } from "./users/users.component";
import { ResidenceComponent } from "./residence/residence.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import {PocetnaComponent} from "./pocetna/pocetna.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { UserAddUComponent } from "./users/user-add-u/user-add-u.component";





const appRoutes : Routes = [
    {path:'korisnici', component: UsersComponent},
    { path:'korisnici-edit/:id', component: UserEditComponent},
    {path:'korisnici-add', component: UserAddUComponent},
    {path:'smjestaj', component: ResidenceComponent},
    {path:'pocetna', component:PocetnaComponent},
    {path: '', redirectTo: '/pocetna', pathMatch: 'full'},
    {path:'**', component: NotFoundComponent}
  ];
  @NgModule({
      imports:[RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})],
      exports:[RouterModule]
  })
  export class AppRoutingModule{

  }
