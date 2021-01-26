<template>
  <!-- SEARCH BAR -->
  <div class="container mt-2 mb-2" id="search">
    <form class="d-flex justify-content-center">
      <input
        class="form-control me-2 w-50 text-center"
        type="text"
        placeholder="Rechercher un film"
        aria-label="Search"
        v-model="query"
        @keyup="getResult(query)"
      />
      <button
        class="btn p-3 text-dark bg-white border border-white"
        type="submit"
      >
        <i class="fas fa-search"></i>
      </button>
    </form>

    <div class="d-flex p-3 justify-content-center" v-for="result in results" :key="result.id">
      <div class="card w-75">
        <div class="card-header">
          <h6 class="card-title">{{ result.title }}</h6>
        </div>
        <div class="card-body">
          <img
            v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path"
            width="150px"
          />
          <p>Sortie le: {{ result.release_date | moment("DD/MM/YYYY") }}.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  props: ["movies"],

  data () {
    return {
      query: "",
      results:"",
    }
  },

  methods: {
    getResult(query) {
      axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=3ea8988340d4ed715d28b9978346c29e&query=" + query).then(response => { this.results = response.data.results })
        console.log(this.results)
    }
  }
};
</script>

<style >

</style>