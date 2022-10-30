export class Person {
    id?: number;
    name: string;
    surname: string;
    age: number;
    tittle: string;
    img: string;
    description: string;
  
    constructor(name: string, surname: string, age: number, tittle: string, img: string, description: string) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.tittle = tittle;
        this.img = img;
        this.description = description;
    }
}
