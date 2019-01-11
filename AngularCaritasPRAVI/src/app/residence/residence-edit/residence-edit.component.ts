import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from 'src/app/api/residence-service';
import { Accommodation } from 'src/app/api/accommodation.model';

@Component({
  selector: 'app-residence-edit',
  templateUrl: './residence-edit.component.html',
  styleUrls: ['./residence-edit.component.css']
})
export class ResidenceEditComponent implements OnInit {

  name = new FormControl('');
  address = new FormControl('');
  description = new FormControl('');
  accommodation = new Accommodation();
  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private residenceService:ResidenceService){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.residenceService.getAcc(params["id"]).subscribe(data => {
        this.accommodation.id = data.id;
        this.accommodation.accommodationName = data.accommodationName;
        this.accommodation.address = data.address;
        this.accommodation.description = data.description;
        
        this.setValues();
      })
    })
  }
  private setValues() {
    this.name.setValue(this.accommodation.accommodationName);
    this.address.setValue(this.accommodation.address);
    this.description.setValue(this.accommodation.description);
    
  }
  gotoList() {
    this.router.navigate(['/smjestaj']);
  }
  onSubmit(){
    if (this.name.valid && this.address.valid && this.description.valid) {
      let accommodation = new Accommodation(this.accommodation.id, this.name.value,this.address.value,this.description.value);
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
      
      this.residenceService.updateResidence(accommodation).subscribe(
        response => { this.gotoList() }
      );
    }
    else {
      this.name.markAsTouched();
      this.address.markAsTouched();
      this.description.markAsTouched();
    }
  }
  back(){
    this.router.navigate(['/smjestaj']);

  }
}
