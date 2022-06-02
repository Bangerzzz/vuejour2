<script setup>
  // import Compteur from "./components/Compteur.vue";
  // import DemoJwt from "./components/DemoJwt.vue";
  // import DemoVfor from "./components/DemoVfor.vue";
  import {ref} from "vue";
  const user = ref(null);
  const connect = () => {
    user.value = "Pochama";
  };
  const disconnect = () => {
    user.value = null;
  };  
</script>

<template>
  <div v-if="user === null">
    <h1>Hello Annonym</h1>
    <button @click="connect">Se connecter</button>
  </div>
  <div v-else>
    <h1>Hello {{ user }}</h1>
    <button @click="disconnect">Se déconnecter</button>
  </div>
</template>

<style>

</style>