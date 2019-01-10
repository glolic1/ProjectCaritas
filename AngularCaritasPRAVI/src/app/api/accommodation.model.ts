export class Accommodation{
    public id: number;
    public accommodationName: string;
    public address: string;
    public description: string;

    constructor(idd?:number,accName?:string, add?: string, desc?: string){
        this.id=idd;
        this.accommodationName=accName;
        this.address=add;
        this.description=desc;
    }
}