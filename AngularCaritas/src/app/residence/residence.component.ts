import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatButton, MatTab } from '@angular/material';

  export interface Korisnik {
    naziv:string;
    adresa:string;
    opis: string;
  }
  export interface Soba{
    nazivSobe:string;
    opisSobe:string;
  }
  export interface Krevet{
    vrstaKrevet:string;
    opisKrevet:string;
  }
  const ELEMENT_DATA_SMJESTAJ: Korisnik[] = [
    {naziv:'Crnomerec',adresa:'Ilica 200', opis:'stan'},
    {naziv:'Maksimir',adresa:'Maksimirska 200', opis:'stan'},
    {naziv:'Dubrava',adresa:'Ravnice 200', opis:'kuca'},
    {naziv:'Dugave',adresa:'Vatikanska 200', opis:'stan'},
    
  ];
  const ELEMENT_DATA_SOBA: Soba[] =[
    {nazivSobe:'neka soba', opisSobe:'lijepa soba'},
    {nazivSobe:'jos jedna soba', opisSobe:'ne toliko lijepa soba'}
  ];
  const ELEMENT_DATA_KREVET: Krevet[] = [
    {vrstaKrevet:'obicni krevet', opisKrevet:'obican'},
    {vrstaKrevet:'neobican krevet', opisKrevet:'neobican'}
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

     this.dataSourceKrevet.paginator=this.paginatorKrevet;
     this.dataSourceKrevet.sort=this.sortKrevet;
   }
   applyFilterSmjestaj(filterValue: string) {
      this.dataSourceSmjestaj.filter = filterValue.trim().toLowerCase();
      
   }
   applyFilterSoba(filterValue:string){
    this.dataSourceSoba.filter=filterValue.trim().toLowerCase();
   }
   applyFilterKrevet(filterValue:string){
    this.dataSourceKrevet.filter=filterValue.trim().toLowerCase();

   }
  
  displayedColumnsSmjestaj:string[]= ['naziv','adresa','opis'];
  displayedColumnsSoba:string[] = ['nazivSobe','opisSobe'];
  displayedColumnsKrevet:string[]=['vrstaKrevet','opisKrevet'];
  dataSourceSmjestaj=new MatTableDataSource(ELEMENT_DATA_SMJESTAJ);
  dataSourceSoba = new MatTableDataSource(ELEMENT_DATA_SOBA);
  dataSourceKrevet = new MatTableDataSource(ELEMENT_DATA_KREVET);
  @ViewChild(MatPaginator) paginatorSmjestaj:MatPaginator;
  @ViewChild(MatSort) sortSmjestaj:MatSort;
  @ViewChild(MatPaginator) paginatorSoba:MatPaginator;
  @ViewChild(MatSort) sortSoba:MatSort;
  @ViewChild(MatPaginator) paginatorKrevet:MatPaginator;
  @ViewChild(MatSort) sortKrevet:MatSort;
}
