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
export class ResidenceComponent implements OnInit, AfterViewInit {
  displayedColumnsAcc: string[] = ['id', 'AccommodationName', 'Address', 'Description', 'actions'];
  displayedColumnsRoom: string[] = ['id', 'RoomName', 'Description', 'Smjestaj', 'actions'];
  displayedColumnsBed: string[] = ['id', 'bedName', 'description'];
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

  pageEventAcc: PageEvent;
  pageEventRoom: PageEvent;

  pageIndexAcc: number;
  pageSizeAcc: number;
  sortDirectionAcc: string;
  sortActiveAcc: string;

  pageIndexRoom: number;
  pageSizeRoom: number;
  sortDirectionRoom: string;
  sortActiveRoom: string;

  isLoadingResults = false;
  isRateLimitReached = false;

  @ViewChild('pagAcc') paginatorAcc: MatPaginator;
  @ViewChild('pagRoom') paginatorRoom: MatPaginator;
  @ViewChild('sortAcc') sortAcc: MatSort;
  @ViewChild('sortRoom') sortRoom: MatSort;

  constructor(private residenceService: ResidenceService,
    private router: Router) { }

  ngOnInit() {
    this.pageSizeAcc = 10;
    this.pageIndexAcc = 0;
    this.sortActiveAcc = "id";
    this.sortDirectionAcc = "asc";

    this.pageSizeRoom = 10;
    this.pageIndexRoom= 0;
    this.sortActiveRoom = "id";
    this.sortDirectionRoom = "asc";

    this.residenceService.getAccCount().subscribe(
      (countAcc) => this.resultsLengthAcc = countAcc
    );
    this.residenceService.getRoomCount().subscribe(
      (countRoom) => this.resultsLengthRoom = countRoom
    );
    this.residenceService.getAllAccommodations(this.pageIndexAcc, this.pageSizeAcc, this.sortActiveAcc, this.sortDirectionAcc).subscribe(
      (data) => {
        this.accommodations = data;
      });
    this.residenceService.getAllRooms(this.pageIndexRoom, this.pageSizeRoom, this.sortActiveRoom, this.sortDirectionRoom).subscribe(
      (data) => {
        this.rooms = data;
      });
    this.residenceService.getAllBeds().subscribe(data2 => {
      this.beds = data2;
    });
  }
  ngAfterViewInit() {

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

          this.residenceService.getAllRooms(this.paginatorAcc.pageIndex, this.paginatorAcc.pageSize, this.sortRoom.active, this.sortRoom.direction).subscribe(
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
  editRooms(id: number) {
    this.router.navigate(['soba-edit', id]);

  }
}
