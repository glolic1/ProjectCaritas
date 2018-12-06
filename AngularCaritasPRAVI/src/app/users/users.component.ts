import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { UserService } from '../api/user-service';
import { User } from '../api/user';


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
  // displayedColumns: string[] = ['oib','name','lastName','email','pbr'];
  // @ViewChild(MatPaginator) paginator:MatPaginator;
  // @ViewChild(MatSort) sort:MatSort;
  constructor(private userService:UserService) { } 
  users:Array<User>;
  dataSource = new MatTableDataSource(this.users);

  ngOnInit() {
    // this.dataSource.paginator=this.paginator;
    // this.dataSource.sort=this.sort;
    this.userService.getAll().subscribe(data=>{
      this.users=data;
    })
  }
  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
