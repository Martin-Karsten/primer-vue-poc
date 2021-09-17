import { App } from 'vue'
import Box from './components/Box.vue'

const components = {
  Box,
}

const install = (Vue: App) => {
  for (const component in components) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    Vue.component(components[component].name, components[component])
  }
}

export default { install }

export { default as Box } from './components/Box.vue'
