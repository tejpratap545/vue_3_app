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
    <button v-else class="mx-3  font-bold " @click="openlogin">login</button>
  </nav>

</template>

<script>
import firebase from '../utilities/firebase'
export default {
  
  data() {
    return {
       list: [
        { title: "Dc heros", to: "/dc-heros" },
        { title: "calendar", to: "/calendar" },
        { title: "markdown", to: "/markdown" },
        { title: "slider carousel", to: "/slider" },
        { title: "calculator", to: "/calculator" },
        { title: "ReusableModel", to: "/reusableModel" },
        { title: "chat", to: "/chat" },
      ],
      
    };
  },
  methods: {
     logout(){ 
       firebase.auth().signOut()
     },
     openlogin(){
        this.$store.commit("setloginmodel",true)
     }

  },
  computed: {
       isloggedIn(){
         return this.$store.state.isloggedIn
       }
  },
};
</script>

<style>
</style>