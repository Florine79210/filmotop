<template>
  <div
    id="movie"
    style="border-radius: 20px"
    class="container pt-3 pb-2 mt-3 mb-3 w-50 bg-white border border-white"
  >
    <div class="row">
      <div class="col-5">
        <img
          v-bind:src="'http://image.tmdb.org/t/p/w500/' + poster_path"
          width="200px"
        />
      </div>
      <div class="col-7">
        <h3 class="pb-5 text-dark">{{ title }}</h3>
        <h4 class="pb-3">Moyenne: {{ vote_average }}</h4>
        <h4>Réalisé le: {{ release_date }}</h4>
      </div>
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