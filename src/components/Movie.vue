<template>
  <div
    id="movie"
    style="border-radius: 20px"
    class="container pt-3 pb-2 mt-3 mb-3 w-50 bg-white border border-white"
  >
    <div class="row">
      <div class="col-5 align-self-center">
        <img
          v-bind:src="'http://image.tmdb.org/t/p/w500/' + poster_path"
          width="200px"
        />
      </div>
      <div class="col-7">
        <h3 class="pb-2 text-dark">{{ title }}</h3>
        <h4 class="text-start pb-2">
          <span>Moyenne: </span>{{ vote_average }}
        </h4>
        <p class="text-start">
          <span>Date de sortie: </span>{{ release_date }}
        </p>
        <p class="text-start"><span>Résumé: </span>{{ overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: [
    "id",
    "title",
    "poster_path",
    "vote_average",
    "release_date",
    "overview",
  ],
};
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