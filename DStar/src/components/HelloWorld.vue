<template>
  <div class="hello">
    <h1>{{ num }}</h1>
    <div style="width:220px">
    {{datas}}
    </div>
    <h2 @click="show()">Essential Links</h2>
    <p>{{imei}}</p>
    <input type="text" class="input1"  v-model="items.type1" ref="type1" autofocus="autofocus"/>
    <input type="text" class="input2"  v-model="items.type2" ref="type2"/>
    <input type="text" class="input3"  v-model="items.type3" ref="type3"/>
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

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: this.$store.state.login,
      datas:null,
      items: {
        type1:'',
        type2:'',
        type3:'',
    	},
    	imei:"",
    	focusState1:true,
    	focusState2:false,
    	focusState3:false,
    }
  },
  watch:{
    items:{
        handler:function(val,oldval){
						if(val.type1!=""){
							 this.$refs.type2.focus()
						}

            console.log(val);
            console.log(oldval);
            console.log(this.$refs.type1.value);
//          
            console.log(this.$refs.type2.value);
//          console.log(this.$refs.type3.value);
        },
        deep:true
    }
	},
  methods: {
    show: function () {
    var _this=this;
      console.log(11)
      _this.imei="4545"
      this.$ajax.get("http://localhost:3000/news")
      	.then((rep)=>{
      		console.log(rep)
      	})
//    var params={
//        q : "javascript", 
//        count : 1
//      }
//			this.$jsonp('https://api.douban.com/v2/book/search', params ).then(json => {
//			　　console.log(json)
//				
//			　　// 返回数据 json， 返回的数据就是json格式
//			}).catch(err => {
//			　　console.log(err)
//			})

   },
   focus1() {
      this.focusState = true
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
