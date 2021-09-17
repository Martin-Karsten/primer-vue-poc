# Example

<script>
  import { Box, Loader } from 'primer-vue-poc'
</script>

<template>

  <Box :some-prop="prp">
    content
  </Box>

  <Loader />
</template>

////
in main.*

import { createApp } from 'vue'
import App from './App.vue'
import 'primer-vue-poc/dist/styles.css'

createApp(App).mount(`#app`)

