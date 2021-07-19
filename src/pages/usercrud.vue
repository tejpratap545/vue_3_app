<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="p-10">
       <createuser @newuseradded="adduser" />
        <table class="bg-gray-300 bg-opacity-40 hover:shadow">
          <thead>
            <tr>
              <th class="border-2 px-4 py-2 border-gray-600">Id</th>
              <th class="border-2 px-4 py-2 border-gray-600">avatar</th>
              <th class="border-2 px-4 py-2 border-gray-600">Name</th>
              <th class="border-2 px-4 py-2 border-gray-600">email</th>
              <th class="border-2 px-4 py-2 border-gray-600">action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users" :key="user.id">
              <td class="border-2 px-4 py-2 border-gray-600">{{ user._id }}</td>
              <td class="border-2 px-4 py-2 border-gray-600">
                <img
                  :src="user.avatar"
                  width="50"
                  class="rounded-full"
                  :alt="user.name"
                />
              </td>
              <td class="border-2 px-4 py-2 border-gray-600">
                {{ user.name }}
              </td>
             
              <td class="border-2 px-4 py-2 border-gray-600">
                {{ user.email }}
              </td>
             
              <td class="border-2 px-4 py-2 border-gray-600">
                <button class="px-2 py-1 border bg-red-400" @click="destroy(user._id)">
                        delete
                </button>
              </td>
             
              
              
            </tr>
          </tbody>
        </table>
        <div class="flex py-2 justify-between">
          <button
            class="border-4 px-4 py-2 border-gray-600"
            @click="prev"
            :disabled="state.users.page == 1"
            :class="state.users.page == 1 ? 'bg-black' : 'bg-gray-200'"
          >
            prev
          </button>
          <button
            class="border-4 px-4 py-2 border-gray-600"
            @click="next"
            :class="
              state.users.page == state.users.total_pages
                ? 'bg-black'
                : 'bg-gray-200'
            "
            :disabled="state.users.page == state.users.total_pages"
          >
            next
          </button>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "../plugins/axios";
import createuser from '../components/usercrud/createuser.vue';


export default {
  components: { createuser },
  
  setup() {
    
    const state = reactive({
      users: [],
   
    });

    onMounted(async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
    });

    async function next() {
      const { data } = await axios.get(`/users`);
      state.users = data;
    }
    async function prev() {
      const { data } = await axios.get(`/users`);
      state.users = data;
    }
   
   async function destroy(id) {
       await axios.delete(`/users/${id}`)
       state.users= state.users.filter((user)=>user._id != id)
    }
    function adduser(data){
       state.users.push(data);
    }
    return { state, next, prev ,destroy,adduser};
  },
};
</script>

<style>
</style>