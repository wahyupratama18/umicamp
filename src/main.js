import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import VueScrollTo from 'vue-scrollto'
import VueLazyload from 'vue-lazyload'

AOS.init()

createApp(App)
.use(router)
.use(VueScrollTo)
.use(VueLazyload)
.mount('#app')
