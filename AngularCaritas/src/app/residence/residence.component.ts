import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatButton } from '@angular/material';

  export interface User {
    naziv:string;
    adresa:string;
    opis: string;
  }
  export interface Room{
    nazivSobe:string;
    opisSobe:string;
  }
  const ELEMENT_DATA_SMJESTAJ: User[] = [
    {naziv:'Crnomerec',adresa:'Ilica 200', opis:'stan'},
    {naziv:'Maksimir',adresa:'Maksimirska 200', opis:'stan'},
    {naziv:'Dubrava',adresa:'Ravnice 200', opis:'kuca'},
    {naziv:'Dugave',adresa:'Vatikanska 200', opis:'stan'},
    
  ];
  const ELEMENT_DATA_SOBA: Room[] =[
    {nazivSobe:'neka soba', opisSobe:'lijepa soba'},
    {nazivSobe:'jos jedna soba', opisSobe:'ne toliko lijepa soba'}
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
     this.dataSourceSmjestaj.paginator=this.paginatorSmjestaj;
     this.dataSourceSmjestaj.sort=this.sortSmjestaj;

     this.dataSourceSoba.paginator=this.paginatorSoba;
     this.dataSourceSoba.sort=this.sortSoba;
   }
   applyFilter(filterValue: string) {
      this.dataSourceSmjestaj.filter = filterValue.trim().toLowerCase();
      this.dataSourceSoba.filter=filterValue.trim().toLowerCase();
   }
  
  displayedColumnsSmjestaj:string[]= ['naziv','adresa','opis'];
  displayedColumnsSoba:string[] = ['nazivSobe','opisSobe'];
  dataSourceSmjestaj=new MatTableDataSource(ELEMENT_DATA_SMJESTAJ);
  dataSourceSoba = new MatTableDataSource(ELEMENT_DATA_SOBA);
  @ViewChild(MatPaginator) paginatorSmjestaj:MatPaginator;
  @ViewChild(MatSort) sortSmjestaj:MatSort;
  @ViewChild(MatPaginator) paginatorSoba:MatPaginator;
  @ViewChild(MatSort) sortSoba:MatSort;
}
