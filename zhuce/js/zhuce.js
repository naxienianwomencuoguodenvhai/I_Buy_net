require.config({
	paths:{
		"jquery" : "jquery-1.11.1.min",
		"zhu" : "zhuce-main",
		"cook" : "jquery.cookie"
	}
})

requirejs(["jquery","zhu","cook"],function($,zhu,cook){
		zhu.zhengze();
	
})
