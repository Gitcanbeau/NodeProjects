const inherits = require('inherits');

//(1)defines the JavaScript constructor function "Track"
function Track (title, artist) {
    this.title = title;
    this.artist = artist;
}
//(1)defines the JavaScript constructor function "Playlist"
function Playlist(){
    this.tracks = [];
}

//(2)添加 add 方法----add to the Playlist constructor function's prototype.
//Arrow functions do not have their own this context; instead, they inherit this from the surrounding lexical scope.
// Playlist.prototype.add = (track, position) => {
//     if (position === undefined) {
//         this.tracks.push(track); // 'this' will not refer to the instance of Playlist
//     } else {
//         this.tracks.splice(position, 0, track); // 'this' will not refer to the instance of Playlist
//     }
// };
//For methods that rely on this to refer to the instance of the object, 
//it's recommended to use traditional function syntax instead of arrow functions. 

Playlist.prototype.add = function(track, position) {
    if (position === undefined) {
        this.tracks.push(track);
    } else {
        this.tracks.splice(position, 0, track);
    }
};

//(3)添加 remove 方法----add to the Playlist constructor function's prototype.
Playlist.prototype.remove = function(track) {
    const index = this.tracks.findIndex(t => t === track);
    //findIndex() method iterates through tracks array, 
    //in the callback fcn: once the element t equals track, return the index of that element, 
    //assign to index
    if (index !== -1) {
        this.tracks.splice(index, 1);
        //remove "1" element at position "index"
    }
};


//(4)defines the JavaScript constructor function "MusicPlaylist"
function MusicPlaylist() {
    
    //By passing "this" as an argument to Playlist.call(),  
    //the properties and methods of Playlist can be initialized on the MusicPlaylist object.
    Playlist.call(this);
}
//(4)establishes the inheritance relationship
inherits(MusicPlaylist, Playlist);

//(5)create several instances of Track class
const track1 = new Track('Song 1', 'Artist 1');
const track2 = new Track('Song 2', 'Artist 2');
const track3 = new Track('Song 3', 'Artist 3');

//(5)create a new object of MusicPlaylist class
const playlist = new MusicPlaylist();

//(5)向播放列表中添加曲目
playlist.add(track1);
playlist.add(track2,0);
playlist.add(track3,4);
console.log('Playlist:', playlist.tracks);

// console.log(typeof(track1));
// console.log(typeof(playlist));
// const json_data=JSON.stringify(playlist);
// console.log(json_data);
// console.log(typeof(json_data));

//(5)从播放列表中移除曲目
playlist.remove(track2);
console.log('Playlist after removal:', playlist.tracks);
