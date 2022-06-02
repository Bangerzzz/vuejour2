<script setup>
  import {ref} from "vue"
  import * as jose from 'jose'
  const jwt = ref("");
  const decoded= ref("");
  function decode(){
    try{
        decoded.value = jose.decodeJwt(jwt.value);
    }catch(err){
        decoded.value= err.message;
    }
  }
  function saveJwt(){
    localStorage.setItem('jwt',jwt.value);
    loadSavedJwt();
  }
  const savedJwt= ref("");
  function loadSavedJwt() {
    savedJwt.value= localStorage.getItem('jwt');
  }
</script>

<template>
  <input type="text" v-model="jwt" placeholder="insérer un JWT">
  <button @click="decode()">Decoder</button>
  <p>
    {{decoded}}
  </p>
  <br><br>
  <button @click="saveJwt()">Sauvegarder</button>
  <p>
    {{savedJwt}}
  </p>
</template>

<style></style>