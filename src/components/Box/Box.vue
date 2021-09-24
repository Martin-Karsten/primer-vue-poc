<script setup lang="ts">
import { BoxProps } from "../../types/index";

const props = defineProps({
  someProp: String,
}) as BoxProps;
</script>

<template>
  <div class="Box example">
    <h1>Box</h1>
    <br />{{ someProp }}<br />
    <slot />
  </div>
</template>

<style lang="scss">
@import "@primer/css/dist/box.css";

.example {
  background-color: red;
}
</style>
