<template>
  <main>
    <div class="app p-4 conatiner-fluid">
      <div class="row">
        <div class="col col-md-4 mt-4 offset-md-4">
          <div class="text-center">
            <div v-if="user">
              <UserCard :user="user"></UserCard>
              <a
                class="btn btn-warning btn-block mt-3 btn-lg"
                v-on:click="fetchUser"
              >
                Cick To Fetch</a
              >
            </div>
            <div v-else class="text-center">
              <div class="spinner-border spinner-grow" role="status">
                <span class="sr-onl">Loading...</span>
              </div>
              <div class="text-info">Loading...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <a class="btn btn-primary" v-on:click="fetchUser"> cick to fetch</a> -->
  </main>
</template>

<script>
import axios from "axios";
import UserCard from "./components/UserCard/UserCard.vue";

export default {
  name: "Random User App",
  data() {
    return {
      user: null,
    };
  },

  components: {
    UserCard,
  },

  mounted() {
    this.fetchUser();
  },

  methods: {
    fetchUser: async function () {
      try {
        const {
          data: { results },
        } = await axios.get(`https://randomuser.me/api`);
        this.user = results[0];
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style>
main {
  height: 100vh;
  background-image: url("./assets/lco-api-one.jpg");
  background-position: center;
  background-size: cover;
}

.card {
  margin-top: 125px;
}

.img {
  margin-top: -80px;
}
</style>