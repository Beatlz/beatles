<template>
  <div id="app">
    <sample></sample>
  </div>
</template>

<script>
import sample from './sample.vue';
  
var config = {
  apiKey: "AIzaSyDqD9CBtT9xJhFOvT8B8MM3-G6S-VcwbY8",
  authDomain: "beatles-dc255.firebaseapp.com",
  databaseURL: "https://beatles-dc255.firebaseio.com",
  projectId: "beatles-dc255",
  storageBucket: "beatles-dc255.appspot.com",
  messagingSenderId: "601776124116"
}; 
  
export default {
  
  name: 'app',
  
  data () {
    return {
      
      firebase: require('firebase')
      
    }
  },
  
  created() {
    this.firebase.initializeApp(config);
  },
  
  components: {
    sample
  },
  
  methods: {}
  
}
</script>

<style lang="scss">
  
  @import url('https://fonts.googleapis.com/css?family=Work+Sans');
  
  #app {
    font-family: 'Work Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }
  
  a:visited {
    text-decoration: none;
  }
  
  .centered {
    text-align: center;
  }
  
  .clickable {
    cursor: pointer;
  }
  
  .magic {
    transition: linear color 0.2s;
  }
  
  .magic:hover {
    color: #454545;
  }
  
  .blueMagic {
    transition: linear color 0.2s;
  }
  
  .blueMagic:hover {
    color: rgb(0,159,242);
  }
  
  .float {
    float: left;
  }
  
  .margin {
    margin-top: 25px;
  }
  
  .margin2 {
    margin-top: 50px;
  }
  
  .margin3 {
    margin-top: 75px;
  }
  
  .margin4 {
    margin-top: 100px;
  }
  
  .bottomMargin {
    margin-bottom: 50px;
  }
  
  .fullWidth {
    width: 100%;
  }
  
  .halfWidth {
    float: left;
    width: 45%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
  
  .quarterWidth {
    float: left;
    width: 20%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
  
  .fifthWidth {
    float: left;
    width: 15%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
  
  .boxed {
    box-sizing: border-box;
  }
  
  .overflown {
    overflow: auto;
  }
  
  .visiflow {
    overflow: visible;
  }
  
  .relative {
    position: relative
  }
  
  .righteous {
    text-align: right;
  }
  
  @media (max-width: 960px) {

    /* ONE-COLUMN BREAKPOINT; MOBILE GOES HERE */
    .quarterWidth {
      width: 45%;
    }
    
    .bottomMargin {
      margin-bottom: 25px;
    }

  }
  
</style>
