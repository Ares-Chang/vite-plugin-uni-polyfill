# vite-plugin-uni-polyfill

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

解决 UniApp 依赖版本与 Vue 主版本库差异导致其它库不可使用问题.

- 补充 `TransitionGroup API` 避免小程序 [VueUse](https://github.com/vueuse/vueuse) 编译错误。
  - 提取自 [@uni-app#4604](https://github.com/dcloudio/uni-app/issues/4604) ，感谢提供解决方案！

## License

[MIT](./LICENSE) License © 2024-PRESENT [Ares Chang](https://github.com/Ares-Chang)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/vite-plugin-uni-polyfill?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/vite-plugin-uni-polyfill
[npm-downloads-src]: https://img.shields.io/npm/dm/vite-plugin-uni-polyfill?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/vite-plugin-uni-polyfill
[bundle-src]: https://img.shields.io/bundlephobia/minzip/vite-plugin-uni-polyfill?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=vite-plugin-uni-polyfill
[license-src]: https://img.shields.io/github/license/Ares-Chang/vite-plugin-uni-polyfill.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/Ares-Chang/vite-plugin-uni-polyfill/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/vite-plugin-uni-polyfill
