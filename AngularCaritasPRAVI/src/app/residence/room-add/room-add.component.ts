import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from 'src/app/api/residence-service';
import { Room } from 'src/app/api/room.model';
import { Accommodation } from 'src/app/api/accommodation.model';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {

  name = new FormControl('');
  description = new FormControl('');
  accommodation = new FormControl('');
  accommodationCollection: Array<Accommodation>;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private residenceService: ResidenceService) { }

  ngOnInit() {
    this.residenceService.getAccommodations().subscribe(
      data => {
        this.accommodationCollection = data;
      }
    );
  }
  gotoList() {
    this.router.navigate(['/smjestaj']);
  }
  onSubmit() {
    if (this.name.valid && this.accommodation.valid && this.description.valid) {
      let room = new Room(null, this.name.value, this.description.value, 
        this.accommodationCollection.find(option=>option.id = this.accommodation.value));
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
      
      this.residenceService.addRoom(room).subscribe(
        response => { this.gotoList() }
      );
    }
    else {
      this.name.markAsTouched();
      this.accommodation.markAsTouched();
      this.description.markAsTouched();
    }
  }
}
