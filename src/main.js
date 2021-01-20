import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import FrenchMovies from "./components/FrenchMovies.vue";
import AmericanMovies from "./components/AmericanMovies.vue";
import MoviesOf2020 from "./components/MoviesOf2020.vue";
import VoteAverageMovies from "./components/VoteAverageMovies.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/FrenchMovies", component: FrenchMovies },
  { path: "/AmericanMovies", component: AmericanMovies },
  { path: "/Moviesof2020", component: MoviesOf2020 },
  { path: "/VoteAverageMovies", component: VoteAverageMovies },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");



