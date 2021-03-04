<template>
  <main>
    <Navbar titleProp="Movie App"></Navbar>
    <h2>{{ appName }}</h2>
  </main>
</template>

<script>
import Navbar from "./layout/Navbar/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      appName: "Movie App",
      movies: [],
    };
  },

  methods: {
    addMovie: function (movie) {
      this.movies.push(movie);
      localStorage.setItem("@movies", JSON.stringify(this.movies));
    },
    deleteMovie: function (id) {
      // const movie = localStorage.getItem("@movies")
      //   ? localStorage.getItem("@movies")
      //   : {};

      this.movies = this.movies.filter((el) => el.id !== id);
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