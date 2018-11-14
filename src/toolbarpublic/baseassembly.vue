<template>
	<div id="basebox">
			<div class="numberBox f_flex" v-if="types=='numberw'">
				<span>{{text}}</span>
				<input type="number" class="numReset z_flex" v-model="currentValue" ref="numReset">
				<b class="unitText">px</b>
				<i class="triangleTop" @click="add"></i>
				<i class="triangleBottom" @click="reduce"></i>
			</div>
			<div class="additionalAttr" v-else-if="types=='opacityAndRotate'">
				<div class="opacityBox overh">
					<b class="ui-fl box_title">透明度</b>
					<p class="ui-fl box_range"><inputc types="range" v-model="opacityMax" minRange="0" maxRange="100" :colorlist="clist" ></inputc></p>
					<input type="text" class="ui-fl box_text" name="" id="" v-model="opacityMax" max="100" @keyup="limito($event)" ref="opacityV"/>
					<i class="attr_text">%</i>
				</div>
				<div class="rotateBox overh">
					<b class="ui-fl box_title">旋转</b>
					<p class="ui-fl box_range"><inputc types="range" v-model="rotateMax" minRange="0" maxRange="360" :colorlist="clist" ></inputc></p>
					<input type="text" class="ui-fl box_text" name="" id="" v-model="rotateMax"  @keyup="limitr($event)" ref="rotateV"/>
					<i class="attr_text">°</i>
				</div>
			</div>
			<div class="optionBox f_flex" @click="optionshow=!optionshow" v-clickoutside="handleClose" v-else-if="types=='optionlist'">
				<span v-if="zltype=='0'">{{text}}</span>
				<span v-else-if="zltype=='1'"><i class="icon icon1"></i></span>
				<span v-else-if="zltype=='2'"><i class="icon icon2"></i></span>
				<b class="z_flex">{{commitVal}}</b>
				<i class="optionBoxSub"></i>
				<transition name="slide-fade">
					<ul class="optionUl" v-show="optionshow">
						<li v-for="(item,index) in olist" :style="item.styles" @click="selectfont(index)">{{item.name}}</li>
					</ul>
		  		</transition>
			</div>
			<div class="numberBox  f_flex" v-else-if="types=='textbox'">
				<span>{{text}}</span>
				<input type="text" class="numReset z_flex" v-model="currentValue" >
			</div>
	</div>
</template>
<script>
	const clickoutside = {
    // 初始化指令
    bind(el, binding, vnode) {
        function documentHandler(e) {
            // 这里判断点击的元素是否是本身，是本身，则返回
            if (el.contains(e.target)) {
                return false;
            }
            // 判断指令中是否绑定了函数
            if (binding.expression) {
                // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
                binding.value(e);
            }
        }
        // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    update() {},
    unbind(el, binding) {
        // 解除事件监听
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    },
};

import inputc from "../commit/inputc"
export default {
	name: 'basebox',
	components:{
		inputc,
	},
	props:['value','types','text',"olist","zltype"],
	directives: {clickoutside},
	data () {
	    return {
	    	opacityVal:100,
			rotateVal:0,
			optionshow:false,
			clist:{
	  			startC:"#666",
	  			endC:"#666",
	  			bgC:"#404040",
	  		}
	    }
	},
	watch: {
	    opacityVal(){
	    	var obj={
            	opacity:this.opacityVal,
            	rotate:this.rotateVal
            }
            this.$emit('attribute', obj);
	    },
	    rotateVal(){
	    	var obj={
            	opacity:this.opacityVal,
            	rotate:this.rotateVal
            }
            this.$emit('attribute', obj);
	    },
	},
	computed:{
		commitVal:{
			get:function(){
				return this.value
			},
			set:function(val){
				this.$emit('input', val);
			}
		},
		currentValue:{
			get:function(){
				return this.value
			},
			set:function(val){
				if(val.substring(0,1)==0 && val.length>1){
					this.$refs.numReset.value=val.substring(1,val.length)
					val=this.$refs.numReset.value
				}
				if(val=="" || val<0){
					this.$refs.numReset.value=0;
					return
				}
				this.$emit('input', val);
			}
		},
		opacityMax:{
			get:function(val){
				return this.opacityVal;
			},
			set:function(val){
				if(val.substring(0,1)==0 && val.length>1){
					this.$refs.opacityV.value=val.substring(1,val.length)
					val=this.$refs.opacityV.value
				}
				if(val==""){
					this.opacityVal=0;
					this.opacityVal=0;
					this.$refs.opacityV.value==0;
					return
				}
				if(val>100){
					this.opacityVal=100;
					this.opacityVal=100;
					this.$refs.opacityV.value==100;
					return
				}else if(val<0){
					this.opacityVal=0;
					this.opacityVal=0;
					this.$refs.opacityV.value==0;
					return
				}
				this.opacityVal=val.replace(/[^\d]/g,'');
			}
		},
		rotateMax:{
			get:function(val){
				return this.rotateVal;
			},
			set:function(val){
				if(val.substring(0,1)==0 && val.length>1){
					this.$refs.rotateV.value=val.substring(1,val.length)
					val=this.$refs.rotateV.value
				}
				if(val==""){
					this.rotateVal=0;
					this.rotateVal=0;
					this.$refs.rotateV.value==0;
					return
				}
				if(val>360){
					this.rotateVal=360;
					this.rotateVal=360;
					this.$refs.rotateV.value==360;
					return
				}else if(val<0){
					this.rotateVal=0;
					this.rotateVal=0;
					this.$refs.rotateV.value==0;
					return
				}
				this.rotateVal=val.replace(/[^\d]/g,'');
			}
		}
	},
	methods:{
		limito(e){
			this.opacityVal=e.target.value.replace(/[^\d]/g,'');
			e.target.value=e.target.value.replace(/[^\d]/g,'');
		},
		limitr(e){
			this.rotateVal=e.target.value.replace(/[^\d]/g,'');
			e.target.value=e.target.value.replace(/[^\d]/g,'');
		},
		add(){
			this.currentValue=this.value+1
		},
		reduce(){
			if(this.value==0){return}
			this.currentValue=this.value-1
		},
		handleClose(e) {
            this.optionshow = false;
        },
        selectfont(index){
        	this.commitVal=this.olist[index].name
        }

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
  display: block;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  display: block;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
  display: none;
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
    float: left;
    margin-top: 4px;
}
.icon1{
	background-position-y: -744px;
}
.icon2{
	background-position-y: -768px;
}
.opacityBox,.rotateBox {
	position: relative;
}
.additionalAttr{
	width: 266px;
	margin: 0 auto;
	padding: 4px;
	border: 1px solid #3a3a3a;
	box-sizing: border-box;
}
.box_text{
	display: block;
	width: 54px;
	height: 26px;
	line-height: 24px;
	border: 1px solid #5c5c5c;
	background-color: #404040;
	text-align: center;
	margin-top: 5px;
	margin-left: 8px;
	color:#fff;
	box-sizing: border-box;
	padding-right: 16px;
} 
.box_title{
	display: block;
	height: 24px;
	font-size: 14px;
	font-weight: 400;
	line-height: 24px;
	width: 60px;
	color: #fff;
	margin-top: 5px;
	text-align: center;
} 
.box_range{
	width:130px;
}
.numReset{
	border: none;
	background: none;
	width: 100%;
	font-size: 14px;
	color: #fff;
}
.numberBox{

    height: 32px;
    line-height: 32px;
    font-size: 14px;

    border: 1px solid rgba(0,0,0,.15);
    background: #404040;
    position: relative;
    box-sizing: border-box;
    padding-right: 20px;
}
.numberBox span{
	display: inline-block;
	height: 32px;
	line-height: 32px;
	color: #ccc;
	text-align: center;
	width: 60px;
}
.triangleTop{
    border-right: 6px solid transparent;
    border-bottom: 8px solid #666;
    border-left:6px solid transparent;
    content: "";
    position: absolute;
    right:8px;
    top:5px;
    cursor: pointer;
}
.triangleTop:hover{
    border-bottom-color: #fff;
}
.triangleBottom{
    border-right: 6px solid transparent;
    border-top: 8px solid #666;
    border-left:6px solid transparent;
    content: "";
    position: absolute;
    right:8px;	
    bottom:5px;
    cursor: pointer;
}
.triangleBottom:hover{
    border-top: 7px solid #fff;
}
.unitText{
	display: block;
	width:36px;
	text-align: center;
	font-size: 14px
}
.attr_text{
	position: absolute;
	    color: #fff;
	    font-size: 14px;
	    height: 24px;
	    line-height: 24px;
	    top: 7px;
	    right: 8px;
	    width: 13px;
	    font-style: normal;
}
.optionBox{
	width: 100%;
	height: 32px;
	line-height: 32px;
	border-radius: 4px;
    background: #5F5F5F;
    border: 1px solid #454545;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    position: relative;
}
.optionBox span{
	color: #fff;
	display: block;
	width: 50px;
	font-size: 14px;
	box-sizing: border-box;
	padding-left: 6px;
	text-align: left;
}
.optionBox b{
	color: #fff;
	font-size: 14px;
	font-weight: 400;
}
.optionBoxSub{
	border-right: 6px solid transparent;
    border-top: 8px solid #373737;
    border-left:6px solid transparent;
    content: "";
    position: absolute;
    right:8px;
    top:50%;
    margin-top: -4px;
    cursor: pointer;
}
.optionBoxSub:hover{
    border-top-color: #fff;
}
.optionUl{
    position: absolute;
/*    display: none;
*/    top: -1px;
    left: 0;
    width: 100%;
    max-height: 300px;
    overflow: auto;
    -moz-border-radius: 4px;
    border-radius: 4px;
    padding: 6px 0;
    background: #5f5f5f;
    border: 1px solid #454545;
    z-index: 10;
    box-sizing: border-box;
}
.optionUl li{
    line-height: 1;
	padding: 8px 0;
    text-align: center;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
}
</style>
