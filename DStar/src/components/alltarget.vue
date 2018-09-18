<template>
	<div id="alltarget">
		<div class="bg_box"></div>
		<div class="alltarget_title tal">
			<p>实时监控</p>
			<h5>1#</h5>
		</div>
		<div class="alltarget_main">
			<mt-swipe :auto="15000000">
			  <mt-swipe-item>
			  	<div class="alltarget_list_box1 alltarget_list_box">
			  		<ul>
			  			<li>
			  				<h5><span></span></h5>
			  				<h4>甲苯</h4>
			  				<p>0.00</p>
			  			</li>
			  			<li>
			  				<h5><span></span></h5>
			  				<h4>甲苯</h4>
			  				<p>0.00</p>
			  			</li>
			  			<li>
			  				<h5><span></span></h5>
			  				<h4>甲苯</h4>
			  				<p>0.00</p>
			  			</li>
			  			<li>
			  				<h5><span></span></h5>
			  				<h4>甲苯</h4>
			  				<p>0.00</p>
			  			</li>
			  			<li>
			  				<h5><span></span></h5>
			  				<h4>甲苯</h4>
			  				<p>0.00</p>
			  			</li>
			  			
			  			<li>
			  				<h5><span></span></h5>
			  				<h4>甲苯</h4>
			  				<p>0.00</p>
			  			</li>
			  			<li>
			  				<h5><span></span></h5>
			  				<h4>甲苯</h4>
			  				<p>0.00</p>
			  			</li>
			  			<li>
			  				<h5><span></span></h5>
			  				<h4>甲苯</h4>
			  				<p>0.00</p>
			  			</li>
			  		</ul>
			  	</div>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<div class="alltarget_list_box2 alltarget_list_box">
			  		<li>
		  				<h5><span></span></h5>
		  				<h4>甲苯</h4>
		  				<p>0.00</p>
		  			</li>
		  			<li>
		  				<h5><span></span></h5>
		  				<h4>甲苯</h4>
		  				<p>0.00</p>
		  			</li>
		  			<li>
		  				<h5><span></span></h5>
		  				<h4>甲苯</h4>
		  				<p>0.00</p>
		  			</li>
			  	</div>
			  </mt-swipe-item>

			</mt-swipe>

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
	
	.icon1{
		width: 100px;
		height: 100px;
		font-size: 50px;
	}
	#alltarget{
		position: relative;
	}
	.bg_box{
		background: #00aef9;
		height: 200px;
		position: absolute;
		z-index: 0;
		left: -11px;
		top: 0;
		right: -11px;
	}
	.alltarget_title,.alltarget_main{
		z-index: 1;
		position: relative;
	}
	.alltarget_title p{
		font-size: 15px;
		color: #fff;
		padding-top: 15px;
		padding-bottom: 10px;
		line-height: 1;
		font-weight: 600;
	}
	.alltarget_title h5{
		color: #fff;
		font-size: 12px;
		line-height: 1;
		padding-bottom: 15px;
	}
	.alltarget_main{
		height: 220px;
		border-radius: 5px;
		background: #fff;
	}
	.alltarget_list_box{
		padding-top: 20px;
	}
	.alltarget_list_box li{
		width: 25%;
		float: left;
		margin-bottom: 14px;
	}
	.alltarget_list_box li h5 {
		height: 38px;
	}
	.alltarget_list_box li h5 span{
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: #FF0000;
		display: inline-block;
	}
	.alltarget_list_box li h4{
		font-size: 15px;
		line-height: 32px;
	}
	.alltarget_list_box li p{
		font-size: 12px;
		line-height: 1;
	}
</style>
