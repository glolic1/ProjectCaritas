export class User {
    oib: number;
    name: string;
    lastName: string;
    address: string;  
    phoneNumber: number;
    nationality: string;
    gender: string;

    constructor(OIB:number, FirstName: string, LastName: string, Address: string, PhoneNumber:number,Nationality:string,Gender:string){
      this.oib=OIB;
      this.name=FirstName;
      this.lastName=LastName;
      this.address=Address;
      this.phoneNumber=PhoneNumber;
      this.nationality=Nationality;
      this.gender=Gender;
    }
  }