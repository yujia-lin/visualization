<template>
	<colorPicker v-model="color" @change="headleChangeColor"/>
</template>
<script>

export default {
	name: 'color',
	props:['value',"colors"],
	data () {
	    return {
	    	 color: '#'+this.colors
	    }
	},
	methods:{
		headleChangeColor(){
			this.$emit('colortext', this.color);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
