import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import '_element-ui@2.0.4@element-ui/lib/theme-chalk/index.css'
import '_element-ui@2.0.4@element-ui/lib/theme-chalk/display.css'
Vue.use(ElementUi)
new Vue({
  el: '#app',
  render: h => h(App)
})
