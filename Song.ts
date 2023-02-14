export default class Song {
    private _title!: string;

    constructor(title: string) {
        this.setTitle(title);
    }

    getTitle(): string {
        return this._title;
    }

    setTitle(name: string) {
        this._title = name;
    }
}