<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">realtime chat</h1>
      <div class="border bg-blue-100 rounded-lg">
        <div class="h-96 p-2">
          <div
            v-for="chat in state.chats"
            class="w-full"
            :class="chat.userId == state.userId ? 'text-right' : ''"
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
import { onMounted, reactive } from "vue";
import firebase, { chatrefs } from "../utilities/firebase";
export default {
  setup() {
    const state = reactive({
      chats: [],
      massage: "",
      userId: null,
    });

    onMounted(async () => {
      chatrefs.on("child_added", (snapshot) => {
        state.userId = firebase.auth().currentUser.uid;
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });
    });
    function addmassage() {
      const newchat = chatrefs.push();

      newchat.set({ userId: state.userId, massage: state.massage });
      state.massage = " ";
    }

    return { state, addmassage };
  },
};
</script>


<style>
</style>