import { App as Application } from "vue";
import Loader from "./Loader.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, Loader);
  },
};

export default Plugin;

export { Loader };
