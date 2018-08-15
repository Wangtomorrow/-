/*
 问题：
 	1.这个js是写在哪  我们服务器还是需要监测网站的服务器
	 	if 我们服务器
		 	下载我们服务器js，生成script
		 	//https://coolshell.cn/articles/9749.html
		 else
		 	直接调用。生成script
 */


/*
 想法：
  	用动态创建dom的方式获取以下js，jsonp设置script里的src
  	再按需异步载入js，这里需要绑定在特殊事件上window.onload/onclick。缺点：只有触发的时候才会下载，慢
  		此处可以异步下载js，需要的时候调用
  			使用非标准的script的type来cache javascript		<script type=cache/script src="http://.../*.js"></script>
 */


/*获取xx.js*/
//异步缓存js
//function cachejs(script_filename){
//    var cache = document.createElement('object');
//    cache.data = script_filename;
//    cache.id = "listener_script_cache_id";
//    cache.width = 0;
//    cache.height = 0;
//    document.body.appendChild(cache);
//}
////动态创建dom的方式获取js
//function loadjs(script_filename) {
//    var script = document.createElement('script');
//    script.setAttribute('type', 'text/javascript');
//    script.setAttribute('src', script_filename);
//    document.getElementsByTagName('head')[0].appendChild(script);
//}
//function load(){
//	var script = './*.js';
//	loadjs(script);
//}
////页面最后添加<script>cachejs('https://*/*.js')</script>



/*
 * 以下为xx.js内容
 * 此处有个想法：点击的时候onclick调用load,这里设置参数问题卡住了，还得想想
 * 				但是可不可以不设置参数。比如加载完成时可以window.onload（判断到达和1-9到达检测格式是一样的），点击别的广告时就是onclick，点击注册时
 * */

//动态创建script
function listenerMixdata(flag){
	//定义各参数
	var mixdata_userid
	var mixdata_imei
	var mixdata_idfa
	var mixdata_extid
	var mixdata_step
	var mixdata_url
	var mixdata_script
	var mixdata_url_head = "http://xxxxx?"
	//获取mixdata参数
	function getMixdataParam(mixdata_param_name){
	    try{
	    	var mixdata_reg = new RegExp("(^|&)"+ mixdata_param_name +"=([^&]*)(&|$)");
		    var mixdata_r = window.location.search.substr(1).match(mixdata_reg);
		    var mixdata_param_value = ""
		    if(mixdata_r != null){
		          mixdata_param_value = unescape(mixdata_r[2]);
		    }
		    return mixdata_param_value;
	    }catch(ex){};
	}
	
	//获取用户信息
	function getUserMessageMixdata(){
		try{
			mixdata_userid = getMixdataParam("userid");
			mixdata_imei = getMixdataParam("imei");
			mixdata_idfa = getMixdataParam("idfa");
			mixdata_extid = getMixdataParam("extid");
			/*
			 * 能否获取step，以下基于可以获取step
			*/
			mixdata_step = getMixdataParam("step");
		}catch(ex){};
	}
	
	//设置script标签体
	function setMixdataScript(){
		try{
			//向网页中添加script标签
			mixdata_script = document.createElement('script')
			//<script src=mixdata_url></script>
			mixdata_script.src = mixdata_url
			//将此script标签插入到body下第一个标签体前
			document.body.insertBefore(mixdata_script, document.body.firstChild)
		}catch(ex){};
	}
	
	/*
	 *以下几个方法，如果异常，需不需要将异常信息处理返回服务器？ 
	 */
	//到达监测
	function targetListenerMixdata(){
		try{
			mixdata_url = xx
		}catch(ex){};
		
	}
	//点击监测
	function clickListenerMixdata(){
		try{
			mixdata_url = xx
		}catch(ex){};
		
	}
	//url监测
	function urlTargetListenerMixdata(){
		try{
			var mixdata_url = xx
		}catch(ex){};
	}
	/*
	*是否需要注册监测
	*/
	//注册监测
	function registerListenerMixdata(){
		try{
			mixdata_url = xx
		}catch(ex){};
	}
	function doPostMixdata(){
		getUserMessageMixdata();
		//通过不同的标记来进行url的拼接
		switch(flag){
			case 1: targetLisenerMixdata();break;
			case 2: clickListenerMixdata();break;
			case 3: urlTargetListenerMixdata();break;
			case 4: registerlistenerMixdata();break;
		}
		setMixdataScript();
	}
}

