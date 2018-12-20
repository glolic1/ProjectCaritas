import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";



@Injectable()
export class UserService{
    public API = 'http://localhost:55241/api';
    public USER_API = `${this.API}/users`;
    constructor(private http:HttpClient){}

    getAll(pageIndex: number, pageSize: number, 
        sortActive: string, sortDirection: string): Observable<Array<User>>{
        
            let url = this.USER_API + "?pageSize=" + pageSize.toString() + "&pageIndex=" + pageIndex.toString()
            + "&sortColumn=" + sortActive + "&sortOrder=" + sortDirection;

        return this.http.get<Array<User>>(url);
    }
    public getCount(): Observable<number> {
        let url = this.USER_API + "/Count";
        return this.http.get<number>(url);
      }
    get(id:string){
        return this.http.get(`${this.USER_API}/${id}`);
    }
    save(user:User):Observable<User>{
        let result:Observable<User>;
        if(user.id){
            result = this.http.put<User>(
                `${this.USER_API}/${user.id}`,
                user
            );
        } else {
            result = this.http.post<User>(this.USER_API,user);
        }
        return result;
    }
    add(user:User):Observable<boolean>{
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.post<boolean>(this.USER_API, JSON.stringify(user), {headers: headers});

    }
    remove(id:number){
        return this.http.delete(`${this.USER_API}/${id.toString()}`);
    }
}