//1. 获取元素
var box123 = document.getElementById("box123");
var img123 = document.getElementById("img123");
var slider = document.getElementById("slider");
var img1223 = document.getElementById("img1223");
var Bimg = document.getElementById("Bimg");

//2. 给小盒子添加事件，移入和移出、移动	 移入：浮动的slider和img2显示
img123.onmouseover = function(){
	slider.style.display = "block";
	img1223.style.display = "block";
}
img123.onmouseout = function(){
	slider.style.display = "none";
	img1223.style.display = "none";
}
img123.onmousemove = function(ev){
	var ev = ev||window.event;
	//（1）跟随鼠标的位置来计算放大镜的位置
	var left = ev.clientX - box123.offsetLeft - slider.offsetWidth/2;
	var top = ev.clientY - box123.offsetTop - slider.offsetHeight/2;
	var maxLeft = img123.offsetWidth - slider.offsetWidth;
	var maxTop = img123.offsetHeight - slider.offsetHeight;
	left = left>maxLeft?maxLeft:left<0?0:left;
	top = top>maxTop?maxTop:top<0?0:top;

	// (2)设置放大镜的位置
	slider.style.left = left +"px";
	slider.style.top = top +"px";

	//（3)根据放大镜的位置计算右侧大图移动的比例
	var w = left/maxLeft;
	var h = top/maxTop;

	// (4)计算大图最大的移动范围
	var BmaxLeft = img1223.offsetWidth - Bimg.offsetWidth; 
	var BmaxTop = img1223.offsetHeight - Bimg.offsetHeight; 

	// (5)根据比例计算右侧图片的移动距离，设置值
	Bimg.style.left = w*BmaxLeft + "px";
	Bimg.style.top = h*BmaxTop + "px";
}