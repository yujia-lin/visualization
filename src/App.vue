<template>
  <div id="app">
  	<operation></operation>
  	<canvasBox></canvasBox>
  	<pagelist></pagelist>
  	<toolbar></toolbar>
  </div>
</template>
<script>
import operation from "./block/operation"
import canvasBox from "./block/canvasbox"
import pagelist from "./block/pagelist"
import toolbar from "./block/toolbar"
import {toolbarlabel,drag,getElementsByClass} from "./static/drag"
 
export default {
	components:{
		canvasBox,
		operation,
		pagelist,
		toolbar
	},
  name: 'App',
  data(){
  	return {

  	}
  },
  updated(){
  			var changename=getElementsByClass("changebox")
	    	console.log(changename)
  },
	mounted () {
		console.log(this.$store.state.generatelist.item.length)
	},
  methods:{

  }
}
</script>

<style>
input[type=text]::-ms-clear{display: none;}
input[type=password]::-ms-reveal{display:none;}
*{padding:0;margin:0;font-family:'Microsoft Yahei';color:#666;}
html{overflow-x: hidden;background: #282828;}
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
.overh{overflow: hidden;}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"]{
    -moz-appearance: textfield;
}
select::-ms-expand{ display: none; }
option::-ms-expand{ display: none; }
option{
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari 和 Chrome */
    appearance:none;
}
table {border-collapse: collapse;border-spacing: 0;}
input:focus,textarea:focus,select:focus,option:focus,option{outline:none;}/*input:focus焦点  改变线条 outline 背景 background*/
.f_flex{display: -webkit-box;display: -webkit-flex;display: flex;}
.z_flex {-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;}
.box_sizing{box-sizing: border-box;-webkit-box-sizing: border-box;}
html,body,#app,.generatelistBox{
	height: 100%;
}
#app{
	overflow: hidden;
}
.generatelistBox{
	width:375px;
	height: 603px;
}
/*-------------------*/
.resize{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid #26a2ff;
  }
.resizebox{
  width: 6px;
  height: 6px;
  background:#26a2ff;
  position: absolute;
  border: 1px solid #fff;
}
.resizeCB{
  bottom: -4px;
  left: 50%;
  margin-left:-4px; 
  cursor: n-resize
}
.resizeCT{
  top: -4px;
  left: 50%;
  margin-left:-4px; 
  cursor: n-resize
}
.resizeLT{
  top: -4px;
  left:-4px;
  cursor: se-resize
}
.resizeRT{
  top: -4px;
  right: -4px;
  cursor: ne-resize 
}
.resizeLB{
  bottom: -4px;
  left:-4px;
  cursor: sw-resize
}
.resizeRB{
  bottom: -4px;
  right: -4px;
  cursor: se-resize
}
.resizeLC{
  top: 50%;
  left:-4px;
  margin-top: -4px;
  cursor: w-resize
}
.resizeRC{
  top: 50%;
  right: -4px;
  margin-top: -4px;
  cursor: e-resize
}
.maskchange{
	position: absolute; 
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	cursor: move;
}
.textfubox{
	position: absolute;
}
.textbox{
	width: 200px;
	height: 32px;
	background: #fff;
	border-radius:4px ;
	border: 1px solid #E2E3E4;
	padding-left: 14px;
	box-sizing: border-box;
}
.commitstyle{
	position:absolute;
	cursor: move;
}
.fontboxs{
	width: 180px;
	height: 18px;
	font-size: 18px;
	line-height: 1;
}
</style>