import Album from "./Album";
import IImportable from "./IImportable";
import Playlist from "./Playlist";

export default class LocalImporter implements IImportable {
    file: string;
    
    constructor(file: string) {
        this.file = file;
    }
    
    loadPlaylist(): Playlist {
        const data = require(`./${this.file.split(".")[0]}`);
        let playlistName = Object.keys(data)[0];
        let playlist = new Playlist(playlistName);
        data[playlistName].map((album: Album) => {
            playlist.addAlbum(album);
        });
        return playlist;
    }
}