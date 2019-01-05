import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Nationality } from 'src/app/api/nationality.model';
import { Gender } from 'src/app/api/gender.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/api/user-service';
import { GandNService } from 'src/app/api/gandn-service';
import { User } from 'src/app/api/user';

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
  user = new User();
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private gandnService: GandNService) { }

  ngOnInit() {
    this.gandnService.getNationalities().subscribe(
      data => {
        this.nationalityCollection = data;
      }
    );
    this.gandnService.getGenders().subscribe(
      data => {
        this.genderCollection = data;
      }
    )
    this.route.params.subscribe(params => {
      this.userService.get(params["id"]).subscribe(data => {
        this.user.id = data.id;
        this.user.name = data.name;
        this.user.lastName = data.lastName;
        this.user.oib = data.oib;
        this.user.address = data.address;
        this.user.phoneNumber = data.phoneNumber;
        this.user.gender = data.gender;
        this.user.nationality = data.nationality;
        this.setValues();
      })
    })
  }
  private setValues() {
    this.name.setValue(this.user.name);
    this.lastName.setValue(this.user.lastName);
    this.address.setValue(this.user.address);
    this.oib.setValue(this.user.oib);
    this.phoneNumber.setValue(this.user.phoneNumber);
    this.gender.setValue(this.user.gender.GenderName);
    this.nationality.setValue(this.user.nationality.NationalityName);
  }
  gotoList() {
    this.router.navigate(['/korisnici']);
  }
  onSubmit() {
    if (this.name.valid && this.lastName.valid &&
      this.oib.valid && this.address.valid) {
      let user = new User(this.user.id, this.oib.value, this.name.value,
        this.lastName.value, this.address.value, this.phoneNumber.value,
        this.nationalityCollection.find(option => option.Id= this.nationality.value),
        this.genderCollection.find(option => option.Id = this.gender.value));
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
      // console.log(this.nationalityCollection.find(option=>option.NationalityName = this.nationality.value));
      // console.log(this.genderCollection.find(option=>option.GenderName = this.gender.value));
      
      this.userService.update(user).subscribe(
        response => { this.gotoList() }
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
