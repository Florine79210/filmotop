<template>
  <div class="container pt-4 pb-4">
    <div v-if="error === true" class="error text-danger pt-5 mt-5">
      <p>Echec de la requête !!!</p>
    </div>
    <div v-else>
      <h1 class="text-white mt-5 mb-3">Films de 2020:</h1>
      <MoviesList :movies="movies" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MoviesList from "./MoviesList.vue";

export default {
  name: "MoviesOf2020",

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
        "https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&primary_release_year=2020&language=fr&include_adult=false&include_video=false&release_date.gte=2020&year=2020&page=1"
      )
      .then((res) => {
        this.movies = res.data.results;
        console.log(this.movies);

        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&primary_release_year=2020&language=fr&include_adult=false&include_video=false&release_date.gte=2020&year=2020&page=2"
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
font-family: 'Vollkorn', serif;
}
</style>