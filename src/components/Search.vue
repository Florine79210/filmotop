<!-- <template> -->
  <!-- SEARCH BAR -->
  <!-- <div class="container mt-2 mb-2">
    <form class="d-flex" v-for="movie in movies" v-bind: key= "movie.title">
      <input
        class="form-control me-2 w-50 text-center"
        type="search"
        placeholder="Rechercher un film"
        aria-label="Search"
      />
      <button
        class="btn p-3 text-dark bg-white border border-white"
        type="submit"
      >
        <i class="fas fa-search"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",

  props: ["movies"],

  data() {
    return {
      searchTitle: false,
    };
  },

  methods: {
    searchTitle() {
      if (!this.searchTitle) {
        this.searchTitle = true;
        if ("Search" === movie.title){
            return this.movie;  
        }else {
            console.log("film inconnue");
        }
        
      } else {
        this.searchTitle = false;
      }
    }
  }

};
</script>

<style >
</style> -->