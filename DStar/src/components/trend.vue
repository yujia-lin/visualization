<template>
	<div id="trend">
		<today></today>
		<week></week>
	</div>
</template>

<script>
import today from "./today"
import week from "./week"
//import alltarget from "./components/alltarget"
export default {
	components:{
		today,
		week
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
