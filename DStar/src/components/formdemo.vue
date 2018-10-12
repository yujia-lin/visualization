<template>
	<div id="public">
	  	<inputc types="phone" v-model="phoneVal" @flag="pflagF"></inputc>
		<inputc types="email" v-model="emailVal" @flag="pflagF"></inputc>
	  	<inputc types="verifyCode" v-model="verifyCodeVal" vcType="2" @flag="pflagF"></inputc>
	  	<inputc types="select" v-model="selectVal" :optionlist="olist"></inputc>
	  	<inputc types="range" v-model="rangeVal" minRange="0" maxRange="300" :colorlist="clist"></inputc>
	  	<inputc types="default" v-model="dVal" @flag="pflagF" ptext="请输入用户名" dType="3"></inputc>
	  	<inputc types="password" v-model="pVal" @flag="pflagF" ptext="请输入密码"></inputc>
	  	<inputc types="passwordRepeat" v-model="prVal" @flag="pflagF"></inputc>
		<inputc types="radio" v-model="radioVal" :rclist="rlist" rcType="0"></inputc>
		<inputc types="checkbox" v-model="checkboxVal" :rclist="cblist" rcType="0"></inputc>
	</div>
</template>
<!--
	types 为对应的表单功能 phone 校验手机号码  email 校验邮箱号码 verifyCode 校验验证码 select 下拉菜单  range滑块 default默认表单
	styles 修改样式
	v-model 对应 value值 
	@flag 输入框类型 接收输入值 是否符合规则
	optionlist 对于 types为select 选项的value name [{value:"",name:""}] 以对象的形式
	maxRange   对于 types为range 最大值
	minRange   对于 types为range 最小值 
	colorlist  对于 types为range 颜色值 类型为对象 {startC:"开始颜色",endC:"结束颜色",bgC:"背景颜色"} 
	vcType     对于 types为verifyCode 0：只能输入6位数字 1：只能输入6位数字或字母 2：只能输入4位数字 3：只能输入4位数字或字母 
	ptext      对于 types为default,password placeholder值
	dType      对于 types为default 0：无限制 1：只能输入数字 2：只能输入中文 3：只能输入英文数字 4：只能输入中英文数字
-->
<script>
import inputc from "../commit/inputc"
export default {
	name: 'public',
	components:{
		inputc,
	},
	data () {
	    return {
	      	dVal:"",
	      	pVal:"",
	      	prVal:"",
	      	checkboxVal:[],
	      	radioVal:1,
	  		emailVal:"",
	  		phoneVal:"",
	  		verifyCodeVal:"",
	  		selectVal:"",
	  		rangeVal:0,
	  		flaglist:{
	  			pflag:0,
	  			eflag:0,
	  			vflag:0,
	  			dflag:0,
	  			pwflag:0,
	  			p_prFlag:0
	  		},
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
	  		],
	  		rlist:[
	  			{
	  				val:"0",
	  				name:"education",
	  				texts:"小学",
	  				isCheck:true,
	  			},
	  			{
	  				val:"1",
	  				name:"education",
	  				texts:"初中",
	  				isCheck:false,
	  			},
	  			{
	  				val:"2",
	  				name:"education",
	  				texts:"高中",
	  				isCheck:false,
	  			},
	  			{
	  				val:"3",
	  				name:"education",
	  				texts:"大学",
	  				isCheck:false,
	  			}
	  		],
	  		cblist:[
	  			{
	  				val:"0",
	  				name:"education1",
	  				texts:"小学",
	  				isCheck:false,
	  			},
	  			{
	  				val:"1",
	  				name:"education1",
	  				texts:"初中",
	  				isCheck:false,
	  			},
	  			{
	  				val:"2",
	  				name:"education1",
	  				texts:"高中",
	  				isCheck:false,
	  			},
	  			{
	  				val:"3",
	  				name:"education1",
	  				texts:"大学",
	  				isCheck:false,
	  			}
	  		]
	    }
	},
	methods:{
	   	pflagF(val){
  			this.flaglist[val.name]=val.num;
  		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
