import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";



@Injectable()
export class UserService{
    public API = 'http://localhost:58253/api';
    public USER_API = `${this.API}/users`;
    constructor(private http:HttpClient){}

    getAll(): Observable<Array<User>>{
        return this.http.get<Array<User>>(this.USER_API);
    }
    get(id:string){
        return this.http.get(`${this.USER_API}/${id}`);
    }
    save(user:User):Observable<User>{
        let result:Observable<User>;
        if(user.oib){
            result = this.http.put<User>(
                `${this.USER_API}/${user.oib}`,
                user
            );
        } else {
            result = this.http.post<User>(this.USER_API,user);
        }
        return result;
    }
    remove(id:number){
        return this.http.delete(`${this.USER_API}/${id.toString()}`);
    }
}