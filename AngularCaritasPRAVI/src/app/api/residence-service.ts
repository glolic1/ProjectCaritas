import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Accommodation } from "./accommodation.model";
import { HttpClient } from "@angular/common/http";
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
    public getCount(): Observable<number> {
        let url = this.ACCOMMODATIONS_API + "/Count";
        return this.http.get<number>(url);
    }
    getAllAccommodations(pageIndex: number, pageSize: number,
        sortActive: string, sortDirection: string): Observable<Array<Accommodation>> {

        let url = this.ACCOMMODATIONS_API + "?pageSize=" + pageSize.toString() + "&pageIndex=" + pageIndex.toString()
            + "&sortColumn=" + sortActive + "&sortOrder=" + sortDirection;

        return this.http.get<Array<Accommodation>>(url);
    }
    getAllRooms(): Observable<Array<Room>> {
        return this.http.get<Array<Room>>(this.ROOM_API);
    }
    getAllBeds(): Observable<Array<Bed>> {
        return this.http.get<Array<Bed>>(this.BED_API);
    }


}