export class Nationality {
    public Id: number;
    public NationalityName: string;
    
    constructor(ID: number, name: string) {
        this.Id = ID;
        this.NationalityName = name;
    }
}