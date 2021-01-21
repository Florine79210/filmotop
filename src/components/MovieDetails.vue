<template>
  <div
    id="movieDetails"
    style="border-radius: 20px"
    class="container pt-5 pb-2 mt-5 mb-3 w-75 bg-white border border-white"
  >
    <h3 class="pb-2 text-dark">{{ movie.title }}</h3>
    <img
      v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
      width="200px"
    />

    <h4 class="text-start pb-2"><span>Moyenne: </span>{{ movie.vote_average }}</h4>
    <p class="text-start">
      <span>Date de sortie: </span
      >{{ movie.release_date | moment("Do dddd MMMM YYYY") }}
    </p>
    <p class="text-start"><span>Résumé: </span>{{ movie.overview }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieDetails",

//    props: [
//     "id",
//     "title",
//     "poster_path",
//     "vote_average",
//     "release_date",
//     "overview",
//   ],

  data() {
    return {
      id: this.$route.params.id,
      movie: null,
    };
  },

  methods: {
       getMovieById(component) {
    axios.
    get(
      "https://api.themoviedb.org/3/movie/" + component.id + "?api_key=3ea8988340d4ed715d28b9978346c29e"
    ).then(function(response) {
      component.movie = response.data;
      console.log(component.movie);
    });
  }
  },

  created() {
      this.getMovieById(this)
  },
  

}
</script>

<style>
h3 {
  font-weight: bold;
  font-size: 30px;
}
span {
  font-weight: bold;
}
</style>