<template>
  <nav class="navbar navbar-dark bg-warning">
    <a href="#" class="navbar-brand">
      <img
        src="../../assets/images/logo.png"
        width="30"
        height="30"
        alt="Movie Barnd"
      />
    </a>
    <span class="navbar-text text-dark">{{ titleProp }}</span>
  </nav>
</template>


<script>
export default {
  data() {
    return {};
  },
  props: {
    titleProp: {
      type: String,
      required: true,
    },
  },
};
</script>


<style scoped>
</style>