import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/api/user';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/api/user-service';
import { FormControl } from '@angular/forms';
import { Nationality } from 'src/app/api/nationality.model';
import { Gender } from 'src/app/api/gender.model';
import { MatSnackBar } from '@angular/material';

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
    private userService:UserService,
    public snackBar:MatSnackBar){}

  ngOnInit() {
  }
  gotoList() {
    this.router.navigate(['/korisnici']);
  }
  onSubmit(){
    if (this.name.valid && this.lastName.valid &&
      this.oib.valid && this.address.valid ) {
      let user = new User(null,this.name.value,this.lastName.value,
        this.oib.value, this.address.value, this.gender.value,
        this.nationality.value,this.phoneNumber.value);
      // null, this.name.value, this.lastName.value, this.oib.value,
      //   this.address.value, this.nationality.value, this.gender.value
      // user.id=null;
      // user.name = this.name.value;
      // user.lastName = this.lastName.value;
      // user.oib = this.oib.value;
      // user.address = this.address.value;
      // user.gender = this.gender.value;
      // user.nationality = this.nationality.value;
      // user.phoneNumber = this.phoneNumber.value;
      
      console.log(user.name,user.lastName,user.oib,user.address,user.gender,user.nationality,user.phoneNumber);
      this.userService.add(user).subscribe(
        response => {this.gotoList()}
      );
    }
    else {
      this.name.markAsTouched();
      this.lastName.markAsTouched();
      this.oib.markAsTouched();
      this.address.markAsTouched();
      this.gender.markAsTouched();
      this.nationality.markAsTouched();
    }
  
  }
  
}
