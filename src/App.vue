<script setup>
  import {ref} from "vue"
  import * as jose from 'jose'

  const count = ref(0)
  const jwt = ref("");
  const decoded= ref("");
  let show = ref(false);
  const token = ref("");

  setInterval(function () {count.value++},1000)
   function resetCompteur() {
    count.value = 0;
  }
  function decode(){
    decoded.value = jose.decodeJwt(jwt.value);
    show.value=true;
    addLocalStorage();
  }
  function addLocalStorage() {
    // Si le token est vide
    if ( !token.value ) {
      localStorage.setItem('token', jwt.value);
      token.value = localStorage.getItem('token');
    }
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

  <input type="text" v-model="jwt" placeholder="insérer un JWT">
  <button @click="decode()">Decoder</button>

  <p v-if="show">
    {{decoded}}
  </p>

  <p v-if="token">
    {{ token }}
  </p>
</template>

<style>

</style>