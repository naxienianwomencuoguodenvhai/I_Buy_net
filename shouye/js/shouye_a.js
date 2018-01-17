define(function(){
	return {
		ceiling : function(){
						$(window).scroll(function(){
							//console.log($(document).scrollTop())
								if($(document).scrollTop()<800){
									 	$("#logo").css({
			   			 	   		"position": ""
			   			 	   	})
								}
			   			 	   if($(document).scrollTop()>=800){
			   			 	   	$("#logo").css({
			   			 	   		"position": "fixed"
			   			 	   	})
			   			 	   }
							
						})
		},
		shop_cebian : function(){
			$(".shop_boxb ul").find("li").mouseenter(function(){
				$(this).find(".shop_huaguo").show()
			}).mouseleave(function(){
				$(this).find(".shop_huaguo").hide()
			});
			$(".shop_boxb ul").find("li").eq(4).click(function(){
				$("body,html").animate({"scrollTop":0},1000);
			})	
		},
		shop_animation : function(){
			var index = 0;
			$(".shop_boxa").click(function(){
				index++;
				if(index%2==1){
					$(".shopping").animate({
					"right":0
				},1000,function(){
					$(".shop_right").find("h3").animate({"left":0},500)
					$(".shop_right_boxa").animate({"left":0},500)
				})
				}else{
					$(".shopping").animate({
					"right":-276
				},1000,function(){
					$(".shop_right").find("h3").animate({"left":276},500)
					$(".shop_right_boxa").animate({"left":276},500)
				})
				};
				$(".shop_a_a").click(function(){
						$(".shopping").animate({
						"right":-276
					},1000,function(){
						$(".shop_right").find("h3").animate({"left":276},500)
						$(".shop_right_boxa").animate({"left":276},500)
					})
				})
			})
		},
		louti : function(){
			var flag = true;
			$(".louti ul").find("li").click(function(){
				flag = false;
				$(this).addClass("louti_active").siblings("li").removeClass("louti_active");
				var a = $(this).index();
				console.log($(".import_con"))
				var t = $(".import_con").eq(a).offset().top
				$("body,html").animate({ "scrollTop" : t },1000,function(){
					flag = true;
				});
			})
			$(window).scroll(function(){
				if($(document).scrollTop()<1200){
								$(".louti").hide()
							}else{
								$(".louti").show()
							}
				if(flag){
					var sTop = $(document).scrollTop();
					$floor = $(".kkp").filter(function(){
						return Math.abs( $(this).offset().top - sTop ) < $(this).height()/2;
					})
					//console.log($floor)
					var d = $floor.index();
					console.log(d)
					if(d!=-1){
						$(".louti ul").find("li").eq(d)
												 .addClass("louti_active")
												 .siblings("li")
												 .removeClass("louti_active")
					}
				}
			})
		}
	}
})

