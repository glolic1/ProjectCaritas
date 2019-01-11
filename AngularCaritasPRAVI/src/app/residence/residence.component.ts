import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatButton, MatTab, PageEvent } from '@angular/material';
import { Accommodation } from '../api/accommodation.model';
import { Room } from '../api/room.model';
import { Bed } from '../api/bed.model';
import { ResidenceService } from '../api/residence-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {
  displayedColumnsAcc: string[] = ['id', 'AccommodationName', 'Address', 'Description', 'actions'];
  displayedColumnsRoom: string[] = ['id', 'RoomName', 'Description', 'Smjestaj', 'actions'];
  displayedColumnsBed: string[] = ['id', 'bedName', 'description','Soba','actions'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  // @ViewChild(MatPaginator) paginator:MatPaginator;
  // @ViewChild(MatSort) sort:MatSort;  
  // dataSourceAcc = new MatTableDataSource(this.accommodations);
  // dataSourceRooms = new MatTableDataSource(this.rooms);
  // dataSourceBeds = new MatTableDataSource(this.beds);
  accommodations: Accommodation[];
  rooms: Room[];
  beds: Bed[];
  resultsLengthAcc;
  resultsLengthRoom;
  resultsLengthBed;

  pageEventAcc: PageEvent;
  pageEventRoom: PageEvent;
  pageEventBed: PageEvent

  pageIndexAcc: number;
  pageSizeAcc: number;
  sortDirectionAcc: string;
  sortActiveAcc: string;

  pageIndexRoom: number;
  pageSizeRoom: number;
  sortDirectionRoom: string;
  sortActiveRoom: string;

  pageIndexBed: number;
  pageSizeBed: number;
  sortDirectionBed: string;
  sortActiveBed: string;

  isLoadingResults = false;
  isRateLimitReached = false;

  @ViewChild('pagAcc') paginatorAcc: MatPaginator;
  @ViewChild('pagRoom') paginatorRoom: MatPaginator;
  @ViewChild('sortAcc') sortAcc: MatSort;
  @ViewChild('sortRoom') sortRoom: MatSort;
  @ViewChild('pagBed') paginatorBed: MatPaginator;
  @ViewChild('sortBed') sortBed: MatSort;

  constructor(private residenceService: ResidenceService,
    private router: Router) { }

  ngOnInit() {
    this.pageSizeAcc = 10;
    this.pageIndexAcc = 0;
    this.sortActiveAcc = "id";
    this.sortDirectionAcc = "asc";

    this.pageSizeRoom = 10;
    this.pageIndexRoom = 0;
    this.sortActiveRoom = "id";
    this.sortDirectionRoom = "asc";

    this.pageSizeBed = 10;
    this.pageIndexBed = 0;
    this.sortActiveBed = "id";
    this.sortDirectionBed = "asc";

    this.residenceService.getAccCount().subscribe(
      (countAcc) => this.resultsLengthAcc = countAcc
    );
    this.residenceService.getRoomCount().subscribe(
      (countRoom) => this.resultsLengthRoom = countRoom
    );
    this.residenceService.getBedCount().subscribe(
      (countBed) => this.resultsLengthBed = countBed
    );
    this.residenceService.getAllAccommodations(this.pageIndexAcc, this.pageSizeAcc, this.sortActiveAcc, this.sortDirectionAcc).subscribe(
      (data) => {
        this.accommodations = data;
      });
    this.residenceService.getAllRooms(this.pageIndexRoom, this.pageSizeRoom, this.sortActiveRoom, this.sortDirectionRoom).subscribe(
      (data) => {
        this.rooms = data;
      });
    this.residenceService.getAllBeds(this.pageIndexBed, this.pageSizeBed, this.sortActiveBed, this.sortDirectionBed).subscribe(
      (data) => {
        this.beds = data;
      });
  }
  
  getAccServerData(event: PageEvent) {
    this.isLoadingResults = true;

    this.residenceService.getAllAccommodations(this.paginatorAcc.pageIndex, this.paginatorAcc.pageSize, this.sortAcc.active, this.sortAcc.direction).subscribe(
      (data) => {
        this.accommodations = data;
        this.isLoadingResults = false;

      }
    );

  }
  getRoomServerData(event: PageEvent) {
    this.isLoadingResults = true;

    this.residenceService.getAllRooms(this.paginatorRoom.pageIndex, this.paginatorRoom.pageSize, this.sortRoom.active, this.sortRoom.direction).subscribe(
      (data) => {
        this.rooms = data;
        this.isLoadingResults = false;
      }
    );
  }
  getBedServerData(event:PageEvent){
    this.isLoadingResults=true;

    this.residenceService.getAllBeds(this.paginatorBed.pageIndex, this.paginatorBed.pageSize, this.sortBed.active, this.sortBed.direction).subscribe(
      (data)=>{
        this.beds=data;
        this.isLoadingResults=false;
      }
    )
  }
  sortDataAcc(event: any) {
    this.paginatorAcc.pageIndex = 0;

    this.isLoadingResults = true;
    this.residenceService.getAllAccommodations(this.paginatorAcc.pageIndex, this.paginatorAcc.pageSize, this.sortAcc.active, this.sortAcc.direction).subscribe(
      (data) => {
        this.accommodations = data;
        this.isLoadingResults = false;
      }
    );
  }
  sortDataRoom(event: any) {
    this.paginatorRoom.pageIndex = 0;

    this.isLoadingResults = true;
    this.residenceService.getAllRooms(this.paginatorRoom.pageIndex, this.paginatorRoom.pageSize, this.sortRoom.active, this.sortRoom.direction).subscribe(
      (data) => {
        this.rooms = data;
        this.isLoadingResults = false;
      }
    );
  }
  sortDataBed(event: any) {
    this.paginatorBed.pageIndex = 0;

    this.isLoadingResults = true;
    this.residenceService.getAllBeds(this.paginatorBed.pageIndex, this.paginatorBed.pageSize, this.sortBed.active, this.sortBed.direction).subscribe(
      (data) => {
        this.beds = data;
        this.isLoadingResults = false;
      }
    );
  }
  deleteAccData(id: number) {
    this.residenceService.deleteResidence(id).subscribe(
      response => {
        if (response) {

          this.residenceService.getAllAccommodations(this.paginatorAcc.pageIndex, this.paginatorAcc.pageSize, this.sortAcc.active, this.sortAcc.direction).subscribe(
            (data) => {
              this.accommodations = data;
              this.isLoadingResults = false;
            }
          );
        } else {

        }
      }
    )
  }
  editAcc(id: number) {
    this.router.navigate(['smjestaj-edit', id]);

  }
  deleteRoomData(id: number) {
    this.residenceService.deleteRoom(id).subscribe(
      response => {
        if (response) {

          this.residenceService.getAllRooms(this.paginatorRoom.pageIndex, this.paginatorRoom.pageSize, this.sortRoom.active, this.sortRoom.direction).subscribe(
            (data) => {
              this.rooms = data;
              this.isLoadingResults = false;
            }
          );
        } else {

        }
      }
    )
  }
  editRoom(id: number) {
    this.router.navigate(['soba-edit', id]);

  }
  deleteBedData(id: number) {
    this.residenceService.deleteBed(id).subscribe(
      response => {
        if (response) {

          this.residenceService.getAllBeds(this.paginatorBed.pageIndex, this.paginatorBed.pageSize, this.sortBed.active, this.sortBed.direction).subscribe(
            (data) => {
              this.beds = data;
              this.isLoadingResults = false;
            }
          );
        } else {

        }
      }
    )
  }
  editBed(id: number) {
    this.router.navigate(['krevet-edit', id]);

  }
}
