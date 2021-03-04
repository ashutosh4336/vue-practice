<template>
  <form v-on:submit.prevent="onSubmit" class="text-center">
    <input
      class="form-control mb-2"
      placeholder="Movie Name"
      name="name"
      v-model="name"
      type="text"
    />

    <input
      class="form-control mb-2"
      placeholder="Movie URL"
      name="url"
      v-model="url"
      type="text"
    />

    <button class="btn btn-info btn-block" type="submit">Add Movie</button>
  </form>
</template>
<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "Form",

  data() {
    return {
      name: "",
      url: "",
    };
  },

  props: {
    addMovie: Function,
  },

  methods: {
    onSubmit: function () {
      console.log("submitting");
      // @ts-ignore
      this.addMovie({
        name: this.name,
        url: this.url,
        id: uuidv4(),
        date: Date.now(),
      });

      this.name = "";
      this.url = "";
    },
  },
};
</script>

<style scoped>
</style>