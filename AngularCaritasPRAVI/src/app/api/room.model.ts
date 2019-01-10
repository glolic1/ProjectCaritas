import { Accommodation } from "./accommodation.model";

export class Room{
    public id: number;
    public roomName: string;
    public description: string;
    public accommodation:Accommodation

    constructor(idd?:number,rName?:string, desc?: string, acc?:Accommodation){
        this.id=idd;
        this.roomName=rName;
        this.description=desc;
        this.accommodation=acc;
    }
}