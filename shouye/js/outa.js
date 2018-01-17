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
				//banner 左边
		banner_left: function() {
			var timer = null;
			var index = 0;
			var arr = ["#b79798", "#a0d521", "#ed5b08", "#f9c210", "#fb82b5", "#e9115c", "#e2372d", "#d98966", "#de2e2e", "#da2943"]
			timer = setInterval(auto, 2000)

			function auto() {
				index++;
				if(index == $(".banner_box a").size()) {
					index = 0;
				}
				$(".banner_box").find("li").eq(index).addClass("banner_active").siblings().removeClass("banner_active");
				$(".banner_box a").eq(index).show()
					.siblings("a")
					.hide();
				$("#banner").css({
					"background": arr[index]
				})
			}

			$(".banner_box").find("img").mouseenter(function() {
				$(".banner_z").css("display", "block");
				clearInterval(timer)
			}).mouseleave(function() {
				$(".banner_z").css("display", "none");
				timer = setInterval(auto, 2000)

			})
			$(".banner_z").mouseenter(function() {
				$(".banner_z").css("display", "block");
				clearInterval(timer)
			}).mouseleave(function() {
				$(".banner_z").css("display", "none");
				timer = setInterval(auto, 2000)

			})
			$(".banner_left").click(function() {
				if(index == 0) {
					index = $(".banner_box a").size();
				}

				index--;
				$(".banner_box a").eq(index).show()
					.siblings("a")
					.hide();
				$("#banner").css({
					"background": arr[index]
				})

			})
			$(".banner_right").click(function() {
				if(index == $(".banner_box a").size()) {
					index = 0;
				}

				index++;
				$(".banner_box a").eq(index).show()
					.siblings("a")
					.hide();
				$("#banner").css({
					"background": arr[index]
				})

			})

			$(".banner_box ul").find("li").mouseover(function() {
				$(this).addClass("banner_active").siblings().removeClass("banner_active");
				clearInterval(timer);
				index = $(this).index() - 1;
				auto()
			}).mouseout(function() {
				timer = setInterval(auto, 2000);
			})
		},
		//banner 右边
		banner_right : function(){
			$(".banner_r_oul li").mouseenter(function(){
				$(this).css("border-bottom","2px solid #0D8700").siblings("li").css("border-bottom","2px solid #fff")
				var a = $(this).index();
				$(".banner_r_oul_a").eq(a).show().siblings(".banner_r_oul_a").hide();
			})
		},
		
		
		
		
	}
})
