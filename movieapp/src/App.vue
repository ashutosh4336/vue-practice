<template>
  <main>
    <Navbar titleProp="Movie App"></Navbar>
    <div class="container mt-3">
      <div class="row">
        <div class="offset-md-3 col-lg-6 p-2">
          <div class="card card-body mb-2">
            <MovieForm v-bind:addMovie="addMovie"></MovieForm>
          </div>
          <MovieList :deleteMovie="deleteMovie" :movies="movies"></MovieList>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ts-nocheck
import MovieForm from "./components/MovieForm/MovieForm.vue";
import MovieList from "./components/MovieList/MovieList.vue";
import Navbar from "./layout/Navbar/Navbar.vue";

export default {
  components: {
    Navbar,
    MovieForm,
    MovieList,
  },
  data() {
    return {
      appName: "Movie App",
      movies: new Array(),
    };
  },

  mounted() {
    if (localStorage.getItem("@movies")) {
      try {
        this.movies = JSON.parse(localStorage.getItem("@movies"));
      } catch (err) {
        localStorage.clear();
        console.error(err);
      }
    }
  },

  methods: {
    addMovie: function (movie) {
      this.movies.push(movie);
      localStorage.setItem("@movies", JSON.stringify(this.movies));
    },

    deleteMovie: function (id) {
      this.movies = this.movies.filter((el) => el?.id !== id);
      localStorage.setItem("@movies", JSON.stringify(this.movies));
    },
  },
};
</script>

<style>
* {
  padding: 0;
  outline: 0;
  margin: 0;
  box-sizing: border-box;
}
main {
  background-image: url("./assets/images/lco-movie.jpg");
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}
</style>