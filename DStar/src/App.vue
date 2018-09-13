<template>
  <div id="app">
  	<heads></heads>
  	<alltarget></alltarget>
    <router-view/>
    <router-link to="./">检测</router-link>
    <router-link to="./trend">趋势</router-link>
  </div>
</template>

<script>
import heads from "./components/heads"
import alltarget from "./components/alltarget"
export default {
	components:{
		heads,
		alltarget,
	},
  name: 'App'
}
</script>

<style>
*{padding:0;margin:0;font-family:'Microsoft Yahei';color:#666;}
html{overflow-x: hidden;}
li {list-style:none;}
img {border:none;vertical-align:bottom}
a{text-decoration:none;}
.clear {zoom:1;}
.clear:after{display:block;content:'';clear:both;}
input[type="button"],input[type="submit"],input[type="reset"]{-webkit-appearance:none;}/*苹果按钮样式清除*/
textarea{-webkit-appearance:none;resize:none;}
.ui-fl{float: left;}
.ui-fr{float: right;}
.tac{text-align: center;}
.tar{text-align: right;}
.tal{text-align: left;}

input:focus,textarea:focus{outline:none;}/*input:focus焦点  改变线条 outline 背景 background*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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