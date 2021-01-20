<template>
  <div class="container mt-5 pt-5">
    <h3 class="text-white mt-5 mb-3">Films les mieux notés:</h3>
    <MoviesList :movies="movies" />
  </div>
</template>

<script>
import axios from "axios";
import MoviesList from "./MoviesList.vue";

export default {
  name: "VoteAverageMovies",
 
  components: {
    MoviesList,

  },

  data() {
    return {
      movies: null,
    };
  },

  created: function () {
    axios
      .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1"
      )
      .then((res) => {
        this.movies = res.data.results;
        console.log(this.movies);

          axios
      .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&sort_by=vote_average.desc&include_adult=false&include_video=false&page=2"
      )
      .then((res) => {
         res.data.results.forEach((movie) => {
              this.movies.push(movie);
            });
            console.log(this.movies);
          });

      });
  },
};
</script>

<style>
h3 {
  margin-bottom: 5%;
}
</style>