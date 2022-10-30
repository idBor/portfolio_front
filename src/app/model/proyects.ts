export class Proyects {
    id? : number;
    name : string;
    dateEnd: string;
    link: string;
    description: string;
    img: string;

    constructor(name : string, dateEnd : string, link : string, description : string, img: string){
        this.name = name;
        this.dateEnd = dateEnd;
        this.link = link;
        this.description = description;
        this.img = img;
    }
}
