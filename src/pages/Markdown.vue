<template>
  <div class="flex-col w-full">
    <h1 class="w-full text-center text-3xl my-4">markdown-app</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article
        class="w-1/2 border-4 border-blue-600  bg-opacity-50"
      >
        <textarea class="w-full h-full bg-green-200 bg-opacity-50 " ref="markdownref" @input="update"></textarea>
      </article>
      <article
        class="w-1/2 border-4 border-green-600 bg-pink-200 bg-opacity-50"
        v-html="markedtext"
      ></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import debounce from "../utilities/mixins/debounce";
export default {
  mixins:[debounce],
  data() {
    return {
      text: " ",
     
    };
  },
   mounted() {
   this.$refs.markdownref.focus()
      },
  computed: {
    markedtext() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task=()=>(this.text=e.target.value);
      this.debounce(task)
    },
    
  },
};
</script>

<style>
</style>