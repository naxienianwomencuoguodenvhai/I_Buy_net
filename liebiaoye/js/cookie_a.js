define(function(){
	return {
		cooke : function(){
			$(".mian_right_oul").on("click",".mian_c",function(){
				var arr = [];
				var flag = true;
				var proJson = {
					name :　$(this).parent().parent().find("p").html(),
					src :  $(this).parent().parent().find("img").data("src"),
					price : $(this).parent().parent().find("span").data("price"),
					count : 1
				}				
				var oldcookie = getCookie("prolist");	
				if(oldcookie.length!=0){
					arr = oldcookie;
					for(var i =0; i < arr.length;i++){
					
					if( proJson.src == arr[i].src && proJson.name == arr[i].name ){
						//下标i对应的商品就是proJson这个对象
						arr[i].count++;
						flag = false;
						break;
					}
				}
				}
				if(flag){
					
					arr.push(proJson)
				}
				setCookie("prolist",JSON.stringify(arr),15);
				if( !confirm("点击确定，继续购物，点击取消，跳转到购物车~~~") ){
				location.href = "http://127.0.0.1/I_Buy/I_Buy_net/gouwuche/gouwuche.html"; 
			}
				abc()
			})
			
			function abc(){
			var oldcookie = getCookie("prolist");
			var aav = 0;
			if(oldcookie.length!=0){
				arr = oldcookie;
				for(var i =0; i < arr.length;i++){
					aav+=arr[i].count;
				}
			console.log(aav)
			}
			
		$(".nav_right i").html(aav);
		$(".shop_boxa span").html(aav);
		}
		 abc();
			
			
		}
	}
})