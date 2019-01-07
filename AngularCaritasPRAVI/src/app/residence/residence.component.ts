import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatButton, MatTab, PageEvent } from '@angular/material';
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
  displayedColumnsAcc: string[] = ['id', 'AccommodationName', 'Address', 'Description'];
  displayedColumnsRoom: string[] = ['id', 'roomName', 'description'];
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
  resultsLength;
  pageEvent: PageEvent;
  datasource: null;
  pageIndex: number;
  pageSize: number;
  sortDirection: string;
  sortActive: string;
  isLoadingResults = false;
  isRateLimitReached = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private residenceService: ResidenceService) { }
  ngOnInit() {
    this.pageSize = 10;
    this.pageIndex = 0;

    this.sortActive = "oib";
    this.sortDirection = "asc";

    this.residenceService.getCount().subscribe(
      (count) => this.resultsLength = count
    );
    this.residenceService.getAllAccommodations(this.pageIndex, this.pageSize, this.sortActive, this.sortDirection).subscribe(
      (data) => {
        this.accommodations = data;
      });
    this.residenceService.getAllRooms().subscribe(data1 => {
      this.rooms = data1;
    });
    this.residenceService.getAllBeds().subscribe(data2 => {
      this.beds = data2;
    });
  }
  ngAfterViewInit() {

  }
  getServerData(event: PageEvent) {
    this.isLoadingResults = true;

    this.residenceService.getAllAccommodations(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction).subscribe(
      (data) => {
        this.accommodations = data;
        this.isLoadingResults = false;

      }
    );
  }
  sortData(event: any) {
    this.paginator.pageIndex = 0;

    this.isLoadingResults = true;
    this.residenceService.getAllAccommodations(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction).subscribe(
      (data) => {
        this.accommodations = data;
        this.isLoadingResults = false;
      }
    );
  }

}
