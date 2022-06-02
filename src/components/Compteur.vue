<script setup>
import {ref} from "vue"
const count = ref(0)
setInterval(function () {count.value++},1000)
   function resetCompteur() {
    count.value = 0;
}
</script>
<template>
<h1>Compteur : {{count}}</h1>
  <div>
    <button @click="resetCompteur()">Remettre à 0</button>
    <br>
    <input type="number" v-model="count">
  </div>
</template>

<style></style>