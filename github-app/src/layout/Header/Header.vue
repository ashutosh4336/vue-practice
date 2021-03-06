<template>
  <nav class="navbar navbar-dark bg-secondary">
    <router-link class="navbar-brand" to="/">
      <img src="../../assets/logo.png" width="30" height="30" alt="" />
    </router-link>
    <div>
      <div>
        <router-link
          to="/signin"
          tag="button"
          class="btn btn-primary mr-2"
          v-if="!isAuthenticated"
          >SignIn</router-link
        >
        <router-link
          to="/signup"
          tag="button"
          class="btn btn-primary"
          v-if="!isAuthenticated"
          >SignUp</router-link
        >
      </div>
      <div>
        <span class="navbar-text text-white mr-2" v-if="isAuthenticated">
          {{ email }}
        </span>
        <button
          v-if="isAuthenticated"
          type="button"
          class="btn btn-danger"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["isAuthenticated", "email"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style scoped>
</style>