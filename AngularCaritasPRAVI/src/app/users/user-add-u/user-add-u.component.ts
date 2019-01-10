import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/api/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/api/user-service';
import { FormControl } from '@angular/forms';
import { Nationality } from 'src/app/api/nationality.model';
import { Gender } from 'src/app/api/gender.model';
import { GandNService } from 'src/app/api/gandn-service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add-u.component.html',
  styleUrls: ['./user-add-u.component.css']
})
export class UserAddUComponent implements OnInit {
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
    private gandnService : GandNService){}

  ngOnInit() {
    this.gandnService.getNationalities().subscribe(
      data=>{
        this.nationalityCollection = data;
      }
    );
    this.gandnService.getGenders().subscribe(
      data=>{
        this.genderCollection = data;
      }
    )
  }
  gotoList() {
    this.router.navigate(['/korisnici']);
  }
  onSubmit(){
    if (this.name.valid && this.lastName.valid &&
      this.oib.valid && this.address.valid ) {
      let user = new User(null,this.oib.value,this.name.value,
        this.lastName.value, this.address.value,this.phoneNumber.value,
        this.nationalityCollection.find(option=>option.Id = this.nationality.value) ,
        this.genderCollection.find(option=>option.Id = this.gender.value));
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
