import { Room } from "./room.model";

export class Bed{
    public id: number;
    public bedName: string;
    public description: string;
    public room:Room

    constructor(idd?:number,bName?:string, desc?: string, rooom?:Room){
        this.id=idd;
        this.bedName=bName;
        this.description=desc;
        this.room=rooom;
    }
}