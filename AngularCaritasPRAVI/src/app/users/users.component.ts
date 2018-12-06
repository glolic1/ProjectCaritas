import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { UserService } from '../api/user-service';
import { User } from '../api/user';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['oib','name','lastName','address','phoneNumber','nationality','gender'];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  constructor(private userService:UserService) { } 
  users:Array<User>;
  dataSource = new MatTableDataSource(this.users);

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this.userService.getAll().subscribe(data=>{
      this.users=data;
    })
  }
  ngAfterViewInit(){
    
  }
  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
