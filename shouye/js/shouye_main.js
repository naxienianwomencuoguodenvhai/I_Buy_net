define(function() {
	//	function fn(){
	//	$("body").css("background","skyblue");
	//	}
	//	return {
	//		fn:fn
	//	}
	return {
		
		
	

		//nav二级菜单1
		nav_a: function() {
			$(".nav_f").mouseenter(function() {
				//console.log($(this).index())
				var a = $(this).index()
				//console.log($(".nav_a_1"))
				$(".nav_a_1").eq(a).show().siblings(".nav_a_1").hide();
			}).mouseleave(function() {
				$(".nav_a_1").css("display", "none")
			})
			$(".nav_a_1").mouseenter(function() {
				$(this).css("display", "block")
			}).mouseleave(function() {
				$(this).css("display", "none")
			})
		},
		//nav二级菜单2
		nav_b : function(){
			$(".nav_right").mouseenter(function(){
				$(this).css({
					"border" : "1px solid #3a9901 ",
					"border-bottom" : "none"
				})
				$(".nav_right_xiala").css("display","block")
			}).mouseleave(function(){
				$(this).css({
					"border" : "none"				
				})
				$(".nav_right_xiala").css("display","none")
			})
			$(".nav_right_xiala").mouseenter(function(){
				$(".nav_right").css({
					"border" : "1px solid #3a9901 ",
					"border-bottom" : "none"
				})
				$(".nav_right_xiala").css("display","block");
			}).mouseleave(function(){
				$(".nav_right_xiala").css("display","none");
				$(".nav_right").css({
					"border" : "none"				
				})
			})
		},
		//每日劲爆品轮播-hottest
		hottest : function(){
			//滑过图片
			$(".public_tupian").mouseenter(function(){
				$(this).find(".public_z").css("display","block").animate({
									"left":"242"
				},500,function(){
					$(this).find(".public_z").css("display","none").animate({
									"left":"-242"
							})
				}.bind(this))
			})
			//轮播图
			$(".pbulic_btn").parent().mouseenter(function(){
				$(".pbulic_btn").show()
			}).mouseleave(function(){
				$(".pbulic_btn").hide()
			});
			$(".recommend_con_a").mouseenter(function(){
				$(".hottest_btn").show()
			}).mouseleave(function(){
				$(".hottest_btn").hide()
			});
			var flag = true;
			var index = 0;
			
			$(".hottest_btn").click(function(){
				console.log(	$(this))
				if(flag){
					flag = false;
						if(index==0){
					index++
					$(this).parent().find(".hottest_oul").animate({
						"left":"-1014.5"
					},500,function(){
						flag = true;
					})
				}else{
					index=0
					$(this).parent().find(".hottest_oul").animate({
						"left":"0"
					},500,function(){
						flag = true;
					})
				}
				}
			})			
		},
		//1F轮播
		oneF : function(){
			var timer = null;
			var flag = true;
			var index = 0;
			timer = setInterval(auto,1500)
			function auto(){
				
				if(flag){
					flag = false;
					index++;
				if(index==3){
					index = 0
				}
				$(".import_oli_y").find("i").eq(index).addClass("import_active").siblings().removeClass("import_active");
					$(".import_oli_box").animate({"margin-left":-499},1000,function(){
						$(this).parent().find(".import_oli_box").css("margin-left",0).find(".import_oli_box_a").first().appendTo($(this).parent().find(".import_oli_box"))
									flag = true;
				})	
				}				
			}
				$(".import_oli_y").find("i").mouseenter(function(){
				$(this).addClass("import_active").siblings().removeClass("import_active");
					var a = $(this).index();
						$(".import_oli_box").animate({"margin-left":a*-499},1000)
				})
			$(".pbulic_btn").parent().mouseenter(function(){
				clearInterval(timer)
			}).mouseleave(function(){
				timer = setInterval(auto,1500)
			})
			$(".import_oli_left_anniu").click(function(){
				
				if(flag){
					flag = false;
					index++;
				if(index==3){
					index = 0
				}
				$(".import_oli_y").find("i").eq(index).addClass("import_active").siblings().removeClass("import_active");
					$(this).parent().find(".import_oli_box").css("margin-left",-499)
										.find(".import_oli_box_a:last")
										.prependTo($(this).parent().find(".import_oli_box"))
					$(".import_oli_box").animate({"margin-left":0},1000,function(){
							flag = true;
						});
				}
			})
			$(".import_oli_right_anniu").click(function(){
				auto()
			})
		},
		//1F选项卡
		oneFxuanxianka : function(){
			$(".import_con_top_oul").find("li").mouseenter(function(){
				$(this).addClass("import_con_top_oul_active").siblings("li").removeClass("import_con_top_oul_active")
				var a = $(this).index();
				//console.log(a)
				
			$(this).parent().parent().parent().find(".import_con_bottom_right_oul").eq(a).show().siblings(".import_con_bottom_right_oul").hide()
				
			})
		},
	
	
	
	
	
	
	}
})