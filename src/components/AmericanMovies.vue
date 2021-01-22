<template>
  <div class="container mt-5 pt-5">
    <div v-if="error === true" class="error text-danger pt-5 mt-5">
      <p>Echec de la requête !!!</p>
    </div>
    <div v-else>
      <h1 class="text-white mt-5 mb-3">Films Americains:</h1>
      <MoviesList :movies="movies" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MoviesList from "./MoviesList.vue";

export default {
  name: "AmericanMovies",

  components: {
    MoviesList,
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
        "https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr&region=us&include_adult=false&include_video=false&page=1"
      )
      .then((res) => {
        this.movies = res.data.results;
        console.log(this.movies);

        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr&region=us&include_adult=false&include_video=false&page=2"
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
h1 {
font-weight: bold;
font-size: 50px;
}
</style>