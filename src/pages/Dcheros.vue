<template>
 <div class="header">

   <div class="heroscontainer p-10">

 
    <h1 class="font-bold">DC heros {{ heroscount }}</h1>

  <ul class="list p-2">
    <li v-for="(value,index) in dchero" :key="value.name">
     <div> {{ value.name }} <button @click="remove(index)">x</button></div>
     <input type="text">
    </li>
  </ul>
  <form class="form" @submit.prevent="addhero">
    <input v-model="newhero" class="bg-red-800" placeholder="enter name" />

    <button class="btn" type="sumbit">add hero</button>
 
  </form>
 </div>
 </div>
  <!-- <button v-on:click="newhero= 'rahul'">add hero</button> -->
</template>

<script>
export default {

  computed: {
    heroscount(){
       return this.dchero.length+'heros'

    },

  },
  methods: {
    addhero() {
      if (this.newhero!="") {
          //  this.dchero.push({ name: this.newhero });
           this.dchero.unshift({ name: this.newhero });
      this.newhero = "";          
      }
   
    },
    remove(index){
         this.dchero=  this.dchero.filter((hero,i)=>i!=index)
         
    }


  },

  data() {
    return {
      newhero: "aquaman",
      isdisabled: false,
      
      dchero: [{ name: "supergirl" }, { name: "man" }, { name: "flash" }],
      // heroscount:this.dchero.length,
    };
  }
}
</script>