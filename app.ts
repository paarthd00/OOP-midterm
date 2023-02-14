import Artist from "./Artist";
import User from "./User";
import Song from "./Song";
import Album from "./Album";
import Playlist from "./Playlist";
import LocalImporter from "./LocalImporter";
import { PlaylistImporter } from "./PlaylistImporter";
import { CloudImporter } from "./CloudImporter";


let artist = new Artist("Muse");
let album = new Album("Muse", artist, 2021);
let song = new Song("Madness");
album.addTrack(song);


let artist1 = new Artist("Museee");
let album1 = new Album("Museee", artist1, 2021);
let song1 = new Song("Damnn");
album1.addTrack(song1);

let playlist = new Playlist("Fun songs");
playlist.addAlbum(album);
playlist.addAlbum(album1);
let LocalPlaylistImporter = new PlaylistImporter(
    new LocalImporter("data.json")
)
let CloudPlaylistImporter = new PlaylistImporter(new CloudImporter("www.youtube.com"))
let localplaylist = LocalPlaylistImporter.importPlaylist();
let cloudplaylist = CloudPlaylistImporter.importPlaylist();
let user = new User("john123", "password123");

user.addPlaylist(localplaylist);
user.addPlaylist(cloudplaylist);
user.addPlaylist(playlist);
console.log("Getting Playlist...");
console.log(user.getPlaylists());



user.addAlbum(album);
user.addAlbum(album1);


console.log("Getting Albums...");
console.log(user.getAlbums());

// user.addSong(song);
console.log("Getting Songs...");
console.log(user.getSongs());
