import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UsersComponent } from "./users/users.component";
import { ResidenceComponent } from "./residence/residence.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import {PocetnaComponent} from "./pocetna/pocetna.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { UserAddUComponent } from "./users/user-add-u/user-add-u.component";
import { ResidenceAddComponent } from "./residence/residence-add/residence-add.component";
import { ResidenceEditComponent } from "./residence/residence-edit/residence-edit.component";
import { RoomAddComponent } from "./residence/room-add/room-add.component";
import { RoomEditComponent } from "./residence/room-edit/room-edit.component";
import { BedAddComponent } from "./residence/bed-add/bed-add.component";
import { BedEditComponent } from "./residence/bed-edit/bed-edit.component";





const appRoutes : Routes = [
    {path:'korisnici', component: UsersComponent},
    {path:'korisnici-edit/:id', component: UserEditComponent},
    {path:'korisnici-add', component: UserAddUComponent},
    {path:'smjestaj', component: ResidenceComponent},
    {path:'smjestaj-add', component: ResidenceAddComponent},
    {path:'smjestaj-edit/:id', component: ResidenceEditComponent},
    {path:'soba-add', component: RoomAddComponent},
    {path:'soba-edit/:id', component: RoomEditComponent},
    {path:'krevet-add', component: BedAddComponent},
    {path:'krevet-edit/:id', component: BedEditComponent},

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
