<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	 1.获得焦点:   onfocus

	 2.失去焦点:   onblur

	 3.Txt.focus();   方法

	 4.Onfocus  事件

	 5.this.select(); //选择

	 6.判断用户输入事件:
			正常浏览器  :    oninput
			Ie 678  支持的  ： onpropertychange



	7.数组常用方法:
		 push()  向数组的末尾添加一个或多个元素，并返回新的长度。
		 unshift()    向数组的开头添加一个或更多元素，并返回新的长度
		 pop()   移除最后一个元素 返回最后一个值
		 			var  arr = [1,3,5]   →  arr.pop()  →  结果   [1,3]
		 shift()  把数组的第一个元素从其中删除，并返回第一个元素的值
		 			var  arr = [1,3,5]   →  arr.shift()  →  结果   [3,5]
		 concat()连接两个数组 它不会改变现有的数组，而仅仅会返回被连接数组的一个副本
		 			var aa = [1,3,5];  var bb = [“a”,”b”,”c”];aa.concat(bb);     结果：  [1,3,5,“a”,”b”,”c”];
		join() 将数组各个元素是通过指定的分隔符进行连接成为一个字符串。
				arrayObject.join(separator)   数组名.join(符号)
				参数 separator 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。
				var arr = [1,2,3];
				console.log(arr.join(“-”))    结果就是：  1-2-3    字符串
		 split()把字符串转换为数组
				join   <=>   split
				 split() 方法用于把一个字符串分割成字符串数组
				语法
				 stringObject.split(separator,howmany)
				参数 separator 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。
				howmany 可选。该参数可指定返回的数组的最大长度

	8. 下拉菜单的事件:  onchange
  		sele.onchange = function(){}   当改变的时候  事件

  	9.DOM节点
  	      	parentNode       父级
     		this.parentNode     我的父亲
          		nextSibling        兄弟
     		childNodes       孩子们   官方用法
	  	一般情况下，我们只需要元素节点  nodeType  来  判断
	       	nodeType == 1    元素节点
	       	nodeType == 2    属性节点
	       	nodeType == 3    文本节点

	    	children    不是官方写法       所有的孩子   亲儿子
	    	ie 678 把注释节点 也算  可以避免
	10:节点操作
		creatElement:  创建节点
    		setAttribute(“属性”,”值”);设置节点属性
  		div.setAttribute(“class”,”demo”);  一个 类名  改为   demo
    		removeAttribute(“属性”); 删除某个属性
    		demo.removeAttribute(“title”)  title  属性  给删掉了  。

    		A.appendChild(B); B 一定是 A 孩子 ， 同时b 放到了a 的里面最后面

   			A.insertBefore（B，C）     B  C  都是 A 的孩子  ，把 b  放到  a 里面 ，但是 是 c 的前面

   	11.内置对象
   		日期函数  ( Date() )

  		var  date = new Date(); 声明日期
  		var arr = new Array();
 		var  date = new Date();
  		date.getTime();
  		date.valueOf();        得到 距离 1970年的毫秒数

  		eg.
 		var date  = new Date();  // 声明
		console.log(date.getTime());  // 提倡使用的
		console.log(date.valueOf());
		// 直接使用
		console.log(Date.now());
		console.log(+new Date());

	12. 常用的日期的方法

		获取日期和时间
		getDate()                  获取日 1-31
		getDay ()                  获取星期 0-6
		getMonth ()                获取月  0-11
		getFullYear ()	            获取完整年份（浏览器都支持）
		getHours ()	               获取小时 0-23
		getMinutes ()	               获取分钟 0-59
		getSeconds ()	               获取秒  0-59
		getMilliseconds ()            获取当前的毫秒
		getTime ()	       返回累计毫秒数(从1970/1/1午夜)

	13.  定时器
		window.setInterval(“执行的函数”,间隔时间)

	       	正确的写法:
	        	setInterval(fun, 1000);      1000 ms   毫秒
	        	每隔1秒钟，就去执行一次 fun 这个函数.
	        	setInterval(“fun()”,1000)     可以用
	        	setInterval( function(){} , 1000 )
	        	setInterval(fun(),1000)  错误的

	14.时钟效果
		ms = date.getMilliseconds(); // 现在的毫秒数
		s = date.getSeconds() + ms / 1000;  //  得到秒 1.3 s
		m = date.getMinutes() + s / 60;  //  得到的是分数  45.6分钟
		h = date.getHours() % 12 + m / 60 ;

		旋转角度原理
		秒针     一秒 走多少度呢 ？
		一圈  360 °     一共有 60 秒       每秒  6 °
		分针     一圈  360    一圈走 60次   每次  6°  每分钟 6°
		时针     一圈 360      一共 12 个 表盘没有24小时    每个小时 走   30°
		完整代码：
<script>
    	var hour = document.getElementById("hour");
     	var minute = document.getElementById("minute");
     	var second = document.getElementById("second");
       	// 开始定时器
     	var s = 0,m = 0, h = 0, ms = 0;
       	setInterval(function() {
          		var date = new Date();  // 得到最新的时间
          		ms = date.getMilliseconds(); // 现在的毫秒数
          		s = date.getSeconds() + ms / 1000;  //  得到秒 1.3 s
          		m = date.getMinutes() + s / 60;  //  得到的是分数  45.6分钟
         		h = date.getHours() % 12 + m / 60 ;

      		// 一圈  360 °     一共有 60 秒       每秒  6 °   现在是 s秒
          		second.style.WebkitTransform = "rotate("+ s*6 +"deg)";
                     //  变化            旋转    deg  度
         		minute.style.WebkitTransform = "rotate("+ m*6 +"deg)";
          		hour.style.WebkitTransform = "rotate("+ h*30 +"deg)";
           	second.style.MozTransform = "rotate("+ s*6 +"deg)";
                        //  变化            旋转    deg  度
          		minute.style.MozTransform = "rotate("+ m*6 +"deg)";
           	hour.style.MozTransform = "rotate("+ h*30 +"deg)";
       	},30);
</script>
	15.arguments 对象
 		function fn(a,b,c) {  console.log(a+b+c); alert(arguments.length;)}
 		fn(1,3,4,6);
     		arguments.length;  返回的是  实参的个数。
     		但是这个对象有讲究，他只在正在使用的函数内使用。
     		arguments.callee;
     		返回的是正在执行的函数。 也是在函数体内使用。 在使用函数递归调用时推荐使用arguments.callee代替函数名本身。
     		function fn() {  console.log(arguments.callee); }
     		这个callee 就是 ：   function fn() {  console.log(arguments.callee); }

     	16.运算符
		一元操作符 ++， -- + -       +5   -6
		逻辑操作符 ! && ||
		基本运算符 +, -, *, /, %
		关系操作符 >, <, >=, <=, ===, ==, !=, !==
		 = 赋值    == 判断    === 全等
		条件操作符 （三元运算符）  ? :
		赋值运算符 +=, -=, *=, /=, %=

		逗号运算符 ,   var  a=0,b=0;
	17 运算符顺序
    		1  ()
		2  !、-、++、--    (-10)  负号  正号
		3 *、/、%
		4 +、-         10-5
		5 <、<=、<、>=
		6 ==、!=、===、!==、
		7 &&
		8 ||
		9?:
		10 =、+=、-=、*=、/=、%=     赋值

	18 几个面试题
 		1.  a&&b   结果是什么？

	 		如果a 为假 ，则返回 a
	 		如果a 为真 ，则返回 b

			var aa  =   0&&1;
			alert(aa)    // 0
			var bb =  1&&0;
			alert(bb);  //0
			var cc =  1&&10;
			alert(cc);  // 10
		2. a||b
   			如果 a 为假   则返回b
   			如果 a 为真   则返回a

			console.log(0||1);   1
			console.log(1||0);   1
			console.log(1||5);   1
			console.log(5||1);   5

			var a = 1 && 2 && 3;
			console.log(a);   3
			var b = 0 && 1 && 2;
			console.log(b);  0
			var c = 1 && 0  && 2;
			console.log(c);  0
			%=
			 a+=3
			 a = a % 3;
 	19 字符串对象常用方法
		转换为字符串
 			1. + “”       2+ “”  =  “2”    2+”ab”   =  “2ab”
 			2. String()    转换为字符串
 			3. toString（基数）  ;    基数就是进制

			 	var txt = 10;
			 	txt.toString(2)       二进制      1010
		获取字符位置方法
			charAt获取相应位置字符（参数:字符位置）
			charCodeAt获取相应位置字符unicode编码（参数:字符位置）

				var txt = “abcedf”;
			   	比如，  txt.charAt(4);     d

			unicode编码  是我们字符的字符的唯一表示 。
	20  根据字符返回位置
 		1.indexOf(“字符”);它是从 前面开始数（从左边开始数）， 而且只找第一个， 然后返回改字符的位置， 索引号都是从0开始的。  返回的是个数值。

			var txt = “abcdef”;
			alert(txt.indexOf(“d”))      结果就是   3
			如果找不到该字符   返回  -1
		2.lastIndexOf(参数：索引字符串)  从后面开始数    同上

			var  txt = “abcdef” ;
			txt.lastIndexOf(“d”);     3

	21 网址编码
		我们知道一个网址 自己的网址，   不同页面也有自己id网址， 我们经常会做一些， 把网址送入到后台。  但是后台再处理的 不认识比如 换行啊 等特殊符号的  ？
		var url =  “http://www.itast.cn?name=cz”
		所以我们要实现编码，然后再传到后台。
		encodeURIComponent() 函数可把字符串作为 URI 组件进行编码
		decodeURIComponent() 函数可把字符串作为 URI 组件进行解码

			var url = "http://www.itcast.cn?name=andy";
			console.log(encodeURIComponent(url));  // 编码
			var afterUrl = encodeURIComponent(url);
			console.log(decodeURIComponent(afterUrl));  // 解码

	22 操作字符串
		1  concat() 连接字符串

			var  txt1 = “abc”;
			var  txt2 = ”123”;
			console.log(txt1.concat(txt2));     “abc123”;

		2 slice(“取字符串的起始位置”, [结束位置]) ;    []  可选的

			var txt = “abcedf”;
			txt.slice(3) ;    从 txt 里面字符的 第 3（索引号）个开始取   结束位置省略， 一直取到最后一个。
			slice(3,6)     3 从 第3个开始 取     6  取到第6索引号的位置，还是从左边的第0个开始数。 但是不包 6 。
			起始位置可以是负数  ， 如果是负数，则是从 右边往左边开始取。
			var txt =”asdf”;
			txt.slice(-1)  结果是   f
	23  substr(起始位置,[取的个数])  同上。
  		不写取的个数， 默认从起始位置一直取到最后 。
  		取的个数：    是指从起始位置开始，往后面数几个。

			var txt = “abcdefghijk”;
			txt.substr(3,4);从第3个  （d） 开始 数 4个  defg
			substr(-1)  少用   ie678 报错 。 尽量少用

			兼容性的写法 ：
			onBtnClick("btn7",div1.substr(div1.length-1,1));  // 兼容的写法
			substring 同slice  一样的   但是有一点不同
			substring(3,6)
			substring 始终会把  小的值作为  起始位置 大的值作为结束位置
			例如：  substring(6,3)   实际中   自动变成  substring(3,6);

			122340.12345      保留两位有效小数  122340.12
		  		substr(0, .+3)
				1.console.log(str.substr(0,str.indexOf(".")+3));
		  			通过 indexOf  返回小数点的位置     截取字符串
				2 console.log(parseInt(PI*100) /100);
		      			先乘以100  取整  然后 除以100
		 		3 console.log(PI.toFixed(2));
					pi.toFixed(2)  保留 2位 小数

	24 .大小写转换
		1 toUpperCase，转换为大写（参数： 无）
		2 toLowerCase，转换为小写（参数：无）

			asdf.toUpperCase()   结果就是：     ASDF
			$("txt").value.toUpperCase();
			把txt 的值 转换为大写

	25.缓冲动画
		缓动动画公式:
		一个盒子初始值  是  0      要走到 400 px 的位置
		假如说，初始值   leader  0          target  400
		box.style.left =  xxxx +   “px”
		leader = leader + (target - leader ) /10 ;

		      btn.onclick = function() {
		           setInterval(function(){
		               leader = leader + (target - leader )/10;
		               box.style.left = leader + "px";
		           },30)
		      }
	26. offset家族
		(1).offsetWidth    offsetHeight
			offsetWidth =  width  + border  +  padding
			为什么不用 div.style.width   因为东西 只能得到行内的数值

		(2). offsetLeft  offsetTop
			返回距离上级盒子（最近的带有定位）左边的位置 如果父级都没有定位则以body 为准 这里的父级指的是所有上一级 不仅仅指的是 父亲 还可以是 爷爷 曾爷爷 曾曾爷爷。。。。

			offsetLeft 从父级的padding 开始算    父亲的border 不算
			总结一下：  就是子盒子到定位的父盒子边框到边框的距离

		(3).offsetParent
			返回改对象的父级 （带有定位） 不一定是亲的爸爸 前面学过一个返回父亲(亲的)    parentNode   有所区别

			如果当前元素的父级元素没有进行CSS定位（position为absolute或relative），offsetParent为body。
			如果当前元素的父级元素中有CSS定位（position为absolute或relative），offsetParent取最近的那个父级元素。

		(4).offsetTop style.top 的区别
			最大区别在于  offsetLeft  可以返回没有定位盒子的距离左侧的位置。 而 style.top 不可以  只有定位的盒子 才有 left  top right
			offsetTop 返回的是数字，而 style.top 返回的是字符串，除了数字外还带有单位：px。
			offsetTop 只读，而 style.top 可读写。
			如果没有给 HTML 元素指定过 top 样式，则 style.top 返回的是空字符串。
			最重要的区别  style.left 只能得到 行内样式     offsetLeft 随便

	27. 事件对象
		  var event = event || window.event;

		event 常见属性
		属性节点作用
		data			返回拖拽对象的URL字符串（dragDrop）
		width			该窗口或框架的高度
		height 		该窗口或框架的高度
		pageX			光标相对于该网页的水平位置（ie无）
		pageY			光标相对于该网页的垂直位置（ie无）
		screenX		光标相对于该屏幕的水平位置
		screenY		光标相对于该屏幕的垂直位置
		target			该事件被传送到的对象
		Type 			事件的类型
		clientX		光标相对于该网页的水平位置 （当前可见区域）
		clientY		光标相对于该网页的水平位置

		screen X   screenY
		是以我们的电脑屏幕 为基准点   测量
		pageX  pageY
		以我们的  文档   （绝对定位）  的基准点 对齐       ie678 不认识
		clientX   clientY
		以 可视区域 为基准点   类似于    固定定位
	28. 常用事件
		onmouseover      onmouseout   onclick
		onmousemove    当鼠标移动的时候    就是说，鼠标移动一像素就会执行的事件
		div.onmousemove = function() { 语句 }

		onmouseup       当鼠标弹起
		onmousedown     当鼠标按下的时候

	29. 防止选择拖动
		我们知道 按下鼠标然后拖拽可以选择文字 的。
		清除选中的内容
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

		document.body.scrollTop;  火狐 和其他浏览器
  		document.documentElement.scrollTop;ie9+  和 最新浏览器   都认识
  		window.pageXOffset;     pageYOffset  （scrollTop）

  		document.body.scrollTop  没有DOCTYPE html头
		 兼容性写法：

		 var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


	30. client 家族
		client  可视区域
		offsetWidth:   width  +  padding  +  border     （披着羊皮的狼）
		clientWidth： width  +  padding      不包含border
		scrollWidth:   大小是内容的大小


	31.检测屏幕宽度(可视区域)
		ie9及其以上的版本
		window.innerWidth
		标准模式
		document.documentElement.clientWidth
		怪异模式
		document.body.clientWidth
		自己封装一个 返回可视区宽度和高度的函数。

	32检测屏幕宽度(分辨率)
		clientWidth   返回的是 可视区 大小    浏览器内部的大小
		window.screen.width   返回的是我们电脑的 分辨率   跟浏览器没有关系

	33. window.onresize    改变窗口事件
		window.onscroll  = function() {}  屏幕滚动事件
		window.onresize = function() {}  窗口改变事件
		onresize 事件会在窗口或框架被调整大小时发生

	34. 简单冒泡机制
		事件冒泡: 当一个元素上的事件被触发的时候，比如说鼠标点击了一个按钮，同样的事件将会在那个元素的所有祖先元素中被触发。这一过程被称为事件冒泡；这个事件从原始元素开始一直冒泡到DOM树的最上层。
			顺序
			E 6.0:
			div -> body -> html -> document
			其他浏览器:
			div -> body -> html -> document -> window

			不是所有的事件都能冒泡。以下事件不冒泡：blur、focus、load、unload
		 阻止冒泡的方法
			 标准浏览器 和  ie浏览器
			 w3c的方法是event.stopPropagation()        proPagation  传播  传递
			 IE则是使用event.cancelBubble = true       bubble   冒泡  泡泡       cancel 取消
		兼容的写法：
		if(event && event.stopPropagation){
		          event.stopPropagation();  //  w3c 标准
		}else{
		               event.cancelBubble = true;  // ie 678  ie浏览器
		}

	35. 判断当前对象
	   火狐 谷歌 等   event.target.id
	   ie 678          event.srcElement.id
	   兼容性写法：
	  var targetId = event.target ? event.target.id : event.srcElement.id;

	36. 获得用户选择内容
		window.getSelection()     标准浏览器
		document.selection.createRange().text;      ie 获得选择的文字
		兼容性的写法：
		if(window.getSelection)
		{
		    txt = window.getSelection().toString();   // 转换为字符串
		}
		else
		{
		    txt = document.selection.createRange().text;   // ie 的写法
		}

	37. 三个取整函数
		这三个函数都是  数学函数   
		 
		Math.ceil()    向上取整      
			console.log(Math.ceil(1.01))       结果 是 2  
		         	console.log(Math.ceil(1.9))        结果 2 
		         	console.log(Math.ceil(-1.3))       结果 是  -1   
		Math.floor()   向下取整       
		     	console.log(Math.floor(1.01))       结果 是 1  
		         	console.log(Math.floor(1.9))           结果 1 
		         	console.log(Math.floor(-1.3))       结果 是  -2   
		 Math.round()   四舍五入函数   
		          console.log(Math.round(1.01))       结果 是 1 
		          console.log(Math.round(1.9))       结果 是 2 

	38. 缓动动画原理		
		function animate(obj,target){  //  第一个参数 动谁   第二个参数  动多少
		          clearInterval(obj.timer);
		          obj.timer = setInterval(function() {
		                 	// 计算步长   动画的原理    盒子本身的位置  +  步长
		                 	var step = (target - obj.offsetLeft) / 10;  // 步长
		                 	step =  step > 0 ? Math.ceil(step) : Math.floor(step);  //  取整步长
		                 	// obj.style.left = 盒子本身的位置  +  步长
		                 	obj.style.left = obj.offsetLeft + step + "px";
		                 	if(obj.offsetLeft == target){
		                    		clearInterval(obj.timer);
		                	}
		          },30)
		}
		  
	39.  js 常用 访问 CSS 属性 		  		
		1. 利用点语法 
		       	box.style.width      box.style.top    
		     	点语法可以得到 width  属性  和 top属性  带有单位的。 100px
		     	但是这个语法有非常大的缺陷，  不变的。 
		     	后面的width  和 top  没有办法传递参数的。
		      	var w = width;
		      	box.style.w     
		2. 利用 []  访问属性
		      	语法格式:  box.style[“width”]   
		          元素.style[“属性”];
		      	console.log(box.style["left"]);		       
		       	最大的优点  ：  可以给属性传递参数

		3. 得到css 样式  
			我们怎么才能得到内嵌或者外链的样式呢？  
			obj.currentStyle   ie  opera  常用
			window.getComputedStyle("元素", "伪类")     w3c 
			两个选项是必须的， 没有伪类 用 null 替代
		3 兼容写法 ：		
		     	var demo = document.getElementById("demo");
		       	function getStyle(obj,attr) {  //  谁的      那个属性
		           	if(obj.currentStyle)  // ie 等
		           	{
		               		return obj.currentStyle[attr];  
		           	}else{
		               		return window.getComputedStyle(obj,null)[attr];  // w3c 浏览器
		          		}
		      	}
		      	console.log(getStyle(demo,"width"));		  
		
	40. in 运算符 
		in运算符也是一个二元运算符，但是对运算符左右两个操作数的要求比较严格。in运算符要求第1个（左边的）操作数必须是字符串类型或可以转换为字符串类型的其他类型，而第2个（右边的）操作数必须是数组或对象。只有第1个操作数的值是第2个操作数的属性名，才会返回true，否则返回false
		// in 可以用用来判断 json 里面有没有某个属性
		var json = {name: "刘德华",age : 55};
		// in 可以用用来判断 json 里面有没有某个属性
		if("andy" in json)
		{
		    console.log("yes");  // 返回的是 yes 
		}
		else
		{
		    console.log("no");
		}
		闭包 基础    面向对象基础
	41. 闭包
		在程序语言中，所谓闭包，是指语法域位于某个特定的区域，具有持续参照(读写)位于该区域内自身范围之外的执行域上的非持久型变量值能力的段落。这些外部执行域的非持久型变量神奇地保留他们在闭包最初定义(或创建)时的值。
		白话：  我们可以用一个函数 去访问 另外一个函数的内部变量的方式就是闭包。
	

		function fun() {
		    var num = 10;
		}
		console.log(num);  // 这样子就错了  num 是一个局部变量 

		测试题 
		function outerFun(){
		    	var a=0;
		    	function innerFun(){
		     		a++;
		     		alert(a);
		    	}
		    	return innerFun;  //注意这里
		}
		var obj=outerFun();
		obj();  obj();  
		var obj2=outerFun();//这些外部执行域的非持久型变量神奇地保留他们在闭包最初定义
		obj2();  obj2();  
		结果是 ：  1  2  1  2


		优点：不产生全局变量，实现属性私有化。
		缺点：闭包中的数据会常驻内存，在不用的时候要删掉否则会导致内存溢出。



		       








   









</body>






</body>
</html>