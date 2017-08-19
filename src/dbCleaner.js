var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyDqD9CBtT9xJhFOvT8B8MM3-G6S-VcwbY8",
  authDomain: "beatles-dc255.firebaseapp.com",
  databaseURL: "https://beatles-dc255.firebaseio.com",
  projectId: "beatles-dc255",
  storageBucket: "beatles-dc255.appspot.com",
  messagingSenderId: "601776124116"
};
firebase.initializeApp(config);

/*
Please Please Me (1963)
With The Beatles (1963)
A Hard Day's Night (1964)
Beatles For Sale (1964)
Help! (1965)
Rubber Soul (1965)
Revolver (1966)
Sgt. Pepper (1967)
Magical Mystery Tour (1967)
The Beatles (1968)
Yellow Submarine (1968)
Abbey Road (1969)
Let It Be (1970)
*/

firebase.database().ref('/albums/').update({
  please: { name: 'Please Please Me', year: 1963, cover: 'https://upload.wikimedia.org/wikipedia/en/c/c0/PleasePleaseMe_audio_cover.jpg' },
  with: { name: 'With The Beatles', year: 1963, cover: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Withthebeatlescover.jpg' },
  hard: { name: "A Hard Day's Night", year: 1964, cover: 'https://upload.wikimedia.org/wikipedia/en/e/e6/HardDayUK.jpg' },
  sale: { name: 'Beatles for Sale', year: 1964, cover: 'https://upload.wikimedia.org/wikipedia/en/4/40/Beatlesforsale.jpg' },
  help: { name: 'Help!', year: 1965, cover: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Help.jpg' },
  rubber: { name: 'Rubber Soul', year: 1965, cover: 'https://upload.wikimedia.org/wikipedia/en/7/74/Rubber_Soul.jpg' },
  revolver: { name: 'Revolver', year: 1966, cover: 'https://upload.wikimedia.org/wikipedia/en/1/16/Revolver.jpg' },
  pepper: { name: "Sgt. Pepper's Lonely Hearts Club Band", year: 1967, cover: 'https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg' },
  magical: { name: 'Magical Mystery Tour', year: 1967, cover: 'https://upload.wikimedia.org/wikipedia/commons/2/20/TheBeatles68LP.jpg' },
  yellow: { name: 'Yellow Submarine', year: 1968, cover: 'https://upload.wikimedia.org/wikipedia/en/a/ac/TheBeatles-YellowSubmarinealbumcover.jpg' },
  white: { name: 'The Beatles (White Album)', year: 1968, cover: 'https://upload.wikimedia.org/wikipedia/commons/2/20/TheBeatles68LP.jpg' },
  abbey: { name: 'Abbey Road', year: 1969, cover: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg' },
  be: { name: 'Let It Be', year: 1970, cover: 'https://upload.wikimedia.org/wikipedia/en/2/25/LetItBe.jpg' }
});