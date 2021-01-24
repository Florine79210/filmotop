<template>
  <div class="container">
    <div class="row pt-3 pb-3 mt-3 mb-3 justify-content-center">
      <div class="col-md-6 text-cennter">
        <SortBy :movies="movies" />
      </div>

      <!-- <div class="col-md-6 text-center">
        <Search :movies="movies" />
      </div> -->
    </div>

    <li class="list-unstyled" v-for="movie in movies" :key="movie.id">
      <Movie
        :id="movie.id"
        :title="movie.title"
        :poster_path="movie.poster_path"
        :vote_average="movie.vote_average"
        :release_date="movie.release_date"
        :overview="movie.overview"
        :tagline="movie.tagline"
      />
    </li>
  </div>
</template>

<script>
import Movie from "./Movie.vue";
import SortBy from "./SortBy.vue";
// import Search from "./Search.vue";

export default {
  name: "MoviesList",
  props: ["movies"],
  components: {
    Movie,
    SortBy,
    // Search,
  },
};
</script>

<style>
</style>