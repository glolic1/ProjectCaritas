import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";



@Injectable()
export class UserService {
    public API = 'http://localhost:55241/api';
    public USER_API = `${this.API}/users`;
    constructor(private http: HttpClient) { }

    getAll(pageIndex: number, pageSize: number,
        sortActive: string, sortDirection: string): Observable<Array<User>> {

        let url = this.USER_API + "?pageSize=" + pageSize.toString() + "&pageIndex=" + pageIndex.toString()
            + "&sortColumn=" + sortActive + "&sortOrder=" + sortDirection;

        return this.http.get<Array<User>>(url);
    }
    public getCount(): Observable<number> {
        let url = this.USER_API + "/Count";
        return this.http.get<number>(url);
    }
    public get(id: number): Observable<User> {
        let url = this.USER_API + '/' + id.toString();

        return this.http.get<User>(url);
    }

    add(user: User): Observable<boolean> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.post<boolean>(this.USER_API, JSON.stringify(user), { headers: headers });

    }
    public delete(id: number): Observable<boolean> {
        let params = new HttpParams();
        params = params.append("id", id.toString());

        return this.http.delete<boolean>(this.USER_API, { params: params });
    }
    public update(user: User): Observable<boolean> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.put<boolean>(this.USER_API, JSON.stringify(user), { headers: headers });

    }
}