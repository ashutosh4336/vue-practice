<template>
  <ul class="list-unstyled">
    <li class="mb-2" v-for="movie in movies" v-bind:key="movie.id">
      <div class="card text-center">
        <div class="card-body row">
          <div class="col-8 d-flex justify-content-center flex-column">
            <h4 class="card-title">
              {{ movie.name }}
            </h4>
            <p class="card-subtitle mb-2 text-muted">
              Added on {{ formatDate(movie.date) }}
            </p>
          </div>
          <div class="col col-4">
            <a
              v-bind:href="movie.url"
              target="_blank"
              class="btn btn-outline-primary btn-block"
              >View Movie</a
            >
            <a
              v-on:click="deleteMovie(movie.id)"
              target="_blank"
              class="btn btn-outline-danger btn-block"
              >Delete Movie</a
            >
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import { format } from "date-fns";

export default {
  name: "Movie List",
  props: ["movies", "deleteMovie"],
  methods: {
    formatDate: function (/** @type {number | Date} */ date) {
      return format(date, "yyyy dd MMMM h:mm");
    },
  },
};
</script>

<style scoped>
</style>