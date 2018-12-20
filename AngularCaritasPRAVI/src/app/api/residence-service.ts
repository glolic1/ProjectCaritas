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

    getAllAccommodations(): Observable<Array<Accommodation>> {
        return this.http.get<Array<Accommodation>>(this.ACCOMMODATIONS_API);
    }
    getAllRooms(): Observable<Array<Room>> {
        return this.http.get<Array<Room>>(this.ROOM_API);
    }
    getAllBeds(): Observable<Array<Bed>> {
        return this.http.get<Array<Bed>>(this.BED_API);
    }


}