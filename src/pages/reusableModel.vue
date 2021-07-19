<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-4">Re Usable model</h1>

      <button
        class="border display:block; p-2 border-blue-500"
        v-on:click="bluemodelopen = !bluemodelopen"
      >
        blue model
      </button>
      <button
        class="border p-2 display:block; border-red-500"
        v-on:click="redmodelopen = !redmodelopen"
      >
        red model
      </button>

      <model v-if="bluemodelopen == true" @close="bluemodelopen=false">

        <h1 class="text-blue-500">blue</h1>

      </model>

      <model v-if="redmodelopen == true" @close="redmodelopen=false">
        <template #title>
          <h1 class="text-red-500">red</h1>
        </template>
        <template v-slot:body>
          <h1 class="text-red-300">body here</h1>
        </template>
      </model>
    </div>
  </section>
</template>

<script>
import model from "../components/model.vue";

export default {
  components: { model },

  data() {
    return {
      redmodelopen: false,
      bluemodelopen: false,
    };
  },
};
</script>

<style>
</style>