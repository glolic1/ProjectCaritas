import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { UserService } from '../api/user-service';
import { User } from '../api/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['oib', 'name', 'lastName', 'address', 'phoneNumber', 'nationality', 'gender', 'actions'];
  resultsLength;
  data: User[];
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

  constructor(private userService: UserService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.pageSize = 10;
    this.pageIndex = 0;

    this.sortActive = "oib";
    this.sortDirection = "asc";

    this.isLoadingResults = true;
    this.userService.getCount().subscribe(
      (count) => this.resultsLength = count
    );
    this.userService.getAll(this.pageIndex, this.pageSize, this.sortActive, this.sortDirection).subscribe(
      (data) => {
        this.data = data;
        this.isLoadingResults = false;
      }
    )
  }
  getServerData(event: PageEvent) {
    this.isLoadingResults = true;

    this.userService.getAll(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction).subscribe(
      (data) => {
        this.data = data;
        this.isLoadingResults = false;

      }
    );
  }
  sortData(event: any) {
    this.paginator.pageIndex = 0;
    
    this.isLoadingResults = true;
    this.userService.getAll(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction).subscribe(
      (data) => {
        this.data = data;
        this.isLoadingResults = false;
      }
    );
  }
  deleteData(id: number) {
    this.userService.delete(id).subscribe(
      response => {
        if (response) {
          
          this.userService.getAll(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction).subscribe(
            (data) => {
              this.data = data;
              this.isLoadingResults = false;
            }
          );
        } else {

        }
      }
    )
  }
  editUser(id: number) {
    this.router.navigate(['korisnici-edit', id]);

  }
}
