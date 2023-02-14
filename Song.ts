export default class Song {
    private _title!: string;

    constructor(title: string) {
        this.setName(title);
    }
    
    getName(): string {
        return this._title;
    }
    
    setName(name: string) {
        this._title = name;
    }
}