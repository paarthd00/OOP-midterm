import Album from "./Album";
import Song from "./Song";

export default class Playlist {
    private _name: string;
    private _songs: Song[];

    constructor(name: string) {
        this._name = name;
        this._songs = [];
    }

    getName(): string {
        return this._name;
    }

    setName(name: string) {
        this._name = name;
    }

    setSongs(songs: Song[]) {
        this._songs = songs;
    }

    getSongs(): Song[] {
        return this._songs;
    }

    addAlbum(album: Album) {
        album.tracks.map((track) => {
            this._songs.push(track);
        })
    }
}