<template>
  <h1>My Account Page</h1>
  <h2>{{ $route }}</h2>
  <hr />
  <h2>{{ $route.query.verified }}</h2>
  <hr />
  <h2>{{ $route.params.id }}</h2>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.id);
    console.log(this.$route.query.verified);
  },
};
</script>

<style lang="scss" scoped>
</style>