import Artist from './Artist';
import Song from './Song';
export default class Album {
    private _title!: string;
    private _artist!: Artist;
    private _year!: number;
    tracks: Song[];

    constructor(name: string, artist: Artist, year: number) {
        this.setTitle(name);
        this.setArtist(artist);
        this.setYear(year);
        this.tracks = [];
    }
    setTitle(title: string) {
    }
    setArtist(artist: Artist) {
        this._artist = artist;
    }
    setYear(year: number) {
        this._year = year;
    }
    addTrack(track: Song) {
        this.tracks.push(track);
    }
} 