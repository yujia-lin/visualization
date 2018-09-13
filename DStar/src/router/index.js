import Vue from 'vue'
import Router from 'vue-router'
import trend from '@/components/trend'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	    {
	      path: '/trend',
	      component: trend
	    }
	]
})
