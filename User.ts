import Album from "./Album";
import Playlist from "./Playlist";
import Song from "./Song";

export default class User {
    private _username: string = "";
    private _password: string = "";
    playlists: Playlist[];
    albums: Album[];

    constructor(username: string, password: string) {
        this.setUsername(username);
        this.setPassword(password);
        this.playlists = [];
        this.albums = [];
    }

    setUsername(username: string) {
        this._username = username;
    }
    setPassword(password: string) {
        this._password = password;
    }
    getUsername(): string {
        return this._username;
    }
    getPassword(): string {
        return this._password;
    }
    addPlaylist(playlist: Playlist): void {
        this.playlists.push(playlist);
    }

    addAlbum(album: Album): void {
        this.albums.push(album);
    }

    getSongs(): Song[] {
        let songs: Song[] = [];
        this.albums.map((album) => {
            album.tracks.map((track) => {
                songs.push(track);
            })
        });
        return songs;
    }

    getAlbums(): Album[] {
        return this.albums;
    }

    getPlaylists(): Playlist[] {
        return this.playlists;
    }
}