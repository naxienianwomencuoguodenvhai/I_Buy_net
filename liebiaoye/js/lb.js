define(function(){
	return {
		mue_a : function(){
			$(".mue_a_b").mouseenter(function(){
				$(".mue_a_a_z").css("display","block")
			}).mouseleave(function(){
				$(".mue_a_a_z").css("display","none")
			})
			$(".mue_a_a_z").mouseenter(function(){
				$(".mue_a_a_z").css("display","block")
			}).mouseleave(function(){
				$(".mue_a_a_z").css("display","none")
			})
		},
		za : function(){
			var index = 0;
			$(".mue_psb").click(function(){
				index++;
				if(index%2==1){
					$(".mue_oul").css("height",100);
					$(".mue_oul_a").css({
						"height":83,
						"overflow":"auto"
					})
					$(this).html("收起&nbsp;∧")
				}else{
					$(".mue_oul").css("height",67);
					$(".mue_oul_a").css({
						"height":40,
						"overflow":"hidden"
					})
					$(this).html("更多&nbsp;∨")
				}			
			})
			$(".top_a a").click(function(){
				$(this).addClass("top_active").siblings("a").removeClass("top_active");
			})
			$(".top_bzz_oul li a").click(function(){
				$(this).css({
					"background-position-y":-32
				})
			})
		},
		cebian : function(){
			$(".mian_left_x").click(function(){
				$(this).css("display","none");
				$(".mian_left").css("display","block");
				$(".top").css("width",977);
				$(".mian_right").css("width",1000)
			})
			$(".unfold").click(function(){
				$(".mian_left_x").css("display","block");
				$(".mian_left").css("display","none");
				$(".top").css("width",1095);
				$(".mian_right").css("width",1238)
			})
		},
		ajx : function(){
			showdata()
			var page = 40;
			var index = 1;
			function showdata(){
					
				$.ajax({
					type:"get",
					url:"http://127.0.0.1/I_Buy/I_Buy_net/liebiaoye/json/liebiao.json?id="+Math.random(),
					async:true,
					success : function(e){
						console.log(index)
						var str = "";
						for(var i= (index-1)*page; i <index*page;i++){
							if(i<=e.length-1){
								str+=`<li>
								<div class="mian_oli_box">
									<div class="mian_oli_img">
										<a href=""><img src="${e[i].src}" data-src="${e[i].src}"/></a>
									</div>
									<span data-price="28">￥28.00</span>
									<p> 
										【自营】三利干发帽2件装紫 桃粉色9579
									</p>
									<div class="mian_oli_b">
										<div class="mian_a">
											已评价
											<a href="">
												<em>11</em>
											</a>
										</div>
										<div class="mian_b">
											<b></b>
											收藏
										</div>
										<div class="mian_c">
											<div class="ggg"></div>
											加入购物车
										</div>
									</div>
								</div>
							</li>`
							}
						}
						$(".mian_right_oul").html(str)
						var po = "";
						pagehe = Math.ceil(e.length/page);
						//console.log(e)
						for(var n = 1 ; n<=pagehe;n++){
							po+=`<button class="vv">${n}</button>`
						}
							$(".vvv").html(po)
					}
				});
			}
			//点击效果
		$(".vvv").on("click","button",function(){
			var a = $(this).index()+1;
			//console.log(a)
			index =a;
			showdata()
			//$(document).scrollTop(0)
		})
		//上一页
		$(".shang").click(function(){
			if(index<=1){
				index=1
			}else{
				index--
			}
			showdata()
			//$(document).scrollTop(0)
		})
		//下一页
		$(".xia").click(function(){
			if( index >= pagehe ){
				index = pagehe
			}else{
				index++;
			}
			showdata()
			//$(document).scrollTop(0)
		})	
		}
		
	}
})