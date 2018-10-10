<template>
  <div id="app">
  	<heads></heads>
  	<inputc types="email" v-model="emailVal"></inputc>
  	<inputc types="phone" v-model="phoneVal"></inputc>
  	<inputc types="verifyCode" v-model="verifyCodeVal"></inputc>
  	<inputc types="select" v-model="selectVal" :optionlist="olist"></inputc>
  	<inputc types="range" v-model="rangeVal" minRange="0" maxRange="300" :colorlist="clist"></inputc>
  	
  </div>
</template>

<script>
import heads from "./components/heads"
import inputc from "./commit/inputc"

export default {
	components:{
		heads,
		inputc,
	},
  name: 'App',
  data(){
  	return {
  		emailVal:"",
  		phoneVal:"",
  		verifyCodeVal:"",
  		selectVal:"",
  		rangeVal:0,
  		clist:{
  			startC:"#fc7c61",
  			endC:"#fc7c61",
  			bgC:"#ffcfad",
  		},
  		olist:[
  			{
  				val:"0",
  				name:"男",
  			},
  			{
  				val:"1",
  				name:"女",
  			}
  		]
  	}
  }
}
</script>

<style>
input[type=text]::-ms-clear{display: none;}
input[type=password]::-ms-reveal{display:none;}
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
select::-ms-expand{ display: none; }
option::-ms-expand{ display: none; }
option{
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari 和 Chrome */
    appearance:none;
}
/*option:hover{
    color:#fff;
    background-color:#1E90FF;
}*/
table {border-collapse: collapse;border-spacing: 0;}
input:focus,textarea:focus,select:focus,option:focus,option{outline:none;}/*input:focus焦点  改变线条 outline 背景 background*/
.f_flex{display: -webkit-box;display: -webkit-flex;display: flex;}
.z_flex {-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;}
.box_sizing{box-sizing: border-box;-webkit-box-sizing: border-box;}
</style>