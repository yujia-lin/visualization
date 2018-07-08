<template>
  <div class="hello">
    <h1>{{ num }}</h1>
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

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: this.$store.state.login,
    }
  },
  methods: {
    show: function () {
      console.log(11)
      axios.get('/api/v2/book/search',{
        params:{
          q : "javascript", 
          count : 1
        }
      })
      .then(function(response){
        // 成功
        console.log(response);
      })
      .catch(function(err){
        // 失败

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
