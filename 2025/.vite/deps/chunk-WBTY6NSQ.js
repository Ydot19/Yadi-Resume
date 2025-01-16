import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  EventBus
} from "./chunk-32NSYED4.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-T2TQJYUV.js";

// node_modules/.deno/@primevue+core@4.2.5/node_modules/@primevue/core/service/index.mjs
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var PrimeVueService = EventBus();

export {
  PrimeVueService
};
//# sourceMappingURL=chunk-WBTY6NSQ.js.map
