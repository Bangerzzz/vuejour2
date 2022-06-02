<script setup>
  import {ref} from "vue"
  import * as jose from 'jose'

  const count = ref(0)
  const jwt = ref("");
  const decoded= ref("");
  let show = ref(false);

  setInterval(function () {count.value++},1000)
   function resetCompteur() {
    count.value = 0;
  }
  function decode(){
    decoded.value = jose.decodeJwt(jwt.value);
    show.value=true;
  }
</script>

<template>
  <h1>Hello World!</h1>
  <h1>Compteur : {{count}}</h1>
  <div>
    <button @click="resetCompteur()">Remettre à 0</button>
    <br>
    <input type="number" v-model="count">
  </div>

  <h1>JWT exo3</h1>
  <hr>
  <form @submit.prevent="decode()">
    <input type="text" v-model="jwt" placeholder="insérer un JWT">
    <input type="submit" value="Decoder" />
  </form>

  <p v-if="show">
    {{decoded}}
  </p>

</template>

<style>

</style>