<template>
	<div id="testing">
		<alltarget></alltarget>
		<overproof></overproof>
	</div>
</template>

<script>
import alltarget from "./alltarget"
import overproof from "./overproof"
//import alltarget from "./components/alltarget"
export default {
	components:{
		alltarget,
		overproof
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
