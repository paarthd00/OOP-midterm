import Album from "./Album";
export default class Artist {
    private _name!: string;
    private _albums!: Album[];
    constructor(name: string) {
        this.setName(name);
    }

    addAlbum(album: Album) {
        this._albums.push(album);
    }

    getName(): string {
        return this._name;
    }

    setName(name: string) {
        this._name = name;
    }
    setAlbums(albums: Album[]) {
        this._albums = albums;
    }

} 