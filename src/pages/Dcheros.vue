<template>
  <div class="header">
    <div class="heroscontainer p-10">
      <h1 class="font-bold">DC heros {{ heroscount }}</h1>

      <ul class="list p-2">
        <li v-for="(value, index) in dchero" :key="value.name">
          <div>{{ value.name }} <button @click="remove(index)">x</button></div>
          <input class="text-white-800 p-1 rounded" type="text" />
        </li>
      </ul>
      <form class="form" @submit.prevent="addhero">
        <input
          v-model="newhero"
          class="bg-red-800"
          placeholder="enter name"
          ref="newHeroRef"
        />

        <button class="btn" type="sumbit">add hero</button>
      </form>
    </div>
  </div>
  <!-- <button v-on:click="newhero= 'rahul'">add hero</button> -->
</template>

<script>
import { computed, onMounted ,ref } from "vue";
export default {
  setup() {
    const newHeroRef=ref("");
    const newhero = ref("aquaman");
    const dchero = ref([
      { name: "supergirl" },
      { name: "man" },
      { name: "flash" },
    ]);

    onMounted(()=> {
       newHeroRef.value.focus();
    });

    function remove(index) {
      dchero.value = dchero.value.filter((hero, i) => i != index);
    }
    function addhero() {
      if (this.newhero != "") {
        //  this.dchero.push({ name: this.newhero });
        dchero.value.unshift({ name: this.newhero });
        newhero.value = "";
      }
    }


   
   const heroscount=computed({

    get :()=> dchero.value.length 
   })
   

    return { dchero, newhero, remove, addhero,newHeroRef,heroscount };
  },

  

 

};
</script>