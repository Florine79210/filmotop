<template>
  <div id="movie" style="border-radius: 20px" class="container pt-3 pb-2 mt-3 mb-3 w-50 bg-white border border-white">
    <h3>{{ title }}</h3>
    <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + poster_path" width="150px"/>
    <div class="row pt-2">
      <h4>Moyenne: {{ vote_average }}</h4>
      <h4>Réalisé le: {{ release_date }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: ["id", "title", "poster_path", "vote_average", "release_date"],
};
</script>

<style>
h3 {
  margin-bottom: 5%;
}
</style>