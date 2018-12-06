import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
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
    {naziv:'Dugave',adresa:'Vatikanska 200', opis:'stan'}
    
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
export class ResidenceComponent implements OnInit, AfterViewInit {
  // displayedColumns: string[] = ['oib','name','lastName','email','pbr'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  // @ViewChild(MatPaginator) paginator:MatPaginator;
  // @ViewChild(MatSort) sort:MatSort;
   constructor() { }
   ngOnInit() {
     
   }
   ngAfterViewInit(){
    this.dataSourceSmjestaj.paginator=this.paginatorSmjestaj;
    this.dataSourceSmjestaj.sort=this.sortSmjestaj;
   
    this.dataSourceSoba.paginator=this.paginatorSoba;
    this.dataSourceSoba.sort=this.sortSoba;

    this.dataSourceKrevet.paginator=this.paginatorKrevet;
    this.dataSourceKrevet.sort=this.sortKrevet;
   }

   _setDataSource(indexNumber:number){
     setTimeout(()=>{
       switch(indexNumber){
         case 0:
          !this.dataSourceSmjestaj ? this.dataSourceSmjestaj.paginator=this.paginatorSmjestaj : null;
          break;
        case 1:
          !this.dataSourceSoba.paginator ? this.dataSourceSoba.paginator = this.paginatorSoba : null;
          break;
        case 2:
          !this.dataSourceKrevet.paginator ? this.dataSourceKrevet.paginator = this.paginatorKrevet : null;
          
       }
     });
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
  dataSourceSmjestaj=new MatTableDataSource<Korisnik>(ELEMENT_DATA_SMJESTAJ);
  dataSourceSoba = new MatTableDataSource<Soba>(ELEMENT_DATA_SOBA);
  dataSourceKrevet = new MatTableDataSource<Krevet>(ELEMENT_DATA_KREVET);
  @ViewChild('paginator1') paginatorSmjestaj:MatPaginator;
  @ViewChild('sort1') sortSmjestaj:MatSort;
  @ViewChild('paginator2') paginatorSoba:MatPaginator;
  @ViewChild('sort2') sortSoba:MatSort;
  @ViewChild('paginator3') paginatorKrevet:MatPaginator;
  @ViewChild('sort3') sortKrevet:MatSort;
}
