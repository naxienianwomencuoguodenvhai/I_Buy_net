define(function(){
	return {
		ck :function(){
			var arr = getCookie("prolist");
		var str = "";
		//console.log(arr)
		for(var i = 0; i<arr.length;i++){
			var shopinfo = arr[i];
		//	console.log(shopinfo.price)
			str += '<div class="shop-item clearfix">'+
					'<p class="fl"><input type="checkbox" class="ck"/></p>'+
					'<img class="fl" src="'+ shopinfo.src +'" alt="" />'+
					'<p class="fl">'+ shopinfo.name +'</p>'+
					'<span class="fl">'+ shopinfo.price +'元</span>'+
					'<p class="fl count" '+
						'data-id="'+ shopinfo.id +'" '+
						'data-price="'+ shopinfo.price +'" data-count="'+ shopinfo.count +'"'+
						'data-name="'+ shopinfo.jie +'" data-src="'+ shopinfo.src +'"'+
						'>'+
						'<span class="updateCount" data-number="1">+</span>'+
						'<span class="shop-count">'+ shopinfo.count +'</span>'+
						'<span class="updateCount" data-number="-1">-</span>'+
					'</p>'+
					'<em class="fl sumPrice">'+ (shopinfo.count * shopinfo.price) +'元</em>'+
					'<i class="fl delBtn">删除</i>'+
				'</div>'
		}
		$(".shoplist").html( str );
		//加减
		$(".updateCount").click(function(){
			
			var pid = $(this).parent().data("src");
			//var pname = $(this).parent().data("name");
			var num = $(this).parent().find(".shop-count").html();//当前商品数量
			var sign = $(this).data("number");//获取操作符 
			if( sign==-1 && num == 1){
				return;
			}
			//console.log(pid)
			for( var i = 0 ; i < arr.length ; i++ ){				
			if( pid == arr[i].src){
				sign == 1 ? arr[i].count ++ : arr[i].count--;
				setCookie("prolist",JSON.stringify(arr));
				//操作界面
				$(this).parent().find(".shop-count").html( arr[i].count );
				//总金额改变  arr[i].count * arr[i].price
				$(this).parent().next().html( arr[i].count * arr[i].price + "元" );
				jiesuan();
				break;
			}
		}
			a()
		})
		//删除
		
		$(".delBtn").click(function(){
			var pid = $(this).parent().find(".count").data("src")
			//console.log(pid)
			for( var i = 0 ; i < arr.length ; i++ ){
			if( pid == arr[i].src ){ //确定了要删除的商品  
				//删除 i 位置处的 商品  splice
				arr.splice(i,1);
				//重新设置cookie
				setCookie("prolist",JSON.stringify(arr));
				break;
			}
		}
			$(this).parent().remove();
			a()
		})
		$(".ck").click(function(){
		jiesuan();
	
		})
		function jiesuan(){
			var sumCount = 0;
			var moneyCount = 0;
			//console.log($(".ck:checked"))
			$(".ck:checked").each(function(){
				sumCount += parseInt( $(this).parent().parent().find( ".shop-count" ).html() );
				moneyCount += parseInt( $(this).parent().parent().find(".sumPrice").html() );
			})
			$(".count2").html( sumCount );
			$(".money2").html( moneyCount );
		}
		function a(){
				var a =0
		  	$(".ck").each(function(){	
		  		a+=parseInt( $(this).parent().parent().find( ".shop-count" ).html() )
		  	})
		  	//console.log(a)
		  	$(".nav_right i").html(a)
		  	$(".shop_boxa span").html(a)
		  	//console.log($(".shop_boxa span"))
		}
		a()
		//全选
		$("#selectAll").click(function(){
			$(".ck").prop("checked",$(this).prop("checked"));
			jiesuan();
		
		})
		
		
		
		
		}
	}
})