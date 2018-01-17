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
		},
		fdj : function(){
			//选项卡
			$(".mian_oulb li").mouseenter(function(){
				var a = $(this).index();
				$(this).css("border-color","#3EA600").siblings("li").css("border-color","#DEDEDE")
				$(".mian_oula li").eq(a).show().siblings("li").hide();
				$(".mian_oulc li").eq(a).show().siblings("li").hide();
				$(".map").css({
					"background":`url(img/a${a+1}.jpg)`
					
				})
				
			})
			//放大镜
			$(".mian_top_imgboxa").mouseenter(function(){
				Calculation()
				$(".mian_top_imgboxc").show();
				$(".wrap").show();
				$(".map").show();
				
			}).mouseleave(function(){
				$(".wrap").hide();
				$(".map").hide();
				$(".mian_top_imgboxc").hide();
			})
			$(".mian_top_imgboxa").mousemove(function(e){
		
				var e = e||event;
				e.stopPropagation();
				var  left = e.offsetX - $(".map").width()/2;
				var  top  = e.offsetY - $(".map").height()/2;		
				abc(left,top)
				
			})
			//运动结构
			function abc(left,top){
			var leftMax = $(".mian_top_imgboxa").width()-$(".map").width();
			var topMax = $(".mian_top_imgboxa").height()-$(".map").height();
			//console.log(left)
			left = Math.min(leftMax,Math.max(0,left));
			top = Math.min(topMax,Math.max(0,top));
			$(".map").css({
				"left":left,
				"top":top,
				"backgroundPositionX":-left,
				"backgroundPositionY":-top
			})
			//console.log(	$(".mian_oulc li").find("img").width())
			var bigleft = left*($(".mian_oulc li").find("img").width()/$("#bb").width())
			var bigtop = top*($(".mian_oulc li").find("img").height()/$("#bb").height())
			//console.log(bigleft)
			$(".mian_oulc li").find("img").css({
				left:-bigleft,
				top:-bigtop
			})
		}
			
			
			//根据比例来计算放大的图片的宽高；
function Calculation(){
			//计算小灰框left占大框的比例
			var ProportionL = $(".mian_top_imgboxa").width()/$(".map").width();
			//计算图片的宽度
			
			$(".mian_oulc li").find("img").css({
				width:ProportionL*$(".mian_top_imgboxc").width()
			})
			//计算小灰框top占大框的比例
			var ProportionR = $(".mian_top_imgboxa").height()/$(".map").height();
			
			//计算图片的高度
			$(".mian_oulc li").find("img").css({
				height:ProportionR*$(".mian_top_imgboxc").height()
			})
			//console.log(ProportionL*$(".mian_top_imgboxc").width())
	}
		//滚轮移动
			var obox =document.querySelector(".mian_top_imgboxa")
			var mark = document.querySelector(".map")
			obox.onmousewheel = function(event){
				
				var evt = event || window.event;
				if(evt.preventDefault){
					evt.preventDefault();
				}else{
					window.event.returnValue = false;
				}
			if(evt.wheelDelta>0){//往上滚动
				if($(".map").width()>=150){//边界：小灰框宽度最大150
					return 0;
				}else{
					$(".map").css({
						width:$(".map").width()+2
					});
					$(".map").css({
						height:$(".map").height()+2
					})
					//宽高每次往前滚动滑轮加2
					var  left = mark.offsetLeft-1;
					var  top = mark.offsetTop-1;//在滚动滑轮放大的时候让鼠标始终保持在中间位置
					abc(left,top);//传入参数调用函数让要放大的图片跟着小灰框的放大而变化
				}
			
		}else{//往下滚动
			if($(".map").width()<=50){//边界：小灰框宽度最小50
				return 0 ;
			}else{
				$(".map").css({
					width:$(".map").width()-2
				});
				$(".map").css({
					height:$(".map").height()-2
				})//宽高每次往前滚动滑轮减2
				var  left = mark.offsetLeft+1;
				var  top = mark.offsetTop+1;//在滚动滑轮放大的时候让鼠标始终保持在中间位置
				abc(left,top);//传入参数调用函数让要放大的图片跟着小灰框的缩小而变化
			}
			
		}
		Calculation();
//		console.log($(".mark").offset().top)
//		console.log($(".mark").offset().left)
	}
			
			
			
			
		}
	}
})
