<template>
  <div class="container">

    <li class="list-unstyled" v-for="movie in movies" :key="movie.id">
      <Movie
        :id="movie.id"
        :title="movie.title"
        :poster_path="movie.poster_path"
        :vote_average="movie.vote_average"
        :release_date="movie.release_date"
      />
    </li>

  </div>
</template>

<script>

import Movie from "./Movie.vue";

export default {
  name: "MoviesList",
   props:["movies"],
  components: {
    Movie
  },
  
}
</script>

<style>
h3 {
  margin-bottom: 5%;
}
</style>