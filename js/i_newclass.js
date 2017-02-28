/*news轮播图*/

function newsCar(){
	var  zhi=0;
	var timera=null;
var timerd=null;
	timera=setInterval(ding,2000);
	
	$("#news_btnl").click(function(){
		clearInterval(timera);
	clearTimeout(timerd);
	zhi--;
	if(zhi<0){
		zhi=3
	}
	
	$(".neimg ul li").eq(zhi).siblings().css("display","none");
	$(".neimg ul li").eq(zhi).fadeIn();
	newCar1(zhi);
	timerd=setTimeout(function(){
		timera=setInterval(ding,2000);
	},2000);
	
});
$("#news_btnr").click(function(){
	clearInterval(timera);
	clearTimeout(timerd);
	zhi++;
	if(zhi>3){
		zhi=0
	}
	$(".neimg ul li").eq(zhi).siblings().css("display","none");
	$(".neimg ul li").eq(zhi).fadeIn();
	newCar1(zhi);
	timerd=setTimeout(function(){
		timera=setInterval(ding,2000);
	},2000);
})


function ding(){
	zhi++;
	if(zhi>=4){
		zhi=0;
	}
	
	$(".neimg ul li").eq(zhi).siblings().css("display","none");
	$(".neimg ul li").eq(zhi).fadeIn();
	$(".news_new ul li").eq(zhi).siblings("li").css({"background":"#f5f5f5","color":"#000"});
	$(".news_new ul li").eq(zhi).css({"background":"#e5674e","color":"#fff"});
	
	}



}

function newCar1(zhi){
	$(".news_new ul li").eq(zhi).siblings("li").css({"background":"#f5f5f5","color":"#000"});
	$(".news_new ul li").eq(zhi).css({"background":"#e5674e","color":"#fff"});
	
}
newsCar();

 