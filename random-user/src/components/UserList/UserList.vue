<template>
  <div v-for="user in users" v-bind:key="user?.email">
    <UserCard :user="user"></UserCard>
  </div>
</template>

<script>
import UserCard from "../UserCard/UserCard.vue";

export default {
  name: "User List",
  props: ["users"],
  components: {
    UserCard,
  },
};
</script>