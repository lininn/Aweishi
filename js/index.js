$(function(){
	//选择内容
	
	$(".biao").click(function(){
		var country=$(this).text();
		switch (country){
			case "中国":
			 eachArr(contries[0]);break;
			case "泰国":
			 eachArr(contries[1]);
			
			
			
			break;
				
			case "老挝":
			eachArr(contries[2]);break;
				
		
			case "缅甸":
			eachArr(contries[3]);break;
				
			case "柬埔寨":
			eachArr(contries[4]);break;
			
			case "马来西亚":
			eachArr(contries[5]);break;
			
			case "菲律宾":
			eachArr(contries[6]);break;
			
			case "新加坡":
			eachArr(contries[7]);break;
			
			case "印尼":
			eachArr(contries[8]);break;
			
			}
	});
	
	
	
});



function eachArr(arr){
	var zhi=arr.dataas.length;
	console.log(arr);
	var str="<h2>"+arr.name+"</h2>";
	
	for(var i=0;i<zhi;i++){
		nth=arr.dataas;
		//console.log(arr.dataas[0]);
		str+="<ul>";
		for(var j in nth[i]){
			str+="<li>"+nth[i][j]+"</li>";
		}
		str+="</ul>";
	}
	
	$(".nei_1").html(str);
	}




var contries=[{
		name:"中国",
		dataas:[{
			ming:"香港（伟仕控股集团总部)",
			adress:"地址：香港上环干诺道中200号信德中心招商局大厦33层3312室",
			tell:"电话：+0852-27861836",
			chuan:"传真：+0852-27861746",
			email:"电邮：VSTComp@vst.com.hk"
			
		}]
	},
	
	{
		name:"泰国",
		dataas:[{
			ming:"Thailand（泰国）",
			adress:"地址：21st Floor, Serm-Mit Tower 159/35 Sukhumvit 21 Road (Asok) North Klongtoey, Wattana Bangkok 10110, Thailand",
			tell:"电话：+66 2661 6666 / +66 2261 2900",
			chuan:"传真：+66 2661 6564 / +66 2661 6990 / +66 2661 6910",
			email:"电邮：pr@value.co.th Offices in Bangkok, Chiang Mai, Hat Yai, Khon Kaen, Nakhon Ratchasima, Phitsanulok, Phuket, Rayong, Surat Thani"
			
		}]
	},
	
	
	
	{
		name:"老挝",
		dataas:[]
	},
	
	
	{
		name:"缅甸",
		dataas:[]
	},
	
	
	{
		name:"柬埔寨",
		dataas:[]
	},
	
	{
		name:"马来西亚",
		dataas:[{
			ming:"马来西亚",
			adress:"地址：Lot 3, Jalan Teknologi 3/5 Taman Sains Selangor Kota Damansara 47810 Petaling Jaya Selangor, Malaysia",
			tell:"电话：+60 3 6286 8222",
			chuan:"传真：enquiry@ecsm.com.my",
			email:"Offices in Johor Bahru, Kota Kinabalu, Kuantan, Kuching, Penang, Petaling Jaya"
			
		}]
	},
	
	{
		name:"菲律宾",
		dataas:[{
			ming:"Philippines（菲律宾）",
			adress:"地址：Topy II Bldg, #3 Economia Street Libis Quezon City 1110 Philippines",
			tell:"电话：+63 2 688-3890",
			chuan:"传真：+63 2 688-3590",
			email:"电邮：marketing@msi-ecs.com.ph",
			ying:"Offices in Manila, Cebu, Davao, Taguig"
			
		}]
		


	},
	
		
		{
		name:"新加坡",
		dataas:[{
			ming:"Singapore（新加坡）",
			adress:"地址：ECS Holdings Limited 19 Kallang Avenue Singapore 339410",
			tell:"电话：+65 66596888/62999433",
			chuan:"传真：+65 6884 7549/62913912/62918380",
			email:"电邮：enquiry@ecs.com.sg"
			
			
		}]
		






	},
	
		{
		name:"印尼",
		dataas:[{
			ming:"Indonesia（印度尼西亚）",
			adress:"地址：ECS Indo Jaya, PT Ruko Mangga Dua Square Blok E 34-37 Jl. Gunung Sahari Raya No.1 Jakarta Utara 14420 - Indonesia",
			tell:"电话：+62 21 6231 2893 | Fax: +62 21 6231 3661",
			chuan:"电邮：marketing@ecsindo.com",
			email:"Offices in Bandung, Jakarta, Makassar, Medan, Semarang, Surabaya, Yogyakarta"
			
			
		}]
		








	}
	
	
	
	]


var unslider04=null;
$(function(){
	   unslider04 = $('#b04').unslider({
	
		dots: true,
		fluid: true,
		delay:2000

	});
	

	data04 = unslider04.data('unslider');


	$('.unslider-arrow04').click(function() {

        var fn = this.className.split(' ')[1];

        data04[fn]();

    });
   
   $(".btnplay").click(function(){
		str='<video autoplay="autoplay" controls="controls" id="vi_src" src="video/fisrst.mp4"></video>';
	$(".btnplay").css("display","none");
	$("#bo_con").css("opacity","1");
	$("#bo_con").html(str);
	//unslider04.data()[0].stop();
	unslider04.data("unslider").stop()
	console.log(unslider04.data("unslider").stop());
	//unslider04
	
	})

/*给video添加事件绑定当点击video界面是轮播图停止*/
$("#bo_con").on("click","#vi_src",function(){
	unslider04.data("unslider").stop();
});

  

    
	
});


 var scrollOnece=0;
   window.onscroll=function(){
   	function getScrollTop()
{
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop)
    {
        scrollTop=document.documentElement.scrollTop;
    }
    else if(document.body)
    {
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}

var bian=getScrollTop();
var nubIncrease=[0,0,0];
console.log(bian);
if(bian>1000){
	if(!scrollOnece){
	
	
	
	var thisTimer=setInterval(function(){
	nubIncrease[0]++;
	nubIncrease[1]++;
	nubIncrease[2]+=10;
	
	
	
	if(nubIncrease[0]>=35){
		nubIncrease[0]=35;
	}
	if(nubIncrease[1]>=41){
		nubIncrease[1]=41;
	}
	if(nubIncrease[2]>=450){
		clearInterval(thisTimer);
	}
	$(".hid_box ul:nth-child(1) li:last-child").html(nubIncrease[0]+"%");
	$(".hid_box ul:nth-child(2) li:last-child").html(nubIncrease[1]+"%");
	$(".hid_box ul:nth-child(3) li:last-child").html(nubIncrease[2]+"%");
	
	
},15);
scrollOnece++;
}
	
	
	
	
	
	
	
	}


   }
    
    
    /*轮播图 点击切换*/
   $(function(){
				var nowleft=null;
				//点击切换图 
				$(".pre").click(function(){
					nowleft=parseInt($(".aboutPic").css("left"));
				
					nowleft+=1080;
					if(nowleft>=0){
						nowleft=0;
					}
					$(".aboutPic").css("left",nowleft);
				
				})
				
				$(".next").click(function(){
					
				
					
					
					nowleft=parseInt($(".aboutPic").css("left"))   ;
					
					nowleft-=1080;
				var Picul=$(".aboutPic").children("ul").length;
				Picul=-Math.ceil(Picul/5)*1080;
				if(nowleft<=Picul){
					nowleft+=1080;
				}
					$(".aboutPic").css("left",nowleft);
					
				})
				
				
				
				
				/*这是轮播图   品牌的*/
				var about_ul,about_li;
	$(".aboutPic ul li").hover(function(){
			$(".aboutPic .ab_con").stop(true,true);
	var about_ul=$(this).parent("ul").index()+1;
	var about_li=$(this).index()+1;
	$(".aboutPic .ab_con").css("display","none");
	$(".aboutPic .ab_tt").css("top",10);
	$(".aboutPic .ab_bo").css("bottom",10);
	$(".aboutPic ul:nth-child("+about_ul+") li:nth-child("+about_li+")").children(".ab_con").fadeIn();
$(".aboutPic ul:nth-child("+about_ul+") li:nth-child("+about_li+")").children(".ab_con").children(".ab_tt").animate({"top":55},400);
$(".aboutPic ul:nth-child("+about_ul+") li:nth-child("+about_li+")").children(".ab_con").children(".ab_bo").animate({"bottom":55},400);		
	},function(){
	
		$(".aboutPic .ab_con").css("display","none");
	$(".aboutPic .ab_tt").css("top",10);
	$(".aboutPic .ab_bo").css("bottom",10);
	})
				
				
			})
   
   
  
