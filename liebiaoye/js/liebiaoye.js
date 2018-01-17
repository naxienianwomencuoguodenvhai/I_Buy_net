//设置配置文件 （配置依赖模块的路径）
require.config({
	paths:{
		"jquery" : "jquery-1.11.1.min",
		"coom_a" : "cooma",
		"lba" : "lb",
		"ck" : "cookie_a",
		"cook" : "cookie"
		
		
	}
})
requirejs(["jquery","coom_a","lba","ck","cook"],function($,coom_a,lba,ck,cook){
	coom_a.top_2_xiala();
	coom_a.top_2_xiala_a();
	coom_a.top_2_xiala_b();
	coom_a.shop_cebian();
	coom_a.shop_animation();
	coom_a.nav_a();
	coom_a.nav_b();
	coom_a.xiala_z();
	lba.mue_a();
	lba.za();
	lba.cebian();
	lba.ajx();
	ck.cooke();
	
	
	
})