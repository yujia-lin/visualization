<template>
	<div id="qrcode">
	      	<qrcode 
			:value="qrcodeUrl" 
			v-if="qrcodeUrl"
			:options=big>
			</qrcode>
	</div>
</template>
<script>
import qrcode from '@xkeshi/vue-qrcode'
export default {
	components:{
		qrcode ,
	},
	props:['size','urls'],
	data () {
	    return {
			qrcodeUrl:this.urls || window.location.href,
			big:{size:this.size}
	    }
	},
	watch: {
	    '$route':'changeurl'
	},
	methods: {
	    changeurl(){
	  		this.qrcodeUrl=window.location.href
	    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
