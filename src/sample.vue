<template>
  <div id="sample">
    <div class="main visiflow">
     
      <!-- Timeline -->
      <div class="row">
        <div class="whole">
          <div class="timeLineContainer">
            <div class="timeLineBox" id="timeLine">
              <div class="visibleTimeLine" :style="timeline"></div>
              <div class="timeBubble"
                   v-for="(item, index) in array"
                   @click="bubbleClick(index)"
                   :id="index"
                   :style="bubble">{{ index + 1 }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- First step -->
      <div v-show="step === 0">
        <div class="half centered">
          <h2>{{ current.title }}</h2>
          <p v-html="current.description"></p>
        </div>
        <div class="mobileCenter half">
          <h3>Age</h3>
          <input type="number" v-model="form.age">
          <h3>Gender</h3>
          <select v-model="form.gender">
            <option disabled value="">Please select one</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <h3>Location</h3>
          <select v-model="form.location">
            <option v-for="item in countries">{{ item }}</option>
          </select>
          <h3>Email</h3>
          <input type="email" v-model="form.mail">
          <p>* Your email address is completely optional. This is just in case you wish to get notified when the API becomes public. Email addresses will never become public.</p>
        </div>
        <div class="margin3 centered whole">
          <button class="btn" v-show="form.age && form.gender && form.location" @click="change">Next!</button>
        </div>
      </div>
      
      <!-- Second step -->
      <div v-show="step === 1">
        <div class="centered whole">
          <h2 class="centered" v-html="current.description"></h2>
          <button class="btn dark" @click="fool">Restart</button>
        </div>
        <div class="noMargin whole visiflow margin2">
          <div class="relative beatleBox visiflow boxed margin2" v-for="(item, index) in beatles" @click="nowhereMan(index)">
            <h4 class="centered"><strong v-if="form.beatles.indexOf(index) !== -1">{{ form.beatles.indexOf(index) + 1 }}</strong><span v-if="form.beatles.indexOf(index) !== -1"> – </span>{{ item.name }}</h4> 
            <img :src="item.pic" alt="" class="boxed beatles" :id="index" :style="item.style">
          </div>
        </div>
        <div class="centered">
          <button class="mobileMargin margin4 btn dark" @click="change" v-show="form.beatles.length === 4">Next!</button>
        </div>
      </div>
      
      <!-- Third step -->
      <div v-show="step === 2">
        <div class="row">
          <div class="whole centered">
            <h1>{{ current.title }}</h1>
            <h4>{{ current.description }}</h4>
          </div>
        </div>
        <div class="overflown margin2 row">
          <div class="relative mobileCenter half">
            <p>Search:</p>
            <input type="text" v-model="trackSearch" id="search-input">
            <div class="boxed searchBox" v-show="ids.length > 0 && form.songs.length < 5">
              <p class="blueMagic clickable" v-for="(item, index) in ids" v-if="index < 5" @click="allTogether(item), trackSearch = ''">
                {{ tracks[item].track }} – {{ tracks[item].album }}
              </p>
            </div>
          </div>
          <div class="mobileCenter half">
            <button class="btn dark" @click="form.songs = []" v-show="form.songs.length > 0">Reset</button>
            <p v-for="(item, index) in form.songs">
              {{ index + 1 }} – {{ tracks[item].track }}
            </p> 
          </div>
        </div>
        <div class="whole centered">
          <button class="btn dark" @click="change" v-show="form.songs.length === 5">Next!</button>
        </div>
      </div>
      
      <!-- Fourth step -->
      <div v-show="step === 3">
        <div class="row">
          <div class="whole">
            <div class="centered row bottomMargin">
              <h1 class="centered">Pick your top 3 fav albums</h1>
              <button class="btn dark" @click="form.albums = []">Reset</button>
              <button class="btn dark" @click="sendMyLove" v-show="form.albums.length === 3">Submit!</button>
            </div>
            <div class="clickable bottomMargin blueMagic quarterWidth goodbye" v-for="(item, index) in albums" @click="norwegianWood(index)">
              <div class="bigAlbum" :style="item.cover" :id="index">
                <div class="boxed walrus" v-if="form.albums.indexOf(index) !== -1">{{ form.albums.indexOf(index) + 1 }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row centered">
          <div class="centered whole">
            <button class="btn dark" @click="sendMyLove" v-show="form.albums.length === 3">Submit!</button>
          </div>
        </div>
      </div>
      
      <!-- Fifth beatle -->
      <div v-show="step === 4" style="z-index: 1000">
        <div class="row">
          <div class="whole">
            <h1 class="centered">And in the end…</h1>
            <div class="centered whole">
              <a href="http://blog.tramonte.mx">
                <button class="btn dark" @click="sendMyLove">Credits & Info</button>
              </a>
            </div>
          </div>
        </div>
        <div class="row twoMargins">
          <div class="mobileCenter half">
            <h2>Your poll:</h2>
            <h4>Favourite beatles:</h4>
            <ol>
              <li v-for="item in form.beatles">{{ beatles[item].name }}</li>
            </ol> 
            <h4>Favourite tracks:</h4>
            <ol>
              <li v-for="item in form.songs">{{ tracks[item].track }}, by {{ tracks[item].composer }}</li>
            </ol>
            <h4>Favourite albums:</h4>
            <ol>
              <li v-for="item in form.albums">{{ albums[item].name }}</li>
            </ol>
          </div>
          <div class="half">
            <div class="row">
              <h3>
                the love you take
              </h3>
              <p>
                Share this to help us gather more data! As soon as we get a significant amount of polls enough to make data relevant, we will make all the gathered data public so you guys can use it too.
              </p>
              <h3>…is equal to the love you make</h3>
              <p>
                Our goal is to open an API so anyone can access info, make their own analysis, and share them with the world. You put the data, we put the resources. 
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div> <!-- main ends -->
    <img src="src/assets/abbey.png" alt="" class="abbey" v-show="step === 0">
    <img src="src/assets/help.png" alt="" class="abbey" v-show="step === 4">
  </div>
</template>

<script>
export default {
  
  name: 'app',
  
  data () {
    return {
      
      countries: require('./countries'),
      current: {},
      step: 0,
      fav: 1,
      trackSearch: '',
      trackList: [],
      searchResult: [], resultIds: '',
      favFab: { backgroundImage: ''},
      favAlbum: { backgroundImage: '' },
      array: [
        { title: 'Hello!', description: 'Thanks for taking this poll!<br><br> The goal of this is to learn a bit more about people\'s favourite Beatles things. All data gathered will be open publicly after enough is collected for it to be considered interesting. <br><br> We won\'t ask you any personal info, this shouldn\'t take you more than two minutes.', color: '#004C67', completed: false },
        { title: 'Fav Fab', description: 'Who\'s your favourite beatle?<br>Start with your absolute favourite.', color: '#000B0F', completed: false },
        { title: 'Favourite tracks', description: 'List your top 5 favourite Beatles songs', color: '#24ad96', completed: false },
        { title: 'Favourite albums', description: '', color: '#001829', completed: false },
        { title: 'Thanks', description: '', color: '#ad4848', completed: false },
      ],
      timeline: {
        width: '0'
      },
      bubble: {
        background: ''
      },
      form: {
        age: '',
        gender: '',
        location: '',
        beatles: [],
        albums: [],
        songs: [],
        date: '',
        timezone: '',
        mail: ''
      },
      beatles: {
        john: { name: 'John Lennon', pic: 'src/assets/lennon.png', style: '', fav: null },
        paul: { name: 'Paul McCartney', pic: 'src/assets/mccartney.png', style: '', fav: null },
        george: { name: 'George Harrison', pic: 'src/assets/george.png', style: '', fav: null },
        ringo: { name: 'Ringo Starr', pic: 'src/assets/ringo.png', style: '', fav: null }
      },
      albums: {
        please: { name: 'Please Please Me', year: 1963, cover: { backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/c/c0/PleasePleaseMe_audio_cover.jpg')" }, show: false },
        with: { name: 'With The Beatles', year: 1963, cover: { backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/0/0a/Withthebeatlescover.jpg')" }, show: false },
        hard: { name: "A Hard Day's Night", year: 1964, cover: { backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/e/e6/HardDayUK.jpg')" }, show: false },
        sale: { name: 'Beatles for Sale', year: 1964, cover: { backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/4/40/Beatlesforsale.jpg')" }, show: false },
        help: { name: 'Help!', year: 1965, cover: { backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/3/3d/Help.jpg')" }, show: false },
        rubber: { name: 'Rubber Soul', year: 1965, cover: { backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/7/74/Rubber_Soul.jpg')" }, show: false },
        revolver: { name: 'Revolver', year: 1966, cover: { backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/1/16/Revolver.jpg')" }, show: false },
        pepper: { name: "Sgt. Pepper's", year: 1967, cover: { backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg')" }, show: false },
        magical: { name: 'Magical Mystery Tour', year: 1967, cover: { backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/e/e8/MagicalMysteryTourDoubleEPcover.jpg')" }, show: false },
        yellow: { name: 'Yellow Submarine', year: 1968, cover: { backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/a/ac/TheBeatles-YellowSubmarinealbumcover.jpg')" }, show: false },
        white: { name: 'The Beatles (White Album)', year: 1968, cover: { backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/2/20/TheBeatles68LP.jpg')" }, show: false },
        abbey: { name: 'Abbey Road', year: 1969, cover: { backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg')" }, show: false },
        be: { name: 'Let It Be', year: 1970, cover: { backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/2/25/LetItBe.jpg')" }, show: false }
      }
      
    }
  },
  
  mounted() {
    this.form.date = this.yesterday();
    this.timeZone = new Date().getTimezoneOffset();
    this.current = this.array[0];
    document.body.style.background = this.array[0].color;
    this.bubble.background = this.array[0].color;
    this.bubblePos();
    this.getBack();
  },
  
  methods: {
    
    getBack() {
      let that = this;
      this.$parent.firebase.database().ref('tracks').once('value').then(function(snapshot) {
        that.tracks = snapshot.val();
        // Include IDs
        that.tracks.forEach(function(val, key) {
          val.id = key;
        });
      });
    },
    
    bubblePos() {
      let that = this;
      let q = this.array.length;
      let distance = document.getElementById('timeLine').offsetWidth / (q - 1);
      let radius = document.getElementById('0').offsetWidth / 2;
      let p = 100 / (q - 1);
      
      this.array.forEach(function(val, key) {
        let id = key.toString()
        document.getElementById(id).style.left = key * p - 1+ '%';
      });
    },
    
    change() {
      this.step++;
    },
    
    bubbleClick(index) {
      if(index < this.step) {
        this.step = index;
        this.current = this.array[index];
      }
    },
    
    yesterday() {
      let d = new Date();
      return d.getTime();
    },
    
    nowhereMan(beatle) {
      if(this.form.beatles.length < 4) {
        this.form.beatles.push(beatle);
        this.beatles[beatle].style = { background: '#ede578' };
      }
      if(this.form.beatles.length === 4) {
        document.body.style.background = '#ede578';
        document.getElementById('sample').style.color = '#454545';
        this.bubble.background = '#ede578';
        this.bubble.color = '#454545';
      }
    },
    
    fool() {
      this.form.beatles = [];
      this.bubble.background = this.array[1].color;
      this.bubble.color = '#fff';
      document.body.style.background = this.array[1].color;
      document.getElementById('sample').style.color = '#fff';
      for(let b in this.beatles) {
        this.beatles[b].style = { background: 'transparent' };
      }
    },
    
    allTogether(track) {
      if(this.form.songs.indexOf(track) !== -1) {
        alert('This song is already on the list!');
      } else if (this.form.songs.length < 5) {
        this.form.songs.push(track);
      }
    },
    
    sendMyLove() {
      this.change();
      this.$parent.firebase.database().ref('/samples/').push(this.form);
    },
    
    norwegianWood(record) {
      if(this.form.albums.length < 3) {
        this.form.albums.push(record);
      }
    }
    
  },
  
  computed: {
    
    result() {
      if(!this.trackSearch) return [];
      var rx = new RegExp(this.trackSearch, 'gi');
      return this.tracks.filter(x => x.track.match(rx));
    },
    
    ids() {
      return this.result.map(x => x.id);
    }
    
  },
  
  watch: {
    
    step() {
      let interval = 100 / (this.array.length - 1);
      this.current = this.array[this.step];
      this.bubble.background = this.current.color;
      document.getElementById('sample').style.color = '#fff';
      this.bubble.color = '#fff';
      document.body.style.background = this.current.color;
      this.timeline.width = this.step * interval + '%';
      if(this.step === 1 && this.form.beatles.length === 4) {
        document.body.style.background = '#ede578';
        document.getElementById('sample').style.color = '#454545';
        this.bubble.background = '#ede578';
        this.bubble.color = '#454545';
      }
    }
    
  } // watch{} ends
  
} // Vue instance ends

</script>

<style lang="scss">
  
  #sample {
    color: #fff;
  }

  .timeLineContainer {
    position: relative;
    height: 60px;
    width: 80%;
    margin-left: 10%;
  }
  
  .abbey {
    position: fixed;
    width: 50%;
    left: 25%;
    bottom: -50px;
    z-index: -1;
  }

  .timeLineBox {
    position: relative;
    overflow: visible;
    height: 4px;
    margin-top: 28px;
  }

  .timeBubble {
    position: absolute;
    width: 20px;
    height: 20px;
    top: -8px;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    background: #4973b7;
    color: #fff;
    transition: linear background 0.3s;
  }
  
  .visibleTimeLine {
    position: absolute;
    width: 25%;
    height: inherit;
    top: 0px;
    background: rgba(255, 255, 255, 0.5);
    transition: linear width 0.3s;
  }
  
  .beatles {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    cursor: pointer;
    transition: linear background 0.3s;
  }
  
  #george {
    width: 100%;
    margin: 0;
  }
  
  .beatleBox {
    float: left;
    width: 20%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    height: 350px;
    border: 5px solid transparent;
    box-sizing: border-box;
    /*#ede578*/
  }
  
  .fav {
    position: absolute;
    color: #454545;
    left: 50px;
    top: 70px;
  }
  
  .favsBox {
    width: 50%;
    margin: 0 auto;
  }
  
  .searchBox {
    width: 80%;
    margin-top: 10px;
    color: #454545;
    padding: 10px;
    background: #fff;
    -webkit-box-shadow: 1px 3px 5px 0px rgba(128,128,128,1);
    -moz-box-shadow: 1px 3px 5px 0px rgba(128,128,128,1);
    box-shadow: 1px 3px 5px 0px rgba(128,128,128,1);
  }
  
  .bigAlbum {
    width: 80%;
    height: 14.28vw;
    margin-left: 10%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    transition: linear transform 0.1s;
  }
  
  .bigAlbum:hover {
    transform: scale(1.05);
  }
  
  .goodbye {
    transition: all linear 0.3s;
  }
  
  .walrus {
    width: 100%;
    height: 100%;
    line-height: 100%;
    text-align: center;
    font-size: 4em;
    padding-top: 30%;
    background: rgba(0, 159, 242, 0.7);
    color: #000;
  }
  
  .finalPic {
    position: absolute;
    width: 60%;
    height: 40vh;
    overflow: visible;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  
  #albumFinal {
    bottom: 0;
    right: 0;
  }
  
  @media (max-width: 960px) {

    /* ONE-COLUMN BREAKPOINT; MOBILE GOES HERE */

    .mobileCenter {
      text-align: center;
      margin-top: 50px;
    }
    
    .mobileLeft {
      text-align: left;
    }
    
    .mobileMargin {
      margin-top: 25px;
    }
    
    input {
      text-align: center;
    }
    
    .beatleBox {
      width: 40%;
      height: 200px;
      margin-left: 5%;
      margin-right: 5%;
      margin-bottom: 50px;
      margin-top: 15px;
    }
    
    .searchBox {
      margin-left: 10%;
    }
    
    .fav {
      left: 0;
      top: 50px;
    }
    
    .abbey {
      width: 80%;
      left: 10%;
      bottom: -20px;
    }
    
    .bigAlbum {
      height: 32vw;
    }
    

  }
  
</style>
