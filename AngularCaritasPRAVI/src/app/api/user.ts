import { Nationality } from "./nationality.model";
import { Gender } from "./gender.model";


export class User {
    id: number;
    oib: number;
    name: string;
    lastName: string;
    address: string;  
    phoneNumber: number;
    nationality: Nationality;
    gender: Gender;
     constructor(id?:number,OIB?:number, FirstName?: string, LastName?: string, Address?: string, PhoneNumber?:number,Nationality?:Nationality,Gender?:Gender){
       this.id=id;
       this.oib=OIB;
       this.name=FirstName;
       this.lastName=LastName;
       this.address=Address;
       this.phoneNumber=PhoneNumber;
       this.nationality=Nationality;
       this.gender=Gender;
     }
  }