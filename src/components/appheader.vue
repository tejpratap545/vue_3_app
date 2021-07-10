<template>
  <nav
    class="
      w-full
      h-10
      text-white
      px-4
      py-2
      flex
      bg-gradient-to-r
      from-green-800
      to-blue-400
    ">
    <router-link v-for="item in list" class="mx-3" :key="item.to" :to="item.to">
      {{ item.title }}</router-link>
    <button class="mx-3  font-bold " @click="$emit('open-loginmodel')">login</button>
  </nav>

</template>

<script>
export default {
  data() {
    return {
       list: [
        { title: "Dc heros", to: "/dc-heros" },
        { title: "calendar", to: "/calendar" },
        { title: "markdown", to: "/markdown" },
        { title: "slider carousel", to: "/slider" },
      ],
    };
  },
};
</script>

<style>
</style>