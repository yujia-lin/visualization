<template>
	<div id="today">
		<div class="today_head">
				<span>今日温湿度</span>
				<div class="select_box">
					<b>1#</b>
				</div>
		</div>
		<div class="today_main">
			<ul>
				<li>
					<div class="t_m_head t_m_head1">
						10:00
					</div>
					<div class="t_m_pic"></div>
					<div class="t_m_val">
						<div class="t_m_wendu">
							<div class="t_m_v_left ui-fl t_m_v_main">
								<h5></h5>
								<p>温度</p>
							</div>
							<div class="t_m_v_right ui-fl">0.00℃</div>
						</div>
						<div class="t_m_shidu">
							<div class="t_m_v_left ui-fl t_m_v_main">
								<h5></h5>
								<p>湿度</p>
							</div>
							<div class="t_m_v_right ui-fl">0.00%</div>
						</div>
					</div>
				</li>
				<li>
					<div class="t_m_head t_m_head2">
						10:00
					</div>
					<div class="t_m_pic"></div>
					<div class="t_m_val">
						<div class="t_m_wendu">
							<div class="t_m_v_left ui-fl t_m_v_main">
								<h5></h5>
								<p>温度</p>
							</div>
							<div class="t_m_v_right ui-fl">0.00℃</div>
						</div>
						<div class="t_m_shidu">
							<div class="t_m_v_left ui-fl t_m_v_main">
								<h5></h5>
								<p>湿度</p>
							</div>
							<div class="t_m_v_right ui-fl">0.00%</div>
						</div>
					</div>
				</li>
				<li>
					<div class="t_m_head t_m_head3">
						10:00
					</div>
					<div class="t_m_pic"></div>
					<div class="t_m_val">
						<div class="t_m_wendu">
							<div class="t_m_v_left ui-fl t_m_v_main">
								<h5></h5>
								<p>温度</p>
							</div>
							<div class="t_m_v_right ui-fl">0.00℃</div>
						</div>
						<div class="t_m_shidu">
							<div class="t_m_v_left ui-fl t_m_v_main">
								<h5></h5>
								<p>湿度</p>
							</div>
							<div class="t_m_v_right ui-fl">0.00%</div>
						</div>
					</div>
				</li>
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
	.today_head{
		overflow: hidden;
		text-align: left;
		padding-top: 12px;
		padding-bottom: 10px;
	}
	.today_head span{
		font-size: 16px;
		font-weight: 600;
		color: #00aff9;

	}
	.select_box{
		float: right;
	}
.t_m_head{
	font-size: 14px;
	background: url(../static/today_icon.png)no-repeat;
	background-position: 16px 8px;
	background-size:  15px;
	height: 32px;
	line-height: 32px;
	color: #fff;
	padding-right: 29px;
	text-align: right;
}

.t_m_head1{
	background-color: #ffb66e;
}
.t_m_head2{
	background-color: #75caff;
}
.t_m_head3{
	background-color: #c79bfa;
}
.today_main li{
	width: 111px;
	border-radius:4px;
	overflow: hidden;
	background: #fff;
	padding-bottom: 6px;
	float: left;
	margin-right:10px ;
}
.today_main li:nth-child(3){
	margin-right:0 ;
	
}
.t_m_pic{
	height: 83px;
	background: url(../static/today_pic.png)no-repeat center;
	background-size:  70px;
	border-bottom: 1px solid #f5f8fb;
}
.t_m_v_main h5{
	width: 20px;
	height: 20px;
	background-position: center;
	background-repeat:no-repeat ;
	display: inline-block;
}
.t_m_v_main p{
	color: #b2b2b2;
}
.t_m_wendu,.t_m_shidu{
	padding-left: 14px;
	overflow: hidden;
	padding-bottom: 10px;
}
.t_m_v_left{
	overflow: hidden;
}
.t_m_wendu .t_m_v_left h5{
	background-image:url(../static/today_pic1.png) ;
	background-size: 20px;

}
.t_m_shidu .t_m_v_left h5{
	background-image:url(../static/today_pic2.png) ;
	background-size: 15px;

}
.t_m_v_right{
	padding-left: 17px;
	line-height: 1;
	padding-top: 7px;
}
</style>
