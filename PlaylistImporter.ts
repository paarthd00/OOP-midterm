import IImportable from "./IImportable";
import Playlist from "./Playlist";

export class PlaylistImporter {
    importer: IImportable;
    constructor(importer: IImportable) {
        this.importer = importer;
    }
    importPlaylist(): Playlist {
        return this.importer.loadPlaylist();
    }
}