<template>
  <main>
    <div class="app p-4 conatiner-fluid">
      <div class="row">
        <div class="col col-md-4 mt-4 offset-md-4">
          <div class="text-center">
            <div v-if="users">
              <UserList :users="users"></UserList>
              <a class="btn btn-info btn-block mt-3" v-on:click="fetchUser">
                Cick To Fetch</a
              >
            </div>
            <div v-else class="text-center">
              <div class="spinner-border spinner-grow" role="status"></div>
              <div class="text-info">Loading...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
// import UserCard from "./components/UserCard/UserCard.vue";
import UserList from "./components/UserList/UserList.vue";

export default {
  name: "Random User App",
  data() {
    return {
      users: null,
    };
  },

  components: {
    UserList,
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
        this.users = results;
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