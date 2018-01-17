define(function(){
	return {
		top_2_xiala: function() {
			var index = 0;
			$(".top_2_fangzi h3").find("a").click(function() {
				index++;
				if(index % 2 == 1) {
					$(".top_2_xiala_a").css({
						"display": "block"
					})
					$(".top_2_fangzi h3").css({
						"background": "#fff",
						"border": "1px solid #3ea600",
						"border-bottom": "none"
					})
					$("#warp").css("display", "block")
				} else {
					$(".top_2_xiala_a").css({
						"display": "none"
					})
					$(".top_2_fangzi h3").css({
						"background": "none",
						"border": "none"
					})
					$("#warp").css("display", "none")
				}
			})
			$(".top_2_xiala_anniu").click(function() {
				index = 0
				$(".top_2_xiala_a").css({
					"display": "none"
				})
				$(".top_2_fangzi h3").css({
					"background": "none",
					"border": "none"
				})
				$("#warp").css("display", "none")
			})
			$(".top_2_xiala_d").find("span").click(function() {
				var a = $(this).index();
				$(".top_2_z").eq(a + 1).css("display", "block").addClass("top_2_l")
					.siblings(".top_2_z")
					.css("display", "none").removeClass("top_2_l");
				$(".top_2_xiala_c_b").css("display", "block")
				$(".top_2_xiala_c_a").css({
					"border": "1px solid #ccc"
				})
				$(".top_2_xiala_c_a i").css("display", "none")
			})
			$(".top_2_xiala_c").find("div").eq(0).click(function() {
				$(".top_2_xiala_d").css("display", "block");
				$(".top_2_l").css("display", "none");
				$(".top_2_xiala_c_a").css("border", "1px solid #3a9900");
				$(".top_2_xiala_c_b").css("border", "1px solid #ccc");
				$(".top_2_xiala_c_a i").css("display", "block");
				$(".top_2_xiala_c_b i").css("display", "none");
			})
			$(".top_2_xiala_c").find("div").eq(1).click(function() {
				$(".top_2_xiala_d").css("display", "none");
				$(".top_2_l").css("display", "block");
				$(".top_2_xiala_c_a").css("border", "1px solid #ccc");
				$(".top_2_xiala_c_b").css("border", "1px solid #3a9900");
				$(".top_2_xiala_c_a i").css("display", "none");
				$(".top_2_xiala_c_b i").css("display", "block");
			})
			$(".top_2_k span").click(function() {
				index = 0;
				var c = $(this).find("a").html();
				$(".top_2_xiala_a p").find("span").html(c);
				$(".top_2_fangzi h3").find("a").html(c);
				$(".top_2_xiala_a").css({
					"display": "none"
				})
				$(".top_2_fangzi h3").css({
					"background": "none",
					"border": "none"
				})
				$("#warp").css("display", "none")
			})

		},
		top_2_xiala_a: function() {
			$("#opq").mouseenter(function() {
				$(".top_2_right_xiala").show();
				$(this).css({
					"border-color": "#3a9900",
					"background": "#fff",
					"border-bottom": "none"
				})
			}).mouseleave(function() {
				$(".top_2_right_xiala").hide();
				$(this).css({
					"border-color": "#f5f5f5",
					"background": "#f5f5f5",
					"border-bottom": "none"
				})
			})
			$(".top_2_right_xiala").mouseenter(function() {
				$(".top_2_right_xiala").show();
				$("#opq").css({
					"border-color": "#3a9900",
					"background": "#fff",
					"border-bottom": "none"
				})
			}).mouseleave(function() {
				$(".top_2_right_xiala").hide();
				$("#opq").css({
					"border-color": "#f5f5f5",
					"background": "#f5f5f5",
					"border-bottom": "none"
				})
			})
		},
			top_2_xiala_b: function() {
			$("#bbq").mouseenter(function() {
				$(".top_2_right_xiala_a").show();
				$(this).css({
					"border-color": "#3a9900",
					"background": "#fff",
					"border-bottom": "none"
				})
			}).mouseleave(function() {
				$(".top_2_right_xiala_a").hide();
				$(this).css({
					"border-color": "#f5f5f5",
					"background": "#f5f5f5",
					"border-bottom": "none"
				})
			})
			$(".top_2_right_xiala_a").mouseenter(function() {
				$(".top_2_right_xiala_a").show();
				$("#bbq").css({
					"border-color": "#3a9900",
					"background": "#fff",
					"border-bottom": "none"
				})
			}).mouseleave(function() {
				$(".top_2_right_xiala_a").hide();
				$("#bbq").css({
					"border-color": "#f5f5f5",
					"background": "#f5f5f5",
					"border-bottom": "none"
				})
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
		xiala_z: function(){
			var index = 0;
			$(".nav_left").click(function(){
				index++;
				if(index%2==1){
					$(".nav_left_a").css("display","block").animate({"height":412},500)
				}else{
					$(".nav_left_a").animate({"height":0},500,function(){
						$(".nav_left_a").css("display","none")
					})
				}
			})
		}
	}
})