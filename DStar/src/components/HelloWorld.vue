<template>
  <div class="hello">
    <h1>{{ num }}</h1>
    <div style="width:220px">
    {{datas}}
    </div>
    <h2 @click="show()">Essential Links</h2>
    <mt-tabbar>
      <mt-tab-item id="外卖">
      <!-- <img slot="icon" src="../assets/100x100.png"> -->
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        发现
      </mt-tab-item>

    </mt-tabbar>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs';
var instance = axios.create({
	url: '/api',
  baseURL: 'https://api.douban.com/',
  withCredentials: false,
  timeout: 1000,
  headers:{
    'Content-Type':'application/x-www-form-urlencoded'
	}
});
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: this.$store.state.login,
      datas:null,
    }
  },
  methods: {
    show: function () {
    var _this=this;
      console.log(11)
      var params={
          q : "javascript", 
          count : 1
        }
      axios.post('/api/v2/book/search', qs.stringify(params))
			.then(response => {
			  console.log(response);
			})
			.catch(err => {
			  console.log(err);
			});
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
