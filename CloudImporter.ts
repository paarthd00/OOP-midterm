import Album from "./Album";
import Artist from "./Artist";
import IImportable from "./IImportable";
import Playlist from "./Playlist";
import Song from "./Song";

export class CloudImporter implements IImportable {
    file: string;
    
    constructor(file: string) {
        this.file = file;
    }
    
    loadPlaylist() {
        let playlist = new Playlist(this.file);

        let album = new Album("foo", new Artist("bar"), 2012);
        album.addTrack(new Song("foo"));
        playlist.addAlbum(album);
        return playlist;
    }
}