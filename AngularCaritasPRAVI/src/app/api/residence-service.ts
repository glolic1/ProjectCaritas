import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Accommodation } from "./accommodation.model";
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Room } from "./room.model";
import { Bed } from "./bed.model";

@Injectable()
export class ResidenceService{
    public API = 'http://localhost:55241/api';
    public ACCOMMODATIONS_API = `${this.API}/Accommodations`;
    public ROOM_API = `${this.API}/Rooms`;
    public BED_API = `${this.API}/Beds`;

    constructor(private http:HttpClient){

    }
    
    
    public getAccCount(): Observable<number> {
        let url = this.ACCOMMODATIONS_API + "/Count";
        return this.http.get<number>(url);
    }
    getAccommodations(): Observable<Accommodation[]>{
        let url = this.ACCOMMODATIONS_API + "/All" ;

        return this.http.get<Array<Accommodation>>(url);
    }
    getAllAccommodations(pageIndex: number, pageSize: number,
        sortActive: string, sortDirection: string): Observable<Array<Accommodation>> {

        let url = this.ACCOMMODATIONS_API + "?pageSize=" + pageSize.toString() + "&pageIndex=" + pageIndex.toString()
            + "&sortColumn=" + sortActive + "&sortOrder=" + sortDirection;

        return this.http.get<Array<Accommodation>>(url);
    }
    addAccommodation(accommodation:Accommodation): Observable<boolean> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.post<boolean>(this.ACCOMMODATIONS_API, JSON.stringify(accommodation), { headers: headers });

    }
    
    public deleteResidence(id: number): Observable<boolean> {
        let params = new HttpParams();
        params = params.append("id", id.toString());

        return this.http.delete<boolean>(this.ACCOMMODATIONS_API, { params: params });
    }
    public updateResidence(acc:Accommodation): Observable<boolean> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.put<boolean>(this.ACCOMMODATIONS_API, JSON.stringify(acc), { headers: headers });

    }
    public getAcc(id: number): Observable<Accommodation> {
        let url = this.ACCOMMODATIONS_API + '/' + id.toString();

        return this.http.get<Accommodation>(url);
    }
   
    //ROOMS
    getRooms(): Observable<Room[]>{
        let url = this.ROOM_API + "/All" ;

        return this.http.get<Array<Room>>(url);
    }
    public getRoomCount(): Observable<number> {
        let url = this.ROOM_API + "/Count";
        return this.http.get<number>(url);
    }
    getAllRooms(pageIndex: number, pageSize: number,
        sortActive: string, sortDirection: string): Observable<Array<Room>> {

        let url = this.ROOM_API + "?pageSize=" + pageSize.toString() + "&pageIndex=" + pageIndex.toString()
            + "&sortColumn=" + sortActive + "&sortOrder=" + sortDirection;

        return this.http.get<Array<Room>>(url);
    }
    addRoom(room:Room): Observable<boolean> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.post<boolean>(this.ROOM_API, JSON.stringify(room), { headers: headers });

    }
    
    public deleteRoom(id: number): Observable<boolean> {
        let params = new HttpParams();
        params = params.append("id", id.toString());

        return this.http.delete<boolean>(this.ROOM_API, { params: params });
    }
    public updateRoom(room:Room): Observable<boolean> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.put<boolean>(this.ROOM_API, JSON.stringify(room), { headers: headers });

    }
    public getRoom(id: number): Observable<Room> {
        let url = this.ROOM_API + '/' + id.toString();

        return this.http.get<Room>(url);
    }
     //BEDS
     public getBedCount(): Observable<number> {
        let url = this.BED_API + "/Count";
        return this.http.get<number>(url);
    }
    getAllBeds(pageIndex: number, pageSize: number,
        sortActive: string, sortDirection: string): Observable<Array<Bed>> {

        let url = this.BED_API + "?pageSize=" + pageSize.toString() + "&pageIndex=" + pageIndex.toString()
            + "&sortColumn=" + sortActive + "&sortOrder=" + sortDirection;

        return this.http.get<Array<Bed>>(url);
    }
    addBed(bed:Bed): Observable<boolean> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.post<boolean>(this.BED_API, JSON.stringify(bed), { headers: headers });

    }
    
    public deleteBed(id: number): Observable<boolean> {
        let params = new HttpParams();
        params = params.append("id", id.toString());

        return this.http.delete<boolean>(this.BED_API, { params: params });
    }
    public updateBed(bed:Bed): Observable<boolean> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.put<boolean>(this.BED_API, JSON.stringify(bed), { headers: headers });

    }
    public getBed(id: number): Observable<Bed> {
        let url = this.BED_API + '/' + id.toString();

        return this.http.get<Bed>(url);
    }
}