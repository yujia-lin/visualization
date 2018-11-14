<template>
	<div id="toolbar">
		<div class="attrPanel">
			<!--<div class="tab-wrapper">
				<div class="tab-menu">
					<ul>
						<li>字体</li>
						<li>动画</li>
					</ul>
				</div>
				<div class="tab-content">
					<div class="">
						
					</div>
					<div class="">
						
					</div>
				</div>
			</div>-->
			<div>
				<div class="smallw" v-show="navlistAct==0 || navlistAct==3" >
					<baseassembly v-model="textname" types="textbox"  text="文字"></baseassembly>
				</div>
				<div class="smallw" v-show="navlistAct==0 || navlistAct==3" >
					<div class="fontbox">
						<baseassembly v-model="fontfamily" types="optionlist" :olist="fontFamilyl" text="字体" zltype="0"></baseassembly>
					</div>
				</div>
				<div class="smallw" v-show="navlistAct==0 || navlistAct==3" >
					<div class="fontbox">
						<baseassembly v-model="fontsize" types="optionlist" :olist="fontsizel" text="字号" zltype="1"></baseassembly>
					</div>
				</div>
				<div class="smallw"  v-show="navlistAct==0">
					<div class="fontbox">
						<baseassembly v-model="lineheight" types="optionlist" :olist="lineheightl" text="行高" zltype="2"></baseassembly>
					</div>
				</div>
				<div class="colorBox smallw clear">
					<div class="fillingColor fontColor ui-fl" title="文字颜色"  v-show="navlistAct==0 || navlistAct==3" >
						<div class="z_colorf"><vcolorpicker @colortext="getcolor" colors="ff0000"></vcolorpicker></div>
					</div>
					<div class="fillingColor backgroundC ui-fl" title="背景颜色" v-show="navlistAct==0 || navlistAct==3" >
						<div class="z_colorf"><vcolorpicker @colortext="getcolor1" colors="ccc"></vcolorpicker></div>
					</div>
					<div class="fillingColor borderColor ui-fl">
						<div class="z_colorf"><vcolorpicker @colortext="getcolor2" colors="ccc"></vcolorpicker></div>
					</div>
				</div>
				<div class="smallw f_flex">
					<div class="z_flex">
						<baseassembly v-model="border" types="optionlist" :olist="borderl" text="边框" zltype="0"></baseassembly>
					</div>
					<div class="z_flex marl6">
						<baseassembly v-model="radius" types="optionlist" :olist="radiusl" text="圆角" zltype="0"></baseassembly>
					</div>
				</div>
				<div class="smallw f_flex">
					<div class="z_flex">
						<baseassembly v-model="wnum" types="numberw" text="宽度"></baseassembly>
					</div>
					<div class="z_flex marl6">
						<baseassembly v-model="hnum" types="numberw" text="高度"></baseassembly>
					</div>
				</div>
				<div class="smallw f_flex">
					<baseassembly @attribute="attributeF" types="opacityAndRotate"></baseassembly>
				</div>
			</div>
		</div>
		<ul>
			<li v-for="(item,index) in navlist" class="overh toolbar_hover"  @click="current(index)">
				<div class="toolbar_left ui-fl" >{{item.name}}</div>
				<div class="toolbar_right ui-fr"><i :class="item.icon" class="icon"></i></div>
			</li>
		</ul>
		
	</div>
</template>

<script>

import baseassembly from "../toolbarpublic/baseassembly"
import vcolorpicker from "../toolbarpublic/vcolorpicker"
import {toolbarlabel,drag,getElementsByClass,addDiv} from "../static/drag"
export default {
	name: 'toolbar',
	components:{
		baseassembly,
		vcolorpicker
	},
	data () {
	    return {
	    	navlist:[
		      	{name:"文字",icon:"icon1"},
		      	{name:"图片",icon:"icon2"},
		      	{name:"形状",icon:"icon3"},
		      	{name:"按钮",icon:"icon4"},
		      	{name:"表单",icon:"icon5"},
		      	{name:"互动",icon:"icon6"},
		      	{name:"音乐",icon:"icon7"},
		      	{name:"扩展",icon:"icon8"},
	    	],
	    	navlistAct:"",
	    	wnum:0,
	    	hnum:0,
			opacityVal:100,
			rotateVal:0,
			fontfamily:"Microsoft Yahei",
			fontFamilyl:[
				{name:"Microsoft Yahei",styles:"font-family: 'Microsoft Yahei'"},
				{name:"黑体",styles:"font-family:黑体"},
				{name:"宋体",styles:"font-family:宋体"},
				{name:"仿宋",styles:"font-family:仿宋"}
			],
			fontsize:"12px",
			fontsizel:[
				{name:"12px",styles:"font-size:12px"},
				{name:"14px",styles:"font-size:14px"},
				{name:"16px",styles:"font-size:16px"},
				{name:"18px",styles:"font-size:18px"},
				{name:"24px",styles:"font-size:24px"},
				{name:"36px",styles:"font-size:36px"},
				{name:"48px",styles:"font-size:48px"}
			],
			lineheight:"18px",
			lineheightl:[
				{name:"14px",styles:"line-height:1"},
				{name:"16px",styles:"line-height:1"},
				{name:"18px",styles:"line-height:1"},
				{name:"20px",styles:"line-height:1"},
				{name:"24px",styles:"line-height:1"},
				{name:"28px",styles:"line-height:1"},
				{name:"34px",styles:"line-height:1"},
				{name:"36px",styles:"line-height:1"},
				{name:"40px",styles:"line-height:1"},
				{name:"48px",styles:"line-height:1"},
				{name:"56px",styles:"line-height:1"},
				{name:"68px",styles:"line-height:1"}
			],
			radius:"4px",
			radiusl:[
				{name:"无",styles:"line-height:1"},
				{name:"1px",styles:"line-height:1"},
				{name:"2px",styles:"line-height:1"},
				{name:"3px",styles:"line-height:1"},
				{name:"4px",styles:"line-height:1"},
			],
			border:"4px",
			borderl:[
				{name:"无",styles:"line-height:1"},
				{name:"1px",styles:"line-height:1"},
				{name:"2px",styles:"line-height:1"},
				{name:"3px",styles:"line-height:1"},
				{name:"4px",styles:"line-height:1"},
			],
			textname:"",
	    }
	},
	methods:{
		current(index){
			var changename=getElementsByClass("changebox")
			this.navlistAct=index;
			this.$store.state.generatelist.num=changename.length;
			if(index==0){
				
				addDiv(toolbarlabel[index].htmltext,toolbarlabel[index].csstext,this.$store.state.generatelist.num)
			}
//			console.log(this.$store.state.generatelist.num)

//			this.$store.commit('increment',toolbarlabel.wenzi)
	    },
		edit(e,sub){
	
		},
		attributeF(obj){
			
		},
		getcolor(val){
			console.log(val)
		},
		getcolor1(val){
			console.log(val)
		},
		getcolor2(val){
			console.log(val)
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.marl6{margin-left: 6px;}
.smallw{
	width: 266px;
	margin: 0 auto 8px;

}
.colorBox{
	position: relative;
	z-index: 10;
}
.fontbox{
	width:198px;
}
#toolbar{
    height:  -moz-calc(100% - 40px);
    height: calc(100% - 40px);
    width: 60px;
    float: right;
    z-index: 105;
    position: relative;
    background: #212121;
}
#toolbar li{
	cursor: pointer;
	margin-top: 12px;
}
.toolbar_left{
	font-size: 14px;
	padding-top: 2px;
    margin-left: 4px;
    width: 14px;
    height: 100%;
}
.toolbar_right{
	padding-right: 8px;
}
.toolbar_right i{
	width: 24px;
	height: 24px;
	display: block;
	background-image: url(../static/icons.png);
	background-repeat: no-repeat;
	margin-top: 9px;
}
.icon1{
	background-position-y: -264px;
}
.toolbar_hover:hover .toolbar_left{
	color: #fff;
}
.toolbar_act .toolbar_left{
	color: #fff;
}
.toolbar_act .icon,.toolbar_hover:hover .icon{
	background-position-x: -24px;
}
.icon2{
	background-position-y: -288px;
}
.icon3{
	background-position-y: -1584px;
}
.icon4{
	background-position-y: -312px;
}
.icon5{
	background-position-y: -336px;
}
.icon6{
	background-position-y: -360px;
}
.icon7{
	background-position-y: -384px;
}
.icon8{
	background-position-y: -408px;
}
.attrPanel{
	width: 288px;
	height: 100%;
	position: absolute;
	left: -288px;
	top: 0;
	box-sizing: border-box;
	padding: 15px 0;
	background: #545454;
}
.fillingColor{
	width: 24px;
	height: 24px;
	display: block;
	background-image: url(../static/icons.png);
	background-repeat: no-repeat;
	margin-top: 9px;
	cursor: pointer;
	position: relative;
	margin-right: 30px;

}
.fontColor{
	background-position-y: -528px;
}
.backgroundC{
	background-position-y: -1224px;
}
.borderColor{
	background-position-y: -1248px;
}
.fillingColor:hover{
	background-position-x: -24px;
}
.z_colorf{
	position: absolute;
	left: 26px;
	top: 5px;
}
</style>
