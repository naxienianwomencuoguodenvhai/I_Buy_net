require.config({
	paths : {
		"jquery" : "jquery-1.11.1.min",
		"deng" : "deng-main",
		"cook" : "jquery.cookie"
	}
})
requirejs(["jquery","deng","cook"],function($,deng,cook){	
		deng.sub();
		deng.tijiao();
		$(".huan").click(function(){
				deng.sub()
			})
	
})