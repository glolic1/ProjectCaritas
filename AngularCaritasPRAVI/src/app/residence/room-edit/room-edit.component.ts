import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Accommodation } from 'src/app/api/accommodation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from 'src/app/api/residence-service';
import { Room } from 'src/app/api/room.model';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

  name = new FormControl('');
  description = new FormControl('');
  accommodation = new FormControl('');
  accommodationCollection: Array<Accommodation>;
  room = new Room();


  constructor(private route: ActivatedRoute,
    private router: Router,
    private residenceService: ResidenceService) { }

  ngOnInit() {
    this.residenceService.getAccommodations().subscribe(
      data => {
        this.accommodationCollection = data;
      }
    );
    this.route.params.subscribe(params => {
      this.residenceService.getRoom(params["id"]).subscribe(data => {
        this.room.id = data.id;
        this.room.roomName = data.roomName;
        this.room.description = data.description;
        this.room.accommodation = data.accommodation;

        
        this.setValues();
      })
    })
  }
  private setValues() {
    this.name.setValue(this.room.roomName);
    this.description.setValue(this.room.description);
    
  }
  gotoList() {
    this.router.navigate(['/smjestaj']);
  }
  onSubmit() {
    if (this.name.valid && this.accommodation.valid && this.description.valid) {
      let room = new Room(this.room.id, this.name.value, this.description.value, 
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
      
      this.residenceService.updateRoom(room).subscribe(
        response => { this.gotoList() }
      );
    }
    else {
      this.name.markAsTouched();
      this.accommodation.markAsTouched();
      this.description.markAsTouched();
    }
  }
  back(){
    this.router.navigate(['/smjestaj']);

  }
}
