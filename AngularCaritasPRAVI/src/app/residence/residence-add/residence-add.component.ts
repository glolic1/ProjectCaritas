import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Accommodation } from 'src/app/api/accommodation.model';
import { ResidenceService } from 'src/app/api/residence-service';

@Component({
  selector: 'app-residence-add',
  templateUrl: './residence-add.component.html',
  styleUrls: ['./residence-add.component.css']
})
export class ResidenceAddComponent implements OnInit {

  name = new FormControl('');
  address = new FormControl('');
  description = new FormControl('');

  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private residenceService:ResidenceService){}

  ngOnInit() {
    
  }
  gotoList() {
    this.router.navigate(['/smjestaj']);
  }
  onSubmit(){
    if (this.name.valid && this.address.valid && this.description.valid) {
      let accommodation = new Accommodation(null, this.name.value,this.address.value,this.description.value);
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
      
      this.residenceService.addAccommodation(accommodation).subscribe(
        response => {this.gotoList()}
      );
    }
    else {
      this.name.markAsTouched();
      this.address.markAsTouched();
      this.description.markAsTouched();
    }
  }
}
