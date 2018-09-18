<template>
	<div id="heads">
		<div @click="back" class="back"></div>
		<div class="title">标题</div>
		<div class="titleRight ">
			<div class="updata ui-fr"></div>
			<div class="optionBox ui-fr box_sizing">OP</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'heads',
	data () {
	    return {
	      msg: '',
	    }
	},
	methods:{
	    back(){
	        this.$router.go(-1);//返回上一层
	    },
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#heads{
	background: #00AFF8;
	position: relative;
	font-size:18px ;
	height: 44px;
	line-height: 44px;
	color: #fff;
}
.title{
	color: #fff;
	font-weight: 600;
}
.back{
	position: absolute;
	left: 11px;
	top: 14px;
	cursor: pointer;
	width: 10px;
	height: 17px;
	background: url(../static/back_icon.png)no-repeat center;
	background-size: 10px;
}
.titleRight{
	position: absolute;
	right: 0;
	top: 0;	
	padding-top: 12px;
}
.optionBox{
	min-width: 40px;
	height: 20px;
	line-height: 20px;
	background: #fff;
	font-size: 12px;
	color: #00aff9;
  	text-align: left;
	position: relative;
	padding-left: 6px;
	padding-right: 17px;
	border-radius:3px ;
	margin-right: 21px;
	
}
.optionBox:after{
  content: '';
  position: absolute;
  top: 8px;
  right: 5px;
  border-left: 4px solid transparent;
  border-top: 5px solid #00aff9;
  border-right: 4px solid transparent;

}
.updata{
	width: 17.5px;
	height: 17px;
	background: url(../static/updata_icon.png)no-repeat center;
	background-size: 17.5px;
	margin-right: 12px;
	margin-top: 1.5px;
}
</style>
