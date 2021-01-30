<template>
  <div
    id="movieDetails"
    style="border-radius: 20px"
    class="container pt-4 pb-2 mb-5 w-50 bg-white border border-white"
  >
    <div v-if="error === true" class="error text-danger pt-3">
      <p>Echec de la requête !!!</p>
    </div>

    <div v-else>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="pt-3 pb-4 text-center text-dark">{{ movie.title }}</h3>
          <img
            class="pb-4"
            v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.backdrop_path"
            width="700px"
          />
          <div v-if="movie.tagline !== ''">
            <h4 class="text-center pt-3 pb-4 text-dark">
              "{{ movie.tagline }}"
            </h4>
          </div>

          <div class="row mt-3 mb-3 d-flex justify-content-between">
            <div class="col-md-6">
              <p class="text-center text-dark">
                <span>Moyenne: </span> {{ movie.vote_average }}/10 (
                {{ movie.vote_count }} votes )
              </p>
            </div>

            <div class="col-md-6">
              <p class="text-center text-dark">
                <span>Date de sortie: </span>
                {{ movie.release_date | moment("DD/MM/YYYY") }}
              </p>
            </div>
          </div>

          <div class="row mt-3 mb-3 d-flex justify-content-center">
            <div
              v-if="movie.overview !== ''"
              class="col-md-7 align-self-center"
            >
              <p class="text-start text-dark">
                <span>Résumé: </span>{{ movie.overview }}
              </p>
            </div>

            <div class="col-md-5 align-self-center">
              <img
                v-bind:src="
                  'http://image.tmdb.org/t/p/w500/' + movie.poster_path
                "
                width="300px"
              />
            </div>
          </div>

          <div v-if="movie.budget !== 0 || movie.revenue !== 0" class="row mt-3 mb-2 d-flex justify-content-center">
            <div v-if="movie.budget !== 0" class="col-md-6">
              <p class="text-center text-dark">
                <span>Budget: </span> {{ movie.budget }}$
              </p>
            </div>

            <div v-if="movie.revenue !== 0" class="col-md-6">
              <p class="text-center text-dark">
                <span>Recette: </span> {{ movie.revenue }}$
              </p>
            </div>
          </div>

          <div class="row mt-2 mb-3 d-flex justify-content-center">
            <div class="col-md-6">
              <p class="text-center text-dark">
                <span>Langue originale: </span> "
                {{ movie.original_language }} "
              </p>
            </div>

            <div v-if="movie.original_language !== 'fr'" class="col-md-6">
              <p class="text-center text-dark">
                <span>Titre original: </span>{{ movie.original_title }}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieDetails",

  data() {
    return {
      id: this.$route.params.id,
      movie: null,
      error: false,
    };
  },

  methods: {
    getMovieById(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            component.id +
            "?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr"
        )
        .then(function (response) {
          component.movie = response.data;
          console.log(component.movie);
        })
        .catch((error) => {
          this.error = true;
          console.log(error);
        });
    },
  },

  created() {
    this.getMovieById(this);
  },
};
</script>

<style>
#movieDetails h3 {
  font-weight: bold;
  font-size: 55px;
  font-family: "Playball", cursive;
}
#movieDetails h4 {
  font-family: "Playball", cursive;
  font-style: italic;
  font-weight: bold;
  font-size: 40px;
}
#movieDetails p {
  font-family: "Vollkorn", serif;
  font-size: 25px;
}
span {
  font-weight: bold;
}
#movieDetails {
  margin-top: 80px;
}
</style>