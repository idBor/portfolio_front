export class Education {
    id? : number;
    degree : string;
    dateEnd : string;
    description: string;
    
    constructor(degree : string, dateEnd : string, description : string){
        this.degree = degree;
        this.dateEnd = dateEnd;
        this.description = description;
    }
}
