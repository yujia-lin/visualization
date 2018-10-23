<template>
	<div id="commit">
		<keep-alive>
			<label for="" class="commitLabel" v-if="types=='phone'">
				<div class="commitInput_box">
					<input type="text" class="input_text_b" v-model="currentValue" @keyup="phonecheck($event)" maxlength="11" placeholder="请输入手机号" :style="styles" ref="input1"/>
					<i class="close_i" @click="close_input" v-show="currentValue.length>0"></i>
				</div>
				<p class="inputText icon_font" :class="phoneObj.phone.length>0 && (phoneObj.phoneFlag==1 ? 'icon_success' : 'icon_error')"><span>{{phoneObj.phoneText}}</span></p>
			</label>
			<label for="" class="commitLabel" v-else-if="types=='email'">
				<div class="commitInput_box">
					<input type="text" class="input_text_b" v-model="currentValue" @keyup="emailcheck($event)" placeholder="请输入邮箱" :style="styles" ref="input1"/>
					<i class="close_i" @click="close_input" v-show="currentValue.length>0"></i>
				</div>
				<p class="inputText icon_font" :class="emailObj.email.length>0 && (emailObj.emailFlag==1 ? 'icon_success' : 'icon_error')"><span>{{emailObj.emailText}}</span></p>
			</label>
			<label for="" class="commitLabel" v-else-if="types=='verifyCode'">
				<div class="commitInput_box">
					<input type="text" class="input_text_b" v-model="currentValue" @keyup="verifyCodeCheck($event)" :maxlength="verifyCodeObj.verifyCodeMaxLength" placeholder="请输入验证码" :style="styles" ref="input1"/>
					<i class="close_i" @click="close_input" v-show="currentValue.length>0"></i>
				</div>
				<p class="inputText icon_font" :class="verifyCodeObj.verifyCode.length>0 && (verifyCodeObj.verifyCodeFlag==1 ? 'icon_success' : 'icon_error')"><span>{{verifyCodeObj.verifyCodeText}}</span></p>
			</label>
			<label for="" class="commitLabel" v-else-if="types=='select'">
				<select name=""  v-model="currentValue" class="commitSelect">
					<option value="" selected="selected">请选择</option>
					<option v-for="(item,index) in optionlist" :value="item.val">{{item.name}}</option>
				</select>
			</label>
			<label for="" class="commitLabel commitLabelRange" v-else-if="types=='range'">
				<input ref="processRange" class="progress" type="range" v-model="currentValue" :max ="maxRange" :min ="minRange" step="1" @input = "changeProcess" style="width: 100%;margin-bottom:3px;" :style="{background: '-webkit-linear-gradient(left, '+colorlist.startC+' 0%,'+colorlist.endC+' '+currentRange+'%,'+colorlist.bgC+' '+(currentRange+0.00001)+'%,'+colorlist.bgC+'  100% )'}">
			</label>
		</keep-alive>
	</div>
</template>
<script>
export default {
	name: 'commit',
	props:['value',"types","styles","optionlist","maxRange","minRange","colorlist"],
	data () {
	    return {
	    	processPoint:this.value,
		    phoneObj:{
		      	phone:"",
		      	phoneText:"",
		      	phoneFlag:0
		    },
		    emailObj:{
		      	email:"",
		      	emailText:"",
		      	emailFlag:0
		    },
		    verifyCodeObj:{
		      	verifyCode:"",
		      	verifyCodeText:"",
		      	verifyCodeFlag:0,
		      	verifyCodeType:0,
		      	verifyCodeMaxLength:6
		    }
	    }
	},
	computed:{
		currentValue:{
			get:function(){
				return this.value
			},
			set:function(val){
				this.$emit('input', val);
			}
		},
		currentRange(){

			return ((this.processPoint-this.minRange)/parseFloat(this.maxRange-this.minRange))*100;
		}
	},
	methods:{
		phonecheck(event,num){
			/*手机校验*/
			var reg=11 && /^1[3|4|5|8|7][0-9]{9}$/;
			var value=null;
			if(num==1){
				value = event.value;
			}else{
				value = event.target.value;
			}
			this.phoneObj.phone=value;
			this.phoneObj.phone=value.replace(/[^\d]/g,'')
			if(this.phoneObj.phone==''){
				this.phoneObj.phoneFlag=0;
				this.phoneObj.phoneText=""
			}else if(!reg.test(this.phoneObj.phone)){
				this.phoneObj.phoneFlag=0;
				this.phoneObj.phoneText="请输入正确手机号码"
            }else{
				this.phoneObj.phoneFlag=1;
				this.phoneObj.phoneText=""
            }
		},
		emailcheck(event,num){
			/*邮箱校验*/
			var reg=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			var value=null;
			if(num==1){
				value = event.value;
			}else{
				value = event.target.value;
			}
			this.emailObj.email=value;
			if(this.emailObj.email==''){
				this.emailObj.emailFlag=0;
				this.emailObj.emailText=""
			}else if(!reg.test(this.emailObj.email)){
				this.emailObj.emailFlag=0;
				this.emailObj.emailText="请输入正确邮箱"
            }else{
				this.emailObj.emailFlag=1;
				this.emailObj.emailText=""
            }
		},
		verifyCodeCheck(event,num){
			/*验证码校验*/
			var value=null;
			if(num==1){
				value = event.value;
			}else{
				value = event.target.value;
			}
			this.verifyCodeObj.verifyCode=value;
			var reg=null;
			if(this.verifyCodeObj.verifyCodeType==0){
				/*数字6位验证码*/
				reg=/^[0-9]{6}$/;
				this.verifyCodeObj.verifyCodeMaxLength=6
				this.verifyCodeObj.verifyCode=value.replace(/[^\d]/g,'')
			}else if(this.verifyCodeObj.verifyCodeType==1){
				/*数字字母6位验证码*/
				reg=/^[a-zA-Z0-9]{6}$/;
				this.verifyCodeObj.verifyCodeMaxLength=6
			}else if(this.verifyCodeObj.verifyCodeType==2){
				/*数字4位验证码*/
				reg=/^[0-9]{4}$/;
				this.verifyCodeObj.verifyCodeMaxLength=4
				this.verifyCodeObj.verifyCode=value.replace(/[^\d]/g,'')
			}else if(this.verifyCodeObj.verifyCodeType==3){
				/*数字4位验证码*/
				reg=/^[a-zA-Z0-9]{4}$/;
				this.verifyCodeObj.verifyCodeMaxLength=4
			}
			if(this.verifyCodeObj.verifyCode==''){
				this.verifyCodeObj.verifyCodeFlag=0;
				this.verifyCodeObj.verifyCodeText=""
			}else if(!reg.test(this.verifyCodeObj.verifyCode)){
				this.verifyCodeObj.verifyCodeFlag=0;
				this.verifyCodeObj.verifyCodeText="请输入正确验证码"
            }else{
				this.verifyCodeObj.verifyCodeFlag=1;
				this.verifyCodeObj.verifyCodeText=""
            }
		},
		changeProcess() {
            this.processPoint = this.$refs.processRange.value;
        },
		close_input(){
			//清除内容
            this.currentValue=""
			this.$refs.input1.value=""
			if(this.types=="phone"){
				this.phonecheck(this.$refs.input1,1)
			}else if(this.types=="email"){
				this.emailcheck(this.$refs.input1,1)
			}else if(this.types=="verifyCode"){
				this.verifyCodeCheck(this.$refs.input1,1)
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputText{
	line-height: 30px;
	font-size: 12px;
}
.icon_font{
	font-family: mintui!important;
    font-size: 14px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .2px;
    -moz-osx-font-smoothing: grayscale;
    padding-left: 12px;
}
.icon_font span{
	font-size: 14px;
	margin-left: 3px;
}
.icon_success{
	color: #4caf50;
}
.icon_success:before{
	content: "\E609";
}
.icon_error{
	color: #f44336;
}
.icon_error:before{
	content: "\E605";
}
.commitLabel{
	position: relative;
	overflow: hidden;
	display: block;
}
.commitLabelRange{
	overflow: auto;
	height: 35px;
	padding: 10px 0;
}
.commitInput_box{
	position: relative;
}
.commitLabel .close_i{
	color: #888;
	font-family: mintui!important;
    font-size: 14px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .2px;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 50%;
	margin-top: -13px;
    display: block;
    right: 3px;
    width: 20px;
    z-index: 3;
    padding: 6px 5px;
    text-align: center;
    line-height: 1;
}
.close_i:before{
	content: "\E605";
	vertical-align: middle;
}
.commitLabel .input_text_b{
	border: none;
	width: 100%;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	padding-left: 14px;
	font-size: 14px;
	height: 35px;
	line-height: 35px;
	padding-right: 20px;
}
.commitSelect{
	width: 100%;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	border: none;
	height: 35px;
	background: #fff;
	padding-left: 10px;
	font-size: 14px;
}
input[type=range] {/*input外壳样式*/
    -webkit-appearance: none;
    border-radius: 10px;
    height: 10px;
    /*border: 1px solid #ccc;*/
background-size: 0% 100%;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
}    
input[type=range]:focus {
    outline: none;
}
input[type=range]::-webkit-slider-runnable-track {/*轨道*/
    height: 10px;
    /*background: #fff;*/
    /*background: rgba(255, 207, 173,.3);*/
    border-radius: 10px;

}
input[type=range]::-webkit-slider-thumb {/*滑块*/
    -webkit-appearance: none;
    height: 25px;
    width: 25px;
    margin-top: -8px; /*使滑块超出轨道部分的偏移量相等*/
    background: #ffffff; 
    border-radius: 50%; /*外观设置为圆形*/
    border: solid 0.125em rgba(205, 224, 230, 0.5); /*设置边框*/
    box-shadow: 0 .125em .125em #3b4547; /*添加底部阴影*/
 }
</style>
