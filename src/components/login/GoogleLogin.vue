<template>
  <section class=" w-full text-center">
    <button class="border p-2 bg-red-200 rounded" @click="loginWithGoogle">
      Login With Google 
    </button>
  </section>
</template>

<script>
import firebase from "../../utilities/firebase";
export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$emit("close-login-from-google");
        });
    },
  },
};
</script>

<style></style>
