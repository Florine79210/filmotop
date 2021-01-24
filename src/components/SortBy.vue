<template>
  <!-- DROPDOWN TRIER PAR -->
  <div class="container mt-2 mb-2">
    <div class="dropdown">
      <a
        style="border-radius: 10px"
        class="dropdown-toggle p-3 text-dark bg-white border border-white"
        href="#"
        id="dropdownSortBy"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Trier par
      </a>

      <ul class="dropdown-menu p-4" aria-labelledby="dropdownSortBy">
        <li>
          <button class="btn dropdown-item sort" v-on:click="sortByTitle()">
            Titre
          </button>
        </li>

        <li>
          <button class="btn dropdown-item sort" v-on:click="sortByAverage()">
            Moyenne des notes
          </button>
        </li>

        <li>
          <button class="btn dropdown-item sort" v-on:click="sortByDate()">
            Date de sortie
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortBy",

  props: ["movies"],

  data() {
    return {
      sortedByTitle: false,
      sortedByAverage: false,
      sortedByDate: false,
    };
  },

  methods: {
    sortByTitle() {
      if (!this.sortedByTitle) {
        this.sortedByTitle = true;
        return this.movies.sort((a, b) => {
          if (a.title < b.title) return -1;
          return a.title > b.title ? 1 : 0;
        });
      } else {
        this.sortedByTitle = false;
        return this.movies.sort((a, b) => {
          if (a.title > b.title) return -1;
          return a.title < b.title ? 1 : 0;
        });
      }
    },

    sortByAverage() {
      if (!this.sortedByAverage) {
        this.sortedByAverage = true;
        return this.movies.sort((a, b) => {
          if (a.vote_average < b.vote_average) return -1;
          return a.vote_average > b.vote_average ? 1 : 0;
        });
      } else {
        this.sortedByAverage = false;
        return this.movies.sort((a, b) => {
          if (a.vote_average > b.vote_average) return -1;
          return a.vote_average < b.vote_average ? 1 : 0;
        });
      }
    },

    sortByDate() {
      if (!this.sortedByDate) {
        this.sortedByDate = true;
        return this.movies.sort((a, b) => {
          if (a.release_date < b.release_date) return -1;
          return a.release_date > b.release_date ? 1 : 0;
        });
      } else {
        this.sortedByDate = false;
        return this.movies.sort((a, b) => {
          if (a.release_date > b.release_date) return -1;
          return a.release_date < b.release_date ? 1 : 0;
        });
      }
    },
  },
};
</script>

<style >
#dropdownSortBy {
  font-family: 'Vollkorn', serif;
  font-size: 25px;
  text-decoration: none;
}
.sort {
  color: #000000;
  font-family: 'Vollkorn', serif;
  font-size: 20px;
}
.sort:hover {
  transform: scale(1.2);
  transition: 1.5s;
  font-weight: bold;
  color: #ffffff;
  background-color: #000000;
}
</style>