define(function(){
	return {
		zhengze : function(){
			//邮箱
			var flagemain = false;
			$("#email").blur(function(){
				str = $("#email").val();
				var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				if( reg.test(str) ){
						$(this).css("border","1px solid #ccc");
						$(this).parent().find(".tishi").css("display","none").html("")	;
						return flagemain = true;
					}else{
						$(this).css("border","1px solid red");
						if(str==""){
							$(this).parent().find(".tishi").css("display","block").html("手机/邮箱，不能为空");
						}else{
							$(this).parent().find(".tishi").css("display","block").html("手机/邮箱格式错误")	;
						}	
						return flagemain = false;
					}
			})
			//用户名
			var flageyonghu = false;
			$("#yonghu").blur(function(){
				str = $("#yonghu").val();
				var reg =  /^[a-zA-Z0-9_-]{4,16}$/;
				if( reg.test(str) ){
						$(this).css("border","1px solid #ccc");
						$(this).parent().find(".tishi").css("display","none").html("")	;
						return flageyonghu = true;
					}else{
						$(this).css("border","1px solid red");
						if(str==""){
							$(this).parent().find(".tishi").css("display","block").html("用户名不能为空");
						}else{
							$(this).parent().find(".tishi").css("display","block").html("用户名格式错误")	;
						}	
						return flageyonghu = false;
					}
			})
			//输入密码
var flagmima = false;
$("#mima").blur(function(){
	str = $("#mima").val();
	//console.log(str)
	var reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/;
	if(reg.test(str)){
				$(this).css("border","1px solid #ccc");
				$(this).parent().find(".tishi").css("display","none").html("");
				return flagmima = true;			
	}else{
		if(/[a-zA-Z]{6,13}/g.test(str)){
			$(this).css("border","1px solid red");
			$(this).parent().find(".tishi").css("display","block").html("请用数字，字母组合密码");
		};
		if(/[0-9]{6,13}/g.test(str)){
			$(this).css("border","1px solid red");
			$(this).parent().find(".tishi").css("display","block").html("请用数字，字母组合密码");
		};
		if(str==""){
			$(this).css("border","1px solid red");
			$(this).find(".tishi").css("display","block").html("密码不能为空");
		}else{
			if(str.length<6){
				$(this).css("border","1px solid red");
				$(this).parent().find(".tishi").css("display","block").html("密码太短，不足6个字符");
			}else{
				if(str.length>13){$(this).css("border","1px solid red");
				$(this).parent().find(".tishi").css("display","block").html("密码太长啦，不能超过13个字符");
					
				}
			}
		}
		return flagmima = false;
	}
})
//确认密码
var flagqueren = false;
$("#queren").blur(function(){
	if($("#mima").val()==$("#queren").val()){
			$(this).css("border","1px solid #ccc");
			$(this).parent().find(".tishi").css("display","none").html("");
			return flagqueren = true;
	}else{
		if($("#queren").val()==""){
			$(this).css("border","1px solid red");
			$(this).parent().find(".tishi").css("display","block").html("确认密码不能为空");
			return flagqueren = false;
		}else{
			$(this).css("border","1px solid red");
			$(this).parent().find(".tishi").css("display","block").html("确认密码不一致");
			return flagqueren = false;
		}
			
	}
})
//chekd
var flagxieyi = false;
$(".zhuce").click(function(){
	var a =$("#check").prop("checked");
	console.log(a)
	if(a==true){			
			$("#check").parent().find(".tishi").css("display","none")
			return flagxieyi = true;
		}else{
			$("#check").parent().find(".tishi").css("display","block").html("请同意我买网协议");
			return flagxieyi = false;
		}
		console.log(flagxieyi)
})
	//tijiao
	$("form").submit(function(e){
	var e = e || window.event;
	e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
	if(flagxieyi&&flagmima&&flagqueren&&flagemain&&flageyonghu){
		var aa = $("#email").val();
		var bb = $("#mima").val();
		$.cookie("name",aa,{ expires: 7, path: '/' });
		$.cookie("mima",bb,{ expires: 7, path: '/' });
		return true;		
	}else{
		return false;
	}
})
		}
	}
	
	
	
	
	
	
})