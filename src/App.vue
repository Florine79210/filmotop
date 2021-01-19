<template>
  <div id="app">
    <Header />

    <router-link to="/Test"> Test </router-link>

    <div v-if="$route.path == '/'">
      <h3 class="text-white mb-5 pb-5">Tous les films:</h3>
      <MoviesList :movies="movies" />
    </div>

    <div v-else>
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MoviesList from "./components/MoviesList.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
 
  components: {
    MoviesList,
    Header,
  },

  data() {
    return {
      movies: null,
    };
  },

  created:() {
    get AllMovies()
    {
     
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      )
      .then((res) => {
        this.movies = res.data.results;
        console.log(this.movies);

        axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&sort_by=popularity.desc&include_adult=false&include_video=false&page=2"
      )
      .then((res) => {
        res.data.results.forEach(movie=>{
          this.movies.push(movie)
        })
        console.log(this.movies);

      });  
  }
    }}}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
