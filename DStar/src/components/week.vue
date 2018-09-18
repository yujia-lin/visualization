<template>

<div id="week">
	<div class="weekHead">
		<p class="ui-fl">本周温湿度曲线图</p>
		<div class="select_box ui-fl">1#</div>
		<div class="select_box ui-fr select_box_du">温度走势图</div>
	</div>
	<div class="chartBox">
		<div id="myChart1"></div>
	</div>
</div>

</template>

<script>

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart1'))
        let dataArr=["早","中","晚","早","中","晚","早","中","晚"]
        let dataArr1=["早","中","晚","早","中","晚"]
        // 绘制图表
        myChart.setOption({
		    xAxis: {
		        type: 'category',
		        data: dataArr
		    },
		    yAxis: {
		        type: 'value',
		        offset :-10
		    },
		    
		    legend: {
        	show :true,
	        data:['本周'],
	        right:0,
	        top:15,
	   		},
		    series: [{
		        data: [820, 932, 901, 934, 1290, 1330, 1320, 1320, 1320],
		        type: 'line',
		        name:"本周",
		        symbolSize:6,
		        hoverAnimation:false,
		        
		        itemStyle: {
			        normal: {
			            color: "#ff8297",
			            lineStyle: {
			                color: "#ffb4c1"
			            }
			        }
			    	},
		    }]
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myChart1{
	width:100%;
	height: 240px;
	/*padding-left: 10px;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;*/
}
.weekHead{
	overflow: hidden;
	padding: 15px 0;
}
.weekHead p{
	color: #00aff9;
	font-size: 16px;
	font-weight: 600;
	line-height: 1;
}
.chartBox{
	background: #fff;
	border-radius: 5px;
	padding-left: 10px;
}
.select_box{
	min-width: 18px;
	height: 16px;
	line-height: 16px;
	background: #fff;
	font-size: 12px;
	color: #999;
  	text-align: left;
	position: relative;
	padding-left: 6px;
	padding-right: 17px;
	border-radius:3px ;
	margin-left: 15px;
	
}
.select_box:after{
  content: '';
  position: absolute;
  top: 5px;
  right: 5px;
  border-left: 4px solid transparent;
  border-top: 5px solid #999;
  border-right: 4px solid transparent;

}
</style>
