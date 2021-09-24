<script setup lang="ts">
const props = defineProps({
  loaderProp: String,
});
</script>
sc

<template>
  <div class="AnimatedEllipsis">Loading</div>
</template>

<style lang="scss">
@import "@primer/css/loaders/index.scss";

.example {
  background-color: red;
}
</style>
