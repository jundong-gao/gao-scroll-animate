### 适用于Vue3开发的官网页面，滚动动画插件

### 安装
```bash
npm install gao-scroll-animate
```

### 使用
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import GaoScrollAnimate from 'gao-scroll-animate'
import 'gao-scroll-animate/lib/gao-scroll-animate.css'

const app = createApp(App)
app.use(GaoScrollAnimate)
app.mount('#app')

```


### 属性
| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| data-animate | String | - | animate.css 4.x的动画类名，可以自定义 |
| data-duration | String | .5s | 动画持续时间 |


### 示例
```html
<template>
  <div class="container">
    <div class="item" data-animate="animate__fadeInLeft" data-duration=".2s">Fade In Up</div>
  </div>
</template>
```