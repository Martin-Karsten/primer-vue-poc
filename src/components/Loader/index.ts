import { App as Application } from "vue";
import Loader from "./HelloWorld.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Loader);
  },
};

// use(Plugin);

export default Plugin;

export { Loader };
