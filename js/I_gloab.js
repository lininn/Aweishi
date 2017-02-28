$(function(){
	var theindex;
	$(".header .header_con ul li").hover(function(){
	theindex=$(this).index()

	$(".header .header_con ul li").eq(theindex).children("span").css("display","block");
	$(".header .header_con ul li").eq(theindex).css("border-bottom","4px solid #e5674e");
	//$(this).eq($("))
	},function(){
		if(theindex!=0){
			$(".header .header_con ul li").eq(theindex).children("span").css("display","none");
	$(".header .header_con ul li").eq(theindex).css("border-bottom","none");
		
		}
		
	}
	);
	
	
	
	
	
});