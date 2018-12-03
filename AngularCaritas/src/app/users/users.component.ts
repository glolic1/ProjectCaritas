import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface User {
  oib: number;
  name: string;
  lastName: string;
  email: string;  
  pbr: number;
}
const ELEMENT_DATA: User[] = [
  {oib:1,name:'xd',lastName:'xP',email:'dasdsa', pbr:2},
  {oib:3,name:'ad',lastName:'xP',email:'randommail@gmail.com', pbr:2},
  {oib:2,name:'xd',lastName:'xP',email:'glolic@tvz.hr', pbr:2}
  
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['oib','name','lastName','email','pbr'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
