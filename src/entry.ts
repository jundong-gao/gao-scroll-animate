import type { App } from "vue";
import 'animate.css'
import './animate.scss'



const install = (app: App) => {
  app.directive('animate', {
    mounted(el: HTMLElement) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            // 添加动画
            const animateClassName = el.getAttribute('data-animate') || ''
            if(!animateClassName) return
            const duration = el.getAttribute('data-duration') || ''
            el.style.setProperty('--gao-animate-duration', duration)
            el.classList.add(...['animate__animated',  animateClassName!, 'gao-animate-duration'])
            // 结束监听
            observer.unobserve(el)
          }
        })
      })
      observer.observe(el)
    }
  })
}


export default install