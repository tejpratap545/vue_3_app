<template>
  <appheader :isloggedIn="isloggedIn"  @open-loginmodel="isloginopen=true" />
   <div class="w-full flex">
      <!-- <dcheros/> -->
      <router-view> </router-view>
 
   </div>
   <teleport to='body'>
   <loginmodel v-if="isloginopen==true" @close-login="isloginopen=false"/>
   </teleport>
</template>

<script>
import appheader from "./components/appheader.vue";
import loginmodel from "./components/loginmodel.vue";
import firebase from './utilities/firebase'
export default {
     data() {
    return {
      isloginopen: false,
      isloggedIn:false,
      authuser:""
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
  if (user) {
       this.isloggedIn=true;
       this.authuser=user;

  } else {
   this.isloggedIn=false;
       this.authuser={};
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