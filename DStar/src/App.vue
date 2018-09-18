<template>
  <div id="app">
  	<heads></heads>
  	<div class="main_box">
    	<router-view/>
    </div>
    <div class="nav_box f_flex">
    	<router-link to="./testing" class="z_flex navAct">
    		<div>
    			<h5 class="nav_icon nav_icon1"></h5>
    			<p>检测</p>
    		</div>
    	</router-link>
    	<router-link to="./trend"  class="z_flex">
    		<div>
    			<h5 class="nav_icon nav_icon2"></h5>
    			<p>趋势</p>
    		</div>
    	</router-link>
    </div>

  </div>
</template>

<script>
import heads from "./components/heads"

export default {
	components:{
		heads,

	},
  name: 'App'
}
</script>

<style>
*{padding:0;margin:0;font-family:'Microsoft Yahei';color:#666;}
html{overflow-x: hidden;background: #f2f6fa;}
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
  background: #f2f6fa;
  padding-bottom: 54px;
}
.f_flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.z_flex {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.box_sizing{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
}
.main_box{
	padding: 0 11px;
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
}
.nav_box{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 54px;
	background: #fff;
}
.nav_box a{
		font-size: 12px;
}
.nav_icon{
	height: 22px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 22px;
	padding-top: 8px;
	padding-bottom: 3px;
}
.nav_box p{
	line-height: 1;
}
.nav_icon1{
	background-image: url(static/nav_icon1.png);
}
.nav_icon2{
	background-image: url(static/nav_icon2.png);
}
.navAct .nav_icon1{
	background-image: url(static/nav_icon1_act.png);
}
.navAct .nav_icon2{
	background-image: url(static/nav_icon2_act.png);
}
</style>