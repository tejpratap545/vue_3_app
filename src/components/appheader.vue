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
    <button v-if="isloggedIn" class="mx-3  font-bold " @click="logout">logout</button>
    <button v-else class="mx-3  font-bold " @click="$emit('open-loginmodel')">login</button>
  </nav>

</template>

<script>
import firebase from '../utilities/firebase'
export default {
  props:{isloggedIn:{type:Boolean,default:true}},
  data() {
    return {
       list: [
        { title: "Dc heros", to: "/dc-heros" },
        { title: "calendar", to: "/calendar" },
        { title: "markdown", to: "/markdown" },
        { title: "slider carousel", to: "/slider" },
        { title: "calculator", to: "/calculator" },
        { title: "ReusableModel", to: "/reusableModel" },
      ],
    };
  },
  methods: {
     logout(){
       firebase.auth().signOut()
      //  .then((res) => {
         
      //  }).
      //  catch((err) => {
         
      //  });
     }
  },
};
</script>

<style>
</style>