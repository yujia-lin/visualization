<template>
	<div id="heads">
		<div @click="back" class="back ui-fl">返回</div>
		<div class="title">标题</div>
		<div class="titleRight ui-fr">
			<div>下拉</div>
			<div>刷新</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'heads',
	data () {
	    return {
	      msg: '4',
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
}
.back{
	position: absolute;
	left: 0;
	top: 0;
	cursor: pointer;
}
.titleRight{
	position: absolute;
	right: 0;
	top: 0;
}
</style>
