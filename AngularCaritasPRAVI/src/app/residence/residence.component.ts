import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatButton, MatTab } from '@angular/material';
import { Accommodation } from '../api/accommodation.model';
import { Room } from '../api/room.model';
import { Bed } from '../api/bed.model';
import { ResidenceService } from '../api/residence-service';

  
@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit, AfterViewInit {
  displayedColumnsAcc: string[] = ['id','accommodationName','address','description'];
  displayedColumnsRoom: string[] = ['id','roomName','description'];
  displayedColumnsBed: string[] = ['id','bedName','description'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  // @ViewChild(MatPaginator) paginator:MatPaginator;
  // @ViewChild(MatSort) sort:MatSort;
  accommodations:Accommodation[];
  rooms:Room[];
  beds:Bed[];     
  dataSourceAcc = new MatTableDataSource(this.accommodations);
  dataSourceRooms = new MatTableDataSource(this.rooms);
  dataSourceBeds = new MatTableDataSource(this.beds);
   constructor(private residenceService : ResidenceService) { }
   ngOnInit() {
     this.residenceService.getAllAccommodations().subscribe(data=>{
       this.accommodations = data;
     }); 
      this.residenceService.getAllRooms().subscribe(data1=>{
       this.rooms = data1;
     });
     this.residenceService.getAllBeds().subscribe(data2=>{
       this.beds = data2;
     });
   }
   ngAfterViewInit(){
    
   }

   
}
