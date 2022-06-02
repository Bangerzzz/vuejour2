<script setup>
  // import Compteur from "./components/Compteur.vue";
  // import DemoJwt from "./components/DemoJwt.vue";
  // import DemoVfor from "./components/DemoVfor.vue";
  // import DemoVif from "./components/DemoVif.vue";
  import {ref} from "vue";
  
</script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Acceuil</RouterLink></li>
      <li><RouterLink :to="{name: 'acceuil'}">Acceuil</RouterLink></li>
      <li><RouterLink :to="{name: 'DemoJwt'}">DemoJwt</RouterLink></li>
      <li><RouterLink :to="{name: 'DemoVfor'}">DemoVfor</RouterLink></li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<style>
  @import 'bootstrap/dist/css/bootstrap.min.css';
</style>