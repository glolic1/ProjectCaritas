import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/api/user';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/api/user-service';
import { FormControl } from '@angular/forms';
import { Nationality } from 'src/app/api/nationality.model';
import { Gender } from 'src/app/api/gender.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  name = new FormControl('');
  lastName = new FormControl('');
  oib = new FormControl('');
  address = new FormControl('');
  phoneNumber = new FormControl('')
  nationality = new FormControl('');
  gender = new FormControl('');

  nationalityCollection: Nationality[];
  genderCollection: Gender[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService:UserService){}

  ngOnInit() {
  }
  gotoList() {
    this.router.navigate(['/korisnici']);
  }
  onSubmit(){
    
  }
  
}
