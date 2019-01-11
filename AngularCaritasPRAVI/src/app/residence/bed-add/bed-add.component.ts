import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Room } from 'src/app/api/room.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from 'src/app/api/residence-service';
import { Bed } from 'src/app/api/bed.model';

@Component({
  selector: 'app-bed-add',
  templateUrl: './bed-add.component.html',
  styleUrls: ['./bed-add.component.css']
})
export class BedAddComponent implements OnInit {

  name = new FormControl('');
  description = new FormControl('');
  rooom = new FormControl('');
  roomCollection: Array<Room>;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private residenceService: ResidenceService) { }

  ngOnInit() {
    this.residenceService.getRooms().subscribe(
      data => {
        this.roomCollection = data;
      }
    );
  }
  gotoList() {
    this.router.navigate(['/smjestaj']);
  }
  onSubmit() {
    if (this.name.valid && this.rooom.valid && this.description.valid) {
      let bed = new Bed(null, this.name.value, this.description.value, 
        this.roomCollection.find(option=>option.id = this.rooom.value));
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
      
      this.residenceService.addBed(bed).subscribe(
        response => { this.gotoList() }
      );
    }
    else {
      this.name.markAsTouched();
      this.rooom.markAsTouched();
      this.description.markAsTouched();
    }
  }
  back(){
    this.router.navigate(['/smjestaj']);

  }
}
