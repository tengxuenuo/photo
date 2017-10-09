$(function(){

	var designWidth = 320;    // 设计稿宽度
	function resize(){
		// 获取屏幕宽度
	    var clientWidth = document.documentElement.clientWidth;

	    document.documentElement.style.fontSize = (clientWidth/designWidth*100)+"px";
	}
	resize();  // 检测屏幕变化
	
	$(window).resize(resize);


	var mySwiper = new Swiper('.swiper-container', {
		// autoplay: 2000,//可选选项，自动滑动
		direction:"vertical",
		mousewheelControl : true,
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		 }, 
	  	onSlideChangeEnd: function(swiper){ 
	    	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  	} ,
	  	pagination : '.swiper-pagination',
	  	paginationType : 'progress',
	  	loop : true,

	})

	$(".audiobtn").click(function(){
		if($("audio")[0].paused){
			$("audio")[0].play();
			$(".audiobtn img").attr("src","img/musicon.png");
			$(this).css("animation","dong 1.5s linear infinite")
		}else{
			$("audio")[0].pause();
			$(".audiobtn img").attr("src","img/musicoff.png");
			$(this).css("animation","none")
		}
	})
	$(".audiobtn").animate({transform:"rotate(180deg)"},1000);
	console.log($(".audiobtn"))














})