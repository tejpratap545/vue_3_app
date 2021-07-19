<template>
     <button class="px-2 py-1 border my-4" @click="ismodelopen = true">
          add user
        </button>
    <teleport to="body">
    <model v-if="ismodelopen" @close="ismodelopen = false">
      <template #title> add newe user </template>
      <template #body>
        <form @submit.prevent="submit">
          <div class="m-2">
            <label for="">name</label>
            <input
              class="w-full p-2 rounded border"
              type="text"
              placeholder="username"
              v-model="state.form.name"
            />
          </div>
          <div class="m-2">
            <label for="">email</label>
            <input
              class="w-full p-2 rounded border"
              type="email"
              placeholder="useremail"
              v-model="state.form.email"
            />
          </div>
          <div class="m-2">
            <label for="">avatar</label>
            <input
              class="w-full p-2 rounded border"
              type="text"
              placeholder="avatar url"
              v-model="state.form.avatar"
            />
          </div>
          <div class="p-2">
            <input
              class="
                w-full
                text-center
                bg-gray-100
                p-2
                rounded
                border
                hover:bg-gray-300
              "
              type="submit" value="create"/>
          </div>
        </form>
      </template>
    </model> 
    </teleport>
</template>

<script>
import {reactive, ref} from 'vue'
import model from '../model.vue'
import axios from '../../plugins/axios'
export default {
  components:{model},
  setup(_,{emit}) {
      const ismodelopen = ref(false);
      const state =reactive({
             form: {
        name: "",
        email: "",
        avatar: "",
      }
      })


      async function submit() {
      const {data} =await  axios.post("/users", state.form);
        emit('newuseradded',data)
      
       state.form.email = "";
       state.form.name = "";
       state.form.avatar = "";
      ismodelopen.value = false;
    }
      return { ismodelopen,submit,state}
  }
}
</script>

<style>

</style>