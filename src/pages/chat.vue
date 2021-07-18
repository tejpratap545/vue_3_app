<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">realtime chat</h1>
      <div class="border bg-blue-100 rounded-lg">
        <div class="h-96 p-2">
          <div
            v-for="chat in state.chats"
            class="w-full"
            :class="chat.userId == userId ? 'text-right' : ''"
            :key="chat.massage"
          >
            {{ chat.massage }}
          </div>
        </div>
        <div class="h-8 p-2">
          <input
            class="p-3 border rounded shadow"
            @keydown.enter="addmassage"
            v-model="state.massage"
            placeholder="start typing....."
            type="text"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import  { chatrefs } from "../utilities/firebase";
import { useStore} from 'vuex'
export default {
  setup() {
    const state = reactive({
      chats: [],
      massage: "",
     
    });
    const store = useStore();
    const userId =computed(()=>store.state.authuser.uid  ) ;
    
    onMounted(async () => {
      chatrefs.on("child_added", (snapshot) => {
     
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });
    });
    function addmassage() {
      const newchat = chatrefs.push();
      newchat.set({ userId: userId.value, massage: state.massage });
      state.massage = " ";
    }

    return { state, addmassage,userId };
  },
};
</script>


<style>
</style>