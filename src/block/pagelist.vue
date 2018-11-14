<template>
	<div id="pagelist">
		<div class="pageBox">
			<ul>
				<li class="clear" v-if="itemlist==0">
					<div class="pageBox_title ui-fl"></div>
					<div class="pageBox_cont ui-fl">
						<div class="plusIcon" @click="addTemplate"></div>
					</div>
				</li>
				<li class="clear pageBox_main" v-else v-for="(item,index) in this.$store.state.generatelist.item" :class="index==$store.state.generatelist.currentId && 'pageBox_Act'" >
					<div class="pageBox_title ui-fl tac">
						<span><i class="icon iconup" :class="index==0 && 'icon_act'" @click="upRecord(index)"></i></span>
						<span class="title_num">{{index+1}}</span>
						<span><i class="icon icondown" :class="index==(itemlist-1) && 'icon_act'" @click="downRecord(index)"></i></span>
					</div>
					<div class="pageBox_cont ui-fl" @click="current(index)">
						<div class="close_strip" @click="delTemplate(index)">
							<i class="icon"></i>
						</div>
						<div class="smallGeneratelist" v-html="conthtmllist[index].text"></div>
						<div class="addBtn" @click="addTemplate"></div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

import { MessageBox,DatetimePicker } from 'mint-ui';
export default {
	components:{
		DatetimePicker
	},
	name: 'pagelist',
	data () {
	    return {
	      itemlist: this.$store.state.generatelist.item.length,
	    }
	},
	computed: {
		conthtmllist:function(){
			var obj=[];
			for(var i in this.$store.state.generatelist.item){
				var strobj=this.$store.state.generatelist.item[i];
				var objs={
					text:strobj.codestart+strobj.codecontent+strobj.codeend
				}
				obj.push(objs)
			}
			return obj
		},
	},
	methods:{
	    addTemplate(){
		   	MessageBox.confirm('是否添加空白模版',"温馨提示").then(action => {
		   		var obj={
		        		codestart:"<div class='generatelistBox' style='background:#fff;position: relative;'>",
		        		codecontent:"",
		        		codeend:"</div>"
		        	}
				this.$store.state.generatelist.item.push(obj)
		   		this.itemlist=this.$store.state.generatelist.item.length
			}).catch(function(error) {
				console.log('发生错误！', error);
			});
	    },
	    delTemplate(index){
		   	MessageBox.confirm('是否添加空白模版',"温馨提示").then(action => {
		   		console.log(this.$store.state.generatelist.item)
		   		this.$store.state.generatelist.item.splice(index,1)
		   		this.itemlist=this.$store.state.generatelist.item.length
//.splice(start,delCount);
			}).catch(function(error) {
				console.log('发生错误！', error);
			});
	    },
	    swapItems ( index1, index2) {
	        this.$store.state.generatelist.item[index1] = this.$store.state.generatelist.item.splice(index2, 1, this.$store.state.generatelist.item[index1])[0];
	    },
    	// 上移
	    upRecord(index) {
	        if(index == 0) {
	            return;
	        }
	        this.swapItems(index, index - 1);
	    },
	    // 下移
	    downRecord(index) {
	        if(index == this.itemlist -1) {
	            return;
	        }
	        this.swapItems(index, index + 1);
	    },
	    current(index){
	    	this.$store.state.generatelist.currentId=index;
	    }
	},
}
</script>
<style scoped>
#pagelist{
	position: relative;
    height: -moz-calc(100% - 40px);
    height: calc(100% - 40px);
    width: 180px;
    float: left;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #1B1B1B;
    overflow: hidden;
    z-index: 1;
}
.plusIcon{
	width: 48px;
	height: 48px;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -24px;
	margin-top: -24px;
	cursor: pointer;
}
.plusIcon:before{
	content: "";
	display: block;
	position: absolute;
	width: 4px;
	height: 48px;
	background-color: #606060;
	left: 22px;
	top: 0;
}
.plusIcon:after{
	content: "";
	display: block;
	position: absolute;
	width: 48px;
	height: 4px;
	background-color: #606060;
	left: 0;
	top: 22px;
}
.pageBox li{
	height: 192px;
	margin-top: 18px;
}
.pageBox_cont{
	width: 120px;
    height: 192px;
    background: #282828;
    position: relative;
}
.pageBox{
	height: 100%;
    overflow: auto
}
.plusIcon:hover:before{
	background-color: #2CCAF8;
}
.plusIcon:hover:after{
	background-color: #2CCAF8;
}
.pageBox_title{
	width: 30px;
	height: 100%;
}
.close_strip{
	background: rgba(0,0,0,0.6);
	height: 24px;
	position: absolute;
    left: 0;
    top: 0;
    right: 0;
	display: none;
    z-index: 1;
}
.icon{
    background-image: url(../static/icons.png);
	background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    display: block;
    background-position-y: -96px;
    float: right;
    cursor: pointer;
}
.addBtn{
	width: 28px;
	height: 28px;
	border-radius:50%;
	border: 2px solid #1B1B1B;
	background: #fff;
	position: absolute;
	bottom: -16px;
	left: 50%;
	margin-left: -16px;
	cursor: pointer;
	display: none;
}
.addBtn:before{
	content: "";
	display: block;
	position: absolute;
	width: 14px;
	height: 2px;
	background-color: #666;
	left: 7px;
	top: 13px;
}
.addBtn:after{
	content: "";
	display: block;
	position: absolute;
	width: 2px;
	height: 14px;
	background-color: #666;
	left: 13px;
	top: 7px;
}
.addBtn:hover{
	background: #2CCAF8;
}
.addBtn:hover:before{
	background: #fff;
}
.addBtn:hover:after{
	background: #fff;
}
#pagelist .smallGeneratelist{
	-webkit-transform:scale(.32,.3184079) translateX(-397px) translateY(-645px);
	transform:scale(.32,.3184079) translateX(-397px) translateY(-645px);
		width:375px;
	height: 603px;
}
.pageBox_Act .close_strip,.pageBox_Act .addBtn{
	display: block;
}
.pageBox_cont:hover .close_strip,.pageBox_cont:hover .addBtn{
	display: block;
}
.iconup{
	background-position-y: -456px;
}
.icondown{
	background-position-y: -480px;
}
.icon_act{
	background-position-x: -48px;
}
.pageBox_title span{
	overflow: hidden;
}
.title_num{
	width: 24px;
	display: block;
	float: right;
	font-size: 16px;
	color: #fff;
}
</style>
