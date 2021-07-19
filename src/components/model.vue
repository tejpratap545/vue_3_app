<template>
  
    <section
      @click="close"
      class="h-screen z-20 w-screen bg-gray-900 fixed top-0 left-0 opacity-50"
    ></section>
    <div class="absolute font-bold inset-0">
      <div class="flex h-full">
        <div class="m-auto z-30 bg-white rounded p-2 w-1/3 shadow">
          <h1>
            <slot name="title">nothing there</slot>
          </h1>
          <main>
            <slot name="body"> </slot>
          </main>
        </div>
      </div>
    </div>
 
</template>

<script>
export default {
  setup(_, { emit }) {
    function close() {
      emit("close");
    }

    return { close };
  },
};
</script>

<style>
</style>