<template>
  <!-- DROPDOWN TRIER PAR -->
  <div class="container mt-2 mb-2 text-end">
    <div class="dropdown">
      <a
        class="dropdown-toggle p-2 text-dark bg-white"
        href="#"
        id="dropdownSortBy"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Trier par
      </a>

      <ul class="dropdown-menu" aria-labelledby="dropdownSortBy">
        <li>
          <button
            class="btn dropdown-item text-dark"
            v-on:click="sortByTitle()"
          >
            Titre
          </button>
        </li>

        <li>
          <button class="btn dropdown-item text-dark">Moyenne des notes</button>
        </li>

        <li>
          <button class="btn dropdown-item text-dark">Date de sortie</button>
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
      sortedByDate: false,
      sortedByAverage: false,
    };
  },

  methods: {

    sortByTitle() {
      if (this.sortedByTitle === false) {
        return this.movies.sort((a, b) => {
          if (a.title < b.title) return -1;
          return a.title > b.title ? 1 : 0;
          return (this.sortedByTitle = true);
        });
      } else {
        return this.movies.sort((a, b) => {
          if (a.title > b.title) return -1;
          return a.title < b.title ? 1 : 0;
          return (this.sortedByTitle = false);
        });
      };
    },
    
  },
};
</script>