import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  api,
  config$1,
  counter,
  dom$1,
  findIconDefinition$1,
  icon,
  layer,
  library$1,
  noAuto$1,
  parse$1,
  text,
  toHtml$1
} from "./chunk-HUP34BGO.js";
import "./chunk-T2TQJYUV.js";
export {
  api,
  config$1 as config,
  counter,
  dom$1 as dom,
  findIconDefinition$1 as findIconDefinition,
  icon,
  layer,
  library$1 as library,
  noAuto$1 as noAuto,
  parse$1 as parse,
  text,
  toHtml$1 as toHtml
};
