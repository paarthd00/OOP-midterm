import Playlist from "./Playlist";

export default interface IImportable {
    loadPlaylist(): Playlist;
}