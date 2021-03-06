
<template>
  <div v-for="repo in repos" :key="repo.id" class="list-group">
    <a
      :href="repo?.html_url"
      target="_blank"
      class="list-group-item list-group-item-action mb-3 animate__animated animate__pulse"
    >
      <div>
        <h6>
          {{ repo?.name }}
        </h6>
        <p class="text-muted">
          {{ repo?.description }}
        </p>
        <div class="d-flex justify-content-around">
          <span>
            <i class="fas fa-eye" aria-hidden="true"></i>
            {{ repo?.watchers_count }}
          </span>
          <span>
            <i class="fas fa-code-branch"></i> {{ repo?.stargazers_count }}
          </span>
          <span>
            <i class="fas fa-star" aria-hidden="true"></i>
            {{ repo?.forks_count }}
          </span>
          <span>
            <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
            {{ repo?.open_issues }}
          </span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
// @ts-nocheck
import axios from "axios";

export default {
  name: "Repos",
  props: ["repo_url"],
  data: function () {
    return {
      repos: [],
    };
  },
  methods: {
    fetchData: async function () {
      console.log("coming into fetchdata repos");
      try {
        if (this.repo_url) {
          const { data } = await axios.get(this.repo_url);
          console.log(this.repo_url);
          this.repos = data;
        }
        return;
      } catch (err) {
        console.log(err);
        this.$swal({
          icon: "error",
          title: "Something Went Wrong",
          text: "",
        });
      }
    },
  },
  mounted() {
    console.log("coming into mounted");
    this.fetchData();
  },
};
</script>

<style>
</style>