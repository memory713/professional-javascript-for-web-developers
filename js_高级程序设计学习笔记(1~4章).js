// 2017/8/30   liwen


0.文件加载
	1.<script type="text/javascript" defer="defer" src="..">
		defer:立即下载  延迟执行 只适用于外部脚本 遇到第一个HTML再执行  按顺序 同步
		async:异步加载 要先确保两者之间不互相依赖  异步脚本一定会在load事件之前执行
		
	2.外部文件优势：可维护性  可缓存  适应未来

一.数据类型概念
	1.typeof   	undefined
				boolean
				string
				number
				object
				function
	2.Undefined
				(1).var message;	//这个变量声明之后默认取得了undefined
					alert(message);	//undefined
					alert(age);	//error

				(2).var message;	//这个变量声明之后默认取得了undefined
					alert(typeof message);	//undefined
					alert(typeof age);	//undefined
	3.Null	//空对象指针
				(1).var car = null;
					alert(typeof car);	//object

				(2).alert( unll == undefined);	//true
	4.Boolean //true 和 false 区分大小写  用大写字母都不是boolean值
				很多数据类型都能转化成boolean值

				var message = "hello world";
				var messageBoolean = Boolean(message); //true

							true					false

				String   	非空字符串				""
				Number   	非零数字				0&NaN
				Object   	任何对象				null
				Undefined 	not application(不适用)	undefined

				(1).var message = "hello world";
					if(message){	//自动转化成boolean值
						alert("Value is true");
					}
	5.Number
			(1).浮点数：保存浮点数需要的内存是整数的两倍  所以ECMAscript有病一样的将浮点数转换成整数//曾经被坑过的我表示很怨念  图片宽度一直闪闪闪闪瞎我的眼
					浮点数精确度为17位
					永远别用浮点数做判断  0.1+0.2不等于0.3    = 0.3000000000000000004（0的数目是瞎填的）
									但是  0.05+0.25 = 0.3   
					由于内存限制，若数值超出  会被转化成Infinity(正无穷)和-Infinity(负无穷)；

			(2).NaN  非数值  一个特殊的数值（那么它到底是不是个数值啊  这跟先有鸡还是先有蛋一样的问题）
					NaN 不等于任何值 包括它自己

					isNaN() 判断是否不能被转换成数值//好拗口

					isNaN(NaN);//true
					isNaN(10);//false  10是个数值
					isNaN("10");//false  可以被转化成数值10
					isNaN("blue");//true  不能被转化成数值
					isNaN(true)；//false 可以被转化成1

			(3).数值转换
					Number();
						Number("hello world");//NaN
						Number("");//0
						Number("000111");//111
						Number(true);//1
						如果是对象，则调用对象的valueOf()方法，然后依照Number规则转换。如果转换的是NaN，则调用对象的toString()方法，再依照规则转换。

					parseInt();//转换为整数
						parseInt("123blue");//123
						parseInt("");//NaN
						parseInt("0xA");//10
						parseInt(22.5);//22
						parseInt("070");//56 八进制数 ECMAScript3 和 5存在分歧

						于是可以提供第二个参数(进制)	parseInt("0xAF",16)//175  最后统一转化成10进制 如果是16进制 可省略0x


					parseFloat();//转换为小数

	6.String
		(1).转义字符
			\n 换行
			\t 制表
			\b 退格
			\r 回车
			\f 进纸
			\‘ 单引号
			\”双引号
			...
		(2).toString(进制);//转化成字符串  除了null和undefined

				var num = 10;
				num.toString();//"10"
				num.toString(2);//"1010"
				num.toString(8);//"12"
				num.toString(10);//"10"
				num.toString(16);//"a"

		(3).String();//转化任何类型的值为字符串
			String(null);//null
			String(undefined);//undefined

	7.Object
		var o = new object();//创建自定义对象

	8.操作符：对非数值依旧适用  先行强制转换成number类型
		递增和递减操作符
			(1).var num1 = 2;
				var num2 = 20;
				var num3 = --num1 + num2;//21
				var num4 = num1+num2;//21   num1 被上行代码减一

			(2).var num1 = 2;
				var num2 = 20;
				var num3 = num1-- + num2;//22  num1 被减一但没有被赋值
				var num4 = num1+num2;//21   num1 被上行代码减一并赋值

				num--;//先计算再赋值
				--num;//先赋值再计算

		一元操作符：  +  - ：数学含义 略过
		位操作符：按内存中表示数值的位来操作数值  （相当恶心  看不懂  略过）

	9.布尔操作符
		逻辑非 ！  相反的意思
		逻辑与 &&: 如果第一个操作为真  则返回第二个操作，如果第一个操作为false  则返回第一个操作。
			以下1表示true  0表示false
			1&&0；//0
			1&&1；//1
			0&&0；//0
			0&&1；//0

			var found = true;
			var result = (found && someUnderfinedVariable);//报错 不能在第一个操作符为true的逻辑与中返回未定义的值 会报错
			alert(result);//不执行
		逻辑或 ||  :字面意思  或者。谁是真返回谁

	10.取模 （%）

			被除数			除数 		返回

		 	正常数值		正常数值	余数
		 	有限值  		有限值  	NaN
			有限值  		0   		NaN
			无穷值			无穷值		NaN			
			有限值			无限值		被除数
			正常值 			0 			0 

			如果有不是数值的  强制转换成数值

	11.相等操作符
			==   相等   ！=  不等  		=== 全等（没有强制转换）

			null == undefined;//1
			"NaN" == NaN;//0
			5 == NaN;//0
			NaN != NaN;//1
			false == 0;//1
			true == 1;//1
			true == 2;//0
			undefined == 0;//0
			null == 0;//0
			"5" == 5;//1

	12.条件操作符  ？ ：

	13.语句
		(1).if语句
		(2).do-while语句：后循环测试语句
				var i = 0;
				do{
					i += 2;
				}while(i < 10);
				alert(i);
		(3). while语句：前测试循环语句
				var i = 0;
				while(i < 10){
					i += 2;
				}
		(4).for语句：很熟了略过
		(5).for-in :迭代语句  用于枚举	如果枚举过程中遇到null和undefined 会中断执行 
				for(var propName in window) {
					document.write(propName+"<br/>");
				}//列出window对象的所有属性  顺序不可预测  

	14.lable语句：
			lable:statement

			start:for(var i = 0; i < count; i++){
				alert(i);
			}//配合循环使用

	15.break 和 continue

		break:立即终止循环
		continue：跳出循环  继续

			(1).var num = 0;
				for (var i = 1; i < 10; i++) {
					if (i % 5 == 0) {
						break;
					}
					num ++;
				}
				alert(num);//4

			(2).var num = 0;
				for (var i = 1; i < 10; i++) {
					if (i % 5 == 0) {
						continue;
					}
					num ++;
				}
				alert(num);//8

	16.with语句：将代码的作用域设定到一个特定对象中(会导致性能下降，调试也变得困难，不建议使用。严格模式下会报错。)
			var qs = location.search.substring(1);
			var hostName = location.hostname;
			var url = location.href;

			使用with语句可以改写成：
			with(location){
				var qs = search.substring(1);
				var hostName = hostname;
				var url = href; 
			}

	17.switch语句：
		从根本上讲，switch语句就是为了开发人员避免写这样的代码：
			if (i == 25) {
				alert("25");
			}else if ( i == 35) {
				alert(35);
			}else if (i == 45) {
				alert(45);
			}else{
				alert("another");
			}//中枪  扎心

		等价的switch语句：
			switch(i){
				case 25:
					alert("25");
					break;
				case 35:
					alert("35");
					break;
				case 45:
					alert("45");
					break;
				default:
					alert("another");
			}

		每个case的值不一定是常量 可以是变量，甚至是表达式。  switch语句在比较值时使用的是全等操作符，所以不会发生类型转换。

	18.函数
		严格模式下：不能把函数名命名为eval或者arguments.
		函数中有return，会立即跳出函数，return后面的语句不会执行。

		arguments对象:
			(1).function sayHi(name,message){
					alert("hello"+name +","+message);
				}
				类似于：
				function sayHi(){
					alert("hello"+arguments[0]+","+arguments[1]);
				}
			(2).function doAdd(){
					if (arguments.length == 1) {
						alert(arguments[0] +10);
					}else if (arguments.length == 2) {
						alert(arguments[0] + arguments[1]);
					}
				}
				doAdd(10);//20
				doAdd(30,20);//50
		arguments对象也可以与命名参数一起使用

		ECMAScript中所有参数传递的都是值，不可能通过引用传递参数。严格模式下，不能用在函数中用arguments[1]传递参数。

	19.ECMAScript没有重载：如果定义了两个相同命名的函数，则该名字只属于后者，因为ECMAScript函数没有签名。


第四章：变量，作用域，和内存问题
	1.变量的值：(概念有点多，以下是个人理解)
		ECMAScript有两个不同数据类型的值： 基本类型值和引用类型值。

			基本类型值不要为其添加属性和方法。引用类型可以。
			var person = new Object();
			person.name = "Nicholas";
			alert(person.name);//"Nicholas"

			var name = "Nicholas";
			name.age = 27;
			alert(name.age);//undefined;

（重点）	引用类型值的赋值：当从一个变量向另一个变量赋值引用类型的值时，同时也会复制一份放进堆内存中，而这一份内存中的值，类似于一个指针。
							  两个变量的值，实际上是通过访问指针得来的。
							  所以，改变其中一个变量，相当于三个值都改变了（两个变量，一个指针）。
	2.传递参数：ECMAScript所有函数的参数都是按值传递的。
		function setName(obj){//参数是函数的局部变量
			obj.name = "Nicholas";
			obj = new Object();//即使在内部修改了参数的值，原始的引用依旧未变
			obj.name = "Greg";
		}
		var person = new Object();
		setName(person);
		alert(person.name);//"Nicholas"


		//以下是概念，很罗嗦，建议略过
	3.typeof 确定一个值是哪种基本类型
	  instanceof 确定一个值是哪种引用类型

 	4.执行环境：作用域
 		每次进入一个新的执行环境，都会创建一个用于搜索变量和函数的作用域链；
 		局部环境有权访问自己及父环境的变量。但访问不到其他不相关的环境中的变量。全局环境只能访问全局环境中定义的变量和函数，访问不到局部环境中的巴拉巴拉巴拉巴拉...
 	
 	5.垃圾回收
 		javascript自动收集
 		IE采用的垃圾收集方式部分是引用计数，会出现问题。主流的是标记清除。
 		标记清除：给当前不使用的值加上标记，然后回收。
 		程序从一个执行环境中执行完毕后就会进入下一个执行环境，之前环境中的变量的内存会自动回收释放。
 		所以最好定义变量的时候 解除对引用变量的引用，听起来很罗嗦 实际上就是： var obj = null;







