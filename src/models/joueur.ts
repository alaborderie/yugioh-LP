export class Joueur {
    name: string;
    LP: number;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.LP = 8000;
        this.id = id;
    }
}