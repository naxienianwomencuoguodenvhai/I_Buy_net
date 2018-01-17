//设置配置文件 （配置依赖模块的路径）
require.config({
	paths:{
		"jquery" : "jquery-1.11.1.min",
		"coom_a" : "cooma"
		
		
	}
})
requirejs(["jquery","coom_a"],function($,coom_a){
	coom_a.top_2_xiala();
	coom_a.top_2_xiala_a();
	coom_a.top_2_xiala_b();
	coom_a.shop_cebian();
	coom_a.shop_animation();
	coom_a.nav_a();
	coom_a.nav_b();
	coom_a.xiala_z();
	coom_a.fdj();
	
	
	
})