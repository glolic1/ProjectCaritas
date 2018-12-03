import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

  export interface User {
    naziv:string;
    adresa:string;
    opis: string;
    
  }
  const ELEMENT_DATA: User[] = [
    {naziv:'Crnomerec',adresa:'Ilica 200', opis:'stan'},
    {naziv:'Maksimir',adresa:'Maksimirska 200', opis:'stan'},
    {naziv:'Dubrava',adresa:'Ravnice 200', opis:'kuca'},
    {naziv:'Dugave',adresa:'Vatikansa 200', opis:'stan'},

    
  ];

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {
  // displayedColumns: string[] = ['oib','name','lastName','email','pbr'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  // @ViewChild(MatPaginator) paginator:MatPaginator;
  // @ViewChild(MatSort) sort:MatSort;
   constructor() { }
   ngOnInit() {
     this.dataSource.paginator=this.paginator;
     this.dataSource.sort=this.sort;
   }
   applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
   }
  
  displayedColumns:string[]= ['naziv','adresa','opis'];
  dataSource=new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

}
