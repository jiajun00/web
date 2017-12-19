/*
* thd-simple.js
* begin : 2010-11-12
* author : ThirdteenDevil
* e-mail : thirdteendevil@163.com
<!--
   ┏━━━━━━━━━━━━━━━━━━━━━┓
   ┃             源 码 爱 好 者               ┃
   ┣━━━━━━━━━━━━━━━━━━━━━┫
   ┃                                          ┃
   ┃           提供源码发布与下载             ┃
   ┃                                          ┃
   ┃        http://www.codefans.net           ┃
   ┃                                          ┃
   ┃            互助、分享、提高              ┃
   ┗━━━━━━━━━━━━━━━━━━━━━┛
-->
* qq : 181907667
*/

(function(){
	var _T = function(obj){

		//原生DOM element
		this.el = null;

		//ThirdteenDevil对象的标记
		this.constructor = "ThirdteenDevil";

		//如果是ThirdteenDevil对象则返回形式参数
		if(obj.constructor == "ThirdteenDevil"){
			return obj;
		}
		
		
		if(typeof(obj) == "string"){
			if(document.getElementById(obj)){
				this.el = document.getElementById(obj);
			}
		}else{
			this.el = obj;
		}
	}

	window.t = window.ThirdteenDevil = function(obj){return new _T(obj)}

	_T.prototype = {
		
		/*
		*回调函数，用于处理所有方法中function类型的参数
		*@param obj 任何类型
		*@return 如果@param obj是一个函数类型的对象,则返回这个函数的返回值,如果是其他类型则直接返回@param obj
		*/
		_preFormCallBack : function(obj){
			var _this = this;
			var ret = obj;
			if(typeof(obj) == "function"){
				ret = obj.call(_this.el,_this.el);
			}
			return ret;
		},
		
		/*
		*如果是无参数调用 .html()
		*@return 对象的innerHTML属性
		*---------------------------------------
		*如果是.html(str)
		*@param str 设置对象的innerHTML值
		*@return this 用于链式调用
		*/		
		html : function(v){
			if(v == undefined){
				return this.el.innerHTML;
			}else{
				var v = this._preFormCallBack(v);
				this.el.innerHTML = v;
				return this;
			}
		},		
		
		/*
		*如果是一个参数调用 .attr(str)
		*@param str DOM element的属性名
		*@return Dom element名为@param str属性的值
		*----------------------------------------
		*如果是二个参数 .attr(str,v)
		*@param str DOM element的属性名
		*@param v Dom element @param str 属性的值
		*@return this 用于链式调用
		*/
		attr : function(){
			if(arguments.length == 1){
				return this.el.getAttribute(arguments[0]);
			}
			if(arguments.length == 2){
				this.el.setAttribute(arguments[0],arguments[1]);
				return this;
			}
		},
		
		/*
		*除去DOM element的属性
		*@param str DOM element的属性名称
		*@return this 用于链式调用
		*/
		removeAttr : function(str){
			this.el.removeAttribute(str);
			return this;
		},

		/*
		*如果是无参调用 .css()
		*@return DOM element 的所有css属性
		*-----------------------------------------
		*如果是.css(str)
		*@param str css属性名 可以根据.css()方法来查询
		*@return 获取参数对应的css属性
		*----------------------------------------
		*如果是.css(str,value)
		*@param str css属性名  可以根据.css()方法来查询
		*@value 设置@param str的值为@value
		*@return this 用于链式调用
		*/
		css : function(){
			var CurrentStyle = function(element){return element.currentStyle || document.defaultView.getComputedStyle(element, null);}
			if( (arguments.length < 1) || (arguments.length > 2) ){
				if(arguments.length == 0){
					var cssAttrMap = [];
					for(var pro in CurrentStyle(this.el)){
						cssAttrMap.push([pro,CurrentStyle(this.el)[pro]]);
					}
					return cssAttrMap;
				}else{
					throw new Error("css function arguments must be between 1 and 2 ! ");
				}
			}else{
				if(arguments.length == 1){
					return CurrentStyle(this.el)[arguments[0]];
				}else{
					this.el.style[arguments[0]] = this._preFormCallBack(arguments[1]);
					return this;
				}
			}
		},
				
		/*
		*如果是无参调用 .hasClass()
		*@return className属性值 
		*-----------------------------------
		*如果是.hasClass(v)
		*@param v className,
		*@return 判断DOM element是否含有名为@param v的className属性
		*/		
		hasClass : function(v){
			if(v == undefined){
				return this.el.className;
			}else{
				if(this.el.className != undefined){
					var classStr = " " + this.el.className + " ";
					var rep = new RegExp(" " +v+ " ","gi");
					return rep.test(classStr);
				}else{
					return false;
				}
			}
		},
		
		/*
		*为DOM element添加className属性值
		*@param v 要添加的className属性值
		*@return this用于链式调用
		*/
		addClass : function(str){
			var v = this._preFormCallBack(str);
			if(this.hasClass(v)){
				return this;
			}else{
				if(this.el.className){
					this.el.className += (" "+v);
					return ;
				}else{
					this.el.className = v;
				}
			}
		},
		
		/*
		*为Dom element删除className属性值
		*@param v 要删除的className属性值
		*@return this用于链式调用
		*/
		removeClass : function(v){
			if(this.hasClass(v)){
				var classStr = " " + this.el.className + " ";				
				var rep = new RegExp(" " + v + " ","gi");
				this.el.className = classStr.replace(rep," ");
			}else{
				return this;
			}
		},

		/*
		*为DOM element 添加/删除一个className属性值，有则删除，无则添加
		*@param str className的属性值也可以是一个回调函数，返回className的属性值
		*@return this 用于链式调用
		*/
		toggleClass : function(str){
			var v = this._preFormCallBack(str);
			if(this.hasClass(v)){
				this.removeClass(v);
			}else{
				this.addClass(v);
			}
			return this;
		},
		
		/*
		*如果无参调用 .scrollTop()
		*@return DOM element scrollTop属性值
		*----------------------------------------------
		*一个参数调用 .scrollTop(x)
		*@param x DOM element scrollTop属性值
		*@return this 用于链式调用
		*/
		scrollTop : function(){
			if(arguments.length == 1){
				this.el.scrollTop = arguments[0];
			}else{
				return this.el.scrollTop;
			}
		},

		/*
		*如果无参调用 .scrollLeft()
		*@return DOM element的scrollLeft属性值
		*----------------------------------------------
		*一个参数调用 .scrollLeft(x)
		*@param x DOM element scrollLeft属性值
		*@return this 用于立案时调用
		*/
		scrollLeft : function(){
			if(arguments.length == 1){
				this.el.scrollLeft = arguments[0];
			}else{
				return this.el.scrollLeft;
			}
		},
		
		/*
		*为DOM element添加事件
		*@param act : 事件名 click,mouseover,mouseout ....
		*@param cb : Function类型的回调函数
		*@param pObj : json格式的参数,回调函数中调用
		*/
		on : function(act,cb,pObj){
			var _this = this;
			if(window.addEventListener){//FF ...
				this.el.addEventListener(act,function(e){
					var e = e ? e : event;					
					//e.stopPropagation();//清冒泡
					cb.call(_this.el,e,_this.el,pObj)},false);
			}else if(window.attachEvent){//IE
				this.el.attachEvent("on"+act,function(e){
				var e = e ? e : event;
				//window.event.cancelBubble = true;//清冒泡
				cb.call(_this.el,e,_this.el,pObj)});
			}
			return this;
		},
		
		/*
		*把DOM element添加到this.el对象中
		*@param obj 可以是ThirdteenDevil对象 也可以是id字符串 或者是DOM element本身
		*@return this 用于链式调用
		*/
		append : function(obj){
			//把obj转成ThirdteenDevil对象后操作
			this.el.appendChild(new _T(obj).el);
		},		

		/*
		*把this.el对象添加到DOM element中
		*@param obj 可以是ThirdteenDevil对象 也可以是id字符串 或者是DOM element本身
		*@return this 用于链式调用
		*/
		appendTo : function(obj){
			//把obj转成ThirdteenDevil对象后操作
			new _T(obj).el.appendChild(this.el);
		},
		
		/*
		*getElementsByTagName实现
		*@param tag 元素标签名
		*@return 获取子元素标签是@param tag的所有子元素(已转成数组类型)
		*/
		getElementsByTagName : function(tag){
			var childs = this.el.getElementsByTagName(tag);
			var childArray = []
			for(var i = 0 , j = childs.length ; i < j ; i++){
				childArray.push(childs[i]);
			}
			return childArray;
		},
		
		/*
		*获取ThirdteenDevil中el对象的子对象有name属性为形参的对象集合
		*@param nameStr name属性的值
		*@return ThirdteenDevil中el对象的子对象有name属性为形参的对象集合(已转成数组)
		*/
		getElementsByName : function(nameStr){
			var els = []
			this.getElementsByTagName("*").each(function(o,i){
				if(nameStr == new _T(o).attr("name")){
					els.push(o);
				}
			})
			return els;
		},

		/*
		*如果是无参调用 .data()
		*@return Dom Element的data属性
		*----------------------------------
		*如果是一个字符串类型的参数 .data(str)
		*@param str data的属性名
		*@return data中@param str的属性值
		*----------------------------------
		*如果是一个对象类型的参数 .data(obj)
		*@param obj 拷贝obj的所有属性刀data中
		*@return this 用于链式调用
		*----------------------------------
		*如果是2个参数 .data(str,obj)
		*@param str 设置data中的属性
		*@param obj data中名为@param str的值
		*@return this 用于链式调用
		*/
		data : function(){			
			if(this.el.getAttribute("data") == undefined){
				this.el.setAttribute("data",{});
			}
			if(arguments.length == 1){
				if(typeof(arguments[0]) == "string"){
					return this.el.getAttribute("data")[arguments[0]];
				}else if(typeof(arguments[0]) == "object"){
					for(var pro in arguments[0]){
						this.el.getAttribute("data")[pro] = arguments[0][pro];
					}
					return this;
				}
			}
			if(arguments.length == 2){
				this.el.getAttribute("data")[arguments[0]] = arguments[1];
				return this;
			}
			if(arguments.length == 0){
				return this.el.getAttribute("data");
			}
		}
	}//_T.prototype end

	
	/*
	*扩展_T方法
	*
	*如果是一个参数 .extend(obj)
	*@param obj 封装好将要扩展的属性或方法集合
	*------------------------------------------
	*如果是二个参数 .extend(str,v)
	*@param str 扩展的属性名
	*@param v 扩展的属性名@param str的值或方法
	*
	*如果自定义的属性和_T中的属性重名 不会覆盖原有属性
	*/
	ThirdteenDevil.extend = function(){
		if(arguments.length == 1){
			for(var pro in arguments[0]){
				_T.prototype[pro] = arguments[0][pro];
			}
		}
		if(arguments.length == 2){
			_T.prototype[arguments[0]] = arguments[1];
		}
	}


	//插件
	ThirdteenDevil.plugs = {};

	
})()

//数组循环执行
Array.prototype.each = function(cb){
	for(var i = 0 , j = this.length ; i < j ; i++){
		cb.call(this[i],this[i],i);
	}
}


//数组移除某个值
Array.prototype.remove = function(obj){
	var r = null;
	for(var i = 0 , j = this.length ; i < j ; i++){
		if(obj == this[i]){
			r = this.splice(i,1);
			break;
		};
	}
	return r;
}

//得到数组中某个元素在数组中的索引值
Array.prototype.index = function(obj){
	for(var i = 0 , j = this.length ; i < j ; i++){
		if(obj == this[i]){
			return i;
		};
	}
}

//字符串去除前后空格
String.prototype.trim= function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");  
}
