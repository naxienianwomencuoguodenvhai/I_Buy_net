define(function(){
	return {
		sub : function(){
				var str = "";
				var arr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","u","v","w","x","y","z","o","p","q","r","s","t","n","m","l","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
				for(var i = 0; i<4;i++){
					var a =  parseInt(Math.random()*arr.length);
					str+=arr[a]
					//console.log(str)
				}
				$(".ospan").html(str)
		},
		tijiao : function(){
			
				var yonghu = $.cookie("name")
				var mima = $.cookie("mima")
				//console.log(getCookie("mima"))
				var flagyonghu = false;
				$("#user").blur(function(){
					if($("#user").val()==""){
					$(this).css("border","1px solid red");
					return flagyonghu = false;
				}else{
					if($("#user").val()==yonghu){
						$(this).css("border","1px solid #ccc");
						return flagyonghu = true;
					}else{
						$(this).css("border","1px solid red");
						$("#tishi").css("display","block").html("登录失败，请检查用户名和密码是否正确");
						return flagyonghu = false;
					}
				}
				})
				var flagmima = false;
				$("#word").blur(function(){
					if($("#word").val()==""){
					$(this).css("border","1px solid red");
					return flagmima = false;
				}else{
					if($("#word").val()==mima){
						$(this).css("border","1px solid #ccc");
						$(".BOX").css("display","block")
						return flagmima = true;
						
					}else{
						$(this).css("border","1px solid red");
						$("#tishi").css("display","block").html("登录失败，请检查用户名和密码是否正确");
						return flagmima = false;
					}
					}
				})
				var flagYanzheng = false;
				$("#tex").blur(function(){
					if($("#tex").val()==$(".ospan").html()){
						$(this).css("border","1px solid #ccc");
						$("#tishi").css("display","none").html("");
						return flagYanzheng = true;
					}else{
						$(this).css("border","1px solid red");
						$("#tishi").css("display","block").html("请输入正确的验证码");
						return flagYanzheng = false;
					}
				})
				$("form").submit(function(){
					if(flagyonghu&&flagmima&&flagYanzheng){
						alert("登录成功");
						return true;
					}else{
						$("#wrap").css("display","block");
						$(".alert").css("display","block");
						return false;
					}
				})
				$(".spana").click(function(){
						$("#wrap").css("display","none");
						$(".alert").css("display","none");
				})
				$(".btna").click(function(){
						$("#wrap").css("display","none");
						$(".alert").css("display","none");
				})
		}
	}
})