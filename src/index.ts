import type { Plugin } from 'vite'

export default function uniPolyfill(): Plugin {
  return {
    name: 'vite-plugin-uni-polyfill',
    transform(code, id) {
      if (!id.endsWith('@dcloudio/uni-mp-vue/dist/vue.runtime.esm.js'))
        return

      code += `
        // Vue 3 components mock
        function createMockComponent(name) {
          return {
            setup() {
              throw new Error("[vite-plugin-uni-polyfill] " + name + " It is not supported in the current version of Vue that Uni App relies on. It\'s provided to avoid compiler errors.")
            }
          }
        }
        export var TransitionGroup = /*#__PURE__*/ createMockComponent('TransitionGroup')
      `

      return code
    },
  }
}
