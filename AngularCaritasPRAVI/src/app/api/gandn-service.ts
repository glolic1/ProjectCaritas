import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Gender } from "./gender.model";
import { Nationality } from "./nationality.model";

@Injectable({
    providedIn:'root'
})
export class GandNService{
   private GANDN_API = 'http://localhost:55241/api/gandn'

    constructor(private http:HttpClient){}

    public getGenders(): Observable<Gender[]>{
        let url = this.GANDN_API + '/Gender';

        return this.http.get<Array<Gender>>(url);
    }

    public getNationalities(): Observable<Nationality[]>{
        let url = this.GANDN_API + '/Nationality';

        return this.http.get<Array<Nationality>>(url);
    }
}