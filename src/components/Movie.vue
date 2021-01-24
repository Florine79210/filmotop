<template>
  <div
    id="movie"
    style="border-radius: 20px"
    class="container p-3 mt-3 mb-3 w-75 bg-white"
  >
    <router-link :to="`/MovieDetails/${id}`" style="text-decoration: none">
      <div class="row">
        <div class="col-5 align-self-center">
          <img
            v-bind:src="'http://image.tmdb.org/t/p/w500/' + poster_path"
            width="300px"
          />
        </div>
        <div class="col-7 p-4">
          <h3 class="pb-4 text-dark">{{ title }}</h3>
          <h4 class="text-start pb-2 text-dark">
            <span>Moyenne: </span>{{ vote_average }}
          </h4>
          <p class="text-start text-dark">
            <span>Date de sortie: </span
            >{{ release_date | moment("DD/MM/YYYY") }}
          </p>
          <div v-if="overview !== ''">
            <p class="text-start text-dark">
              <span>Résumé: </span>{{ overview }}
            </p>
          </div>
        </div>
      </div>
    </router-link>
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
#movie {
  border: outset 2px #000000;
}
#movie:hover {
  transform: scale(1.2);
  transition: 1.5s;
}
h3 {
  font-weight: bold;
  font-size: 50px; /*  Impossible de changer la taille ???  */
  font-family: 'Playball', cursive;
}
h4, p {
  font-family: 'Vollkorn', serif;
}
h4 {
  font-size: 30px;
}
p {
  font-size: 20px;
}
span {
  font-weight: bold;
}
</style>