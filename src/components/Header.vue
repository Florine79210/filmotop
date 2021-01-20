<template>
     <header class="pb-4">
      <nav class="navbar navbar-expand-lg navbar-dark bg-white border border-bottom-dark fixed-top">
        <div class="container-fluid">
          <img
            class="w-25"
            alt="Filmotop logo"
            src="../assets/filmotop.jpg"
          />

          <h2>Filmotop</h2>

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
            <ul class="navbar-nav pe-3 me-5 ms-auto">
              <li class="nav-item">
                <router-link to="/">
                  <button class="btn nav-link text-dark">Accueil</button>
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

                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                  <li>
                    <router-link to="/VoteAverageMovies">
                      <button class="btn dropdown-item text-dark">Films les mieux notés</button>
                    </router-link>
                  </li>

                  <li>
                    <router-link to="/AmericanMovies">
                      <button class="btn dropdown-item text-dark">Films américains</button>
                    </router-link>
                  </li>

                  <li>
                    <router-link to="/FrenchMovies">
                      <button class="btn dropdown-item text-dark">Films français</button>
                    </router-link>
                  </li>

                  <li>
                    <router-link to="/MoviesOf2020">
                      <button class="btn dropdown-item text-dark">Films sortis en 2020</button>
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
    name:'Header'
}
</script>