requirejs.config({
	baseUrl:'js/lib',//模块加载的根路径
	paths:{
		'app':'../app',
		'jquery':'jquery-3.1.1',//不用加js格式，系统会自动加载
		'myutil':'../app/myutil'
	},
	shim:{
		'myutil':{
			exports:'createXHR'
		}
	}
});

//我定义的模块(只能放一个模块)
define(['app/citywalk','app/myfn2'],function(city,mystyle){//前者依赖声明，后者依赖注入
	//调用模块方法
	city()
});