<template>
  <div class="flex flex-wrap w-full">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
      <div
        v-if="currentslide == index"
        v-bind:class="color"
        style="height: 350px"
      ></div>
      </transition>
    </div>
    <div class="relative my-10 flex w-full">
      <div class="m-auto">
        <transition name="fade">
          <h1 v-if="istittleshow == true">slider carousel</h1>
        </transition>
          <button
            @click="istittleshow = !istittleshow"
            class=" p-2 rounded border bg-red-400">
            toggle text
          </button>
      </div>
    </div>
    <div class="w-full " >
      <div class="w-full relative bottom-0 flex justify-center">
        <div v-for="(slider,index) in sliders"
         :key="slider"
          @click="makeactive(index)"
         :class="currentslide==index ? 'bg-gray-800':'bg-gray-400'"
         class="w-4 h-4 mx-2 rounded-full cursor-pointer ">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentslide: 0,
      interval: " ",
      sliders: ["bg-green-600", "bg-blue-600", "bg-yellow-300","bg-gray-600", "bg-red-600","bg-pink-300"],
      istittleshow: true,
    };
  },
  methods: {
    makeactive(index){
      this.currentslide=index 
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      console.log("hhhhahxg  ", this.currentslide);
      this.currentslide = this.currentslide == 5 ? 0 : this.currentslide + 1;
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from{
   opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>