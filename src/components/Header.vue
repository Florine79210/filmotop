<template>
  <header class="pb-4">
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-white border border-bottom-dark fixed-top"
    >
      <div class="container-fluid">
        <img class="ps-5" alt="Filmotop logo" src="../assets/filmotop.jpg" />
        <h2 class="ms-5 ps-5">Filmotop</h2>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav pe-5 me-5 ms-auto">
            <li class="nav-item">
              <router-link to="/" style="text-decoration: none">
                <button id="accueil" class="btn nav-link">
                  Accueil
                </button>
              </router-link>
            </li>

            <!-- DROPDOWN PLUS DE FILMS -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Plus de films
              </a>

              <ul
                class="dropdown-menu p-4"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <router-link
                    to="/VoteAverageMovies"
                    style="text-decoration: none"
                  >
                    <button class="btn dropdown-item moreMovies">
                      Films les mieux notés
                    </button>
                  </router-link>
                </li>

                <li>
                  <router-link
                    to="/AmericanMovies"
                    style="text-decoration: none"
                  >
                    <button class="btn dropdown-item moreMovies">
                      Films américains
                    </button>
                  </router-link>
                </li>

                <li>
                  <router-link to="/FrenchMovies" style="text-decoration: none">
                    <button class="btn dropdown-item moreMovies">
                      Films français
                    </button>
                  </router-link>
                </li>

                <li>
                  <router-link to="/MoviesOf2020" style="text-decoration: none">
                    <button class="btn dropdown-item moreMovies">
                      Films sortis en 2020
                    </button>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
#accueil {
  color: #000000;
}
#accueil:hover {
  transform: scale(1.2);
  transition: 1.5s;
  font-weight: bold;
  color: #ffffff;
  background-color: #000000;
}
.moreMovies {
  color: #000000;
}
.moreMovies:hover {
  transform: scale(1.2);
  transition: 1.5s;
  font-weight: bold;
  color: #ffffff;
  background-color: #000000;
}
h2 {
  font-weight: bold;
  font-size: 50px;
}
</style>