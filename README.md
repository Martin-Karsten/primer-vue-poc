# Example


```js
<script>
  import { Box, Loader } from 'primer-vue-poc'

  export default {
    components: {
      Box,
      Loader,
    }
  }
</script>

<template>

  <Box :some-prop="prp">
    content
  </Box>

  <Loader />
</template>
```

//// in main.*

```js
import { createApp } from 'vue'
import App from './App.vue'
import 'primer-vue-poc/dist/styles.css'

createApp(App).mount(`#app`)
```
