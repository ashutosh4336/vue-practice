

<template>
  <div class="container h-100">
    <div class="row mt-5" v-if="!userData">
      <div class="col-md-6">
        <img
          src="../assets/images/home.svg"
          alt=""
          class="img-fluid hero-img animate__animated animate__fadeIn animate__slow"
        />
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center p-5">
        <h3
          class="text-center text-uppercase animate__animated animate__bounce"
        >
          Search your github profile
        </h3>
        <input
          type="text"
          placeholder="Github User Name"
          class="form-control"
          v-model.trim="userName"
        />
        <button type="button" class="btn btn-primary" @click="fetchData">
          Search
        </button>
      </div>
    </div>

    <div class="row mt-3" v-else>
      <div class="col-md-4">
        <UserCard :userData="userData" :resetData="resetData"></UserCard>
      </div>
      <div class="col-md-8">
        <Repos :repo_url="repos_url"></Repos>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserCard from "../components/UserCard/UserCard.vue";
import Repos from "../components/Repos/Repos.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    UserCard,
    Repos,
  },
  data: function () {
    return {
      userData: null,
      userName: "",
      repos_url: null,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  watch: {
    isAuthenticated: function (newVal) {
      if (!newVal) {
        return this.$router.replace(`/signin`);
      }
    },
  },
  methods: {
    fetchData: async function () {
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${this.userName}`
        );

        this.userData = data;
        this.repos_url = data.repos_url;
      } catch (err) {
        console.log(err);

        // @ts-ignore
        this.$swal({
          icon: "error",
          title: "No user Found",
          text: "Plase Check User Name",
        });
      }
    },

    resetData: function () {
      this.userName = "";
      this.repos_url = null;
      this.userData = null;
    },
  },
};
</script>


<style  scoped>
.hero-img {
  height: 70vh;
  width: 100%;
}
button {
  margin-top: 5px;
  border-radius: 5px;
  text-transform: uppercase;
}
</style>