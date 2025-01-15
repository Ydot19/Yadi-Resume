"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js
  var require_base64_js = __commonJS({
    "node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js"(exports) {
      "use strict";
      init_dist();
      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }
      var i;
      var len;
      revLookup["-".charCodeAt(0)] = 62;
      revLookup["_".charCodeAt(0)] = 63;
      function getLens(b64) {
        var len2 = b64.length;
        if (len2 % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1)
          validLen = len2;
        var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      }
      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i2;
        for (i2 = 0; i2 < len2; i2 += 4) {
          tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
          arr[curByte++] = tmp >> 16 & 255;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        return arr;
      }
      function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
      }
      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i2 = start; i2 < end; i2 += 3) {
          tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
          output.push(tripletToBase64(tmp));
        }
        return output.join("");
      }
      function fromByteArray(uint8) {
        var tmp;
        var len2 = uint8.length;
        var extraBytes = len2 % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
          parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
        }
        if (extraBytes === 1) {
          tmp = uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
          );
        } else if (extraBytes === 2) {
          tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
          );
        }
        return parts.join("");
      }
    }
  });

  // node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js
  var require_ieee754 = __commonJS({
    "node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js"(exports) {
      init_dist();
      exports.read = function(buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s2 = buffer[offset + i];
        i += d;
        e = s2 & (1 << -nBits) - 1;
        s2 >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s2 ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s2 ? -1 : 1) * m * Math.pow(2, e - mLen);
      };
      exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s2 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
        }
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
        }
        buffer[offset + i - d] |= s2 * 128;
      };
    }
  });

  // node_modules/.pnpm/buffer@6.0.3_patch_hash=zkkuxompt5d553skpnegwi5wuy/node_modules/buffer/index.js
  var require_buffer = __commonJS({
    "node_modules/.pnpm/buffer@6.0.3_patch_hash=zkkuxompt5d553skpnegwi5wuy/node_modules/buffer/index.js"(exports) {
      "use strict";
      init_dist();
      var base64 = require_base64_js();
      var ieee754 = require_ieee754();
      var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
      exports.Buffer = Buffer2;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 2147483647;
      exports.kMaxLength = K_MAX_LENGTH;
      var { Uint8Array: GlobalUint8Array, ArrayBuffer: GlobalArrayBuffer, SharedArrayBuffer: GlobalSharedArrayBuffer } = globalThis;
      Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
      if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        );
      }
      function typedArraySupport() {
        try {
          const arr = new GlobalUint8Array(1);
          const proto = { foo: function() {
            return 42;
          } };
          Object.setPrototypeOf(proto, GlobalUint8Array.prototype);
          Object.setPrototypeOf(arr, proto);
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }
      Object.defineProperty(Buffer2.prototype, "parent", {
        enumerable: true,
        get: function() {
          if (!Buffer2.isBuffer(this))
            return void 0;
          return this.buffer;
        }
      });
      Object.defineProperty(Buffer2.prototype, "offset", {
        enumerable: true,
        get: function() {
          if (!Buffer2.isBuffer(this))
            return void 0;
          return this.byteOffset;
        }
      });
      function createBuffer(length) {
        if (length > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length + '" is invalid for option "size"');
        }
        const buf = new GlobalUint8Array(length);
        Object.setPrototypeOf(buf, Buffer2.prototype);
        return buf;
      }
      function Buffer2(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          if (typeof encodingOrOffset === "string") {
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          }
          return allocUnsafe(arg);
        }
        return from(arg, encodingOrOffset, length);
      }
      Buffer2.poolSize = 8192;
      function from(value, encodingOrOffset, length) {
        if (typeof value === "string") {
          return fromString(value, encodingOrOffset);
        }
        if (GlobalArrayBuffer.isView(value)) {
          return fromArrayView(value);
        }
        if (value == null) {
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
          );
        }
        if (isInstance(value, GlobalArrayBuffer) || value && isInstance(value.buffer, GlobalArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof GlobalSharedArrayBuffer !== "undefined" && (isInstance(value, GlobalSharedArrayBuffer) || value && isInstance(value.buffer, GlobalSharedArrayBuffer))) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof value === "number") {
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        }
        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
          return Buffer2.from(valueOf, encodingOrOffset, length);
        }
        const b = fromObject(value);
        if (b)
          return b;
        if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
          return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
        }
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      Buffer2.from = function(value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
      };
      Object.setPrototypeOf(Buffer2.prototype, GlobalUint8Array.prototype);
      Object.setPrototypeOf(Buffer2, GlobalUint8Array);
      function assertSize(size) {
        if (typeof size !== "number") {
          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
      }
      function alloc(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
          return createBuffer(size);
        }
        if (fill !== void 0) {
          return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
        return createBuffer(size);
      }
      Buffer2.alloc = function(size, fill, encoding) {
        return alloc(size, fill, encoding);
      };
      function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }
      Buffer2.allocUnsafe = function(size) {
        return allocUnsafe(size);
      };
      Buffer2.allocUnsafeSlow = function(size) {
        return allocUnsafe(size);
      };
      function fromString(string, encoding) {
        if (typeof encoding !== "string" || encoding === "") {
          encoding = "utf8";
        }
        if (!Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        const length = byteLength(string, encoding) | 0;
        let buf = createBuffer(length);
        const actual = buf.write(string, encoding);
        if (actual !== length) {
          buf = buf.slice(0, actual);
        }
        return buf;
      }
      function fromArrayLike(array) {
        const length = array.length < 0 ? 0 : checked(array.length) | 0;
        const buf = createBuffer(length);
        for (let i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }
        return buf;
      }
      function fromArrayView(arrayView) {
        if (isInstance(arrayView, GlobalUint8Array)) {
          const copy = new GlobalUint8Array(arrayView);
          return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }
        return fromArrayLike(arrayView);
      }
      function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }
        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }
        let buf;
        if (byteOffset === void 0 && length === void 0) {
          buf = new GlobalUint8Array(array);
        } else if (length === void 0) {
          buf = new GlobalUint8Array(array, byteOffset);
        } else {
          buf = new GlobalUint8Array(array, byteOffset, length);
        }
        Object.setPrototypeOf(buf, Buffer2.prototype);
        return buf;
      }
      function fromObject(obj) {
        if (Buffer2.isBuffer(obj)) {
          const len = checked(obj.length) | 0;
          const buf = createBuffer(len);
          if (buf.length === 0) {
            return buf;
          }
          obj.copy(buf, 0, 0, len);
          return buf;
        }
        if (obj.length !== void 0) {
          if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
            return createBuffer(0);
          }
          return fromArrayLike(obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data);
        }
      }
      function checked(length) {
        if (length >= K_MAX_LENGTH) {
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
        }
        return length | 0;
      }
      function SlowBuffer(length) {
        if (+length != length) {
          length = 0;
        }
        return Buffer2.alloc(+length);
      }
      Buffer2.isBuffer = function isBuffer(b) {
        return b != null && b._isBuffer === true && b !== Buffer2.prototype;
      };
      Buffer2.compare = function compare(a, b) {
        if (isInstance(a, GlobalUint8Array))
          a = Buffer2.from(a, a.offset, a.byteLength);
        if (isInstance(b, GlobalUint8Array))
          b = Buffer2.from(b, b.offset, b.byteLength);
        if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        }
        if (a === b)
          return 0;
        let x = a.length;
        let y = b.length;
        for (let i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }
        if (x < y)
          return -1;
        if (y < x)
          return 1;
        return 0;
      };
      Buffer2.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      Buffer2.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (list.length === 0) {
          return Buffer2.alloc(0);
        }
        let i;
        if (length === void 0) {
          length = 0;
          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }
        const buffer = Buffer2.allocUnsafe(length);
        let pos = 0;
        for (i = 0; i < list.length; ++i) {
          let buf = list[i];
          if (isInstance(buf, GlobalUint8Array)) {
            if (pos + buf.length > buffer.length) {
              if (!Buffer2.isBuffer(buf))
                buf = Buffer2.from(buf);
              buf.copy(buffer, pos);
            } else {
              GlobalUint8Array.prototype.set.call(
                buffer,
                buf,
                pos
              );
            }
          } else if (!Buffer2.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          } else {
            buf.copy(buffer, pos);
          }
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer2.isBuffer(string)) {
          return string.length;
        }
        if (GlobalArrayBuffer.isView(string) || isInstance(string, GlobalArrayBuffer)) {
          return string.byteLength;
        }
        if (typeof string !== "string") {
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
          );
        }
        const len = string.length;
        const mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0)
          return 0;
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "ascii":
            case "latin1":
            case "binary":
              return len;
            case "utf8":
            case "utf-8":
              return utf8ToBytes(string).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return len * 2;
            case "hex":
              return len >>> 1;
            case "base64":
              return base64ToBytes(string).length;
            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes(string).length;
              }
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer2.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        let loweredCase = false;
        if (start === void 0 || start < 0) {
          start = 0;
        }
        if (start > this.length) {
          return "";
        }
        if (end === void 0 || end > this.length) {
          end = this.length;
        }
        if (end <= 0) {
          return "";
        }
        end >>>= 0;
        start >>>= 0;
        if (end <= start) {
          return "";
        }
        if (!encoding)
          encoding = "utf8";
        while (true) {
          switch (encoding) {
            case "hex":
              return hexSlice(this, start, end);
            case "utf8":
            case "utf-8":
              return utf8Slice(this, start, end);
            case "ascii":
              return asciiSlice(this, start, end);
            case "latin1":
            case "binary":
              return latin1Slice(this, start, end);
            case "base64":
              return base64Slice(this, start, end);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return utf16leSlice(this, start, end);
            default:
              if (loweredCase)
                throw new TypeError("Unknown encoding: " + encoding);
              encoding = (encoding + "").toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer2.prototype._isBuffer = true;
      function swap(b, n, m) {
        const i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer2.prototype.swap16 = function swap16() {
        const len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for (let i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }
        return this;
      };
      Buffer2.prototype.swap32 = function swap32() {
        const len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for (let i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer2.prototype.swap64 = function swap64() {
        const len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for (let i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer2.prototype.toString = function toString() {
        const length = this.length;
        if (length === 0)
          return "";
        if (arguments.length === 0)
          return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
      Buffer2.prototype.equals = function equals(b) {
        if (!Buffer2.isBuffer(b))
          throw new TypeError("Argument must be a Buffer");
        if (this === b)
          return true;
        return Buffer2.compare(this, b) === 0;
      };
      Buffer2.prototype.inspect = function inspect() {
        let str = "";
        const max = exports.INSPECT_MAX_BYTES;
        str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
        if (this.length > max)
          str += " ... ";
        return "<Buffer " + str + ">";
      };
      if (customInspectSymbol) {
        Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
      }
      Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, GlobalUint8Array)) {
          target = Buffer2.from(target, target.offset, target.byteLength);
        }
        if (!Buffer2.isBuffer(target)) {
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
          );
        }
        if (start === void 0) {
          start = 0;
        }
        if (end === void 0) {
          end = target ? target.length : 0;
        }
        if (thisStart === void 0) {
          thisStart = 0;
        }
        if (thisEnd === void 0) {
          thisEnd = this.length;
        }
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError("out of range index");
        }
        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start >= end) {
          return 1;
        }
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target)
          return 0;
        let x = thisEnd - thisStart;
        let y = end - start;
        const len = Math.min(x, y);
        const thisCopy = this.slice(thisStart, thisEnd);
        const targetCopy = target.slice(start, end);
        for (let i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }
        if (x < y)
          return -1;
        if (y < x)
          return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (buffer.length === 0)
          return -1;
        if (typeof byteOffset === "string") {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 2147483647) {
          byteOffset = 2147483647;
        } else if (byteOffset < -2147483648) {
          byteOffset = -2147483648;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
          byteOffset = dir ? 0 : buffer.length - 1;
        }
        if (byteOffset < 0)
          byteOffset = buffer.length + byteOffset;
        if (byteOffset >= buffer.length) {
          if (dir)
            return -1;
          else
            byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir)
            byteOffset = 0;
          else
            return -1;
        }
        if (typeof val === "string") {
          val = Buffer2.from(val, encoding);
        }
        if (Buffer2.isBuffer(val)) {
          if (val.length === 0) {
            return -1;
          }
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === "number") {
          val = val & 255;
          if (typeof GlobalUint8Array.prototype.indexOf === "function") {
            if (dir) {
              return GlobalUint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return GlobalUint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        let indexSize = 1;
        let arrLength = arr.length;
        let valLength = val.length;
        if (encoding !== void 0) {
          encoding = String(encoding).toLowerCase();
          if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i2) {
          if (indexSize === 1) {
            return buf[i2];
          } else {
            return buf.readUInt16BE(i2 * indexSize);
          }
        }
        let i;
        if (dir) {
          let foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1)
                foundIndex = i;
              if (i - foundIndex + 1 === valLength)
                return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1)
                i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength)
            byteOffset = arrLength - valLength;
          for (i = byteOffset; i >= 0; i--) {
            let found = true;
            for (let j = 0; j < valLength; j++) {
              if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
              }
            }
            if (found)
              return i;
          }
        }
        return -1;
      }
      Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };
      Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        const remaining = buf.length - offset;
        if (!length) {
          length = remaining;
        } else {
          length = Number(length);
          if (length > remaining) {
            length = remaining;
          }
        }
        const strLen = string.length;
        if (length > strLen / 2) {
          length = strLen / 2;
        }
        let i;
        for (i = 0; i < length; ++i) {
          const parsed = parseInt(string.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed))
            return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer2.prototype.write = function write(string, offset, length, encoding) {
        if (offset === void 0) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (length === void 0 && typeof offset === "string") {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === void 0)
              encoding = "utf8";
          } else {
            encoding = length;
            length = void 0;
          }
        } else {
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        }
        const remaining = this.length - offset;
        if (length === void 0 || length > remaining)
          length = remaining;
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError("Attempt to write outside buffer bounds");
        }
        if (!encoding)
          encoding = "utf8";
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "hex":
              return hexWrite(this, string, offset, length);
            case "utf8":
            case "utf-8":
              return utf8Write(this, string, offset, length);
            case "ascii":
            case "latin1":
            case "binary":
              return asciiWrite(this, string, offset, length);
            case "base64":
              return base64Write(this, string, offset, length);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return ucs2Write(this, string, offset, length);
            default:
              if (loweredCase)
                throw new TypeError("Unknown encoding: " + encoding);
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };
      Buffer2.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start, end));
        }
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        const res = [];
        let i = start;
        while (i < end) {
          const firstByte = buf[i];
          let codePoint = null;
          let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 128) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i + 1];
                if ((secondByte & 192) === 128) {
                  tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                  if (tempCodePoint > 127) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                  if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                  if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }
          if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        const len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints);
        }
        let res = "";
        let i = 0;
        while (i < len) {
          res += String.fromCharCode.apply(
            String,
            codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
          );
        }
        return res;
      }
      function asciiSlice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 127);
        }
        return ret;
      }
      function latin1Slice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }
        return ret;
      }
      function hexSlice(buf, start, end) {
        const len = buf.length;
        if (!start || start < 0)
          start = 0;
        if (!end || end < 0 || end > len)
          end = len;
        let out = "";
        for (let i = start; i < end; ++i) {
          out += hexSliceLookupTable[buf[i]];
        }
        return out;
      }
      function utf16leSlice(buf, start, end) {
        const bytes = buf.slice(start, end);
        let res = "";
        for (let i = 0; i < bytes.length - 1; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }
        return res;
      }
      Buffer2.prototype.slice = function slice(start, end) {
        const len = this.length;
        start = ~~start;
        end = end === void 0 ? len : ~~end;
        if (start < 0) {
          start += len;
          if (start < 0)
            start = 0;
        } else if (start > len) {
          start = len;
        }
        if (end < 0) {
          end += len;
          if (end < 0)
            end = 0;
        } else if (end > len) {
          end = len;
        }
        if (end < start)
          end = start;
        const newBuf = this.subarray(start, end);
        Object.setPrototypeOf(newBuf, Buffer2.prototype);
        return newBuf;
      };
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0)
          throw new RangeError("offset is not uint");
        if (offset + ext > length)
          throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        return val;
      };
      Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength2, this.length);
        }
        let val = this[offset + --byteLength2];
        let mul = 1;
        while (byteLength2 > 0 && (mul *= 256)) {
          val += this[offset + --byteLength2] * mul;
        }
        return val;
      };
      Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
      };
      Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
        const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
        return BigInt(lo) + (BigInt(hi) << BigInt(32));
      });
      Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
        return (BigInt(hi) << BigInt(32)) + BigInt(lo);
      });
      Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        mul *= 128;
        if (val >= mul)
          val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let i = byteLength2;
        let mul = 1;
        let val = this[offset + --i];
        while (i > 0 && (mul *= 256)) {
          val += this[offset + --i] * mul;
        }
        mul *= 128;
        if (val >= mul)
          val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 1, this.length);
        if (!(this[offset] & 128))
          return this[offset];
        return (255 - this[offset] + 1) * -1;
      };
      Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        const val = this[offset] | this[offset + 1] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        const val = this[offset + 1] | this[offset] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
        return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
      });
      Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = (first << 24) + // Overflow
        this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
      });
      Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer2.isBuffer(buf))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min)
          throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length)
          throw new RangeError("Index out of range");
      }
      Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let mul = 1;
        let i = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 1, 255, 0);
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
        return offset + 4;
      };
      Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      function wrtBigUInt64LE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        return offset;
      }
      function wrtBigUInt64BE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset + 7] = lo;
        lo = lo >> 8;
        buf[offset + 6] = lo;
        lo = lo >> 8;
        buf[offset + 5] = lo;
        lo = lo >> 8;
        buf[offset + 4] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset + 3] = hi;
        hi = hi >> 8;
        buf[offset + 2] = hi;
        hi = hi >> 8;
        buf[offset + 1] = hi;
        hi = hi >> 8;
        buf[offset] = hi;
        return offset + 8;
      }
      Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = 0;
        let mul = 1;
        let sub = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        let sub = 0;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 1, 127, -128);
        if (value < 0)
          value = 255 + value + 1;
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 2147483647, -2147483648);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };
      Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (value < 0)
          value = 4294967295 + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length)
          throw new RangeError("Index out of range");
        if (offset < 0)
          throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer2.isBuffer(target))
          throw new TypeError("argument should be a Buffer");
        if (!start)
          start = 0;
        if (!end && end !== 0)
          end = this.length;
        if (targetStart >= target.length)
          targetStart = target.length;
        if (!targetStart)
          targetStart = 0;
        if (end > 0 && end < start)
          end = start;
        if (end === start)
          return 0;
        if (target.length === 0 || this.length === 0)
          return 0;
        if (targetStart < 0) {
          throw new RangeError("targetStart out of bounds");
        }
        if (start < 0 || start >= this.length)
          throw new RangeError("Index out of range");
        if (end < 0)
          throw new RangeError("sourceEnd out of bounds");
        if (end > this.length)
          end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }
        const len = end - start;
        if (this === target && typeof GlobalUint8Array.prototype.copyWithin === "function") {
          this.copyWithin(targetStart, start, end);
        } else {
          GlobalUint8Array.prototype.set.call(
            target,
            this.subarray(start, end),
            targetStart
          );
        }
        return len;
      };
      Buffer2.prototype.fill = function fill(val, start, end, encoding) {
        if (typeof val === "string") {
          if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
          }
          if (encoding !== void 0 && typeof encoding !== "string") {
            throw new TypeError("encoding must be a string");
          }
          if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
          }
          if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") {
              val = code;
            }
          }
        } else if (typeof val === "number") {
          val = val & 255;
        } else if (typeof val === "boolean") {
          val = Number(val);
        }
        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError("Out of range index");
        }
        if (end <= start) {
          return this;
        }
        start = start >>> 0;
        end = end === void 0 ? this.length : end >>> 0;
        if (!val)
          val = 0;
        let i;
        if (typeof val === "number") {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
          const len = bytes.length;
          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }
          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }
        return this;
      };
      var errors = {};
      function E(sym, getMessage, Base) {
        errors[sym] = class NodeError extends Base {
          constructor() {
            super();
            Object.defineProperty(this, "message", {
              value: getMessage.apply(this, arguments),
              writable: true,
              configurable: true
            });
            this.name = `${this.name} [${sym}]`;
            this.stack;
            delete this.name;
          }
          get code() {
            return sym;
          }
          set code(value) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${sym}]: ${this.message}`;
          }
        };
      }
      E(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function(name) {
          if (name) {
            return `${name} is outside of buffer bounds`;
          }
          return "Attempt to access memory outside buffer bounds";
        },
        RangeError
      );
      E(
        "ERR_INVALID_ARG_TYPE",
        function(name, actual) {
          return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
        },
        TypeError
      );
      E(
        "ERR_OUT_OF_RANGE",
        function(str, range, input) {
          let msg = `The value of "${str}" is out of range.`;
          let received = input;
          if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
            received = addNumericalSeparator(String(input));
          } else if (typeof input === "bigint") {
            received = String(input);
            if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
              received = addNumericalSeparator(received);
            }
            received += "n";
          }
          msg += ` It must be ${range}. Received ${received}`;
          return msg;
        },
        RangeError
      );
      function addNumericalSeparator(val) {
        let res = "";
        let i = val.length;
        const start = val[0] === "-" ? 1 : 0;
        for (; i >= start + 4; i -= 3) {
          res = `_${val.slice(i - 3, i)}${res}`;
        }
        return `${val.slice(0, i)}${res}`;
      }
      function checkBounds(buf, offset, byteLength2) {
        validateNumber(offset, "offset");
        if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
          boundsError(offset, buf.length - (byteLength2 + 1));
        }
      }
      function checkIntBI(value, min, max, buf, offset, byteLength2) {
        if (value > max || value < min) {
          const n = typeof min === "bigint" ? "n" : "";
          let range;
          if (byteLength2 > 3) {
            if (min === 0 || min === BigInt(0)) {
              range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
            } else {
              range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
            }
          } else {
            range = `>= ${min}${n} and <= ${max}${n}`;
          }
          throw new errors.ERR_OUT_OF_RANGE("value", range, value);
        }
        checkBounds(buf, offset, byteLength2);
      }
      function validateNumber(value, name) {
        if (typeof value !== "number") {
          throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
      }
      function boundsError(value, length, type) {
        if (Math.floor(value) !== value) {
          validateNumber(value, type);
          throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
        }
        if (length < 0) {
          throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }
        throw new errors.ERR_OUT_OF_RANGE(
          type || "offset",
          `>= ${type ? 1 : 0} and <= ${length}`,
          value
        );
      }
      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = str.split("=")[0];
        str = str.trim().replace(INVALID_BASE64_RE, "");
        if (str.length < 2)
          return "";
        while (str.length % 4 !== 0) {
          str = str + "=";
        }
        return str;
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        let codePoint;
        const length = string.length;
        let leadSurrogate = null;
        const bytes = [];
        for (let i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                if ((units -= 3) > -1)
                  bytes.push(239, 191, 189);
                continue;
              } else if (i + 1 === length) {
                if ((units -= 3) > -1)
                  bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
          } else if (leadSurrogate) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
          }
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0)
              break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0)
              break;
            bytes.push(
              codePoint >> 6 | 192,
              codePoint & 63 | 128
            );
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0)
              break;
            bytes.push(
              codePoint >> 12 | 224,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else if (codePoint < 1114112) {
            if ((units -= 4) < 0)
              break;
            bytes.push(
              codePoint >> 18 | 240,
              codePoint >> 12 & 63 | 128,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else {
            throw new Error("Invalid code point");
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          byteArray.push(str.charCodeAt(i) & 255);
        }
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        let c, hi, lo;
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0)
            break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src, dst, offset, length) {
        let i;
        for (i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length)
            break;
          dst[i + offset] = src[i];
        }
        return i;
      }
      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }
      function numberIsNaN(obj) {
        return obj !== obj;
      }
      var hexSliceLookupTable = function() {
        const alphabet = "0123456789abcdef";
        const table = new Array(256);
        for (let i = 0; i < 16; ++i) {
          const i16 = i * 16;
          for (let j = 0; j < 16; ++j) {
            table[i16 + j] = alphabet[i] + alphabet[j];
          }
        }
        return table;
      }();
      function defineBigIntMethod(fn) {
        return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
      }
      function BufferBigIntNotDefined() {
        throw new Error("BigInt not supported");
      }
    }
  });

  // node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js
  var require_browser = __commonJS({
    "node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js"(exports, module) {
      init_dist();
      var process = module.exports = {};
      var cachedSetTimeout;
      var cachedClearTimeout;
      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }
      function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }
      (function() {
        try {
          if (typeof setTimeout === "function") {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === "function") {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e2) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e2) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      process.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      process.title = "browser";
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = "";
      process.versions = {};
      function noop() {
      }
      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;
      process.listeners = function(name) {
        return [];
      };
      process.binding = function(name) {
        throw new Error("process.binding is not supported");
      };
      process.cwd = function() {
        return "/";
      };
      process.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
      };
      process.umask = function() {
        return 0;
      };
    }
  });

  // shims/dist/index.js
  var import_buffer_polyfill, import_process, o;
  var init_dist = __esm({
    "shims/dist/index.js"() {
      "use strict";
      import_buffer_polyfill = __toESM(require_buffer(), 1);
      import_process = __toESM(require_browser(), 1);
      o = globalThis || void 0 || self;
    }
  });

  // shims/banner/index.cjs
  var require_banner = __commonJS({
    "shims/banner/index.cjs"() {
      init_dist();
      globalThis.Buffer = globalThis.Buffer || import_buffer_polyfill.Buffer;
      globalThis.global = globalThis.global || o;
      globalThis.process = globalThis.process || import_process.default;
    }
  });
  require_banner();
})();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/

import {
  __toESM,
  require_dist
} from "./chunk-NFZ6GMSI.js";

// node_modules/.deno/qrcode-vue3@1.6.8/node_modules/qrcode-vue3/dist/index.es.js
var import_dist = __toESM(require_dist());
var zr = Object.defineProperty;
var eo = (e, t, n) => t in e ? zr(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
var z = (e, t, n) => (eo(e, typeof t != "symbol" ? t + "" : t, n), n);
function to(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let o = 0; o < r.length; o++)
    n[r[o]] = true;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
var _e = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
var no = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
var de = () => {
};
var ro = /^on[^a-z]/;
var oo = (e) => ro.test(e);
var oe = Object.assign;
var tr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
};
var io = Object.prototype.hasOwnProperty;
var J = (e, t) => io.call(e, t);
var j = Array.isArray;
var Pe = (e) => Mt(e) === "[object Map]";
var nr = (e) => Mt(e) === "[object Set]";
var L = (e) => typeof e == "function";
var ie = (e) => typeof e == "string";
var en = (e) => typeof e == "symbol";
var Y = (e) => e !== null && typeof e == "object";
var tn = (e) => Y(e) && L(e.then) && L(e.catch);
var rr = Object.prototype.toString;
var Mt = (e) => rr.call(e);
var or = (e) => Mt(e).slice(8, -1);
var ir = (e) => Mt(e) === "[object Object]";
var nn = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
var sr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
};
var ar = sr(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
);
var so = sr(
  (e) => e ? `on${ar(e)}` : ""
);
var wt = (e, t) => !Object.is(e, t);
var ao = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: true,
    enumerable: false,
    value: n
  });
};
var co = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
var In;
var Ut = () => In || (In = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function rn(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = ie(r) ? po(r) : rn(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else {
    if (ie(e))
      return e;
    if (Y(e))
      return e;
  }
}
var uo = /;(?![^(]*\))/g;
var fo = /:([^]+)/;
var lo = /\/\*[^]*?\*\//g;
function po(e) {
  const t = {};
  return e.replace(lo, "").split(uo).forEach((n) => {
    if (n) {
      const r = n.split(fo);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ue(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ue(e[n]);
      r && (t += r + " ");
    }
  else if (Y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
var ho = (e) => ie(e) ? e : e == null ? "" : j(e) || Y(e) && (e.toString === rr || !L(e.toString)) ? JSON.stringify(e, cr, 2) : String(e);
var cr = (e, t) => t && t.__v_isRef ? cr(e, t.value) : Pe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
} : nr(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : Y(t) && !j(t) && !ir(t) ? String(t) : t;
function Pn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
var ur;
function go(e, t = ur) {
  t && t.active && t.effects.push(e);
}
function vo() {
  return ur;
}
var tt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
};
var fr = (e) => (e.w & Me) > 0;
var lr = (e) => (e.n & Me) > 0;
var _o = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Me;
};
var mo = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      fr(o) && !lr(o) ? o.delete(e) : t[n++] = o, o.w &= ~Me, o.n &= ~Me;
    }
    t.length = n;
  }
};
var Ht = /* @__PURE__ */ new WeakMap();
var Xe = 0;
var Me = 1;
var Kt = 30;
var ne;
var Se = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
var Qt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
var dr = class {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = true, this.deps = [], this.parent = void 0, go(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ne, n = Ne;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ne, ne = this, Ne = true, Me = 1 << ++Xe, Xe <= Kt ? _o(this) : Sn(this), this.fn();
    } finally {
      Xe <= Kt && mo(this), Me = 1 << --Xe, ne = this.parent, Ne = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ne === this ? this.deferStop = true : this.active && (Sn(this), this.onStop && this.onStop(), this.active = false);
  }
};
function Sn(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
var Ne = true;
var pr = [];
function Dt() {
  pr.push(Ne), Ne = false;
}
function Ct() {
  const e = pr.pop();
  Ne = e === void 0 ? true : e;
}
function se(e, t, n) {
  if (Ne && ne) {
    let r = Ht.get(e);
    r || Ht.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = tt());
    const i = process.env.NODE_ENV !== "production" ? { effect: ne, target: e, type: t, key: n } : void 0;
    Wt(o, i);
  }
}
function Wt(e, t) {
  let n = false;
  Xe <= Kt ? lr(e) || (e.n |= Me, n = !fr(e)) : n = !e.has(ne), n && (e.add(ne), ne.deps.push(e), process.env.NODE_ENV !== "production" && ne.onTrack && ne.onTrack(
    oe(
      {
        effect: ne
      },
      t
    )
  ));
}
function De(e, t, n, r, o, i) {
  const s = Ht.get(e);
  if (!s)
    return;
  let a = [];
  if (t === "clear")
    a = [...s.values()];
  else if (n === "length" && j(e)) {
    const w = Number(r);
    s.forEach((D, u) => {
      (u === "length" || u >= w) && a.push(D);
    });
  } else
    switch (n !== void 0 && a.push(s.get(n)), t) {
      case "add":
        j(e) ? nn(n) && a.push(s.get("length")) : (a.push(s.get(Se)), Pe(e) && a.push(s.get(Qt)));
        break;
      case "delete":
        j(e) || (a.push(s.get(Se)), Pe(e) && a.push(s.get(Qt)));
        break;
      case "set":
        Pe(e) && a.push(s.get(Se));
        break;
    }
  const l = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: o, oldTarget: i } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? Le(a[0], l) : Le(a[0]));
  else {
    const w = [];
    for (const D of a)
      D && w.push(...D);
    process.env.NODE_ENV !== "production" ? Le(tt(w), l) : Le(tt(w));
  }
}
function Le(e, t) {
  const n = j(e) ? e : [...e];
  for (const r of n)
    r.computed && Tn(r, t);
  for (const r of n)
    r.computed || Tn(r, t);
}
function Tn(e, t) {
  (e !== ne || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(oe({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
var wo = to("__proto__,__v_isRef,__isVue");
var hr = new Set(
  Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(en)
);
var bo = on();
var Eo = on(true);
var yo = on(true, true);
var Rn = Oo();
function Oo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = q(this);
      for (let i = 0, s = this.length; i < s; i++)
        se(r, "get", i + "");
      const o = r[t](...n);
      return o === -1 || o === false ? r[t](...n.map(q)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Dt();
      const r = q(this)[t].apply(this, n);
      return Ct(), r;
    };
  }), e;
}
function No(e) {
  const t = q(this);
  return se(t, "has", e), t.hasOwnProperty(e);
}
function on(e = false, t = false) {
  return function(r, o, i) {
    if (o === "__v_isReactive")
      return !e;
    if (o === "__v_isReadonly")
      return e;
    if (o === "__v_isShallow")
      return t;
    if (o === "__v_raw" && i === (e ? t ? wr : mr : t ? qo : _r).get(r))
      return r;
    const s = j(r);
    if (!e) {
      if (s && J(Rn, o))
        return Reflect.get(Rn, o, i);
      if (o === "hasOwnProperty")
        return No;
    }
    const a = Reflect.get(r, o, i);
    return (en(o) ? hr.has(o) : wo(o)) || (e || se(r, "get", o), t) ? a : re(a) ? s && nn(o) ? a : a.value : Y(a) ? e ? br(a) : cn(a) : a;
  };
}
var xo = Mo();
function Mo(e = false) {
  return function(n, r, o, i) {
    let s = n[r];
    if (Ae(s) && re(s) && !re(o))
      return false;
    if (!e && (!Jt(o) && !Ae(o) && (s = q(s), o = q(o)), !j(n) && re(s) && !re(o)))
      return s.value = o, true;
    const a = j(n) && nn(r) ? Number(r) < n.length : J(n, r), l = Reflect.set(n, r, o, i);
    return n === q(i) && (a ? wt(o, s) && De(n, "set", r, o, s) : De(n, "add", r, o)), l;
  };
}
function Do(e, t) {
  const n = J(e, t), r = e[t], o = Reflect.deleteProperty(e, t);
  return o && n && De(e, "delete", t, void 0, r), o;
}
function Co(e, t) {
  const n = Reflect.has(e, t);
  return (!en(t) || !hr.has(t)) && se(e, "has", t), n;
}
function Io(e) {
  return se(e, "iterate", j(e) ? "length" : Se), Reflect.ownKeys(e);
}
var Po = {
  get: bo,
  set: xo,
  deleteProperty: Do,
  has: Co,
  ownKeys: Io
};
var gr = {
  get: Eo,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Pn(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), true;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Pn(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), true;
  }
};
var So = oe(
  {},
  gr,
  {
    get: yo
  }
);
var sn = (e) => e;
var It = (e) => Reflect.getPrototypeOf(e);
function at(e, t, n = false, r = false) {
  e = e.__v_raw;
  const o = q(e), i = q(t);
  n || (t !== i && se(o, "get", t), se(o, "get", i));
  const { has: s } = It(o), a = r ? sn : n ? ln : fn;
  if (s.call(o, t))
    return a(e.get(t));
  if (s.call(o, i))
    return a(e.get(i));
  e !== o && e.get(t);
}
function ct(e, t = false) {
  const n = this.__v_raw, r = q(n), o = q(e);
  return t || (e !== o && se(r, "has", e), se(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function ut(e, t = false) {
  return e = e.__v_raw, !t && se(q(e), "iterate", Se), Reflect.get(e, "size", e);
}
function Bn(e) {
  e = q(e);
  const t = q(this);
  return It(t).has.call(t, e) || (t.add(e), De(t, "add", e, e)), this;
}
function An(e, t) {
  t = q(t);
  const n = q(this), { has: r, get: o } = It(n);
  let i = r.call(n, e);
  i ? process.env.NODE_ENV !== "production" && vr(n, r, e) : (e = q(e), i = r.call(n, e));
  const s = o.call(n, e);
  return n.set(e, t), i ? wt(t, s) && De(n, "set", e, t, s) : De(n, "add", e, t), this;
}
function Vn(e) {
  const t = q(this), { has: n, get: r } = It(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && vr(t, n, e) : (e = q(e), o = n.call(t, e));
  const i = r ? r.call(t, e) : void 0, s = t.delete(e);
  return o && De(t, "delete", e, void 0, i), s;
}
function kn() {
  const e = q(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Pe(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && De(e, "clear", void 0, void 0, n), r;
}
function ft(e, t) {
  return function(r, o) {
    const i = this, s = i.__v_raw, a = q(s), l = t ? sn : e ? ln : fn;
    return !e && se(a, "iterate", Se), s.forEach((w, D) => r.call(o, l(w), l(D), i));
  };
}
function lt(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, i = q(o), s = Pe(i), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, w = o[e](...r), D = n ? sn : t ? ln : fn;
    return !t && se(
      i,
      "iterate",
      l ? Qt : Se
    ), {
      // iterator protocol
      next() {
        const { value: u, done: M } = w.next();
        return M ? { value: u, done: M } : {
          value: a ? [D(u[0]), D(u[1])] : D(u),
          done: M
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function be(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${ar(e)} operation ${n}failed: target is readonly.`,
        q(this)
      );
    }
    return e === "delete" ? false : this;
  };
}
function To() {
  const e = {
    get(i) {
      return at(this, i);
    },
    get size() {
      return ut(this);
    },
    has: ct,
    add: Bn,
    set: An,
    delete: Vn,
    clear: kn,
    forEach: ft(false, false)
  }, t = {
    get(i) {
      return at(this, i, false, true);
    },
    get size() {
      return ut(this);
    },
    has: ct,
    add: Bn,
    set: An,
    delete: Vn,
    clear: kn,
    forEach: ft(false, true)
  }, n = {
    get(i) {
      return at(this, i, true);
    },
    get size() {
      return ut(this, true);
    },
    has(i) {
      return ct.call(this, i, true);
    },
    add: be("add"),
    set: be("set"),
    delete: be("delete"),
    clear: be("clear"),
    forEach: ft(true, false)
  }, r = {
    get(i) {
      return at(this, i, true, true);
    },
    get size() {
      return ut(this, true);
    },
    has(i) {
      return ct.call(this, i, true);
    },
    add: be("add"),
    set: be("set"),
    delete: be("delete"),
    clear: be("clear"),
    forEach: ft(true, true)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = lt(
      i,
      false,
      false
    ), n[i] = lt(
      i,
      true,
      false
    ), t[i] = lt(
      i,
      false,
      true
    ), r[i] = lt(
      i,
      true,
      true
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
var [
  Ro,
  Bo,
  Ao,
  Vo
] = To();
function an(e, t) {
  const n = t ? e ? Vo : Ao : e ? Bo : Ro;
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    J(n, o) && o in r ? n : r,
    o,
    i
  );
}
var ko = {
  get: an(false, false)
};
var $o = {
  get: an(true, false)
};
var Fo = {
  get: an(true, true)
};
function vr(e, t, n) {
  const r = q(n);
  if (r !== n && t.call(e, r)) {
    const o = or(e);
    console.warn(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
var _r = /* @__PURE__ */ new WeakMap();
var qo = /* @__PURE__ */ new WeakMap();
var mr = /* @__PURE__ */ new WeakMap();
var wr = /* @__PURE__ */ new WeakMap();
function Lo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function jo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Lo(or(e));
}
function cn(e) {
  return Ae(e) ? e : un(
    e,
    false,
    Po,
    ko,
    _r
  );
}
function br(e) {
  return un(
    e,
    true,
    gr,
    $o,
    mr
  );
}
function dt(e) {
  return un(
    e,
    true,
    So,
    Fo,
    wr
  );
}
function un(e, t, n, r, o) {
  if (!Y(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const s = jo(e);
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, a), a;
}
function Te(e) {
  return Ae(e) ? Te(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ae(e) {
  return !!(e && e.__v_isReadonly);
}
function Jt(e) {
  return !!(e && e.__v_isShallow);
}
function Yt(e) {
  return Te(e) || Ae(e);
}
function q(e) {
  const t = e && e.__v_raw;
  return t ? q(t) : e;
}
function Uo(e) {
  return ao(e, "__v_skip", true), e;
}
var fn = (e) => Y(e) ? cn(e) : e;
var ln = (e) => Y(e) ? br(e) : e;
function Ho(e) {
  Ne && ne && (e = q(e), process.env.NODE_ENV !== "production" ? Wt(e.dep || (e.dep = tt()), {
    target: e,
    type: "get",
    key: "value"
  }) : Wt(e.dep || (e.dep = tt())));
}
function Ko(e, t) {
  e = q(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? Le(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Le(n));
}
function re(e) {
  return !!(e && e.__v_isRef === true);
}
function vt(e) {
  return re(e) ? e.value : e;
}
var Qo = {
  get: (e, t, n) => vt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return re(o) && !re(n) ? (o.value = n, true) : Reflect.set(e, t, n, r);
  }
};
function Er(e) {
  return Te(e) ? e : new Proxy(e, Qo);
}
var Wo = class {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = true, this.__v_isReadonly = false, this._dirty = true, this.effect = new dr(t, () => {
      this._dirty || (this._dirty = true, Ko(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = q(this);
    return Ho(t), (t._dirty || !t._cacheable) && (t._dirty = false, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
};
function Jo(e, t, n = false) {
  let r, o;
  const i = L(e);
  i ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : de) : (r = e.get, o = e.set);
  const s = new Wo(r, o, i || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
var Re = [];
function yr(e) {
  Re.push(e);
}
function Or() {
  Re.pop();
}
function $(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  Dt();
  const n = Re.length ? Re[Re.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Yo();
  if (r)
    Be(
      r,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${Nn(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...Go(o)), console.warn(...i);
  }
  Ct();
}
function Yo() {
  let e = Re[Re.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Go(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Xo(n));
  }), t;
}
function Xo({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : false, o = ` at <${Nn(
    e.component,
    e.type,
    r
  )}`, i = ">" + n;
  return e.props ? [o, ...Zo(e.props), i] : [o + i];
}
function Zo(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Nr(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Nr(e, t, n) {
  return ie(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : re(t) ? (t = Nr(e, q(t.value), true), n ? t : [`${e}=Ref<`, t, ">"]) : L(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = q(t), n ? t : [`${e}=`, t]);
}
function zo(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? $(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && $(`${t} is NaN - the duration expression might be incorrect.`));
}
var dn = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Be(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (i) {
    pn(i, t, n);
  }
  return o;
}
function nt(e, t, n, r) {
  if (L(e)) {
    const i = Be(e, t, n, r);
    return i && tn(i) && i.catch((s) => {
      pn(s, t, n);
    }), i;
  }
  const o = [];
  for (let i = 0; i < e.length; i++)
    o.push(nt(e[i], t, n, r));
  return o;
}
function pn(e, t, n, r = true) {
  const o = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy, a = process.env.NODE_ENV !== "production" ? dn[n] : n;
    for (; i; ) {
      const w = i.ec;
      if (w) {
        for (let D = 0; D < w.length; D++)
          if (w[D](e, s, a) === false)
            return;
      }
      i = i.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Be(
        l,
        null,
        10,
        [e, s, a]
      );
      return;
    }
  }
  ei(e, n, o, r);
}
function ei(e, t, n, r = true) {
  if (process.env.NODE_ENV !== "production") {
    const o = dn[t];
    if (n && yr(n), $(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Or(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
var bt = false;
var Gt = false;
var ge = [];
var ye = 0;
var He = [];
var ve = null;
var Ee = 0;
var xr = Promise.resolve();
var hn = null;
var ti = 100;
function ni(e) {
  const t = hn || xr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ri(e) {
  let t = ye + 1, n = ge.length;
  for (; t < n; ) {
    const r = t + n >>> 1;
    rt(ge[r]) < e ? t = r + 1 : n = r;
  }
  return t;
}
function gn(e) {
  (!ge.length || !ge.includes(
    e,
    bt && e.allowRecurse ? ye + 1 : ye
  )) && (e.id == null ? ge.push(e) : ge.splice(ri(e.id), 0, e), Mr());
}
function Mr() {
  !bt && !Gt && (Gt = true, hn = xr.then(Dr));
}
function vn(e) {
  j(e) ? He.push(...e) : (!ve || !ve.includes(
    e,
    e.allowRecurse ? Ee + 1 : Ee
  )) && He.push(e), Mr();
}
function oi(e) {
  if (He.length) {
    const t = [...new Set(He)];
    if (He.length = 0, ve) {
      ve.push(...t);
      return;
    }
    for (ve = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ve.sort((n, r) => rt(n) - rt(r)), Ee = 0; Ee < ve.length; Ee++)
      process.env.NODE_ENV !== "production" && Cr(e, ve[Ee]) || ve[Ee]();
    ve = null, Ee = 0;
  }
}
var rt = (e) => e.id == null ? 1 / 0 : e.id;
var ii = (e, t) => {
  const n = rt(e) - rt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Dr(e) {
  Gt = false, bt = true, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ge.sort(ii);
  const t = process.env.NODE_ENV !== "production" ? (n) => Cr(e, n) : de;
  try {
    for (ye = 0; ye < ge.length; ye++) {
      const n = ge[ye];
      if (n && n.active !== false) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Be(n, null, 14);
      }
    }
  } finally {
    ye = 0, ge.length = 0, oi(e), bt = false, hn = null, (ge.length || He.length) && Dr(e);
  }
}
function Cr(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > ti) {
      const r = t.ownerInstance, o = r && Wr(r.type);
      return $(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), true;
    } else
      e.set(t, n + 1);
  }
}
var qe = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Ut().__VUE_HMR_RUNTIME__ = {
  createRecord: Rt(si),
  rerender: Rt(ai),
  reload: Rt(ci)
});
var Et = /* @__PURE__ */ new Map();
function si(e, t) {
  return Et.has(e) ? false : (Et.set(e, {
    initialDef: ze(t),
    instances: /* @__PURE__ */ new Set()
  }), true);
}
function ze(e) {
  return Jr(e) ? e.__vccOpts : e;
}
function ai(e, t) {
  const n = Et.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, ze(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function ci(e, t) {
  const n = Et.get(e);
  if (!n)
    return;
  t = ze(t), $n(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const i = ze(o.type);
    qe.has(i) || (i !== n.initialDef && $n(i, t), qe.add(i)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (qe.add(i), o.ceReload(t.styles), qe.delete(i)) : o.parent ? gn(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  vn(() => {
    for (const o of r)
      qe.delete(
        ze(o.type)
      );
  });
}
function $n(e, t) {
  oe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Rt(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
function Ir(e, ...t) {
}
var ui = fi(
  "component:updated"
  /* COMPONENT_UPDATED */
);
function fi(e) {
  return (t) => {
    Ir(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
var li = Pr(
  "perf:start"
  /* PERFORMANCE_START */
);
var di = Pr(
  "perf:end"
  /* PERFORMANCE_END */
);
function Pr(e) {
  return (t, n, r) => {
    Ir(e, t.appContext.app, t.uid, t, n, r);
  };
}
var ce = null;
var Sr = null;
function Fn(e) {
  const t = ce;
  return ce = e, Sr = e && e.type.__scopeId || null, t;
}
function pi(e, t = ce, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Jn(-1);
    const i = Fn(t);
    let s;
    try {
      s = e(...o);
    } finally {
      Fn(i), r._d && Jn(1);
    }
    return process.env.NODE_ENV !== "production" && ui(t), s;
  };
  return r._n = true, r._c = true, r._d = true, r;
}
function hi(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (En(r)) {
      if (r.type !== We || r.children === "v-if") {
        if (t)
          return;
        t = r;
      }
    } else
      return;
  }
  return t;
}
function Tr({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
var gi = (e) => e.__isSuspense;
var vi = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process(e, t, n, r, o, i, s, a, l, w) {
    e == null ? mi(
      t,
      n,
      r,
      o,
      i,
      s,
      a,
      l,
      w
    ) : wi(
      e,
      t,
      n,
      r,
      o,
      s,
      a,
      l,
      w
    );
  },
  hydrate: bi,
  create: _n,
  normalize: Ei
};
var _i = vi;
function ot(e, t) {
  const n = e.props && e.props[t];
  L(n) && n();
}
function mi(e, t, n, r, o, i, s, a, l) {
  const {
    p: w,
    o: { createElement: D }
  } = l, u = D("div"), M = e.suspense = _n(
    e,
    o,
    r,
    t,
    u,
    n,
    i,
    s,
    a,
    l
  );
  w(
    null,
    M.pendingBranch = e.ssContent,
    u,
    null,
    r,
    M,
    i,
    s
  ), M.deps > 0 ? (ot(e, "onPending"), ot(e, "onFallback"), w(
    null,
    e.ssFallback,
    t,
    n,
    r,
    null,
    // fallback tree will not have suspense context
    i,
    s
  ), Ke(M, e.ssFallback)) : M.resolve(false, true);
}
function wi(e, t, n, r, o, i, s, a, { p: l, um: w, o: { createElement: D } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const M = t.ssContent, T = t.ssFallback, { activeBranch: F, pendingBranch: U, isInFallback: W, isHydrating: ee } = u;
  if (U)
    u.pendingBranch = M, $t(M, U) ? (l(
      U,
      M,
      u.hiddenContainer,
      null,
      o,
      u,
      i,
      s,
      a
    ), u.deps <= 0 ? u.resolve() : W && (l(
      F,
      T,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      s,
      a
    ), Ke(u, T))) : (u.pendingId++, ee ? (u.isHydrating = false, u.activeBranch = U) : w(U, o, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = D("div"), W ? (l(
      null,
      M,
      u.hiddenContainer,
      null,
      o,
      u,
      i,
      s,
      a
    ), u.deps <= 0 ? u.resolve() : (l(
      F,
      T,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      s,
      a
    ), Ke(u, T))) : F && $t(M, F) ? (l(
      F,
      M,
      n,
      r,
      o,
      u,
      i,
      s,
      a
    ), u.resolve(true)) : (l(
      null,
      M,
      u.hiddenContainer,
      null,
      o,
      u,
      i,
      s,
      a
    ), u.deps <= 0 && u.resolve()));
  else if (F && $t(M, F))
    l(
      F,
      M,
      n,
      r,
      o,
      u,
      i,
      s,
      a
    ), Ke(u, M);
  else if (ot(t, "onPending"), u.pendingBranch = M, u.pendingId++, l(
    null,
    M,
    u.hiddenContainer,
    null,
    o,
    u,
    i,
    s,
    a
  ), u.deps <= 0)
    u.resolve();
  else {
    const { timeout: K, pendingId: ue } = u;
    K > 0 ? setTimeout(() => {
      u.pendingId === ue && u.fallback(T);
    }, K) : K === 0 && u.fallback(T);
  }
}
var qn = false;
function _n(e, t, n, r, o, i, s, a, l, w, D = false) {
  process.env.NODE_ENV !== "production" && !qn && (qn = true, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: M,
    um: T,
    n: F,
    o: { parentNode: U, remove: W }
  } = w;
  let ee;
  const K = Oi(e);
  K && t != null && t.pendingBranch && (ee = t.pendingId, t.deps++);
  const ue = e.props ? co(e.props.timeout) : void 0;
  process.env.NODE_ENV !== "production" && zo(ue, "Suspense timeout");
  const S = {
    vnode: e,
    parent: t,
    parentComponent: n,
    isSVG: s,
    container: r,
    hiddenContainer: o,
    anchor: i,
    deps: 0,
    pendingId: 0,
    timeout: typeof ue == "number" ? ue : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: true,
    isHydrating: D,
    isUnmounted: false,
    effects: [],
    resolve(N = false, C = false) {
      if (process.env.NODE_ENV !== "production") {
        if (!N && !S.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (S.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: _,
        activeBranch: O,
        pendingBranch: d,
        pendingId: h,
        effects: f,
        parentComponent: c,
        container: y
      } = S;
      if (S.isHydrating)
        S.isHydrating = false;
      else if (!N) {
        const B = O && d.transition && d.transition.mode === "out-in";
        B && (O.transition.afterLeave = () => {
          h === S.pendingId && M(d, y, I, 0);
        });
        let { anchor: I } = S;
        O && (I = F(O), T(O, c, S, true)), B || M(d, y, I, 0);
      }
      Ke(S, d), S.pendingBranch = null, S.isInFallback = false;
      let b = S.parent, E = false;
      for (; b; ) {
        if (b.pendingBranch) {
          b.effects.push(...f), E = true;
          break;
        }
        b = b.parent;
      }
      E || vn(f), S.effects = [], K && t && t.pendingBranch && ee === t.pendingId && (t.deps--, t.deps === 0 && !C && t.resolve()), ot(_, "onResolve");
    },
    fallback(N) {
      if (!S.pendingBranch)
        return;
      const { vnode: C, activeBranch: _, parentComponent: O, container: d, isSVG: h } = S;
      ot(C, "onFallback");
      const f = F(_), c = () => {
        S.isInFallback && (u(
          null,
          N,
          d,
          f,
          O,
          null,
          // fallback tree will not have suspense context
          h,
          a,
          l
        ), Ke(S, N));
      }, y = N.transition && N.transition.mode === "out-in";
      y && (_.transition.afterLeave = c), S.isInFallback = true, T(
        _,
        O,
        null,
        // no suspense so unmount hooks fire now
        true
        // shouldRemove
      ), y || c();
    },
    move(N, C, _) {
      S.activeBranch && M(S.activeBranch, N, C, _), S.container = N;
    },
    next() {
      return S.activeBranch && F(S.activeBranch);
    },
    registerDep(N, C) {
      const _ = !!S.pendingBranch;
      _ && S.deps++;
      const O = N.vnode.el;
      N.asyncDep.catch((d) => {
        pn(d, N, 0);
      }).then((d) => {
        if (N.isUnmounted || S.isUnmounted || S.pendingId !== N.suspenseId)
          return;
        N.asyncResolved = true;
        const { vnode: h } = N;
        process.env.NODE_ENV !== "production" && yr(h), as(N, d, false), O && (h.el = O);
        const f = !O && N.subTree.el;
        C(
          N,
          h,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          U(O || N.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          O ? null : F(N.subTree),
          S,
          s,
          l
        ), f && W(f), Tr(N, h.el), process.env.NODE_ENV !== "production" && Or(), _ && --S.deps === 0 && S.resolve();
      });
    },
    unmount(N, C) {
      S.isUnmounted = true, S.activeBranch && T(
        S.activeBranch,
        n,
        N,
        C
      ), S.pendingBranch && T(
        S.pendingBranch,
        n,
        N,
        C
      );
    }
  };
  return S;
}
function bi(e, t, n, r, o, i, s, a, l) {
  const w = t.suspense = _n(
    t,
    r,
    n,
    e.parentNode,
    document.createElement("div"),
    null,
    o,
    i,
    s,
    a,
    true
    /* hydrating */
  ), D = l(
    e,
    w.pendingBranch = t.ssContent,
    n,
    w,
    i,
    s
  );
  return w.deps === 0 && w.resolve(false, true), D;
}
function Ei(e) {
  const { shapeFlag: t, children: n } = e, r = t & 32;
  e.ssContent = Ln(
    r ? n.default : n
  ), e.ssFallback = r ? Ln(n.fallback) : xe(We);
}
function Ln(e) {
  let t;
  if (L(e)) {
    const n = Je && e._c;
    n && (e._d = false, Qe()), e = e(), n && (e._d = true, t = pe, qr());
  }
  if (j(e)) {
    const n = hi(e);
    process.env.NODE_ENV !== "production" && !n && $("<Suspense> slots expect a single root node."), e = n;
  }
  return e = ts(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function yi(e, t) {
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : vn(e);
}
function Ke(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e, o = n.el = t.el;
  r && r.subTree === n && (r.vnode.el = o, Tr(r, o));
}
function Oi(e) {
  var t;
  return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== false;
}
var pt = {};
function Bt(e, t, n) {
  return process.env.NODE_ENV !== "production" && !L(t) && $(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Rr(e, t, n);
}
function Rr(e, t, { immediate: n, deep: r, flush: o, onTrack: i, onTrigger: s } = _e) {
  var a;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && $(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && $(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = (S) => {
    $(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, w = vo() === ((a = Z) == null ? void 0 : a.scope) ? Z : null;
  let D, u = false, M = false;
  if (re(e) ? (D = () => e.value, u = Jt(e)) : Te(e) ? (D = () => e, r = true) : j(e) ? (M = true, u = e.some((S) => Te(S) || Jt(S)), D = () => e.map((S) => {
    if (re(S))
      return S.value;
    if (Te(S))
      return je(S);
    if (L(S))
      return Be(S, w, 2);
    process.env.NODE_ENV !== "production" && l(S);
  })) : L(e) ? t ? D = () => Be(e, w, 2) : D = () => {
    if (!(w && w.isUnmounted))
      return T && T(), nt(
        e,
        w,
        3,
        [F]
      );
  } : (D = de, process.env.NODE_ENV !== "production" && l(e)), t && r) {
    const S = D;
    D = () => je(S());
  }
  let T, F = (S) => {
    T = K.onStop = () => {
      Be(S, w, 4);
    };
  }, U = M ? new Array(e.length).fill(pt) : pt;
  const W = () => {
    if (K.active)
      if (t) {
        const S = K.run();
        (r || u || (M ? S.some(
          (N, C) => wt(N, U[C])
        ) : wt(S, U))) && (T && T(), nt(t, w, 3, [
          S,
          // pass undefined as the old value when it's changed for the first time
          U === pt ? void 0 : M && U[0] === pt ? [] : U,
          F
        ]), U = S);
      } else
        K.run();
  };
  W.allowRecurse = !!t;
  let ee;
  o === "sync" ? ee = W : o === "post" ? ee = () => Wn(W, w && w.suspense) : (W.pre = true, w && (W.id = w.uid), ee = () => gn(W));
  const K = new dr(D, ee);
  return process.env.NODE_ENV !== "production" && (K.onTrack = i, K.onTrigger = s), t ? n ? W() : U = K.run() : o === "post" ? Wn(
    K.run.bind(K),
    w && w.suspense
  ) : K.run(), () => {
    K.stop(), w && w.scope && tr(w.scope.effects, K);
  };
}
function Ni(e, t, n) {
  const r = this.proxy, o = ie(e) ? e.includes(".") ? Br(r, e) : () => r[e] : e.bind(r, r);
  let i;
  L(t) ? i = t : (i = t.handler, n = t);
  const s = Z;
  Ye(this);
  const a = Rr(o, i.bind(r), n);
  return s ? Ye(s) : St(), a;
}
function Br(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function je(e, t) {
  if (!Y(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), re(e))
    je(e.value, t);
  else if (j(e))
    for (let n = 0; n < e.length; n++)
      je(e[n], t);
  else if (nr(e) || Pe(e))
    e.forEach((n) => {
      je(n, t);
    });
  else if (ir(e))
    for (const n in e)
      je(e[n], t);
  return e;
}
function Ar(e, t) {
  return L(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    (() => oe({ name: e.name }, t, { setup: e }))()
  ) : e;
}
var xi = (e) => e.type.__isKeepAlive;
function Mi(e, t) {
  Vr(e, "a", t);
}
function Di(e, t) {
  Vr(e, "da", t);
}
function Vr(e, t, n = Z) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Pt(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      xi(o.parent.vnode) && Ci(r, t, n, o), o = o.parent;
  }
}
function Ci(e, t, n, r) {
  const o = Pt(
    t,
    e,
    r,
    true
    /* prepend */
  );
  kr(() => {
    tr(r[t], o);
  }, n);
}
function Pt(e, t, n = Z, r = false) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      Dt(), Ye(n);
      const a = nt(t, n, e, s);
      return St(), Ct(), a;
    });
    return r ? o.unshift(i) : o.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const o = so(dn[e].replace(/ hook$/, ""));
    $(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
var we = (e) => (t, n = Z) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  Pt(e, (...r) => t(...r), n)
);
var Ii = we("bm");
var Pi = we("m");
var Si = we("bu");
var Ti = we("u");
var Ri = we("bum");
var kr = we("um");
var Bi = we("sp");
var Ai = we(
  "rtg"
);
var Vi = we(
  "rtc"
);
function ki(e, t = Z) {
  Pt("ec", e, t);
}
var $i = Symbol.for("v-ndc");
var Xt = (e) => e ? is(e) ? us(e) || e.proxy : Xt(e.parent) : null;
var et = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  oe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? dt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? dt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? dt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? dt(e.refs) : e.refs,
    $parent: (e) => Xt(e.parent),
    $root: (e) => Xt(e.root),
    $emit: (e) => e.emit,
    $options: (e) => wn(e),
    $forceUpdate: (e) => e.f || (e.f = () => gn(e.update)),
    $nextTick: (e) => e.n || (e.n = ni.bind(e.proxy)),
    $watch: (e) => Ni.bind(e)
  })
);
var mn = (e) => e === "_" || e === "$";
var At = (e, t) => e !== _e && !e.__isScriptSetup && J(e, t);
var Fi = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: o, props: i, accessCache: s, type: a, appContext: l } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return true;
    let w;
    if (t[0] !== "$") {
      const T = s[t];
      if (T !== void 0)
        switch (T) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (At(r, t))
          return s[t] = 1, r[t];
        if (o !== _e && J(o, t))
          return s[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (w = e.propsOptions[0]) && J(w, t)
        )
          return s[t] = 3, i[t];
        if (n !== _e && J(n, t))
          return s[t] = 4, n[t];
        Zt && (s[t] = 0);
      }
    }
    const D = et[t];
    let u, M;
    if (D)
      return t === "$attrs" ? (se(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && se(e, "get", t), D(e);
    if (
      // css module (injected by vue-loader)
      (u = a.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== _e && J(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      M = l.config.globalProperties, J(M, t)
    )
      return M[t];
    process.env.NODE_ENV !== "production" && ce && (!ie(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== _e && mn(t[0]) && J(o, t) ? $(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ce && $(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: i } = e;
    return At(o, t) ? (o[t] = n, true) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && J(o, t) ? ($(`Cannot mutate <script setup> binding "${t}" from Options API.`), false) : r !== _e && J(r, t) ? (r[t] = n, true) : J(e.props, t) ? (process.env.NODE_ENV !== "production" && $(`Attempting to mutate prop "${t}". Props are readonly.`), false) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && $(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), false) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: true,
      configurable: true,
      value: n
    }) : i[t] = n, true);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: i }
  }, s) {
    let a;
    return !!n[s] || e !== _e && J(e, s) || At(t, s) || (a = i[0]) && J(a, s) || J(r, s) || J(et, s) || J(o.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Fi.ownKeys = (e) => ($(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function qi(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(q(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (mn(r[0])) {
        $(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: true,
        configurable: true,
        get: () => n[r],
        set: de
      });
    }
  });
}
function jn(e) {
  return j(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Li(e) {
  const t = os();
  process.env.NODE_ENV !== "production" && !t && $(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return St(), tn(n) && (n = n.catch((r) => {
    throw Ye(t), r;
  })), [n, () => Ye(t)];
}
function ji() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? $(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
var Zt = true;
function Ui(e) {
  const t = wn(e), n = e.proxy, r = e.ctx;
  Zt = false, t.beforeCreate && Un(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: s,
    watch: a,
    provide: l,
    inject: w,
    // lifecycle
    created: D,
    beforeMount: u,
    mounted: M,
    beforeUpdate: T,
    updated: F,
    activated: U,
    deactivated: W,
    beforeDestroy: ee,
    beforeUnmount: K,
    destroyed: ue,
    unmounted: S,
    render: N,
    renderTracked: C,
    renderTriggered: _,
    errorCaptured: O,
    serverPrefetch: d,
    // public API
    expose: h,
    inheritAttrs: f,
    // assets
    components: c,
    directives: y,
    filters: b
  } = t, E = process.env.NODE_ENV !== "production" ? ji() : null;
  if (process.env.NODE_ENV !== "production") {
    const [I] = e.propsOptions;
    if (I)
      for (const R in I)
        E("Props", R);
  }
  if (w && Hi(w, r, E), s)
    for (const I in s) {
      const R = s[I];
      L(R) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, I, {
        value: R.bind(n),
        configurable: true,
        enumerable: true,
        writable: true
      }) : r[I] = R.bind(n), process.env.NODE_ENV !== "production" && E("Methods", I)) : process.env.NODE_ENV !== "production" && $(
        `Method "${I}" has type "${typeof R}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !L(o) && $(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const I = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && tn(I) && $(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Y(I))
      process.env.NODE_ENV !== "production" && $("data() should return an object.");
    else if (e.data = cn(I), process.env.NODE_ENV !== "production")
      for (const R in I)
        E("Data", R), mn(R[0]) || Object.defineProperty(r, R, {
          configurable: true,
          enumerable: true,
          get: () => I[R],
          set: de
        });
  }
  if (Zt = true, i)
    for (const I in i) {
      const R = i[I], H = L(R) ? R.bind(n, n) : L(R.get) ? R.get.bind(n, n) : de;
      process.env.NODE_ENV !== "production" && H === de && $(`Computed property "${I}" has no getter.`);
      const X = !L(R) && L(R.set) ? R.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        $(
          `Write operation failed: computed property "${I}" is readonly.`
        );
      } : de, ae = ds({
        get: H,
        set: X
      });
      Object.defineProperty(r, I, {
        enumerable: true,
        configurable: true,
        get: () => ae.value,
        set: (he) => ae.value = he
      }), process.env.NODE_ENV !== "production" && E("Computed", I);
    }
  if (a)
    for (const I in a)
      $r(a[I], r, n, I);
  if (l) {
    const I = L(l) ? l.call(n) : l;
    Reflect.ownKeys(I).forEach((R) => {
      Ji(R, I[R]);
    });
  }
  D && Un(D, e, "c");
  function B(I, R) {
    j(R) ? R.forEach((H) => I(H.bind(n))) : R && I(R.bind(n));
  }
  if (B(Ii, u), B(Pi, M), B(Si, T), B(Ti, F), B(Mi, U), B(Di, W), B(ki, O), B(Vi, C), B(Ai, _), B(Ri, K), B(kr, S), B(Bi, d), j(h))
    if (h.length) {
      const I = e.exposed || (e.exposed = {});
      h.forEach((R) => {
        Object.defineProperty(I, R, {
          get: () => n[R],
          set: (H) => n[R] = H
        });
      });
    } else
      e.exposed || (e.exposed = {});
  N && e.render === de && (e.render = N), f != null && (e.inheritAttrs = f), c && (e.components = c), y && (e.directives = y);
}
function Hi(e, t, n = de) {
  j(e) && (e = zt(e));
  for (const r in e) {
    const o = e[r];
    let i;
    Y(o) ? "default" in o ? i = Vt(
      o.from || r,
      o.default,
      true
      /* treat default function as factory */
    ) : i = Vt(o.from || r) : i = Vt(o), re(i) ? Object.defineProperty(t, r, {
      enumerable: true,
      configurable: true,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Un(e, t, n) {
  nt(
    j(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function $r(e, t, n, r) {
  const o = r.includes(".") ? Br(n, r) : () => n[r];
  if (ie(e)) {
    const i = t[e];
    L(i) ? Bt(o, i) : process.env.NODE_ENV !== "production" && $(`Invalid watch handler specified by key "${e}"`, i);
  } else if (L(e))
    Bt(o, e.bind(n));
  else if (Y(e))
    if (j(e))
      e.forEach((i) => $r(i, t, n, r));
    else {
      const i = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(i) ? Bt(o, i, e) : process.env.NODE_ENV !== "production" && $(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    process.env.NODE_ENV !== "production" && $(`Invalid watch option: "${r}"`, e);
}
function wn(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = i.get(t);
  let l;
  return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (w) => yt(l, w, s, true)
  ), yt(l, t, s)), Y(t) && i.set(t, l), l;
}
function yt(e, t, n, r = false) {
  const { mixins: o, extends: i } = t;
  i && yt(e, i, n, true), o && o.forEach(
    (s) => yt(e, s, n, true)
  );
  for (const s in t)
    if (r && s === "expose")
      process.env.NODE_ENV !== "production" && $(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Ki[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
var Ki = {
  data: Hn,
  props: Kn,
  emits: Kn,
  // objects
  methods: Ze,
  computed: Ze,
  // lifecycle
  beforeCreate: te,
  created: te,
  beforeMount: te,
  mounted: te,
  beforeUpdate: te,
  updated: te,
  beforeDestroy: te,
  beforeUnmount: te,
  destroyed: te,
  unmounted: te,
  activated: te,
  deactivated: te,
  errorCaptured: te,
  serverPrefetch: te,
  // assets
  components: Ze,
  directives: Ze,
  // watch
  watch: Wi,
  // provide / inject
  provide: Hn,
  inject: Qi
};
function Hn(e, t) {
  return t ? e ? function() {
    return oe(
      L(e) ? e.call(this, this) : e,
      L(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qi(e, t) {
  return Ze(zt(e), zt(t));
}
function zt(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ze(e, t) {
  return e ? oe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Kn(e, t) {
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : oe(
    /* @__PURE__ */ Object.create(null),
    jn(e),
    jn(t ?? {})
  ) : t;
}
function Wi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = oe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = te(e[r], t[r]);
  return n;
}
var Qn = null;
function Ji(e, t) {
  if (!Z)
    process.env.NODE_ENV !== "production" && $("provide() can only be used inside setup().");
  else {
    let n = Z.provides;
    const r = Z.parent && Z.parent.provides;
    r === n && (n = Z.provides = Object.create(r)), n[e] = t;
  }
}
function Vt(e, t, n = false) {
  const r = Z || ce;
  if (r || Qn) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Qn._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && $(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && $("inject() can only be used inside setup() or functional components.");
}
var Ge;
var Oe;
function Yi(e, t) {
  e.appContext.config.performance && Ot() && Oe.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && li(e, t, Ot() ? Oe.now() : Date.now());
}
function Gi(e, t) {
  if (e.appContext.config.performance && Ot()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    Oe.mark(r), Oe.measure(
      `<${Nn(e, e.type)}> ${t}`,
      n,
      r
    ), Oe.clearMarks(n), Oe.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && di(e, t, Ot() ? Oe.now() : Date.now());
}
function Ot() {
  return Ge !== void 0 || (typeof window < "u" && window.performance ? (Ge = true, Oe = window.performance) : Ge = false), Ge;
}
var Wn = yi;
var Xi = (e) => e.__isTeleport;
var bn = Symbol.for("v-fgt");
var Fr = Symbol.for("v-txt");
var We = Symbol.for("v-cmt");
var _t = [];
var pe = null;
function Qe(e = false) {
  _t.push(pe = e ? null : []);
}
function qr() {
  _t.pop(), pe = _t[_t.length - 1] || null;
}
var Je = 1;
function Jn(e) {
  Je += e;
}
function Lr(e) {
  return e.dynamicChildren = Je > 0 ? pe || no : null, qr(), Je > 0 && pe && pe.push(e), e;
}
function kt(e, t, n, r, o, i) {
  return Lr(
    Nt(
      e,
      t,
      n,
      r,
      o,
      i,
      true
      /* isBlock */
    )
  );
}
function jr(e, t, n, r, o) {
  return Lr(
    xe(
      e,
      t,
      n,
      r,
      o,
      true
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function En(e) {
  return e ? e.__v_isVNode === true : false;
}
function $t(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && qe.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, false) : e.type === t.type && e.key === t.key;
}
var Zi = (...e) => Kr(
  ...e
);
var Ur = "__vInternal";
var Hr = ({ key: e }) => e ?? null;
var mt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || re(e) || L(e) ? { i: ce, r: e, k: t, f: !!n } : e : null);
function Nt(e, t = null, n = null, r = 0, o = null, i = e === bn ? 0 : 1, s = false, a = false) {
  const l = {
    __v_isVNode: true,
    __v_skip: true,
    type: e,
    props: t,
    key: t && Hr(t),
    ref: t && mt(t),
    scopeId: Sr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ce
  };
  return a ? (yn(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= ie(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && $("VNode created with invalid key (NaN). VNode type:", l.type), Je > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && pe.push(l), l;
}
var xe = process.env.NODE_ENV !== "production" ? Zi : Kr;
function Kr(e, t = null, n = null, r = 0, o = null, i = false) {
  if ((!e || e === $i) && (process.env.NODE_ENV !== "production" && !e && $(`Invalid vnode type when creating vnode: ${e}.`), e = We), En(e)) {
    const a = it(
      e,
      t,
      true
      /* mergeRef: true */
    );
    return n && yn(a, n), Je > 0 && !i && pe && (a.shapeFlag & 6 ? pe[pe.indexOf(e)] = a : pe.push(a)), a.patchFlag |= -2, a;
  }
  if (Jr(e) && (e = e.__vccOpts), t) {
    t = zi(t);
    let { class: a, style: l } = t;
    a && !ie(a) && (t.class = Ue(a)), Y(l) && (Yt(l) && !j(l) && (l = oe({}, l)), t.style = rn(l));
  }
  const s = ie(e) ? 1 : gi(e) ? 128 : Xi(e) ? 64 : Y(e) ? 4 : L(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && Yt(e) && (e = q(e), $(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Nt(
    e,
    t,
    n,
    r,
    o,
    s,
    i,
    true
  );
}
function zi(e) {
  return e ? Yt(e) || Ur in e ? oe({}, e) : e : null;
}
function it(e, t, n = false) {
  const { props: r, ref: o, patchFlag: i, children: s } = e, a = t ? rs(r || {}, t) : r;
  return {
    __v_isVNode: true,
    __v_skip: true,
    type: e.type,
    props: a,
    key: a && Hr(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? j(o) ? o.concat(mt(t)) : [o, mt(t)] : mt(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && j(s) ? s.map(Qr) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== bn ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && it(e.ssContent),
    ssFallback: e.ssFallback && it(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Qr(e) {
  const t = it(e);
  return j(e.children) && (t.children = e.children.map(Qr)), t;
}
function es(e = " ", t = 0) {
  return xe(Fr, null, e, t);
}
function Yn(e = "", t = false) {
  return t ? (Qe(), jr(We, null, e)) : xe(We, null, e);
}
function ts(e) {
  return e == null || typeof e == "boolean" ? xe(We) : j(e) ? xe(
    bn,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ns(e) : xe(Fr, null, String(e));
}
function ns(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : it(e);
}
function yn(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (j(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = false), yn(e, o()), o._c && (o._d = true));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(Ur in t) ? t._ctx = ce : o === 3 && ce && (ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    L(t) ? (t = { default: t, _ctx: ce }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [es(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function rs(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Ue([t.class, r.class]));
      else if (o === "style")
        t.style = rn([t.style, r.style]);
      else if (oo(o)) {
        const i = t[o], s = r[o];
        s && i !== s && !(j(i) && i.includes(s)) && (t[o] = i ? [].concat(i, s) : s);
      } else
        o !== "" && (t[o] = r[o]);
  }
  return t;
}
var Z = null;
var os = () => Z || ce;
var On;
var $e;
var Gn = "__VUE_INSTANCE_SETTERS__";
($e = Ut()[Gn]) || ($e = Ut()[Gn] = []), $e.push((e) => Z = e), On = (e) => {
  $e.length > 1 ? $e.forEach((t) => t(e)) : $e[0](e);
};
var Ye = (e) => {
  On(e), e.scope.on();
};
var St = () => {
  Z && Z.scope.off(), On(null);
};
function is(e) {
  return e.vnode.shapeFlag & 4;
}
var ss = false;
function as(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) ? (process.env.NODE_ENV !== "production" && En(t) && $(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Er(t), process.env.NODE_ENV !== "production" && qi(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && $(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), cs(e, n);
}
var Xn;
function cs(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Xn && !r.render) {
      const o = r.template || wn(e).template;
      if (o) {
        process.env.NODE_ENV !== "production" && Yi(e, "compile");
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config, { delimiters: a, compilerOptions: l } = r, w = oe(
          oe(
            {
              isCustomElement: i,
              delimiters: a
            },
            s
          ),
          l
        );
        r.render = Xn(o, w), process.env.NODE_ENV !== "production" && Gi(e, "compile");
      }
    }
    e.render = r.render || de;
  }
  Ye(e), Dt(), Ui(e), Ct(), St(), process.env.NODE_ENV !== "production" && !r.render && e.render === de && !t && (r.template ? $(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : $("Component is missing template or render function."));
}
function us(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Er(Uo(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in et)
          return et[n](e);
      },
      has(t, n) {
        return n in t || n in et;
      }
    }));
}
var fs = /(?:^|[-_])(\w)/g;
var ls = (e) => e.replace(fs, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Wr(e, t = true) {
  return L(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Nn(e, t, n = false) {
  let r = Wr(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? ls(r) : n ? "App" : "Anonymous";
}
function Jr(e) {
  return L(e) && "__vccOpts" in e;
}
var ds = (e, t) => Jo(e, t, ss);
function Ft(e) {
  return !!(e && e.__v_isShallow);
}
function ps() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, o = {
    header(u) {
      return Y(u) ? u.__isVue ? ["div", e, "VueInstance"] : re(u) ? [
        "div",
        {},
        ["span", e, D(u)],
        "<",
        a(u.value),
        ">"
      ] : Te(u) ? [
        "div",
        {},
        ["span", e, Ft(u) ? "ShallowReactive" : "Reactive"],
        "<",
        a(u),
        `>${Ae(u) ? " (readonly)" : ""}`
      ] : Ae(u) ? [
        "div",
        {},
        ["span", e, Ft(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...i(u.$)
        ];
    }
  };
  function i(u) {
    const M = [];
    u.type.props && u.props && M.push(s("props", q(u.props))), u.setupState !== _e && M.push(s("setup", u.setupState)), u.data !== _e && M.push(s("data", q(u.data)));
    const T = l(u, "computed");
    T && M.push(s("computed", T));
    const F = l(u, "inject");
    return F && M.push(s("injected", F)), M.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), M;
  }
  function s(u, M) {
    return M = oe({}, M), Object.keys(M).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(M).map((T) => [
          "div",
          {},
          ["span", r, T + ": "],
          a(M[T], false)
        ])
      ]
    ] : ["span", {}];
  }
  function a(u, M = true) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : Y(u) ? ["object", { object: M ? q(u) : u }] : ["span", n, String(u)];
  }
  function l(u, M) {
    const T = u.type;
    if (L(T))
      return;
    const F = {};
    for (const U in u.ctx)
      w(T, U, M) && (F[U] = u.ctx[U]);
    return F;
  }
  function w(u, M, T) {
    const F = u[T];
    if (j(F) && F.includes(M) || Y(F) && M in F || u.extends && w(u.extends, M, T) || u.mixins && u.mixins.some((U) => w(U, M, T)))
      return true;
  }
  function D(u) {
    return Ft(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function hs() {
  ps();
}
process.env.NODE_ENV !== "production" && hs();
var qt = {
  numeric: "Numeric",
  alphanumeric: "Alphanumeric",
  byte: "Byte",
  kanji: "Kanji"
};
function gs(e) {
  switch (true) {
    case /^[0-9]*$/.test(e):
      return qt.numeric;
    case /^[0-9A-Z $%*+\-./:]*$/.test(e):
      return qt.alphanumeric;
    default:
      return qt.byte;
  }
}
var ht = (e) => !!e && typeof e == "object" && !Array.isArray(e);
function xt(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  return n === void 0 || !ht(e) || !ht(n) ? e : (e = { ...e }, Object.keys(n).forEach((r) => {
    const o = e[r], i = n[r];
    Array.isArray(o) && Array.isArray(i) ? e[r] = i : ht(o) && ht(i) ? e[r] = xt(Object.assign({}, o), i) : e[r] = i;
  }), xt(e, ...t));
}
function vs(e, t) {
  const n = document.createElement("a");
  n.download = t, n.href = e, document.body.appendChild(n), n.click(), document.body.removeChild(n);
}
function _s({
  originalHeight: e,
  originalWidth: t,
  maxHiddenDots: n,
  maxHiddenAxisDots: r,
  dotSize: o
}) {
  const i = { x: 0, y: 0 }, s = { x: 0, y: 0 };
  if (e <= 0 || t <= 0 || n <= 0 || o <= 0)
    return {
      height: 0,
      width: 0,
      hideYDots: 0,
      hideXDots: 0
    };
  const a = e / t;
  return i.x = Math.floor(Math.sqrt(n / a)), i.x <= 0 && (i.x = 1), r && r < i.x && (i.x = r), i.x % 2 === 0 && i.x--, s.x = i.x * o, i.y = 1 + 2 * Math.ceil((i.x * a - 1) / 2), s.y = Math.round(s.x * a), (i.y * i.x > n || r && r < i.y) && (r && r < i.y ? (i.y = r, i.y % 2 === 0 && i.x--) : i.y -= 2, s.y = i.y * o, i.x = 1 + 2 * Math.ceil((i.y / a - 1) / 2), s.x = Math.round(s.y / a)), {
    height: s.y,
    width: s.x,
    hideYDots: i.y,
    hideXDots: i.x
  };
}
var ms = {
  L: 0.07,
  M: 0.15,
  Q: 0.25,
  H: 0.3
};
var Fe = {
  dots: "dots",
  rounded: "rounded",
  classy: "classy",
  classyRounded: "classy-rounded",
  square: "square",
  extraRounded: "extra-rounded"
};
var Lt = class {
  constructor({ context: t, type: n }) {
    z(this, "_context");
    z(this, "_type");
    this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const i = this._context, s = this._type;
    let a;
    switch (s) {
      case Fe.dots:
        a = this._drawDot;
        break;
      case Fe.classy:
        a = this._drawClassy;
        break;
      case Fe.classyRounded:
        a = this._drawClassyRounded;
        break;
      case Fe.rounded:
        a = this._drawRounded;
        break;
      case Fe.extraRounded:
        a = this._drawExtraRounded;
        break;
      case Fe.square:
      default:
        a = this._drawSquare;
    }
    a.call(this, { x: t, y: n, size: r, context: i, getNeighbor: o });
  }
  _rotateFigure({ x: t, y: n, size: r, context: o, rotation: i, draw: s }) {
    const a = t + r / 2, l = n + r / 2;
    o.translate(a, l), i && o.rotate(i), s(), o.closePath(), i && o.rotate(-i), o.translate(-a, -l);
  }
  _basicDot(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, 0, Math.PI * 2);
      }
    });
  }
  _basicSquare(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.rect(-n / 2, -n / 2, n, n);
      }
    });
  }
  // if rotation === 0 - right side is rounded
  _basicSideRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, -Math.PI / 2, Math.PI / 2), r.lineTo(-n / 2, n / 2), r.lineTo(-n / 2, -n / 2), r.lineTo(0, -n / 2);
      }
    });
  }
  // if rotation === 0 - top right corner is rounded
  _basicCornerRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, -Math.PI / 2, 0), r.lineTo(n / 2, n / 2), r.lineTo(-n / 2, n / 2), r.lineTo(-n / 2, -n / 2), r.lineTo(0, -n / 2);
      }
    });
  }
  // if rotation === 0 - top right corner is rounded
  _basicCornerExtraRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(-n / 2, n / 2, n, -Math.PI / 2, 0), r.lineTo(-n / 2, n / 2), r.lineTo(-n / 2, -n / 2);
      }
    });
  }
  _basicCornersRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, -Math.PI / 2, 0), r.lineTo(n / 2, n / 2), r.lineTo(0, n / 2), r.arc(0, 0, n / 2, Math.PI / 2, Math.PI), r.lineTo(-n / 2, -n / 2), r.lineTo(0, -n / 2);
      }
    });
  }
  _basicCornersExtraRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(-n / 2, n / 2, n, -Math.PI / 2, 0), r.arc(n / 2, -n / 2, n, Math.PI / 2, Math.PI);
      }
    });
  }
  _drawDot({ x: t, y: n, size: r, context: o }) {
    this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
  _drawSquare({ x: t, y: n, size: r, context: o }) {
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
  _drawRounded({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), l = +i(0, -1), w = +i(0, 1), D = s + a + l + w;
    if (D === 0) {
      this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (D > 2 || s && a || l && w) {
      this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (D === 2) {
      let u = 0;
      s && l ? u = Math.PI / 2 : l && a ? u = Math.PI : a && w && (u = -Math.PI / 2), this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: u });
      return;
    }
    if (D === 1) {
      let u = 0;
      l ? u = Math.PI / 2 : a ? u = Math.PI : w && (u = -Math.PI / 2), this._basicSideRounded({ x: t, y: n, size: r, context: o, rotation: u });
    }
  }
  _drawExtraRounded({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), l = +i(0, -1), w = +i(0, 1), D = s + a + l + w;
    if (D === 0) {
      this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (D > 2 || s && a || l && w) {
      this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (D === 2) {
      let u = 0;
      s && l ? u = Math.PI / 2 : l && a ? u = Math.PI : a && w && (u = -Math.PI / 2), this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: u });
      return;
    }
    if (D === 1) {
      let u = 0;
      l ? u = Math.PI / 2 : a ? u = Math.PI : w && (u = -Math.PI / 2), this._basicSideRounded({ x: t, y: n, size: r, context: o, rotation: u });
    }
  }
  _drawClassy({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), l = +i(0, -1), w = +i(0, 1);
    if (s + a + l + w === 0) {
      this._basicCornersRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!s && !l) {
      this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !w) {
      this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
  _drawClassyRounded({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), l = +i(0, -1), w = +i(0, 1);
    if (s + a + l + w === 0) {
      this._basicCornersRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!s && !l) {
      this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !w) {
      this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
};
var jt = {
  dot: "dot",
  square: "square",
  extraRounded: "extra-rounded"
};
var ws = class {
  constructor({ context: t, type: n }) {
    z(this, "_context");
    z(this, "_type");
    this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const i = this._context, s = this._type;
    let a;
    switch (s) {
      case jt.square:
        a = this._drawSquare;
        break;
      case jt.extraRounded:
        a = this._drawExtraRounded;
        break;
      case jt.dot:
      default:
        a = this._drawDot;
    }
    a.call(this, { x: t, y: n, size: r, context: i, rotation: o });
  }
  _rotateFigure({ x: t, y: n, size: r, context: o, rotation: i, draw: s }) {
    const a = t + r / 2, l = n + r / 2;
    o.translate(a, l), i && o.rotate(i), s(), o.closePath(), i && o.rotate(-i), o.translate(-a, -l);
  }
  _basicDot(t) {
    const { size: n, context: r } = t, o = n / 7;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.arc(0, 0, n / 2, 0, Math.PI * 2), r.arc(0, 0, n / 2 - o, 0, Math.PI * 2);
      }
    });
  }
  _basicSquare(t) {
    const { size: n, context: r } = t, o = n / 7;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.rect(-n / 2, -n / 2, n, n), r.rect(-n / 2 + o, -n / 2 + o, n - 2 * o, n - 2 * o);
      }
    });
  }
  _basicExtraRounded(t) {
    const { size: n, context: r } = t, o = n / 7;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.arc(-o, -o, 2.5 * o, Math.PI, -Math.PI / 2), r.lineTo(o, -3.5 * o), r.arc(o, -o, 2.5 * o, -Math.PI / 2, 0), r.lineTo(3.5 * o, -o), r.arc(o, o, 2.5 * o, 0, Math.PI / 2), r.lineTo(-o, 3.5 * o), r.arc(-o, o, 2.5 * o, Math.PI / 2, Math.PI), r.lineTo(-3.5 * o, -o), r.arc(-o, -o, 1.5 * o, Math.PI, -Math.PI / 2), r.lineTo(o, -2.5 * o), r.arc(o, -o, 1.5 * o, -Math.PI / 2, 0), r.lineTo(2.5 * o, -o), r.arc(o, o, 1.5 * o, 0, Math.PI / 2), r.lineTo(-o, 2.5 * o), r.arc(-o, o, 1.5 * o, Math.PI / 2, Math.PI), r.lineTo(-2.5 * o, -o);
      }
    });
  }
  _drawDot({ x: t, y: n, size: r, context: o, rotation: i }) {
    this._basicDot({ x: t, y: n, size: r, context: o, rotation: i });
  }
  _drawSquare({ x: t, y: n, size: r, context: o, rotation: i }) {
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: i });
  }
  _drawExtraRounded({ x: t, y: n, size: r, context: o, rotation: i }) {
    this._basicExtraRounded({ x: t, y: n, size: r, context: o, rotation: i });
  }
};
var Zn = {
  dot: "dot",
  square: "square"
};
var bs = class {
  constructor({ context: t, type: n }) {
    z(this, "_context");
    z(this, "_type");
    this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const i = this._context;
    switch (this._type) {
      case Zn.square:
        this._drawSquare({ x: t, y: n, size: r, context: i, rotation: o });
        break;
      case Zn.dot:
      default:
        this._drawDot({ x: t, y: n, size: r, context: i, rotation: o });
    }
  }
  _rotateFigure({ x: t, y: n, size: r, context: o, rotation: i, draw: s }) {
    const a = t + r / 2, l = n + r / 2;
    o.moveTo(0, 0), o.translate(a, l), i && o.rotate(i), s(), o.closePath(), i && o.rotate(-i), o.translate(-a, -l);
  }
  _drawDot(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, 0, Math.PI * 2);
      }
    });
  }
  _drawSquare(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.rect(-n / 2, -n / 2, n, n);
      }
    });
  }
};
var Es = {
  radial: "radial",
  linear: "linear"
};
var Ce = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
];
var Ie = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
var ys = class {
  // TODO don't pass all options to this class
  constructor(t) {
    z(this, "_canvas");
    z(this, "_options");
    z(this, "_qr");
    z(this, "_image");
    this._canvas = document.createElement("canvas"), this._canvas.width = t.width, this._canvas.height = t.height, this._options = t;
  }
  get context() {
    return this._canvas.getContext("2d");
  }
  get width() {
    return this._canvas.width;
  }
  get height() {
    return this._canvas.height;
  }
  getCanvas() {
    return this._canvas;
  }
  clear() {
    const t = this.context;
    t && t.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  async drawQR(t) {
    const n = t.getModuleCount(), r = Math.min(this._options.width, this._options.height) - this._options.margin * 2, o = Math.floor(r / n);
    let i = {
      hideXDots: 0,
      hideYDots: 0,
      width: 0,
      height: 0
    };
    if (this._qr = t, this._options.image) {
      if (await this.loadImage(), !this._image)
        return;
      const { imageOptions: s, qrOptions: a } = this._options, l = s.imageSize * ms[a.errorCorrectionLevel], w = Math.floor(l * n * n);
      i = _s({
        originalWidth: this._image.width,
        originalHeight: this._image.height,
        maxHiddenDots: w,
        maxHiddenAxisDots: n - 14,
        dotSize: o
      });
    }
    this.clear(), this.drawBackground(), this.drawDots((s, a) => {
      var l, w, D, u, M, T;
      return !(this._options.imageOptions.hideBackgroundDots && s >= (n - i.hideXDots) / 2 && s < (n + i.hideXDots) / 2 && a >= (n - i.hideYDots) / 2 && a < (n + i.hideYDots) / 2 || (l = Ce[s]) != null && l[a] || (w = Ce[s - n + 7]) != null && w[a] || (D = Ce[s]) != null && D[a - n + 7] || (u = Ie[s]) != null && u[a] || (M = Ie[s - n + 7]) != null && M[a] || (T = Ie[s]) != null && T[a - n + 7]);
    }), this.drawCorners(), this._options.image && this.drawImage({ width: i.width, height: i.height, count: n, dotSize: o });
  }
  drawBackground() {
    const t = this.context, n = this._options;
    if (t) {
      if (n.backgroundOptions.gradient) {
        const r = n.backgroundOptions.gradient, o = this._createGradient({
          context: t,
          options: r,
          additionalRotation: 0,
          x: 0,
          y: 0,
          size: this._canvas.width > this._canvas.height ? this._canvas.width : this._canvas.height
        });
        r.colorStops.forEach(({ offset: i, color: s }) => {
          o.addColorStop(i, s);
        }), t.fillStyle = o;
      } else
        n.backgroundOptions.color && (t.fillStyle = n.backgroundOptions.color);
      t.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }
  }
  drawDots(t) {
    if (!this._qr)
      throw "QR code is not defined";
    const n = this.context;
    if (!n)
      throw "QR code is not defined";
    const r = this._options, o = this._qr.getModuleCount();
    if (o > r.width || o > r.height)
      throw "The canvas is too small.";
    const i = Math.min(r.width, r.height) - r.margin * 2, s = Math.floor(i / o), a = Math.floor((r.width - o * s) / 2), l = Math.floor((r.height - o * s) / 2), w = new Lt({ context: n, type: r.dotsOptions.type });
    n.beginPath();
    for (let D = 0; D < o; D++)
      for (let u = 0; u < o; u++)
        t && !t(D, u) || this._qr.isDark(D, u) && w.draw(
          a + D * s,
          l + u * s,
          s,
          (M, T) => D + M < 0 || u + T < 0 || D + M >= o || u + T >= o || t && !t(D + M, u + T) ? false : !!this._qr && this._qr.isDark(D + M, u + T)
        );
    if (r.dotsOptions.gradient) {
      const D = r.dotsOptions.gradient, u = this._createGradient({
        context: n,
        options: D,
        additionalRotation: 0,
        x: a,
        y: l,
        size: o * s
      });
      D.colorStops.forEach(({ offset: M, color: T }) => {
        u.addColorStop(M, T);
      }), n.fillStyle = n.strokeStyle = u;
    } else
      r.dotsOptions.color && (n.fillStyle = n.strokeStyle = r.dotsOptions.color);
    n.fill("evenodd");
  }
  drawCorners(t) {
    if (!this._qr)
      throw "QR code is not defined";
    const n = this.context;
    if (!n)
      throw "QR code is not defined";
    const r = this._options, o = this._qr.getModuleCount(), i = Math.min(r.width, r.height) - r.margin * 2, s = Math.floor(i / o), a = s * 7, l = s * 3, w = Math.floor((r.width - o * s) / 2), D = Math.floor((r.height - o * s) / 2);
    [
      [0, 0, 0],
      [1, 0, Math.PI / 2],
      [0, 1, -Math.PI / 2]
    ].forEach(([u, M, T]) => {
      var W, ee, K, ue, S, N, C, _, O, d;
      if (t && !t(u, M))
        return;
      const F = w + u * s * (o - 7), U = D + M * s * (o - 7);
      if ((W = r.cornersSquareOptions) != null && W.type) {
        const h = new ws({ context: n, type: (ee = r.cornersSquareOptions) == null ? void 0 : ee.type });
        n.beginPath(), h.draw(F, U, a, T);
      } else {
        const h = new Lt({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let f = 0; f < Ce.length; f++)
          for (let c = 0; c < Ce[f].length; c++)
            (K = Ce[f]) != null && K[c] && h.draw(
              F + f * s,
              U + c * s,
              s,
              (y, b) => {
                var E;
                return !!((E = Ce[f + y]) != null && E[c + b]);
              }
            );
      }
      if ((ue = r.cornersSquareOptions) != null && ue.gradient) {
        const h = r.cornersSquareOptions.gradient, f = this._createGradient({
          context: n,
          options: h,
          additionalRotation: T,
          x: F,
          y: U,
          size: a
        });
        h.colorStops.forEach(({ offset: c, color: y }) => {
          f.addColorStop(c, y);
        }), n.fillStyle = n.strokeStyle = f;
      } else
        (S = r.cornersSquareOptions) != null && S.color && (n.fillStyle = n.strokeStyle = r.cornersSquareOptions.color);
      if (n.fill("evenodd"), (N = r.cornersDotOptions) != null && N.type) {
        const h = new bs({ context: n, type: (C = r.cornersDotOptions) == null ? void 0 : C.type });
        n.beginPath(), h.draw(F + s * 2, U + s * 2, l, T);
      } else {
        const h = new Lt({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let f = 0; f < Ie.length; f++)
          for (let c = 0; c < Ie[f].length; c++)
            (_ = Ie[f]) != null && _[c] && h.draw(
              F + f * s,
              U + c * s,
              s,
              (y, b) => {
                var E;
                return !!((E = Ie[f + y]) != null && E[c + b]);
              }
            );
      }
      if ((O = r.cornersDotOptions) != null && O.gradient) {
        const h = r.cornersDotOptions.gradient, f = this._createGradient({
          context: n,
          options: h,
          additionalRotation: T,
          x: F + s * 2,
          y: U + s * 2,
          size: l
        });
        h.colorStops.forEach(({ offset: c, color: y }) => {
          f.addColorStop(c, y);
        }), n.fillStyle = n.strokeStyle = f;
      } else
        (d = r.cornersDotOptions) != null && d.color && (n.fillStyle = n.strokeStyle = r.cornersDotOptions.color);
      n.fill("evenodd");
    });
  }
  loadImage() {
    return new Promise((t, n) => {
      const r = this._options, o = new Image();
      if (!r.image)
        return n("Image is not defined");
      typeof r.imageOptions.crossOrigin == "string" && (o.crossOrigin = r.imageOptions.crossOrigin), this._image = o, o.onload = () => {
        t();
      }, o.src = r.image;
    });
  }
  drawImage({
    width: t,
    height: n,
    count: r,
    dotSize: o
  }) {
    const i = this.context;
    if (!i)
      throw "canvasContext is not defined";
    if (!this._image)
      throw "image is not defined";
    const s = this._options, a = Math.floor((s.width - r * o) / 2), l = Math.floor((s.height - r * o) / 2), w = a + s.imageOptions.margin + (r * o - t) / 2, D = l + s.imageOptions.margin + (r * o - n) / 2, u = t - s.imageOptions.margin * 2, M = n - s.imageOptions.margin * 2;
    i.drawImage(this._image, w, D, u < 0 ? 0 : u, M < 0 ? 0 : M);
  }
  _createGradient({
    context: t,
    options: n,
    additionalRotation: r,
    x: o,
    y: i,
    size: s
  }) {
    let a;
    if (n.type === Es.radial)
      a = t.createRadialGradient(o + s / 2, i + s / 2, 0, o + s / 2, i + s / 2, s / 2);
    else {
      const l = ((n.rotation || 0) + r) % (2 * Math.PI), w = (l + 2 * Math.PI) % (2 * Math.PI);
      let D = o + s / 2, u = i + s / 2, M = o + s / 2, T = i + s / 2;
      w >= 0 && w <= 0.25 * Math.PI || w > 1.75 * Math.PI && w <= 2 * Math.PI ? (D = D - s / 2, u = u - s / 2 * Math.tan(l), M = M + s / 2, T = T + s / 2 * Math.tan(l)) : w > 0.25 * Math.PI && w <= 0.75 * Math.PI ? (u = u - s / 2, D = D - s / 2 / Math.tan(l), T = T + s / 2, M = M + s / 2 / Math.tan(l)) : w > 0.75 * Math.PI && w <= 1.25 * Math.PI ? (D = D + s / 2, u = u + s / 2 * Math.tan(l), M = M - s / 2, T = T - s / 2 * Math.tan(l)) : w > 1.25 * Math.PI && w <= 1.75 * Math.PI && (u = u + s / 2, D = D + s / 2 / Math.tan(l), T = T - s / 2, M = M - s / 2 / Math.tan(l)), a = t.createLinearGradient(Math.round(D), Math.round(u), Math.round(M), Math.round(T));
    }
    return a;
  }
};
var Yr = {};
for (let e = 0; e <= 40; e++)
  Yr[e] = e;
var Os = {
  L: "L",
  M: "M",
  Q: "Q",
  H: "H"
};
var zn = {
  width: 300,
  height: 300,
  data: "",
  margin: 0,
  qrOptions: {
    typeNumber: Yr[0],
    mode: void 0,
    errorCorrectionLevel: Os.Q
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.4,
    crossOrigin: void 0,
    margin: 0
  },
  dotsOptions: {
    type: "square",
    color: "#000"
  },
  backgroundOptions: {
    color: "#fff"
  }
};
function gt(e) {
  const t = { ...e };
  if (!t.colorStops || !t.colorStops.length)
    throw "Field 'colorStops' is required in gradient";
  return t.rotation ? t.rotation = Number(t.rotation) : t.rotation = 0, t.colorStops = t.colorStops.map((n) => ({
    ...n,
    offset: Number(n.offset)
  })), t;
}
function er(e) {
  const t = { ...e };
  return t.width = Number(t.width), t.height = Number(t.height), t.margin = Number(t.margin), t.imageOptions = {
    ...t.imageOptions,
    hideBackgroundDots: !!t.imageOptions.hideBackgroundDots,
    imageSize: Number(t.imageOptions.imageSize),
    margin: Number(t.imageOptions.margin)
  }, t.margin > Math.min(t.width, t.height) && (t.margin = Math.min(t.width, t.height)), t.dotsOptions = {
    ...t.dotsOptions
  }, t.dotsOptions.gradient && (t.dotsOptions.gradient = gt(t.dotsOptions.gradient)), t.cornersSquareOptions && (t.cornersSquareOptions = {
    ...t.cornersSquareOptions
  }, t.cornersSquareOptions.gradient && (t.cornersSquareOptions.gradient = gt(t.cornersSquareOptions.gradient))), t.cornersDotOptions && (t.cornersDotOptions = {
    ...t.cornersDotOptions
  }, t.cornersDotOptions.gradient && (t.cornersDotOptions.gradient = gt(t.cornersDotOptions.gradient))), t.backgroundOptions && (t.backgroundOptions = {
    ...t.backgroundOptions
  }, t.backgroundOptions.gradient && (t.backgroundOptions.gradient = gt(t.backgroundOptions.gradient))), t;
}
function Ns(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gr = { exports: {} };
(function(e, t) {
  var n = function() {
    var r = function(N, C) {
      var _ = 236, O = 17, d = N, h = i[C], f = null, c = 0, y = null, b = [], E = {}, B = function(g, v) {
        c = d * 4 + 17, f = function(p) {
          for (var m = new Array(p), x = 0; x < p; x += 1) {
            m[x] = new Array(p);
            for (var P = 0; P < p; P += 1)
              m[x][P] = null;
          }
          return m;
        }(c), I(0, 0), I(c - 7, 0), I(0, c - 7), X(), H(), he(g, v), d >= 7 && ae(g), y == null && (y = Xr(d, h, b)), me(y, v);
      }, I = function(g, v) {
        for (var p = -1; p <= 7; p += 1)
          if (!(g + p <= -1 || c <= g + p))
            for (var m = -1; m <= 7; m += 1)
              v + m <= -1 || c <= v + m || (0 <= p && p <= 6 && (m == 0 || m == 6) || 0 <= m && m <= 6 && (p == 0 || p == 6) || 2 <= p && p <= 4 && 2 <= m && m <= 4 ? f[g + p][v + m] = true : f[g + p][v + m] = false);
      }, R = function() {
        for (var g = 0, v = 0, p = 0; p < 8; p += 1) {
          B(true, p);
          var m = a.getLostPoint(E);
          (p == 0 || g > m) && (g = m, v = p);
        }
        return v;
      }, H = function() {
        for (var g = 8; g < c - 8; g += 1)
          f[g][6] == null && (f[g][6] = g % 2 == 0);
        for (var v = 8; v < c - 8; v += 1)
          f[6][v] == null && (f[6][v] = v % 2 == 0);
      }, X = function() {
        for (var g = a.getPatternPosition(d), v = 0; v < g.length; v += 1)
          for (var p = 0; p < g.length; p += 1) {
            var m = g[v], x = g[p];
            if (f[m][x] == null)
              for (var P = -2; P <= 2; P += 1)
                for (var V = -2; V <= 2; V += 1)
                  P == -2 || P == 2 || V == -2 || V == 2 || P == 0 && V == 0 ? f[m + P][x + V] = true : f[m + P][x + V] = false;
          }
      }, ae = function(g) {
        for (var v = a.getBCHTypeNumber(d), p = 0; p < 18; p += 1) {
          var m = !g && (v >> p & 1) == 1;
          f[Math.floor(p / 3)][p % 3 + c - 8 - 3] = m;
        }
        for (var p = 0; p < 18; p += 1) {
          var m = !g && (v >> p & 1) == 1;
          f[p % 3 + c - 8 - 3][Math.floor(p / 3)] = m;
        }
      }, he = function(g, v) {
        for (var p = h << 3 | v, m = a.getBCHTypeInfo(p), x = 0; x < 15; x += 1) {
          var P = !g && (m >> x & 1) == 1;
          x < 6 ? f[x][8] = P : x < 8 ? f[x + 1][8] = P : f[c - 15 + x][8] = P;
        }
        for (var x = 0; x < 15; x += 1) {
          var P = !g && (m >> x & 1) == 1;
          x < 8 ? f[8][c - x - 1] = P : x < 9 ? f[8][15 - x - 1 + 1] = P : f[8][15 - x - 1] = P;
        }
        f[c - 8][8] = !g;
      }, me = function(g, v) {
        for (var p = -1, m = c - 1, x = 7, P = 0, V = a.getMaskFunction(v), A = c - 1; A > 0; A -= 2)
          for (A == 6 && (A -= 1); ; ) {
            for (var Q = 0; Q < 2; Q += 1)
              if (f[m][A - Q] == null) {
                var G = false;
                P < g.length && (G = (g[P] >>> x & 1) == 1);
                var k = V(m, A - Q);
                k && (G = !G), f[m][A - Q] = G, x -= 1, x == -1 && (P += 1, x = 7);
              }
            if (m += p, m < 0 || c <= m) {
              m -= p, p = -p;
              break;
            }
          }
      }, Ve = function(g, v) {
        for (var p = 0, m = 0, x = 0, P = new Array(v.length), V = new Array(v.length), A = 0; A < v.length; A += 1) {
          var Q = v[A].dataCount, G = v[A].totalCount - Q;
          m = Math.max(m, Q), x = Math.max(x, G), P[A] = new Array(Q);
          for (var k = 0; k < P[A].length; k += 1)
            P[A][k] = 255 & g.getBuffer()[k + p];
          p += Q;
          var fe = a.getErrorCorrectPolynomial(G), le = w(P[A], fe.getLength() - 1), Mn = le.mod(fe);
          V[A] = new Array(fe.getLength() - 1);
          for (var k = 0; k < V[A].length; k += 1) {
            var Dn = k + Mn.getLength() - V[A].length;
            V[A][k] = Dn >= 0 ? Mn.getAt(Dn) : 0;
          }
        }
        for (var Cn = 0, k = 0; k < v.length; k += 1)
          Cn += v[k].totalCount;
        for (var Tt = new Array(Cn), st = 0, k = 0; k < m; k += 1)
          for (var A = 0; A < v.length; A += 1)
            k < P[A].length && (Tt[st] = P[A][k], st += 1);
        for (var k = 0; k < x; k += 1)
          for (var A = 0; A < v.length; A += 1)
            k < V[A].length && (Tt[st] = V[A][k], st += 1);
        return Tt;
      }, Xr = function(g, v, p) {
        for (var m = D.getRSBlocks(g, v), x = u(), P = 0; P < p.length; P += 1) {
          var V = p[P];
          x.put(V.getMode(), 4), x.put(V.getLength(), a.getLengthInBits(V.getMode(), g)), V.write(x);
        }
        for (var A = 0, P = 0; P < m.length; P += 1)
          A += m[P].dataCount;
        if (x.getLengthInBits() > A * 8)
          throw "code length overflow. (" + x.getLengthInBits() + ">" + A * 8 + ")";
        for (x.getLengthInBits() + 4 <= A * 8 && x.put(0, 4); x.getLengthInBits() % 8 != 0; )
          x.putBit(false);
        for (; !(x.getLengthInBits() >= A * 8 || (x.put(_, 8), x.getLengthInBits() >= A * 8)); )
          x.put(O, 8);
        return Ve(x, m);
      };
      E.addData = function(g, v) {
        v = v || "Byte";
        var p = null;
        switch (v) {
          case "Numeric":
            p = M(g);
            break;
          case "Alphanumeric":
            p = T(g);
            break;
          case "Byte":
            p = F(g);
            break;
          case "Kanji":
            p = U(g);
            break;
          default:
            throw "mode:" + v;
        }
        b.push(p), y = null;
      }, E.isDark = function(g, v) {
        if (g < 0 || c <= g || v < 0 || c <= v)
          throw g + "," + v;
        return f[g][v];
      }, E.getModuleCount = function() {
        return c;
      }, E.make = function() {
        if (d < 1) {
          for (var g = 1; g < 40; g++) {
            for (var v = D.getRSBlocks(g, h), p = u(), m = 0; m < b.length; m++) {
              var x = b[m];
              p.put(x.getMode(), 4), p.put(x.getLength(), a.getLengthInBits(x.getMode(), g)), x.write(p);
            }
            for (var P = 0, m = 0; m < v.length; m++)
              P += v[m].dataCount;
            if (p.getLengthInBits() <= P * 8)
              break;
          }
          d = g;
        }
        B(false, R());
      }, E.createTableTag = function(g, v) {
        g = g || 2, v = typeof v > "u" ? g * 4 : v;
        var p = "";
        p += '<table style="', p += " border-width: 0px; border-style: none;", p += " border-collapse: collapse;", p += " padding: 0px; margin: " + v + "px;", p += '">', p += "<tbody>";
        for (var m = 0; m < E.getModuleCount(); m += 1) {
          p += "<tr>";
          for (var x = 0; x < E.getModuleCount(); x += 1)
            p += '<td style="', p += " border-width: 0px; border-style: none;", p += " border-collapse: collapse;", p += " padding: 0px; margin: 0px;", p += " width: " + g + "px;", p += " height: " + g + "px;", p += " background-color: ", p += E.isDark(m, x) ? "#000000" : "#ffffff", p += ";", p += '"/>';
          p += "</tr>";
        }
        return p += "</tbody>", p += "</table>", p;
      }, E.createSvgTag = function(g, v, p, m) {
        var x = {};
        typeof arguments[0] == "object" && (x = arguments[0], g = x.cellSize, v = x.margin, p = x.alt, m = x.title), g = g || 2, v = typeof v > "u" ? g * 4 : v, p = typeof p == "string" ? { text: p } : p || {}, p.text = p.text || null, p.id = p.text ? p.id || "qrcode-description" : null, m = typeof m == "string" ? { text: m } : m || {}, m.text = m.text || null, m.id = m.text ? m.id || "qrcode-title" : null;
        var P = E.getModuleCount() * g + v * 2, V, A, Q, G, k = "", fe;
        for (fe = "l" + g + ",0 0," + g + " -" + g + ",0 0,-" + g + "z ", k += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', k += x.scalable ? "" : ' width="' + P + 'px" height="' + P + 'px"', k += ' viewBox="0 0 ' + P + " " + P + '" ', k += ' preserveAspectRatio="xMinYMin meet"', k += m.text || p.text ? ' role="img" aria-labelledby="' + ke([m.id, p.id].join(" ").trim()) + '"' : "", k += ">", k += m.text ? '<title id="' + ke(m.id) + '">' + ke(m.text) + "</title>" : "", k += p.text ? '<description id="' + ke(p.id) + '">' + ke(p.text) + "</description>" : "", k += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', k += '<path d="', Q = 0; Q < E.getModuleCount(); Q += 1)
          for (G = Q * g + v, V = 0; V < E.getModuleCount(); V += 1)
            E.isDark(Q, V) && (A = V * g + v, k += "M" + A + "," + G + fe);
        return k += '" stroke="transparent" fill="black"/>', k += "</svg>", k;
      }, E.createDataURL = function(g, v) {
        g = g || 2, v = typeof v > "u" ? g * 4 : v;
        var p = E.getModuleCount() * g + v * 2, m = v, x = p - v;
        return S(p, p, function(P, V) {
          if (m <= P && P < x && m <= V && V < x) {
            var A = Math.floor((P - m) / g), Q = Math.floor((V - m) / g);
            return E.isDark(Q, A) ? 0 : 1;
          } else
            return 1;
        });
      }, E.createImgTag = function(g, v, p) {
        g = g || 2, v = typeof v > "u" ? g * 4 : v;
        var m = E.getModuleCount() * g + v * 2, x = "";
        return x += "<img", x += ' src="', x += E.createDataURL(g, v), x += '"', x += ' width="', x += m, x += '"', x += ' height="', x += m, x += '"', p && (x += ' alt="', x += ke(p), x += '"'), x += "/>", x;
      };
      var ke = function(g) {
        for (var v = "", p = 0; p < g.length; p += 1) {
          var m = g.charAt(p);
          switch (m) {
            case "<":
              v += "&lt;";
              break;
            case ">":
              v += "&gt;";
              break;
            case "&":
              v += "&amp;";
              break;
            case '"':
              v += "&quot;";
              break;
            default:
              v += m;
              break;
          }
        }
        return v;
      }, Zr = function(g) {
        var v = 1;
        g = typeof g > "u" ? v * 2 : g;
        var p = E.getModuleCount() * v + g * 2, m = g, x = p - g, P, V, A, Q, G, k = {
          "██": "█",
          "█ ": "▀",
          " █": "▄",
          "  ": " "
        }, fe = {
          "██": "▀",
          "█ ": "▀",
          " █": " ",
          "  ": " "
        }, le = "";
        for (P = 0; P < p; P += 2) {
          for (A = Math.floor((P - m) / v), Q = Math.floor((P + 1 - m) / v), V = 0; V < p; V += 1)
            G = "█", m <= V && V < x && m <= P && P < x && E.isDark(A, Math.floor((V - m) / v)) && (G = " "), m <= V && V < x && m <= P + 1 && P + 1 < x && E.isDark(Q, Math.floor((V - m) / v)) ? G += " " : G += "█", le += g < 1 && P + 1 >= x ? fe[G] : k[G];
          le += `
`;
        }
        return p % 2 && g > 0 ? le.substring(0, le.length - p - 1) + Array(p + 1).join("▀") : le.substring(0, le.length - 1);
      };
      return E.createASCII = function(g, v) {
        if (g = g || 1, g < 2)
          return Zr(v);
        g -= 1, v = typeof v > "u" ? g * 2 : v;
        var p = E.getModuleCount() * g + v * 2, m = v, x = p - v, P, V, A, Q, G = Array(g + 1).join("██"), k = Array(g + 1).join("  "), fe = "", le = "";
        for (P = 0; P < p; P += 1) {
          for (A = Math.floor((P - m) / g), le = "", V = 0; V < p; V += 1)
            Q = 1, m <= V && V < x && m <= P && P < x && E.isDark(A, Math.floor((V - m) / g)) && (Q = 0), le += Q ? G : k;
          for (A = 0; A < g; A += 1)
            fe += le + `
`;
        }
        return fe.substring(0, fe.length - 1);
      }, E.renderTo2dContext = function(g, v) {
        v = v || 2;
        for (var p = E.getModuleCount(), m = 0; m < p; m++)
          for (var x = 0; x < p; x++)
            g.fillStyle = E.isDark(m, x) ? "black" : "white", g.fillRect(m * v, x * v, v, v);
      }, E;
    };
    r.stringToBytesFuncs = {
      default: function(N) {
        for (var C = [], _ = 0; _ < N.length; _ += 1) {
          var O = N.charCodeAt(_);
          C.push(O & 255);
        }
        return C;
      }
    }, r.stringToBytes = r.stringToBytesFuncs.default, r.createStringToBytes = function(N, C) {
      var _ = function() {
        for (var d = K(N), h = function() {
          var H = d.read();
          if (H == -1)
            throw "eof";
          return H;
        }, f = 0, c = {}; ; ) {
          var y = d.read();
          if (y == -1)
            break;
          var b = h(), E = h(), B = h(), I = String.fromCharCode(y << 8 | b), R = E << 8 | B;
          c[I] = R, f += 1;
        }
        if (f != C)
          throw f + " != " + C;
        return c;
      }(), O = "?".charCodeAt(0);
      return function(d) {
        for (var h = [], f = 0; f < d.length; f += 1) {
          var c = d.charCodeAt(f);
          if (c < 128)
            h.push(c);
          else {
            var y = _[d.charAt(f)];
            typeof y == "number" ? (y & 255) == y ? h.push(y) : (h.push(y >>> 8), h.push(y & 255)) : h.push(O);
          }
        }
        return h;
      };
    };
    var o = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8
    }, i = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    }, s = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    }, a = function() {
      var N = [
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50],
        [6, 30, 54],
        [6, 32, 58],
        [6, 34, 62],
        [6, 26, 46, 66],
        [6, 26, 48, 70],
        [6, 26, 50, 74],
        [6, 30, 54, 78],
        [6, 30, 56, 82],
        [6, 30, 58, 86],
        [6, 34, 62, 90],
        [6, 28, 50, 72, 94],
        [6, 26, 50, 74, 98],
        [6, 30, 54, 78, 102],
        [6, 28, 54, 80, 106],
        [6, 32, 58, 84, 110],
        [6, 30, 58, 86, 114],
        [6, 34, 62, 90, 118],
        [6, 26, 50, 74, 98, 122],
        [6, 30, 54, 78, 102, 126],
        [6, 26, 52, 78, 104, 130],
        [6, 30, 56, 82, 108, 134],
        [6, 34, 60, 86, 112, 138],
        [6, 30, 58, 86, 114, 142],
        [6, 34, 62, 90, 118, 146],
        [6, 30, 54, 78, 102, 126, 150],
        [6, 24, 50, 76, 102, 128, 154],
        [6, 28, 54, 80, 106, 132, 158],
        [6, 32, 58, 84, 110, 136, 162],
        [6, 26, 54, 82, 110, 138, 166],
        [6, 30, 58, 86, 114, 142, 170]
      ], C = 1335, _ = 7973, O = 21522, d = {}, h = function(f) {
        for (var c = 0; f != 0; )
          c += 1, f >>>= 1;
        return c;
      };
      return d.getBCHTypeInfo = function(f) {
        for (var c = f << 10; h(c) - h(C) >= 0; )
          c ^= C << h(c) - h(C);
        return (f << 10 | c) ^ O;
      }, d.getBCHTypeNumber = function(f) {
        for (var c = f << 12; h(c) - h(_) >= 0; )
          c ^= _ << h(c) - h(_);
        return f << 12 | c;
      }, d.getPatternPosition = function(f) {
        return N[f - 1];
      }, d.getMaskFunction = function(f) {
        switch (f) {
          case s.PATTERN000:
            return function(c, y) {
              return (c + y) % 2 == 0;
            };
          case s.PATTERN001:
            return function(c, y) {
              return c % 2 == 0;
            };
          case s.PATTERN010:
            return function(c, y) {
              return y % 3 == 0;
            };
          case s.PATTERN011:
            return function(c, y) {
              return (c + y) % 3 == 0;
            };
          case s.PATTERN100:
            return function(c, y) {
              return (Math.floor(c / 2) + Math.floor(y / 3)) % 2 == 0;
            };
          case s.PATTERN101:
            return function(c, y) {
              return c * y % 2 + c * y % 3 == 0;
            };
          case s.PATTERN110:
            return function(c, y) {
              return (c * y % 2 + c * y % 3) % 2 == 0;
            };
          case s.PATTERN111:
            return function(c, y) {
              return (c * y % 3 + (c + y) % 2) % 2 == 0;
            };
          default:
            throw "bad maskPattern:" + f;
        }
      }, d.getErrorCorrectPolynomial = function(f) {
        for (var c = w([1], 0), y = 0; y < f; y += 1)
          c = c.multiply(w([1, l.gexp(y)], 0));
        return c;
      }, d.getLengthInBits = function(f, c) {
        if (1 <= c && c < 10)
          switch (f) {
            case o.MODE_NUMBER:
              return 10;
            case o.MODE_ALPHA_NUM:
              return 9;
            case o.MODE_8BIT_BYTE:
              return 8;
            case o.MODE_KANJI:
              return 8;
            default:
              throw "mode:" + f;
          }
        else if (c < 27)
          switch (f) {
            case o.MODE_NUMBER:
              return 12;
            case o.MODE_ALPHA_NUM:
              return 11;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 10;
            default:
              throw "mode:" + f;
          }
        else if (c < 41)
          switch (f) {
            case o.MODE_NUMBER:
              return 14;
            case o.MODE_ALPHA_NUM:
              return 13;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 12;
            default:
              throw "mode:" + f;
          }
        else
          throw "type:" + c;
      }, d.getLostPoint = function(f) {
        for (var c = f.getModuleCount(), y = 0, b = 0; b < c; b += 1)
          for (var E = 0; E < c; E += 1) {
            for (var B = 0, I = f.isDark(b, E), R = -1; R <= 1; R += 1)
              if (!(b + R < 0 || c <= b + R))
                for (var H = -1; H <= 1; H += 1)
                  E + H < 0 || c <= E + H || R == 0 && H == 0 || I == f.isDark(b + R, E + H) && (B += 1);
            B > 5 && (y += 3 + B - 5);
          }
        for (var b = 0; b < c - 1; b += 1)
          for (var E = 0; E < c - 1; E += 1) {
            var X = 0;
            f.isDark(b, E) && (X += 1), f.isDark(b + 1, E) && (X += 1), f.isDark(b, E + 1) && (X += 1), f.isDark(b + 1, E + 1) && (X += 1), (X == 0 || X == 4) && (y += 3);
          }
        for (var b = 0; b < c; b += 1)
          for (var E = 0; E < c - 6; E += 1)
            f.isDark(b, E) && !f.isDark(b, E + 1) && f.isDark(b, E + 2) && f.isDark(b, E + 3) && f.isDark(b, E + 4) && !f.isDark(b, E + 5) && f.isDark(b, E + 6) && (y += 40);
        for (var E = 0; E < c; E += 1)
          for (var b = 0; b < c - 6; b += 1)
            f.isDark(b, E) && !f.isDark(b + 1, E) && f.isDark(b + 2, E) && f.isDark(b + 3, E) && f.isDark(b + 4, E) && !f.isDark(b + 5, E) && f.isDark(b + 6, E) && (y += 40);
        for (var ae = 0, E = 0; E < c; E += 1)
          for (var b = 0; b < c; b += 1)
            f.isDark(b, E) && (ae += 1);
        var he = Math.abs(100 * ae / c / c - 50) / 5;
        return y += he * 10, y;
      }, d;
    }(), l = function() {
      for (var N = new Array(256), C = new Array(256), _ = 0; _ < 8; _ += 1)
        N[_] = 1 << _;
      for (var _ = 8; _ < 256; _ += 1)
        N[_] = N[_ - 4] ^ N[_ - 5] ^ N[_ - 6] ^ N[_ - 8];
      for (var _ = 0; _ < 255; _ += 1)
        C[N[_]] = _;
      var O = {};
      return O.glog = function(d) {
        if (d < 1)
          throw "glog(" + d + ")";
        return C[d];
      }, O.gexp = function(d) {
        for (; d < 0; )
          d += 255;
        for (; d >= 256; )
          d -= 255;
        return N[d];
      }, O;
    }();
    function w(N, C) {
      if (typeof N.length > "u")
        throw N.length + "/" + C;
      var _ = function() {
        for (var d = 0; d < N.length && N[d] == 0; )
          d += 1;
        for (var h = new Array(N.length - d + C), f = 0; f < N.length - d; f += 1)
          h[f] = N[f + d];
        return h;
      }(), O = {};
      return O.getAt = function(d) {
        return _[d];
      }, O.getLength = function() {
        return _.length;
      }, O.multiply = function(d) {
        for (var h = new Array(O.getLength() + d.getLength() - 1), f = 0; f < O.getLength(); f += 1)
          for (var c = 0; c < d.getLength(); c += 1)
            h[f + c] ^= l.gexp(l.glog(O.getAt(f)) + l.glog(d.getAt(c)));
        return w(h, 0);
      }, O.mod = function(d) {
        if (O.getLength() - d.getLength() < 0)
          return O;
        for (var h = l.glog(O.getAt(0)) - l.glog(d.getAt(0)), f = new Array(O.getLength()), c = 0; c < O.getLength(); c += 1)
          f[c] = O.getAt(c);
        for (var c = 0; c < d.getLength(); c += 1)
          f[c] ^= l.gexp(l.glog(d.getAt(c)) + h);
        return w(f, 0).mod(d);
      }, O;
    }
    var D = function() {
      var N = [
        // L
        // M
        // Q
        // H
        // 1
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        // 2
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        // 3
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        // 4
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        // 5
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        // 6
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        // 7
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        // 8
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        // 9
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        // 10
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        // 11
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        // 12
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        // 13
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        // 14
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        // 15
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12, 7, 37, 13],
        // 16
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        // 17
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        // 18
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        // 19
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        // 20
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        // 21
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        // 22
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        // 23
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        // 24
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        // 25
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        // 26
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        // 27
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        // 28
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        // 29
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        // 30
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        // 31
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        // 32
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        // 33
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        // 34
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        // 35
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        // 36
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        // 37
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        // 38
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        // 39
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        // 40
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
      ], C = function(d, h) {
        var f = {};
        return f.totalCount = d, f.dataCount = h, f;
      }, _ = {}, O = function(d, h) {
        switch (h) {
          case i.L:
            return N[(d - 1) * 4 + 0];
          case i.M:
            return N[(d - 1) * 4 + 1];
          case i.Q:
            return N[(d - 1) * 4 + 2];
          case i.H:
            return N[(d - 1) * 4 + 3];
          default:
            return;
        }
      };
      return _.getRSBlocks = function(d, h) {
        var f = O(d, h);
        if (typeof f > "u")
          throw "bad rs block @ typeNumber:" + d + "/errorCorrectionLevel:" + h;
        for (var c = f.length / 3, y = [], b = 0; b < c; b += 1)
          for (var E = f[b * 3 + 0], B = f[b * 3 + 1], I = f[b * 3 + 2], R = 0; R < E; R += 1)
            y.push(C(B, I));
        return y;
      }, _;
    }(), u = function() {
      var N = [], C = 0, _ = {};
      return _.getBuffer = function() {
        return N;
      }, _.getAt = function(O) {
        var d = Math.floor(O / 8);
        return (N[d] >>> 7 - O % 8 & 1) == 1;
      }, _.put = function(O, d) {
        for (var h = 0; h < d; h += 1)
          _.putBit((O >>> d - h - 1 & 1) == 1);
      }, _.getLengthInBits = function() {
        return C;
      }, _.putBit = function(O) {
        var d = Math.floor(C / 8);
        N.length <= d && N.push(0), O && (N[d] |= 128 >>> C % 8), C += 1;
      }, _;
    }, M = function(N) {
      var C = o.MODE_NUMBER, _ = N, O = {};
      O.getMode = function() {
        return C;
      }, O.getLength = function(f) {
        return _.length;
      }, O.write = function(f) {
        for (var c = _, y = 0; y + 2 < c.length; )
          f.put(d(c.substring(y, y + 3)), 10), y += 3;
        y < c.length && (c.length - y == 1 ? f.put(d(c.substring(y, y + 1)), 4) : c.length - y == 2 && f.put(d(c.substring(y, y + 2)), 7));
      };
      var d = function(f) {
        for (var c = 0, y = 0; y < f.length; y += 1)
          c = c * 10 + h(f.charAt(y));
        return c;
      }, h = function(f) {
        if ("0" <= f && f <= "9")
          return f.charCodeAt(0) - "0".charCodeAt(0);
        throw "illegal char :" + f;
      };
      return O;
    }, T = function(N) {
      var C = o.MODE_ALPHA_NUM, _ = N, O = {};
      O.getMode = function() {
        return C;
      }, O.getLength = function(h) {
        return _.length;
      }, O.write = function(h) {
        for (var f = _, c = 0; c + 1 < f.length; )
          h.put(
            d(f.charAt(c)) * 45 + d(f.charAt(c + 1)),
            11
          ), c += 2;
        c < f.length && h.put(d(f.charAt(c)), 6);
      };
      var d = function(h) {
        if ("0" <= h && h <= "9")
          return h.charCodeAt(0) - "0".charCodeAt(0);
        if ("A" <= h && h <= "Z")
          return h.charCodeAt(0) - "A".charCodeAt(0) + 10;
        switch (h) {
          case " ":
            return 36;
          case "$":
            return 37;
          case "%":
            return 38;
          case "*":
            return 39;
          case "+":
            return 40;
          case "-":
            return 41;
          case ".":
            return 42;
          case "/":
            return 43;
          case ":":
            return 44;
          default:
            throw "illegal char :" + h;
        }
      };
      return O;
    }, F = function(N) {
      var C = o.MODE_8BIT_BYTE, _ = r.stringToBytes(N), O = {};
      return O.getMode = function() {
        return C;
      }, O.getLength = function(d) {
        return _.length;
      }, O.write = function(d) {
        for (var h = 0; h < _.length; h += 1)
          d.put(_[h], 8);
      }, O;
    }, U = function(N) {
      var C = o.MODE_KANJI, _ = r.stringToBytesFuncs.SJIS;
      if (!_)
        throw "sjis not supported.";
      (function(h, f) {
        var c = _(h);
        if (c.length != 2 || (c[0] << 8 | c[1]) != f)
          throw "sjis not supported.";
      })("友", 38726);
      var O = _(N), d = {};
      return d.getMode = function() {
        return C;
      }, d.getLength = function(h) {
        return ~~(O.length / 2);
      }, d.write = function(h) {
        for (var f = O, c = 0; c + 1 < f.length; ) {
          var y = (255 & f[c]) << 8 | 255 & f[c + 1];
          if (33088 <= y && y <= 40956)
            y -= 33088;
          else if (57408 <= y && y <= 60351)
            y -= 49472;
          else
            throw "illegal char at " + (c + 1) + "/" + y;
          y = (y >>> 8 & 255) * 192 + (y & 255), h.put(y, 13), c += 2;
        }
        if (c < f.length)
          throw "illegal char at " + (c + 1);
      }, d;
    }, W = function() {
      var N = [], C = {};
      return C.writeByte = function(_) {
        N.push(_ & 255);
      }, C.writeShort = function(_) {
        C.writeByte(_), C.writeByte(_ >>> 8);
      }, C.writeBytes = function(_, O, d) {
        O = O || 0, d = d || _.length;
        for (var h = 0; h < d; h += 1)
          C.writeByte(_[h + O]);
      }, C.writeString = function(_) {
        for (var O = 0; O < _.length; O += 1)
          C.writeByte(_.charCodeAt(O));
      }, C.toByteArray = function() {
        return N;
      }, C.toString = function() {
        var _ = "";
        _ += "[";
        for (var O = 0; O < N.length; O += 1)
          O > 0 && (_ += ","), _ += N[O];
        return _ += "]", _;
      }, C;
    }, ee = function() {
      var N = 0, C = 0, _ = 0, O = "", d = {}, h = function(c) {
        O += String.fromCharCode(f(c & 63));
      }, f = function(c) {
        if (!(c < 0)) {
          if (c < 26)
            return 65 + c;
          if (c < 52)
            return 97 + (c - 26);
          if (c < 62)
            return 48 + (c - 52);
          if (c == 62)
            return 43;
          if (c == 63)
            return 47;
        }
        throw "n:" + c;
      };
      return d.writeByte = function(c) {
        for (N = N << 8 | c & 255, C += 8, _ += 1; C >= 6; )
          h(N >>> C - 6), C -= 6;
      }, d.flush = function() {
        if (C > 0 && (h(N << 6 - C), N = 0, C = 0), _ % 3 != 0)
          for (var c = 3 - _ % 3, y = 0; y < c; y += 1)
            O += "=";
      }, d.toString = function() {
        return O;
      }, d;
    }, K = function(N) {
      var C = N, _ = 0, O = 0, d = 0, h = {};
      h.read = function() {
        for (; d < 8; ) {
          if (_ >= C.length) {
            if (d == 0)
              return -1;
            throw "unexpected end of file./" + d;
          }
          var c = C.charAt(_);
          if (_ += 1, c == "=")
            return d = 0, -1;
          if (c.match(/^\s$/))
            continue;
          O = O << 6 | f(c.charCodeAt(0)), d += 6;
        }
        var y = O >>> d - 8 & 255;
        return d -= 8, y;
      };
      var f = function(c) {
        if (65 <= c && c <= 90)
          return c - 65;
        if (97 <= c && c <= 122)
          return c - 97 + 26;
        if (48 <= c && c <= 57)
          return c - 48 + 52;
        if (c == 43)
          return 62;
        if (c == 47)
          return 63;
        throw "c:" + c;
      };
      return h;
    }, ue = function(N, C) {
      var _ = N, O = C, d = new Array(N * C), h = {};
      h.setPixel = function(b, E, B) {
        d[E * _ + b] = B;
      }, h.write = function(b) {
        b.writeString("GIF87a"), b.writeShort(_), b.writeShort(O), b.writeByte(128), b.writeByte(0), b.writeByte(0), b.writeByte(0), b.writeByte(0), b.writeByte(0), b.writeByte(255), b.writeByte(255), b.writeByte(255), b.writeString(","), b.writeShort(0), b.writeShort(0), b.writeShort(_), b.writeShort(O), b.writeByte(0);
        var E = 2, B = c(E);
        b.writeByte(E);
        for (var I = 0; B.length - I > 255; )
          b.writeByte(255), b.writeBytes(B, I, 255), I += 255;
        b.writeByte(B.length - I), b.writeBytes(B, I, B.length - I), b.writeByte(0), b.writeString(";");
      };
      var f = function(b) {
        var E = b, B = 0, I = 0, R = {};
        return R.write = function(H, X) {
          if (H >>> X)
            throw "length over";
          for (; B + X >= 8; )
            E.writeByte(255 & (H << B | I)), X -= 8 - B, H >>>= 8 - B, I = 0, B = 0;
          I = H << B | I, B = B + X;
        }, R.flush = function() {
          B > 0 && E.writeByte(I);
        }, R;
      }, c = function(b) {
        for (var E = 1 << b, B = (1 << b) + 1, I = b + 1, R = y(), H = 0; H < E; H += 1)
          R.add(String.fromCharCode(H));
        R.add(String.fromCharCode(E)), R.add(String.fromCharCode(B));
        var X = W(), ae = f(X);
        ae.write(E, I);
        var he = 0, me = String.fromCharCode(d[he]);
        for (he += 1; he < d.length; ) {
          var Ve = String.fromCharCode(d[he]);
          he += 1, R.contains(me + Ve) ? me = me + Ve : (ae.write(R.indexOf(me), I), R.size() < 4095 && (R.size() == 1 << I && (I += 1), R.add(me + Ve)), me = Ve);
        }
        return ae.write(R.indexOf(me), I), ae.write(B, I), ae.flush(), X.toByteArray();
      }, y = function() {
        var b = {}, E = 0, B = {};
        return B.add = function(I) {
          if (B.contains(I))
            throw "dup key:" + I;
          b[I] = E, E += 1;
        }, B.size = function() {
          return E;
        }, B.indexOf = function(I) {
          return b[I];
        }, B.contains = function(I) {
          return typeof b[I] < "u";
        }, B;
      };
      return h;
    }, S = function(N, C, _) {
      for (var O = ue(N, C), d = 0; d < C; d += 1)
        for (var h = 0; h < N; h += 1)
          O.setPixel(h, d, _(h, d));
      var f = W();
      O.write(f);
      for (var c = ee(), y = f.toByteArray(), b = 0; b < y.length; b += 1)
        c.writeByte(y[b]);
      return c.flush(), "data:image/gif;base64," + c;
    };
    return r;
  }();
  (function() {
    n.stringToBytesFuncs["UTF-8"] = function(r) {
      function o(i) {
        for (var s = [], a = 0; a < i.length; a++) {
          var l = i.charCodeAt(a);
          l < 128 ? s.push(l) : l < 2048 ? s.push(
            192 | l >> 6,
            128 | l & 63
          ) : l < 55296 || l >= 57344 ? s.push(
            224 | l >> 12,
            128 | l >> 6 & 63,
            128 | l & 63
          ) : (a++, l = 65536 + ((l & 1023) << 10 | i.charCodeAt(a) & 1023), s.push(
            240 | l >> 18,
            128 | l >> 12 & 63,
            128 | l >> 6 & 63,
            128 | l & 63
          ));
        }
        return s;
      }
      return o(r);
    };
  })(), function(r) {
    e.exports = r();
  }(function() {
    return n;
  });
})(Gr);
var xs = Gr.exports;
var Ms = Ns(xs);
var xn = class _xn {
  constructor(t) {
    z(this, "_options");
    z(this, "_container");
    z(this, "_canvas");
    z(this, "_qr");
    z(this, "_drawingPromise");
    this._options = t ? er(xt(zn, t)) : zn, this.update();
  }
  static _clearContainer(t) {
    t && (t.innerHTML = "");
  }
  update(t) {
    _xn._clearContainer(this._container), this._options = t ? er(xt(this._options, t)) : this._options, this._options.data && (this._qr = Ms(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || gs(this._options.data)), this._qr.make(), this._canvas = new ys(this._options), this._drawingPromise = this._canvas.drawQR(this._qr), this.append(this._container));
  }
  append(t) {
    if (t) {
      if (typeof t.appendChild != "function")
        throw "Container should be a single DOM node";
      this._canvas && t.appendChild(this._canvas.getCanvas()), this._container = t;
    }
  }
  async getImageUrl(t) {
    return this._drawingPromise && await this._drawingPromise === void 0 && this._canvas ? this._canvas.getCanvas().toDataURL(`image/${t}`) : "";
  }
  download(t) {
    this._drawingPromise && this._drawingPromise.then(() => {
      if (!this._canvas)
        return;
      const n = t, r = n.extension || "png", o = n.name || "qr", i = this._canvas.getCanvas().toDataURL(`image/${r}`);
      vs(i, `${o}.${r}`);
    });
  }
};
var Ds = ["src"];
var Cs = { key: 1 };
var Is = Ar({
  __name: "QRCodeVue3Async",
  props: {
    value: { default: "" },
    width: { default: 300 },
    height: { default: 300 },
    margin: { default: 0 },
    imgclass: { default: "" },
    myclass: { default: "" },
    downloadButton: { default: "" },
    ButtonName: { default: "Download" },
    qrOptions: { default: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q"
    } },
    imageOptions: { default: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 } },
    dotsOptions: { default: {
      type: "dots",
      color: "#6a1a4c",
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          { offset: 0, color: "#6a1a4c" },
          { offset: 1, color: "#6a1a4c" }
        ]
      }
    } },
    backgroundOptions: { default: { color: "#ffffff" } },
    cornersSquareOptions: { default: { type: "dot", color: "#000000" } },
    cornersDotOptions: { default: { type: void 0, color: "#000000" } },
    fileExt: { default: "png" },
    image: { default: "" },
    download: { type: Boolean, default: false },
    downloadOptions: { default: { name: "vqr", extension: "png" } }
  },
  async setup(e) {
    let t, n;
    const r = e, o = new xn({
      data: r.value,
      width: r.width,
      height: r.height,
      margin: r.margin,
      qrOptions: r.qrOptions,
      imageOptions: r.imageOptions,
      dotsOptions: r.dotsOptions,
      backgroundOptions: r.backgroundOptions,
      image: r.image,
      cornersSquareOptions: r.cornersSquareOptions,
      cornersDotOptions: r.cornersDotOptions
    });
    let i = ([t, n] = Li(() => o.getImageUrl(r.fileExt)), t = await t, n(), t);
    function s() {
      o.download(r.downloadOptions);
    }
    return (a, l) => (Qe(), kt("div", null, [
      vt(i) ? (Qe(), kt("div", {
        key: 0,
        class: Ue(a.myclass)
      }, [
        Nt("img", {
          src: vt(i),
          class: Ue(a.imgclass),
          crossorigin: "anonymous"
        }, null, 10, Ds)
      ], 2)) : Yn("", true),
      vt(i) && a.download ? (Qe(), kt("div", Cs, [
        Nt("button", {
          onClick: s,
          class: Ue(a.downloadButton)
        }, ho(a.ButtonName), 3)
      ])) : Yn("", true)
    ]));
  }
});
var Ss = Ar({
  __name: "QRCodeVue3",
  props: {
    value: { default: "" },
    width: { default: 300 },
    height: { default: 300 },
    margin: { default: 0 },
    imgclass: { default: "" },
    myclass: { default: "" },
    downloadButton: { default: "" },
    ButtonName: { default: "Download" },
    qrOptions: { default: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q"
    } },
    imageOptions: { default: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 } },
    dotsOptions: { default: {
      type: "dots",
      color: "#6a1a4c",
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          { offset: 0, color: "#6a1a4c" },
          { offset: 1, color: "#6a1a4c" }
        ]
      }
    } },
    backgroundOptions: { default: { color: "#ffffff" } },
    cornersSquareOptions: { default: { type: "dot", color: "#000000" } },
    cornersDotOptions: { default: { type: void 0, color: "#000000" } },
    fileExt: { default: "png" },
    image: { default: "" },
    download: { type: Boolean, default: false },
    downloadOptions: { default: { name: "vqr", extension: "png" } }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Qe(), jr(_i, null, {
      default: pi(() => [
        xe(Is, {
          "background-options": t.backgroundOptions,
          "button-name": t.ButtonName,
          "corners-dot-options": t.cornersDotOptions,
          "corners-square-options": t.cornersSquareOptions,
          "dots-options": t.dotsOptions,
          download: t.download,
          "download-button": t.downloadButton,
          "download-options": t.downloadOptions,
          "file-ext": t.fileExt,
          height: t.height,
          image: t.image,
          "image-options": t.imageOptions,
          imgclass: t.imgclass,
          margin: t.margin,
          value: t.value,
          myclass: t.myclass,
          "qr-options": t.qrOptions,
          width: t.width
        }, null, 8, ["background-options", "button-name", "corners-dot-options", "corners-square-options", "dots-options", "download", "download-button", "download-options", "file-ext", "height", "image", "image-options", "imgclass", "margin", "value", "myclass", "qr-options", "width"])
      ]),
      _: 1
    }));
  }
});
export {
  Ss as default
};
//# sourceMappingURL=qrcode-vue3.js.map
