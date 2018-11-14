<template>
	<div id="operation">
		<div class="overh">
			<div class="ui-fl operBtn"><i class="icon1 opericon ui-fl"></i><span class="ui-fl">保存</span></div>
			<div class="ui-fl operBtn"><i class="icon2 opericon ui-fl"></i><span class="ui-fl">预览</span></div>
			<div class="ui-fl operBtn"><i class="icon3 opericon ui-fl"></i><span class="ui-fl">发布</span></div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'operation',
	data () {
	    return {

	    }
	},
	methods:{
	  
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#operation{
	background: #000;
	height: 40px;
}
.operBtn{
	color: #999;
    float: left;
    font-size: 15px;
    width: 90px;
    height: 33px;

    margin: 4px 0 4px 6px;
    padding: 4px 0 4px 14px;
    text-align: left!important;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    cursor: pointer;
}
.operBtn i{
	
}
.operBtn span {
	line-height: 23px;
}
.opericon{
	width: 24px;
	height: 24px;
	display: inline-block;
	opacity: .8;
    margin: 0 .4em 0 -.2em;
    background-image: url(../static/icons.png);
	background-repeat: no-repeat;
}
.operBtn:hover .opericon{
	background-position-x: -24px;
}
.icon1{
	background-position-y: 0;
}
.icon2{
	background-position-y: -48px;
}
.icon3{
	background-position-y: -24px;
}
</style>
