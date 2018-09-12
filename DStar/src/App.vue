<template>
  <div id="app">
    <router-view/>
  	
    <router-link to="/helloworld">hello</router-link>

    <comb></comb>
  </div>
</template>

<script>
import comb from "./components/b"
export default {
	components:{
		comb
	},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>