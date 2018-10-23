// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import axios from './request'
import VueJsonp from 'vue-jsonp'
import 'mint-ui/lib/style.css'
import echarts from 'echarts'
import 'lib-flexible/flexible.js'
import './static/fontstyle.css'
import './static/my-mint.css'

Vue.use(MintUI)

Vue.use(VueJsonp)
Vue.prototype.$ajax=axios;
Vue.prototype.$echarts = echarts ;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
