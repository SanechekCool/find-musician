import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  data: () => ({
    color: "#eeeeee",
    domain: 'http://localhost:5000'
  }),
  created(){
    
  },
  render: h => h(App)
}).$mount('#app')
