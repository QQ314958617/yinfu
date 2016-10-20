$(function(){
		$(".weixin").hover(function(){
			$(this).find("img").show()
		},function(){
			$(this).find("img").hide()
		})
		
		$(".shengwu").on("click",function(){
			$(".sanji").toggle();
			//console.log($(".sanji").css("display"))
			if($(".sanji").css("display")=="block"){
				$(this).find("b").html("─")
			}else{
				$(this).find("b").html("+")
			}
			
		})
		$(".erji li").on("click",function(){
			$(this).addClass("on").siblings().removeClass("on");
		})
		$(".sanji li").on("click",function(){
			$(this).addClass("on").siblings().removeClass("on").parent().siblings().removeClass("on");
		})
		$(".kyan_ma li:nth-child(2n)").find("img").css("margin","50px auto 0");		
		$(".houd_li li:last-child").css({border:0,margin:0});
		// 招商加盟
		var wh =$(window).height();
 		$('.join_zz_box').find('.img_01').addClass('fadeInLeft').css('display','block');
 		$('.join_zz_box').find('.img_02').addClass('fadeInLeft').css('display','block');
 		$('.join_zz_box').find('.img_03').addClass('fadeInLeft').css('display','block');
 		$('.join_zz_box').find('.img_04').addClass('fadeInLeft').css('display','block');
 		$('.join_zz_box').find('.img_05').addClass('fadeInLeft').css('display','block');
 		$('.join_zz_box').find('.img_06').addClass('fadeInDown').css('display','block');
 		$('.join_zz_box').find('.img_07').addClass('fadeInRight').css('display','block');
 		$('.join_zz_box').find('.img_08').addClass('fadeInRight').css('display','block');
 		$('.join_zz_box').find('.img_09').addClass('fadeInUp').css('display','block');
 		$('.join_zz_box').find('.img_10').addClass('slideInLeft').css('display','block');
 		$('.join_zz_box').find('span').addClass('animated slideInLeft').css('display','block');
 		// $(window).scroll(function() {
 		// 	// $(window).scrollTop()>1420-wh
 		// 	if($(window).scrollTop()>1420-wh){
 				$('.join_fx_box').find('.img').addClass('slideInLeft').css('display','block');
 				$('.join_fx_box').find('.info').addClass('slideInRight').css('display','block');
 		// 	}
 		// });
 		$('.join_advan_list:nth-child(3n)').css('marginRight','0');
 		$(".kepu_img li:last-child").css("border",0)
})
