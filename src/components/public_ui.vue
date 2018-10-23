<template>
	<div id="public">
		<imgload></imgload>
	</div>
</template>

<script>
import imgload from "../commit/pic_synthesis"
export default {
	name: 'public',
	components:{
		imgload,
	},
	data () {
	    return {
	      msg: '',
	    }
	},
	methods:{
	   
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
