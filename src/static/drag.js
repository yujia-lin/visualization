//常量的定义
import Vue from 'vue'
window.previousdom=null;
window.domNum=0;
window.parameterobj={}
const resizetext=
  '<div class="resizeLT resizebox"></div>'+
  '<div class="resizeCT resizebox"></div>'+
  '<div class="resizeRT resizebox"></div>'+
  '<div class="resizeCB resizebox"></div>'+
  '<div class="resizeLB resizebox"></div>'+
  '<div class="resizeRB resizebox"></div>'+
  '<div class="resizeLC resizebox"></div>'+
  '<div class="resizeRC resizebox"></div>';

const toolbarlabel = [
	{
		htmltext:'<div class="textfubox movebox"><div class="fontboxs">文字可更改</div><div class="maskchange"></div></div>',
		csstext:'position: absolute;left: 10px;top: 10px;width:180px;height:18px'
	},
	{
		htmltext:'<div class="textfubox movebox"><input type="text" placeholder="请输入文字" class="textbox"><div class="maskchange"></div></div>',
		csstext:"position: absolute;left: 10px;top: 10px;width:200px;height:32px"
	}
	
]

function drag(oDrag){
  var disX=0;
  var dixY=0;

  var handle =  oDrag;

  handle.style.cursor = "move";
  handle.onmousedown = function (event){
  	console.log(event)
  	var sub=0
  	if(window.previousdom!=null){
		for(var i=0;i<window.previousdom.getElementsByTagName("div").length;i++){
			if(window.previousdom.getElementsByTagName("div")[i].id=="resize"){
				window.previousdom.getElementsByTagName("div")[i].remove()
			}
	  	}
  		window.previousdom=handle;
  	}else{
  		window.previousdom=handle;
  	}
  	for(var i=0;i<document.getElementById("parentscanvas").getElementsByTagName("div").length;i++){

  		if(document.getElementById("parentscanvas").getElementsByTagName("div")[i].id=="resize"){
  			sub=1
  		}
  	}
    var event = event || window.event;
    if(sub!=1){
    	var div=document.createElement("DIV")
		div.className = 'resize';
		div.innerHTML=resizetext;
		
		div.setAttribute("id","resize")
		div.setAttribute("data-num",window.domNum)
		window.domNum++
		oDrag.appendChild(div)
    }
    
    disX = event.clientX - oDrag.offsetLeft;
	
    var disY = event.clientY - oDrag.offsetTop;
    document.onmousemove = function (event){
      var event = event || window.event;
      var iL = event.clientX - disX;
      var iT = event.clientY - disY;
      var maxL = document.getElementById("parentscanvas").getElementsByTagName("div")[0].clientWidth - oDrag.offsetWidth;
      var maxT = document.getElementById("parentscanvas").getElementsByTagName("div")[0].clientHeight - oDrag.offsetHeight;
//  console.log(document.getElementById("parentscanvas").getElementsByTagName("div")[0].clientWidth)
//  console.log(oDrag.offsetWidth)
      
      iL <= 0 && (iL = 0);
      iT <= 0 && (iT = 0);
      iL >= maxL && (iL = maxL);
      iT >= maxT && (iT = maxT);
      oDrag.style.left = iL + "px";
      oDrag.style.top = iT + "px";
      return false
    };
    document.onmouseup = function (){
      document.onmousemove = null;
      document.onmouseup = null;
      this.releaseCapture && this.releaseCapture();
    };
    this.setCapture && this.setCapture();
    return false
  };  
}
function addDiv(htmls,styles,num){
	var div=document.createElement("DIV")
	div.className = 'changebox';
	div.setAttribute("style",styles)
	div.innerHTML=htmls
	document.getElementById("parentscanvas").getElementsByTagName("div")[0].appendChild(div);
	var classnames=getElementsByClass("changebox");

	drag(classnames[num])
}
function getElementsByClass(classnames){

  var classobj = new Array();
  var classint = 0;
  var tags =document.getElementById("parentscanvas").getElementsByTagName("div");

  
  for(var i in tags){
   if(tags[i].nodeType == 1){
     if(tags[i].getAttribute("class") == classnames){
       classobj[classint] = tags[i];
        classint++;
      }
    }
  }
  return classobj;
}

export {toolbarlabel,move,drag,getElementsByClass,addDiv}