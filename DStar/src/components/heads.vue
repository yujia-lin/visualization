<template>
	<div id="heads">
		<mt-header title="multiple button">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">back</mt-button>
		    <mt-button>close</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
	</div>
</template>

<script>
import { Header } from 'mint-ui';
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

</style>
