<template>
	<div id="canvasbox">
		<div class="phonebox">
			<div v-html="conthtml" id="parentscanvas" @click="operation($event)"></div>
		</div>
	</div>
</template>

<script>
import {toolbarlabel,drag,getElementsByClass} from "../static/drag"
export default {
	name: 'canvasbox',
	data () {
	    return {

	    }
	},
	updated(){
//		var changename=getElementsByClass("changebox")
//		this.$store.state.generatelist.num=changename.length-1;
//		console.log(this.$store.state.generatelist.num)
//		drag(changename[this.$store.state.generatelist.num]);

  	},
	computed: {
	    conthtml:function(){
	    	var strobj=this.$store.state.generatelist.item[this.$store.state.generatelist.currentId];
			return strobj.codestart+strobj.codecontent+strobj.codeend
		},
		
	},
	methods:{
	   operation(e){
//	   	console.log(e)
//	   	console.log(e.target.style.cssText)
	   }
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.phonebox{
	width: 375px;
	height: 603px;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -188px;
	margin-top: -302px;
	border:1px dashed #8b8b8b ;
}
</style>
