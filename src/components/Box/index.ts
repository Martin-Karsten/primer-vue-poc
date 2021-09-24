import { App as Application } from "vue";
import Box from "./Box.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Box);
  },
};

export default Plugin;

export { Box };
