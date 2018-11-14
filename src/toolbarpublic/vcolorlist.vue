<template>
			<div class="fillingColor fontColor ui-fl ">
				<div class="z_colorf"><vcolorpicker @colortext="getcolor" colors="ff0000"></vcolorpicker></div>
			</div>
			<div class="fillingColor backgroundC ui-fl">
				<div class="z_colorf"><vcolorpicker @colortext="getcolor1" colors="ccc"></vcolorpicker></div>
			</div>
			<div class="fillingColor borderColor ui-fl">
				<div class="z_colorf"><vcolorpicker @colortext="getcolor2" colors="ccc"></vcolorpicker></div>
			</div>
</template>
<script>
import vcolorpicker from "../toolbarpublic/vcolorpicker"
export default {
	name: 'color',
	props:['value',"colors"],
	components:{
		vcolorpicker
	},
	data () {
	    return {

	    }
	},
	methods:{
		getcolor(val){
			console.log(val)
		},
		getcolor1(val){
			console.log(val)
		},
		getcolor2(val){
			console.log(val)
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
