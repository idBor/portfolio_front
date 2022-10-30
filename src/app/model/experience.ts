export class Experience {
    id : number;
    name : string;
    dateStart : string;
    dateEnd : string;
    description: string;
    
    constructor(name : string, dateStart : string, dateEnd : string, description : string){
        this.name = name;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.description = description;
    }
}
