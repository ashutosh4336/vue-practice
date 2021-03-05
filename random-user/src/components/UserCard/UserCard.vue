<template>
  <div class="card border-primary">
    <div class="card-body text-center">
      <img
        v-bind:src="user?.picture?.large"
        alt="User Avatar"
        height="150"
        width="150"
        class="rounded-circle img-thumbnail zoomIn"
      />

      <div class="card-title text-primary">
        <h2 class="my-3">
          <span class="pl-2">{{ user?.name?.title }}</span>
          <span class="pl-2">{{ user?.name?.first }}</span>
          <span class="pl-2">{{ user?.name?.last }}</span>
        </h2>
        <p class="badge bg-success text-white">
          {{ user?.gender }}
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Uer Card",
  props: ["user"],
};
</script>

<style>
</style>