import { App, Directive } from 'vue';
declare module 'gao-scroll-animate' {
  const install: (app: App) => void
  export { install as default }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    vAnimate: Directive<HTMLElement, any>
    animateDuration: String
  }
}