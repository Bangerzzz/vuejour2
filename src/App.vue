<script setup>
  import {ref} from "vue"
  const count = ref(0)

  setInterval(function () {count.value++},1000)
  console.log(count.value);
</script>

<template>
  <h1>Hello World!</h1>
  <h1>Compteur : {{count}}</h1>
</template>

<style>

</style>