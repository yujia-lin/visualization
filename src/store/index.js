import Vue from 'vue'
import vuex from 'vuex'
import {toolbarlabel,drag,getElementsByClass} from "../static/drag"
Vue.use(vuex);


import commit from './assembly/commit.js';//引入某个store对象
import generatelist from './assembly/generatelist.js';//引入某个store对象


export default new vuex.Store({
    state:{
      login:100,
    },
    modules:{
      commit:commit,
      generatelist:generatelist
    },
    mutations: {
	  	increment (state,str) {
	      // 变更状态
	    	state.generatelist.item[state.generatelist.currentId].codecontent+=str
	    	
	    }
	}
})