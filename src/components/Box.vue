<script setup lang="ts">

  const props = defineProps({
    someProp: String,
  })
</script>

<template>
  <div class="Box example">
    <h1>Box</h1>
    <br>
    {{ someProp }}
    <br>
    <slot />
  </div>
</template>

<style
  lang="scss"
>
  @import "@primer/css/dist/box.css";

  .example {
    background-color: red;
  }
</style>
