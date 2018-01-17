//设置配置文件 （配置依赖模块的路径）
require.config({
	paths:{
		"jquery" : "jquery-1.11.1.min",
		"outaa" : "shouye_main",
		"outab" : "outa",
		"outac" : "shouye_a"
		
	}
})
requirejs(["jquery","outaa","outab","outac"],function($,outaa,outab,outac){
	
		outab.top_2_xiala();
		outab.top_2_xiala_a();
		outab.top_2_xiala_b();
		outab.banner_left();
		outab.banner_right();
		outaa.nav_a();
		outaa.nav_b();
		outaa.hottest();
		outaa.oneF();
		outaa.oneFxuanxianka();
		outac.ceiling();
		outac.shop_cebian();
		outac.shop_animation();
		outac.louti();
	
	
	
	
})
