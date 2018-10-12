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
				<select name=""  v-model="currentValue" class="commitSelect" :style="styles">
					<option value="" selected="selected">请选择</option>
					<option v-for="(item,index) in optionlist" :value="item.val">{{item.name}}</option>
				</select>
			</label>
			<label for="" class="commitLabel commitLabelRange" v-else-if="types=='range'">
				<input ref="processRange" class="progress" type="range" v-model="currentValue" :max ="maxRange" :min ="minRange" step="1" @input = "changeProcess" style="width: 100%;margin-bottom:3px;" :style="{background: '-webkit-linear-gradient(left, '+colorlist.startC+' 0%,'+colorlist.endC+' '+currentRange+'%,'+colorlist.bgC+' '+(currentRange+0.00001)+'%,'+colorlist.bgC+'  100% )'}">
			</label>
			<label for="" class="commitLabel" v-else-if="types=='default'">
				<div class="commitInput_box">
					<input type="text" class="input_text_b" v-model="currentValue" @keyup="defaultCheck($event)" :placeholder="ptext" :style="styles" ref="input1"/>
					<i class="close_i" @click="close_input" v-show="currentValue.length>0"></i>
				</div>
				<p class="inputText icon_font" :class="defaultObj.defaultN.length>0 && (defaultObj.defaultFlag==1 ? 'icon_success' : 'icon_error')"><span>{{defaultObj.defaultText}}</span></p>
			</label>
			<label for="" class="commitLabel" v-else-if="types=='password'">
				<div class="commitInput_box">
					<input type="password" class="input_text_b" v-model="currentValue" @keyup="passwordCheck($event)" :placeholder="ptext" :style="styles" ref="input1"/>
					<i class="close_i" @click="close_input" v-show="currentValue.length>0"></i>
				</div>
				<p class="inputText icon_font" :class="passwordObj.passwordN.length>0 && (passwordObj.passwordFlag==1 ? 'icon_success' : 'icon_error')"><span>{{passwordObj.passwordText}}</span></p>
			</label>
			<label v-else-if="types=='passwordRepeat'">
				<div class="commitLBox">
					<label for="" class="commitLabel">
						<div class="commitInput_box">
							<input type="password" class="input_text_b" v-model="currentValue" @keyup="passwordRepeatCheck($event)" placeholder="请输入密码" :style="styles" ref="input1"/>
							<i class="close_i" @click="close_input" v-show="currentValue.length>0"></i>
						</div>
						<p class="inputText icon_font" :class="passwordRepeatObj.pVal.length>0 && (passwordRepeatObj.pFlag==1 ? 'icon_success' : 'icon_error')"><span>{{passwordRepeatObj.pText}}</span></p>
					</label>
					<label for="" class="commitLabel">
						<div class="commitInput_box">
							<input type="password" class="input_text_b" v-model="passwordRepeatObj.prVal" @keyup="passwordRepeatCheck($event,2)" placeholder="请确认密码" :style="styles" ref="input2"/>
							<i class="close_i" @click="close_input(1)" v-show="passwordRepeatObj.prVal.length>0"></i>
						</div>
						<p class="inputText icon_font" :class="passwordRepeatObj.prVal.length>0 && (passwordRepeatObj.prFlag==1 ? 'icon_success' : 'icon_error')"><span>{{passwordRepeatObj.prText}}</span></p>
					</label>
				</div>
			</label>
			<label v-else-if="types=='radio'">
				<div class="commitRadio_box" :class="rcType!=1 && 'f_flex'">
					<label :class="rcType==1 ? 'ui-show ' : 'z_flex tac'" v-for="(item,index) in radiol" >
						<input type="radio" :value="item.val" :name="item.name" v-model="currentValue" style="display: none;" @click="radioCheck(index)">
						<div class="radioDiv" :class="item.isCheck && 'radio_act'"></div><span class="radioText">{{item.texts}}</span>
					</label>
				</div>
			</label>
			<label v-else-if="types=='checkbox'">
				<div class="commitRadio_box" :class="rcType!=1 && 'f_flex'">
					<label :class="rcType==1 ? 'ui-show ' : 'z_flex tac'" v-for="(item,index) in radiol" >
						<input type="checkbox" :value="item.val" :name="item.name" v-model="currentValue" style="" @click="checkboxCheck(index)">
						<div class="cbDiv" :class="item.isCheck && 'cbDiv_act'"></div><span class="cbDiv_Text">{{item.texts}}</span>
					</label>
				</div>
			</label>
			
		</keep-alive>
	</div>
</template>
<script>
export default {
	name: 'commit',
	props:['value',"types","styles","optionlist","maxRange","minRange","colorlist","flag","ptext","vcType","dType","rclist","rcType"],
	data () {
	    return {
	    	processPoint:this.value,
	    	radiol:this.rclist,
	    	checkboxl:this.rclist,
	    	passwordRepeatObj:{
	    		pVal:"",
	    		prVal:"",
	    		pText:"",
	    		prText:"",
	    		pFlag:0,
	    		prFlag:0,
	    		p_prFlag:0
	    	},
	    	passwordObj:{
	    		passwordN:"",
	    		passwordText:"",
	    		passwordFlag:0,
	    	},
	    	defaultObj:{
	    		defaultN:"",
	    		defaultText:"",
	    		defaultFlag:0,
	    		defaultType:this.dType
	    	},
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
		      	verifyCodeType:this.vcType,
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
		radioCheck(index){
			this.radiol.map((v,i)=>{
				if(i==index){
		          v.isCheck = true
		        }else{
		          v.isCheck = false
		        }
			})
		},
		checkboxCheck(index){
			this.checkboxl[index].isCheck=!this.checkboxl[index].isCheck
		},
		phonecheck(event,num){
			/*手机校验*/
			var reg=11 && /^1[3|4|5|8|7][0-9]{9}$/;
			var value=null;
			if(num==1){
				value = event.value;
			}else{
				value = event.target.value;
			}
			this.phoneObj.phone=value.replace(/[^\d]/g,'')
			this.currentValue=this.phoneObj.phone
			
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
            var obj={
            	name:"pflag",
            	num:this.phoneObj.phoneFlag
            }
            this.$emit('flag', obj);
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
            var obj={
            	name:"eflag",
            	num:this.emailObj.emailFlag
            }
            this.$emit('flag', obj);
		},
		verifyCodeCheck(event,num){
			/*验证码校验*/
			var value=null;
			if(num==1){
				value = event.value;
			}else{
				value = event.target.value;
			}
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
				this.verifyCodeObj.verifyCode=value.replace(/[^\d]/g,'')
				this.verifyCodeObj.verifyCodeMaxLength=4
			}
			this.currentValue=this.verifyCodeObj.verifyCode
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
            var obj={
            	name:"vflag",
            	num:this.verifyCodeObj.verifyCodeFlag
            }
            this.$emit('flag', obj);
		},
		defaultCheck(event,num){
			/*默认*/
			var value=null;
			if(num==1){
				value = event.value;
			}else{
				value = event.target.value;
			}
			if(this.defaultObj.defaultType==0){
				this.defaultObj.defaultN=value;
			}else if(this.defaultObj.defaultType==1){
				this.defaultObj.defaultN=value.replace(/[^\d]/g,'')
			}else if(this.defaultObj.defaultType==2){
				this.defaultObj.defaultN=value.replace(/[^\u4E00-\u9FA5]/g,"")
			}else if(this.defaultObj.defaultType==3){
				this.defaultObj.defaultN=value.replace(/[^\a-\z\A-\Z0-9]/g,'')
			}else if(this.defaultObj.defaultType==4){
				this.defaultObj.defaultN=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')
			}
			if(this.defaultObj.defaultN==''){
				this.defaultObj.defaultFlag=0;
			}else{
				this.defaultObj.defaultFlag=1;
				this.defaultObj.defaultText=""
            }
			this.currentValue=this.defaultObj.defaultN
			
            var obj={
            	name:"dflag",
            	num:this.defaultObj.defaultFlag
            }
            this.$emit('flag', obj);
		},
		passwordCheck(event,num){
			/*密码校验*/
			var value=null;
			if(num==1){
				value = event.value;
			}else{
				value = event.target.value;
			}
			this.passwordObj.passwordN=value;
			if(this.passwordObj.passwordN==''){
				this.passwordObj.passwordFlag=0;
				this.passwordObj.passwordText=""
			}else if(this.passwordObj.passwordN.length<6){
				this.passwordObj.passwordFlag=0;
				this.passwordObj.passwordText="请输入超过6位密码"
            }else{
				this.passwordObj.passwordFlag=1;
				this.passwordObj.passwordText=""
            }
			this.currentValue=this.passwordObj.passwordN
            var obj={
            	name:"pwflag",
            	num:this.passwordObj.passwordFlag
            }
            this.$emit('flag', obj);
		},
		passwordRepeatCheck(event,num){
			/*重复密码校验*/
			var value=null;
			if(num==1){
				value = event.value;
				this.passwordRepeatObj.pVal=value;
			}else if(num==2){
				value = event.target.value;
				this.passwordRepeatObj.prVal=value;
			}else{
				value = event.target.value;
				this.passwordRepeatObj.pVal=value;
			}
			if(num!=2){
				if(this.passwordRepeatObj.pVal==''){
					this.passwordRepeatObj.pFlag=0;
					this.passwordRepeatObj.pText=""
				}else if(this.passwordRepeatObj.pVal.length<6){
					this.passwordRepeatObj.pFlag=0;
					this.passwordRepeatObj.pText="请输入超过6位密码"
	            }else{
					this.passwordRepeatObj.pFlag=1;
					this.passwordRepeatObj.pText=""
	            }
			}else{
				if(this.passwordRepeatObj.prVal==''){
					this.passwordRepeatObj.prFlag=0;
					this.passwordRepeatObj.prText=""
				}
			}
			
			this.currentValue=this.passwordRepeatObj.pVal;
            
            if(this.passwordRepeatObj.pVal==this.passwordRepeatObj.prVal){
            	this.passwordRepeatObj.p_prFlag=1;
            	this.passwordRepeatObj.prText="";
            	if(this.passwordRepeatObj.prVal.length>0){
					this.passwordRepeatObj.prFlag=1;
            	}
            }else if(this.passwordRepeatObj.pVal!=this.passwordRepeatObj.prVal){
            	this.passwordRepeatObj.p_prFlag=0;
            	if(this.passwordRepeatObj.prVal.length>0){
					this.passwordRepeatObj.prFlag=0;
					this.passwordRepeatObj.prText="请与密码保持一致"
            	}
            }
            var obj={
            	name:"prflag",
            	num:this.passwordRepeatObj.p_prFlag
            }
            this.$emit('flag', obj);
		},
		changeProcess() {
            this.processPoint = this.$refs.processRange.value;
        },
		close_input(num){
			//清除内容

            if(num!=1){
	            this.currentValue=""
				this.$refs.input1.value=""
			}
			if(this.types=="phone"){
				this.phonecheck(this.$refs.input1,1)
			}else if(this.types=="email"){
				this.emailcheck(this.$refs.input1,1)
			}else if(this.types=="verifyCode"){
				this.verifyCodeCheck(this.$refs.input1,1)
			}else if(this.types=="default"){
				this.defaultCheck(this.$refs.input1,1)
			}else if(this.types=="password"){
				this.passwordCheck(this.$refs.input1,1)
			}else if(this.types=="passwordRepeat"){
				if(num==1){
					this.$refs.input2.value="";
					this.passwordRepeatObj.prFlag=0;
					this.passwordRepeatObj.prText="";
					this.passwordRepeatObj.prVal="";
				}else{
					this.passwordRepeatCheck(this.$refs.input1,1)
				}
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
	height: 17px;
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
	padding-right: 28px;
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

}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
}    
input[type=range]:focus {
    outline: none;
}
input[type=range]::-webkit-slider-thumb {/*滑块*/
    -webkit-appearance: none;
    height: 25px;
    width: 25px;
    margin-top: -4px; /*使滑块超出轨道部分的偏移量相等*/
    background: #ffffff; 
    border-radius: 50%; /*外观设置为圆形*/
    border: solid 0.125em rgba(205, 224, 230, 0.5); /*设置边框*/
    box-shadow: 0 .125em .125em #3b4547; /*添加底部阴影*/

 }
.radioDiv{
	width: 15px;
	height: 15px;
	position: relative;
	border: 1px solid #CECECE;
    border-radius:50% ;
    display: inline-block;
    vertical-align: middle;
}
.radioDiv:before{
	content: "";
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	transform:scale(.6);
	-webkit-transform:scale(.6);
    border-radius:50% ;
	background: #CECECE;
}
.radio_act{
	border-color: #26a2ff;
}
.radio_act:before{
	background: #26a2ff;
}
.radioText,.cbDiv_Text{
    display: inline-block;
	margin-left: 5px;
	font-size: 14px;
}
.ui-show{
	display: block;
	height: 35px;
	line-height: 35px;
	border-top: 1px dashed #888;
	padding-left: 15px;
}
.ui-show:last-child{
	border-bottom: 1px dashed #888;
}
.cbDiv{
	width: 15px;
	height: 15px;
	display: inline-block;
	vertical-align: middle;
	background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC6ElEQVR4Xu2bS2gTURSGvz+xomIF96KCIBVBlDZO1LpxobgQ1I0IotAmCgUFV1r3iriygkiS1o0oqBR8gAvBjaJJ6wtfCLqxG5c+qBTR2CMTbJwEN6WNQ8KZTWBm7jn//XPvnXs/OOIfVypvG5OwxcQGGRsQi//1XhPc+2RQklGcTHJvtFfFes2K3ggKtkQwAOxugs5NW6IZwz+SHHneq49TjasGpAu2x4yLEgumHbmJGpgxIdFTyupqKLtiQGfOVrQleA3Ma6K+zETq94ToeJTRmDBTMMhjQWdNRKNs4i7wRjAxk2xxtTUqo3m1jK2IOXU6HpYybFaQs24leFD3cKwsdj3J6Hlc4mczb9egrZszyQ3E0pq4oltB3volTk09MLCESBczGp1NEXHHSucssARF/Zn2FT3GcaXzdgexPWLAzZGsdsYtuBH50wW7BeyIxL4dGjCOWBgxoH8kq9ONEBB3zPUFO5GAk1UdxmelC2Z1wvpKWV2IW2wj8gd565M4H43tBvgI8Cnga4Avgv4VqHXAP4O+D/CNkO8EfSvciL143DH9LOCHIT8N+nHYeYADESdCjsScCUYccCjqUNShqENRh6IORR2K1jjgVNipsFNhp8JOheMmuI3I71TYqbBTYafCToWdCjsVdirsVNip8F8HHIsHefsqsajqiThWyuhMI/biccdM5+0YIloKMB5WjDyQ6K7WCxiXRg5qf9xiG5E/KNgVwd5IbcT9cAqcAw5HDAjLyrpKWb1thIi4YnbmrKNNPEPMjxhwNhwBPRJDNcKMD+UEu1ulaCqVt1RSXAeWRfs5CQe0acjaf/3iJWJ5nQmtUzYH24Bk/Z+cTLKmUjiZytvahBgRzI1riP7PvGb8tCSp0V69qJbOBgXbBwy1ugkGP2T0lA7qcmh6TfF0umCrgGEg/G29y3iF2BNd4GsMCHu8+prNbf/CUYO1gpUVMyIrZ1O5YnxDvDd4h/GkbAw8PaSf0T78BkC5Kk10oJIrAAAAAElFTkSuQmCC);
	background-size:100% ;
}
.cbDiv_act{
	background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFXklEQVR4Xu1ba4hUZRh+nrOz7qoJhhQYGRVLSOWtzZmxTWtFlEyiLLIgE20uWKZENzACCSrSH166zpxtQ6sf/dkfpoUSbpmbM3vJUhJ/SAglghYJau62M+eJOe4uZ2aVPTNzFjzjzK/DnPd7v+d5vu+873clHL/ZrbrdyOBlAI0kZgCod7737bNwUcBhAl3ZADZ3reLvg1w4+BBuUUQWtpIY51uiboAL5wWsS8fYmjO3BQgmFDcMfOKmfKXYCIino0yyMaFbAgaOEhhfKeTc8BBwoYa4i+Gk3gPxmptCFWcjbGTY1AEATRVHzh2hjlwP6AcRcGdfYVZCX64HqMJoFUWnKkC1B1Q/gWoMqAbBosJmhRlXs0A1C1SzQDULVEQWkGAR2GIR3RSeJ3G/m3hdEUFQQr+ApZ0x7hokHTK1n8DckUTwvwC59T7h4XSc7U6yQVOvGsDGShfgHIkFByPsLCQaTqoDxH2VK4BwmsKCg3EeKSQZSmodiS0jkbcXRf04DhDwJzOYm1rNE8PIm3qTwFtuyPtVgOP9Fub1xHkqj6TEsIltINa4Je8/AYQjVh2aO1fw7zySG2SEbsKXJJ4qhrzfBOisMbCg4zmec5JsTKi2lmgDsaRY8r4RQMJeYyIePfgkLzpJTt+h8WN78TWJ5lLI+0WAtvoGLPu+mRknyZmfaWJ9BvsAzCqVvB8E2J6KYCXIvOF6Y0KTa4l9IKaWQ/7qFkD4IBXji8MGOB/rVgXwI4GbyyV/1QpgAW90RvlOIcHGhKbWEj+AuNEL8iUJIKAbwHcAFhOY7hWQnB8BohBPxWgW+p3ToqAl7CEw0cs6ixoJSjiQjvHSDOtS7jVJrPIEkJABsSwVZVuhv1BCzSR2gxjrSV0OJ0UJAOBxJ0A7BxvIzcLK21wV+iQ8ko5zbyHBYFJLCLSRqPWafNGfgIT16RjfdQKZ9pGuH1eLHgK3lQIwt09PYlEqwo5hAa9FK2ShlYRRim83ZYrqAbmFBxpoLgQbTOoOA+gBcZ2bSgdtBJzNEvO7Izw0rOUTWmMYeL8Yf6XYFiWAXYHwTzaAGV2r+IezwmBSiwh847a1JJzKCPN74jw2rOVNvQ1gfSmEii1TvAA5DYSj5/sR+u0FnndWGErqFRKbRgQhnMgGMK9QREgMmUiQiI7owyODkgQYSFl70iexGBto5Ylg6nMCz1wRn3DMyOKBn1bztNPmwXYFeo/jKwBLPeLmyk3JAgyIsCkdZd75ooHZWW45avZlEBzqDWD+Lyt51vmuYZvqJtVjJ4mFrlB7aFSWAAMiLE9H+YUT06xW3TAma2eGKY7/O/6tw6LDz/KC07bpU03IWvi27FRaoijlCyD0W0BTV4xdeZ9Cq+5kBt324EXY9Vcvnji+ln15gXO7Jhl9aAcxrUT8ZRcrW4ABBGeyNWgsDGrhpB6xR3cnsbwwVsxu1ZSarD2dbSibRRkOvBLgipnhctjmtKjBsrCfxOQysHtS1DMBhjJDBA8Vzt+dSOckNM0y0E5gkicMynTiqQA2FmFjKsbXL4cr3KImyA54E8rE7Vlx7wW4NK0dlhlCCS0ksRNEnWfoPXA0OgLkNisNPNYZ4e4cxqCppw1hx9V4InVUBBhqGKFLxBkCiz1orFFxMboCjApkb51WBfDj5qiXfaDaA6o9oHpM7ho/Jhcy1UdgjJeBxS++7EXeUFKHSMz0C2hPcQo/M2SqlcBKTx37xJkEk/e26O4a2ctX19RnIOA/S7jHvjobNrUWwFafNJwnMAWsSUf54dDl6ZCpGITNlX552t6KE14a3IEeEiAn69D1edpdIxcYK+f6PPErhe7C6/P/A2cpRanub76TAAAAAElFTkSuQmCC);
}

</style>
