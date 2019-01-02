 window. onload = function( ){
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
//滚动
		var ul = document.getElementById("gonggao");
  		console.log(ul.getBoundingClientRect())
        console.log(ul.offsetHeight)
        console.log(ul.offsetWidth)
        console.log(ul.offsetLeft)
        console.log(ul.offsetTop)
		function show() {
            var top = ul.offsetTop - 1; //获取left值
            ul.style.top = top + "px"; //设置left值
            //走完一半再返回
            
            if (-1 * ul.offsetTop >= 400) {
                ul.style.top = 0+"px";
               
            }
        }
        var t = setInterval(show, 10);

        //li添加鼠标移入移出事件
        var li = document.getElementsByClassName("ji");
        for (var i = 0; i < li.length; i++) {
            //移出事件
            li[i].onmouseout = function () {
                //不能加 var
                t = setInterval(show, 10);

            };
            //移入事件
            li[i].onmouseover = function () {
                clearInterval(t);
            };
        }



var box = document.getElementById('box');
		var slider = document.getElementById('slider');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var oNavlist = document.getElementById('nav').children;
		var index = 1; //打开页面生效的图片的下标为1
		var timer;
		var isMoving = false;
		box.onmouseover = function () {
			animate(left, {
				opacity: 0.6
			})
			animate(right, {
				opacity: 0.6
			})
			clearInterval(timer); //图片停止滚动
		}
		box.onmouseout = function () {
			animate(left, {
				opacity: 0
			})
			animate(right, {
				opacity: 0
			})
			timer = setInterval(next, 3000); //图片开始接着滚动
		}
		right.onclick = next;
		left.onclick = prev;

		function next() {
			if (isMoving) {
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider, {
				left: -809 * index
			}, function () {
				if (index == 7) {
					slider.style.left = '-809px';
					index = 1;
				}
				isMoving = false;
			});
		}

		function prev() {
			if (isMoving) {
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider, {
				left: -809 * index
			}, function () {
				if (index == 0) {
					slider.style.left = '-4854px';
					index = 5;
				}
				isMoving = false;
			});
		}
		//按钮点击切换事件
		for (var i = 0; i < oNavlist.length; i++) {
			oNavlist[i].index = i;
			oNavlist[i].onclick = function () {
				index = this.index + 1;
				navmove();
				animate(slider, {
					left: -809 * index
				});
			}

		}
		//图片切换时按钮样式跟着切换
		function navmove() {
			for (var i = 0; i < oNavlist.length; i++) {
				oNavlist[i].className = "";
			}
			if (index > 6) {
				oNavlist[0].className = "active";
			} else if (index <= 0) {
				oNavlist[5].className = "active";
			} else {
				oNavlist[index - 1].className = "active";
			}
		}
		//页面打开时自动滚动切换
		timer = setInterval(next, 3000);


		  function getStyle(obj, attr) { //返回值带有单位px
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
  }

  function animate(obj, json, callback) {
  	clearInterval(obj.timer);
  	obj.timer = setInterval(function () {
  		var flag = true;
  		for (var attr in json) {
  			(function (attr) {
  				if (attr == "opacity") {
  					var now = parseInt(getStyle(obj, attr) * 100);
  					var dest = json[attr] * 100;
  				} else {
  					var now = parseInt(getStyle(obj, attr));
  					var dest = json[attr];
  				}
  				var speed = (dest - now) / 6;
  				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  				if (now != dest) {
  					flag = false;
  					if (attr == "opacity") {
  						obj.style[attr] = (now + speed) / 100;
  					} else {
  						obj.style[attr] = now + speed + "px";
  					}
  				}
  			})(attr);
  		}
  		if (flag) {
  			clearInterval(obj.timer);
  			callback && callback(); //如果回调函数存在，就调用回调函数
  		}
  	}, 30);
  }

  //价值

  var select=document.getElementsByClassName('se')[0];
  select.onchange=function(){
  	 var shuzi=document.getElementsByClassName('shuzi')[0];
  	 shuzi.innerHTML="¥"+select.value;
  }
 var rightfirst=document.getElementById("rightfirst");
 rightfirst.onmouseover=function(){
 	rightfirst.style.right=0;
 }
 rightfirst.onmouseout=function(){
 	rightfirst.style.right=-87+"px";
 }
 var rightsecond=document.getElementById("rightsecond");
 rightsecond.onmouseover=function(){
 	rightsecond.style.right=0;
 }
 rightsecond.onmouseout=function(){
 	rightsecond.style.right=-82+"px";
 }
 var rightthird=document.getElementById("rightthird");
 rightthird.onmouseover=function(){
 	rightthird.style.right=0;
 }
 rightthird.onmouseout=function(){
 	rightthird.style.right=-20+"px";
 }
  var rightforth=document.getElementById("rightforth");
 rightforth.onmouseover=function(){
 	rightforth.style.right=0;
 }
 rightforth.onmouseout=function(){
 	rightforth.style.right=-82+"px";
 }
  var rightfifth=document.getElementById("rightfifth");
 rightfifth.onmouseover=function(){
 	rightfifth.style.right=0;
 }
 rightfifth.onmouseout=function(){
 	rightfifth.style.right=-92+"px";
 }
 var rightsix=document.getElementById("rightsix");
 rightsix.onmouseover=function(){
 	rightsix.style.right=0;
 }
 rightsix.onmouseout=function(){
 	rightsix.style.right=-82+"px";
 }