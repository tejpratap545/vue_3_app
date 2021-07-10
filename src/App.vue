<template>
  <appheader @open-loginmodel="isloginopen=true" />
   <div class="w-full flex">
      <!-- <dcheros/> -->
      <router-view> </router-view>
 
   </div>
   <loginmodel v-if="isloginopen==true" @close-login="isloginopen=false"/>
</template>

<script>
import appheader from "./components/appheader.vue";
import loginmodel from "./components/loginmodel.vue";

export default {
     data() {
    return {
      isloginopen: true,
    };
  },
     components:{
       appheader,loginmodel
     },

}
</script>
  
<style>

</style>