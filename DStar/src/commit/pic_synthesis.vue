<template>
	<div id="pic">
		<input type="file" @change="getFile" ref="file" id="file"> 
		<img :src="src" alt="user image"> 

	</div>
</template>
<script>
export default {
	name: 'pic',

	data () {
	    return {
	    	 src: '' //先设置一个默认图片
	    }
	},
	computed:{
		currentValue:{
			get:function(){
				return this.value
			},
			set:function(val){
				this.$emit('input', val);
			}
		},
	},
	methods:{
        getFile (e) {
	        let _this = this
	        var files = e.target.files[0]
	        if (!e || !window.FileReader) return;  // 看支持不支持FileReader
	        let reader = new FileReader()
	        reader.readAsDataURL(files) // 这里是最关键的一步，转换就在这里
	        reader.onloadend = function () {
	        	_this.src = this.result
	        }
	    }

		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.picurl{
	width: 100px;
	height: 100px;
}
</style>
