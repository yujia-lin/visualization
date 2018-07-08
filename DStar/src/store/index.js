import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);


import commit from './assembly/commit.js';//引入某个store对象


export default new vuex.Store({
    state:{
      login:100
    },
    modules:{
      commit:commit
    }
})