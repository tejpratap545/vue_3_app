<template>
  <appheader    />
   <div class="w-full flex">
      <!-- <dcheros/> -->
      <router-view> </router-view>
 
   </div>
   <teleport to='body'>
   <loginmodel />
   </teleport>
</template>

<script>
import appheader from "./components/appheader.vue";
import loginmodel from "./components/loginmodel.vue";
import firebase from './utilities/firebase'
export default {
     data() {
    return {
    
   
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setloggedin',true);
  
        this.$store.commit('setauthuser',user);
      

  } else {
     this.$store.commit('setloggedin',false);
        
       this.$store.commit('setauthuser',{});
    
  }
});
  },
     components:{
       appheader,loginmodel
     },

}
</script>
  
<style>

</style>