<template>
  <div id="app">
    <Header />

    <div class="row mt-5 pt-5 justify-content-end">
      <div id="sortSearch" class="col-md-3 text-center">
        <SortBy :movies="movies" />
        <Search :movies="movies" />
      </div>
    </div>

    <div v-if="error === true" class="error text-danger pt-5 mt-5">
      <p>Echec de la requête !!!</p>
    </div>
    <div v-else>
      <div v-if="$route.path == '/'">
        <h1 class="text-white pt-4 pb-2 mt-5 mb-3">Tous les films:</h1>
        <MoviesList :movies="movies" />
      </div>

      <div v-else>
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import MoviesList from "./components/MoviesList.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SortBy from "./components/SortBy.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",

  components: {
    MoviesList,
    Header,
    Footer,
    SortBy,
    Search,
  },

  data() {
    return {
      movies: null,
      error: false,
    };
  },

  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&sort_by=popularity.desc&language=fr&include_adult=false&include_video=false&page=1"
      )

      .then((res) => {
        this.movies = res.data.results;
        console.log(this.movies);

        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&sort_by=popularity.desc&language=fr&include_adult=false&include_video=false&page=2"
          )
          .then((res) => {
            res.data.results.forEach((movie) => {
              this.movies.push(movie);
            });
            console.log(this.movies);
          })
          .catch((error) => {
            this.error = true;
            console.log(error);
          });
      })
      .catch((error) => {
        this.error = true;
        console.log(error);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#sortSearch {
  position: absolute;
}
.error {
  font-size: 50px;
  font-weight: bold;
}
h1 {
  font-weight: bold;
  font-size: 40px;
}
</style>
