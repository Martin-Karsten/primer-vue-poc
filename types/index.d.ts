import { DefineComponent, Plugin } from "vue";

declare const vue3ComponentLibrary: Exclude<Plugin[`install`], undefined>;

export default vue3ComponentLibrary;

export const Box: Exclude<Plugin[`install`], undefined> | DefineComponent;
export const Loader: Exclude<Plugin[`install`], undefined> | DefineComponent;
