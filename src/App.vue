<script setup lang="ts">
import Box from "./components/Box/Box.vue";
import Loader from "./components/Loader/Loader.vue";
</script>

<template>
  <Box some-prop="`I am a prop`">Some content</Box>

  <Loader />

  <button>bb</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
