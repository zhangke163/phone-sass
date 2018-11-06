$(function(){
	// 动态设置缩放比
	var scale = 1 / devicePixelRatio;
	console.log(devicePixelRatio)
	document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
	
	//获取视窗宽度
	var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	//获取视窗
	var htmlDom = document.getElementsByTagName('html')[0];
	//动态改变根元素的字体大小
	htmlDom.style.fontSize = htmlWidth/10 +'px';
})