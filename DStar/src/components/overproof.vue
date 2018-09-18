<template>
	<div id="overproof">
		<p class="title_p tal">今日超标</p>
		<div id="list">
			<ul class="f_flex list_title">
				<li class="z_flex box_sizing">序号</li>
				<li class="z_flex box_sizing">位置</li>
				<li class="z_flex box_sizing">检测项</li>
				<li class="z_flex box_sizing">检测值</li>
				<li class="z_flex box_sizing">预设值</li>
				<li class="z_flex box_sizing">检测时间</li>
			</ul>
			<ul class="f_flex list_main">
				<li class="z_flex box_sizing">01</li>
				<li class="z_flex box_sizing">位置</li>
				<li class="z_flex box_sizing">检测项</li>
				<li class="z_flex box_sizing">检测值</li>
				<li class="z_flex box_sizing">预设值</li>
				<li class="z_flex box_sizing">检测时间</li>
			</ul>
		</div>
	</div>
</template>

<script>

export default {
  data () {
    return {
      msg: '',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title_p{
	font-size: 15px;
	color: #00aff9;
	height: 35px;
	line-height: 35px;
	padding-left: 5px;
}
#list{
	border-radius: 3.5px;
	background: #fff;
	overflow: hidden;
}
#list li{
	height: 30px;
	line-height: 30px;
	border: 1px solid #f9fbfd;
}
.list_title li{
	font-size: 11px;
}
.list_main li{
	font-size: 10px;
	background: #fcfcfc;
}
</style>
