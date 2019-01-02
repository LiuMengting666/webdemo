var qian=document.getElementsByClassName("qian");
 window. onload = function( ){
 	qian[0].style.backgroundColor="red";
 	var cover = document . getElementsByClassName('cover')[0];
 	window. onscroll = function( ){
 		var st = document.documentElement.scrollTop||document.body.scrollTop;
 		if(st>150){
 			cover.style. position = "fixed"
 		}
 		else
 		{
 			cover.style. position = "static"
 		}
 	}
 }

 for(var i=0;i<qian.length;i++){
 	qian[i].onclick=function(){
 		for(var i=0;i<qian.length;i++){
 			qian[i].style.backgroundColor="black";
 		}
 		this.style.backgroundColor="red";
 	}
 }

 var leftjian=document.getElementsByClassName("leftjian")[0];
 var rightjian=document.getElementsByClassName("rightjian")[0];
 var sp0=document.getElementById("sp0");
 var sp1=document.getElementById("sp1");
 var mid=document.getElementById("mid");
 var mid2=document.getElementById("mid2");
 var Bimg = document.getElementById("Bimg");
 leftjian.onclick=function(){
 	if(sp1.style.border="1px solid #ff9003"){
 		sp1.style.border="1px solid #fff";
 		console.log(sp1.style.border);
 		sp0.style.border="1px solid #ff9003";
 		mid.setAttribute("src","imgs/pp0.jpeg");
 		mid2.setAttribute("src","imgs/pp0.jpeg");
 		Bimg.setAttribute("src","imgs/pp0.jpeg");
 	}
 }
 rightjian.onclick=function(){
 	if(sp0.style.border="1px solid #ff9003"){
 		sp0.style.border="1px solid #fff";
 		sp1.style.border="1px solid #ff9003";
 		mid.setAttribute("src","imgs/pp1.jpeg");
 		mid2.setAttribute("src","imgs/pp1.jpeg");
 		Bimg.setAttribute("src","imgs/pp1.jpeg");
 	}
 }
 sp0.onclick=function(){
 	if(sp0.style.border="1px solid #fff"){
 		sp1.style.border="1px solid #fff";
 		sp0.style.border="1px solid #ff9003";
 		mid.setAttribute("src","imgs/pp0.jpeg");
 		mid2.setAttribute("src","imgs/pp0.jpeg");
 		Bimg.setAttribute("src","imgs/pp0.jpeg");
 	}
 }
 sp1.onclick=function(){
 	if(sp1.style.border="1px solid #fff"){
 		sp0.style.border="1px solid #fff";
 		sp1.style.border="1px solid #ff9003";
 		mid.setAttribute("src","imgs/pp1.jpeg");
 		mid2.setAttribute("src","imgs/pp1.jpeg");
 		Bimg.setAttribute("src","imgs/pp1.jpeg");
 	}
 }
 var xiaimg1= document.getElementsByClassName("lefttu2")[0];
 var img1 = document.getElementsByClassName("lefttu")[0];
 var img2 = document.getElementsByClassName("daxiao")[0];
 var slider = document.getElementsByClassName("slider")[0];
 var box = document.getElementsByClassName("aboutagain")[0];
 var righttext=document.getElementsByClassName("righttext")[0];
 xiaimg1.onmouseover=function(){
 	righttext.style.zIndex=-1;
 	box.style.zIndex=0;
 }
 img1.onmouseover = function () {
 	righttext.style.zIndex=-1;
 	box.style.zIndex=0;
 	slider.style.display = 'block';
 	img2.style.display = 'block';
 }
 img1.onmouseout = function () {
 	slider.style.display = 'none';
 	img2.style.display = 'none';
 	righttext.style.zIndex=0;
 	box.style.zIndex=-1;
 }

 img1.onmousemove = function (ev) {
 	var ev = ev || window.event;

 	var oL = ev.clientX - img1.offsetLeft - slider.offsetWidth / 2-40;
 	var oT = ev.clientY - img1.offsetTop - slider.offsetHeight / 2-100;
 	var oMaxw = img1.offsetWidth - slider.offsetWidth;
 	var oMaxh = img1.offsetHeight - slider.offsetHeight;

 	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
 	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

 	slider.style.left = oL + 'px';
 	slider.style.top = oT + 'px';

 	var scale = img2.offsetWidth / slider.offsetWidth;

 	Bimg.style.left = -1.3 * oL + 'px';
 	Bimg.style.top = -1.3 * oT + 'px';


 }
 var shao = document.getElementById('shao');
 var duo = document.getElementById('duo');
 var ao = document.getElementById('ao');
 var bo = document.getElementById('bo');
 var arr = document.getElementById('arr');
 shao.onclick = function(){
 	shao.style.border = '1px solid #ff0853';
 	duo.style.border = '';
 	shao.style.width = '62px';
 	duo.style.width = '30px';
 	ao.setAttribute('src','imgs/duigou.png');
 	bo.removeAttribute('src');
 	arr.innerHTML ='"150ml"';
 	shao.style.cursor = 'pointer';
 }
 duo.onclick = function(){
 	shao.style.border = '1px solid #fff';
 	duo.style.border = '1px solid #ff0853';
 	duo.style.width = '62px';
 	shao.style.width = '30px';
 	bo.setAttribute('src','imgs/duigou.png');
 	ao.removeAttribute('src');
 	arr.innerHTML ='"200ml"';
 	duo.style.cursor = 'pointer';
 }
 var crr = document.getElementById('crr');
 var crr1 = document.getElementById('crr1');
 var crr0 = document.getElementById('crr0');
 var value = crr0.value; 
 console.log(value);
 crr.onclick = function(){

 	if (value<2) {
 		crr.style.cursor = 'not-allowed';
 		console.log(crr0.value);
        // value++;
    }else{
    	crr.style.cursor = "pointer";
    	crr0.setAttribute('value',--value);       
    } 
} 
crr.onmouseover = function(){
	
	if (value<2) {
		crr.style.cursor = 'not-allowed';
	}else{
		crr.style.cursor = "pointer";    
	} 
} 
crr1.onclick = function(){
	
	if (value>4) {
		crr1.style.cursor = 'not-allowed';
		console.log(crr0.value);
	}else{
		crr.style.cursor = "pointer";

		crr0.setAttribute('value',++value);
		console.log(value);
	} 
} 
crr1.onmouseover = function(){	
	if (value>4) {
		crr1.style.cursor = 'not-allowed';
	}else{
		crr1.style.cursor = "pointer";

	} 
} 
var cross3=document.getElementById("cross3");
var cha=document.getElementById("cha");
var con=document.getElementById("con");
var huikuang=document.getElementsByClassName("huikuang")[0];
cross3.onclick=function(){
	huikuang.style.zIndex=0;
}
cha.onclick=function(){
	huikuang.style.zIndex=-1;
}
con.onclick=function(){
	huikuang.style.zIndex=-1;
}