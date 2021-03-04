<template>
  <div>
    <i
      class="fa fa-circle fa-4x zoomIN text-primary"
      v-if="iconname === 'circle'"
    ></i>

    <i
      class="fa fa-times fa-4x zoomIN text-danger"
      v-else-if="iconname === 'cross'"
    ></i>

    <img
      v-else-if="iconname === 'empty'"
      src="../assets/images/logo.png"
      alt="Image"
      class="img-fluid zoomIn"
    />
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  props: {
    iconname: {
      type: String,
      required: true,
    },
  },
};
</script>



<style>
img {
  width: 80px;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
  animation-duration: 1s;
}
</style>