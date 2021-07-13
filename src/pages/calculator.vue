<template>
  <section class="flex w-full">
    <div class="m-auto">
              <h1 class="text-2xl text-center"> calculator </h1>
               <div class="h-5 mt-4 text-right overflow-x-scroll">
                <small v-if="selectedoperation">{{previousvalue}} {{ selectedoperation}} {{ currentvalue}}</small>
                </div>            
              <p class="text-3xl  mt-2 mb-2 w-60  h-10 border border-red-500 text-right overflow-x-scroll"  style="direction:rtl">{{currentvalue}}</p>
           <div class="my-2  grid grid-cols-4 gap-4">
                     <button @click ="pressed('1')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">1</button>
                     <button @click ="pressed('2')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">2</button>
                     <button @click ="pressed('3')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">3</button>
                     <button @click ="pressed('+')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">+</button>
                     <button @click ="pressed('4')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">4</button>
                     <button @click ="pressed('5')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">5</button>
                     <button @click ="pressed('6')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">6</button>
                     <button @click ="pressed('-')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">-</button>
                     <button @click ="pressed('7')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">7</button>
                     <button @click ="pressed('8')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">8</button>
                     <button @click ="pressed('9')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">9</button>
                     <button @click ="pressed('*')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">*</button>
                     <button @click ="pressed('c')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">C</button>
                     <button @click ="pressed('0')" class="p-2 w-10 h-10 border border-green-500 rounded shadow ">0</button>
                     <button @click ="pressed('=')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">= </button>
                     <button @click ="pressed('/')" class="p-2 w-10 h-10 border border-green-500 rounded shadow">/</button>
                 
              </div>
    </div>
  </section>
</template> 

<script>

export default {
    
  
   data() {
     return {
       currentvalue : " ",
        previousvalue: "",
        Numbers:["1","2","3","4","5","6","7","8","9","0"],
        selectedoperation: "",
        operations:["+","-","*","/"],
     }
   }, 
   methods: {
      pressed(value){
        if(value=="=" ||value=="Enter") this.calculate();
        else if(value=="c") this.clear();
        else if(this.operations.includes(value)) this.applyoperation(value);
        else if(this.Numbers.includes(value))this.appendnumber(value)

      },
       applyoperation(value){
           this.calculate();
           this.previousvalue=this.currentvalue;
           this.currentvalue="";
           this.selectedoperation= value;
       },
        calculate(){
          if (this.selectedoperation=="+") {
            this.currentvalue= +(this.previousvalue) + +(this.currentvalue)
           }
          if (this.selectedoperation=="-") {
            this.currentvalue= this.previousvalue -this.currentvalue
           }
          if (this.selectedoperation=="*") {
            this.currentvalue= this.previousvalue*this.currentvalue
           }
          if (this.selectedoperation=="/") {
            this.currentvalue= this.previousvalue /this.currentvalue
           }
          this.previousvalue=" " ;
          this.selectedoperation=" ";
         
        } ,
      appendnumber(value){
        this.currentvalue=this.currentvalue +value;
     },
     clear(){
       this.currentvalue= " ";
     },
     handlekeypress(e){
       console.log(e.key)
      this.pressed(e.key)
     }
    
   },
  mounted() {
    window.addEventListener('keydown',this.handlekeypress)
  },
  unmounted() {
    window.removeEventListener("keydown",this.handlekeypress)
     },

}
</script>

<style>

</style>