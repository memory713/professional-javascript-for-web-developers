// 2017/9/13   liwen
第五章.引用类型（全书进度：11%）
	概念：引用类型是一种数据结构，用于将数据和结构组织在一起。其他语言中，它们被称为类。但在ECMAscript中，两者不是同一个概念，因为ECMAscript不具备传统面向对象语言所支持的类和接口等基本结构。
	一.Object类型
		1.创建的两种方法：
			new
				var person = new Object();//等同于 var person = {};
				person.name = "Nicholas";
				person.age = 29;

			对象字面量表示法：
				var person = {
					name : "Nicholas",//注意这里是逗号 分隔属性
					age : 29//严格模式下最后一个属性后面不要加符号 如果有逗号，会在IE7及更早版本报错
				}

		2.访问对象属性的方法
			点表示法//大部分都使用这个方法
				person.name

			方括号表示法：
				person["name"]
				优点：可以通过变量访问属性
					var propertyName = "name";
					person[propertyName];

					属性名中含有导致语法错误的字符，或者关键字和保留字
					person["frist name"] = "Nicholas";

			除非必须使用变量来访问属性，通常建议使用点表示法。

	二.Array类型
		1.创建数组的两种基本方式：
			new一个：
				var colors = new Array();//new 可以省略

				var colors = new Array(30);//创建一个length为30 的数组
				var colors = new Array("red");//创建一个包含一项为"red"的数组

			字面量表示法：
				var values = [];//创建一个空数组
				var values = [1,2,];//不要这样写，IE8及更早版本会包含1,2，undefined数组，其他浏览器包含1,2数组

		2.数组length:
			length属性不只是只读的
				var colors = ["red","blue","green"];

				color.length = 2;//移除了最后一项
				alert(color[2]);//undefined

				color.length = 4;//增加了一项未定义的值
				alert(color[3]);//undefined

				colors[colors.length] = "black";//在位置3添加一种颜色
				colors[colors.length] = "brown";//在位置4添加一种颜色

				color[99] = "black";//在位置99添加一种颜色
				alert(colors.length);//100 其他未定义的值都是undefined

		3.检测数组 instanceof
			if (value instanceof Array) {
				//对数组执行操作
			}
			这个操作符，假定只有一个全局操作环境，如果网页中包含多个框架，就不太适用了。

			ECMAscript5新增 Array.isArray() 方法，用来确定某个值是不是数组
			if (Array.isArray(value)) {
				//对数组执行操作
			}
			但是这个方法的兼容性存在一定问题，目前支持IE9+ 火狐4+ 等  so.....（22章节会有数组判断具体方法的封装用法，此处略）

		4.转换方法
			toString():
				返回数组的字符串表示，每个值得字符串表示拼接成了一个字符串，用逗号分隔
			valueOf():
				返回的还是数组
			toLocalString():
				返回的值跟toString()方法相同。但本质上是两个方法。（标个存疑：那它存在的意义是啥？）

			alert（某数组）返回的值其实后台调用了toString方法  因为alert默认接受字符串参数 
			如果数组中的某一项值为null 或者undefined  上述三种方法返回的值中已空字符表示

			join():
				使用不同的分隔符构建字符串
					var colors = ["red","green","blue"];
					alert(colors.join(","));//red,green,blue
					alert(colors.join("||"));//red||green||blue
				如果不给join()传入任何值，或者传入undfined,默认使用逗号。IE7及更早版本会使用undefined作为分隔符//宛若智障 - -

		5.栈方法：
			基础科普理论：
				栈是一种LIFO的数据结构//LIFO(last-in-first-out)
				最新添加的项最早被移除。栈中的推入和弹出，只发生在栈的顶部。

			ECMAscript为数组专门提供了push()方法和pop()方法，以便实现类似栈的行为。

				var colors = new Array();
				var count = colors.push("red","green");//推入两项
				alert(typeof(count));//number
				alert(count);//2

				count = colors.push("black");//推入另一项
				alert(count);//3

				var item = colors.pop(); //取得最后一项
				alert(item); //"black"
				alert(colors.length);//2

		6.队列方法
			队列数据结构的访问规则是FIFO(first-in-first-out)。队列在列表末端添加项，在列表前端移除项

			shift()方法 //从数组前端取项
			unshift()方法 //从数组前端插入项   在IE7及更早版本中有BUG 返回undefined而不是数组新长度 

		7.重排序方法
			reverse()//反转数组项的顺序
			sort();//升序排序,sort()会调用每个数组项的toString()方法，然后比较得到的字符串

				var value = [0,1,5,10,15]
				value.sort();
				alert(value);// 0,1,10,15,5
			在字符串比较时 "10" 在 "5" 前面，所以我们需要一个比较函数
				function compare(value1,value2){
					if (value1 < value2) {
						return -1;
					}else if (value1 > value2) {
						return 1;
					}else{
						return 0;
					}
				}
				var value = [0,1,5,10,15]
				value.sort(compare);
				alert(value);// 0,1,5,10,15

				若要进行降序排列  将compare函数中 1和-1对调即可

			对于数值类型或者其valueOf()方法会返回数值类型的数组，可以这样写：
				function compare(value1,value2){
					return value2 - value1 ;
				}

		8.操作方法
			concat() 创建当前数组一个副本，在接收参数的条件下添加到副本的末尾，若没有参数，则返回副本
				var colors = ["red","yellow","blue"];
				var colors2 = colors.concat("green",["black","brown"]);
				alert(colors2);//red,yellow,blue,green,black,brown

			slice() 一个参数情况下，返回从参数位置开始到数组末尾所有项。
					两个参数，返回两个参数位置之间的项，但不包括结束项。
					此方法不会影响原始数组

				var colors = ["red","green","blue","yellow","purple"];
				var colors2 = colors.slice(1);
				var colors3 = colors.slice(1,4);
				alert(colors2);//green,blue,yellow,purple
				alert(colors3);//green,blue,yellow

			splice(); 删除 插入 替换  此方法会替换掉原始数组  返回的项是删除的项的数组

				var colors = ["red","green","blue"]; 
				var removed = colors.splice(0,1); //（删除操作）0 删除的起始位置  1 删除项的个数  删除第一项
				alert(colors);//green,blue
				alert(removed);// red

				removed = colors.splice(1,0,"yellow","orange");// （插入操作） 1 插入的位置  0  删除0个项  后面两个参数是插入的值
				alert(colors);//green,yellow,orange,blue
				alert(removed);// 返回空数组

				removed = colors.splice(1,1,"red","purple");// （替换操作） 1 插入的位置  1  删除1个项  后面两个参数是插入的值
				alert(colors);//green,red,purple,orange,blue
				alert(removed);//yellow

		9.位置方法  兼容性IE9+
			indexOf();接收两个参数   要查找的项  和查找起点位置的索引（可选参数）从前向后 找不到返回-1
			lastIndexOf(); 从后向前查找

				var numbers = [1,2,3,4,5,4,3,2,1];
				alert(numbers.indexOf(4));//3  返回该项的索引值
				alert(numbers.lastIndexOf(4));//5  返回第一个该项的索引值

		10.迭代方法（简单举例，具体google） 兼容性IE9+
			every():
				var numbers = [1,2,3,4,5,4,3,2,1];
				var everyResult = numbres.every(function(item,index,array){
					return(item > 2);
				})
				alert(everyResult);//false   必须每一项都符合

			some():
				var numbers = [1,2,3,4,5,4,3,2,1];
				var someResult = numbres.some(function(item,index,array){
					return(item > 2);
				})
				alert(someResult);//true   有一项符合就是true

			filter():
				var numbers = [1,2,3,4,5,4,3,2,1];
				var filterResult = numbres.filter(function(item,index,array){
					return(item > 2);
				})
				alert(filterResult);//[3,4,5,4,3]   返回符合的项

			map():
				var numbers = [1,2,3,4,5,4,3,2,1];
				var mapResult = numbres.map(function(item,index,array){
					return item * 2 ;
				})
				alert(mapResult);//[2,4,6,8,10,8,6,4,2]   

			forEach();//本质上跟for循环一样
				var numbers = [1,2,3,4,5,4,3,2,1];
				numbres.forEach(function(item,index,array){
					//执行某些操作
				})

		11.归并方法 兼容性IE9+
			reduce()://数组求和  四个参数分别是第一个值 当前值 索引 数组  返回结果迭代传给第一个值
				var values = [1,2,3,4,5];
				var sum = values.reduce(function(prev,cur,index,array){
					return prev + cur;
				})
				alert(sum);//15

			reduceRight():从右边开始迭代  顺序倒一下

	三.Date类型
		1.从1970.1.1号开始计算
			创建日期对象：
				var now = new Date();//自动获得当前时间

				var now = new Date("May 25, 2014");//后台自动调用了下面代码
				var now = new Date(Date.parse("May 25, 2014"));//两组代码等同  格式不限  格式错了会报错NaN

				2015年5月5号下午5：5：55 （月份0~11 小时0~23 天数1~31）
				var now = new Date(2015,4,5,17,55,55);//后台自动调用了下面代码
				var now = new Date(Date.UTC(2015,4,5,17,55,55));//两组代码等同  

				2000年1月1日午夜零时
				var now = new Date(2000,0);//后台自动调用了下面代码
				var now = new Date(Date.UTC(2000,0));//两组代码等同 

		2.时间戳
			Date.now();//调用这个方法的日期和时间的毫秒数  IE9+兼容  等同于+new Date()
				var start = Date.now();
				doSomething();
				var stop = Date.now();
				var result = stop - start;

		3.日期格式化方法
			toDateString();日期格式转化为字符串
			toTimeString();
			toLocalDateString();
			toLocalTimeString();

		4.日期/时间组件方法
			太多  具体google

	四.RegExp类型 正则表达式  （太多  不详写了）
		var expression = /pattern/flags;
		var expression = new RegExp("pattern","flags");

			var pattern1 = /[bc]at/i;//匹配第一个bat或cat,不区分大小写
			var pattern1 = new RegExp("[bc]at","i");//匹配第一个bat或cat,不区分大小写

		flags标志:
			g:全局模式
			i:不区分大小写模式
			m:多行模式

	五.Function类型
		1.函数是对象，函数名类似指针，用来访问对象。
			function sum(num1,num2){
				return num1 +num2;
			}//函数声明语法定义函数

			var sum = function(num1,num2){
				return num1 +num2;
			}//函数表达式语法定义函数

			var sum = function sum(num1,num2){
				return num1 +num2;
			}//非主流定义法  在Safari中会报错

			调用sum(),相当于调用函数对象，调用sum,相当于访问相对应的指针
			function sum(num1,num2){
				return num1 + num2;
			}；
			alert(sum(10,10));//20
			var another = sum ;//将sum指针赋值给another  这样一来another也是指向函数的指针
			alert(another(10,10));//20
			sum = null;//sum变化  但不影响another
			alert(another(10,10));//20

		2.没有重载（重点）
			function addSomeNumber(num){
				return num + 100;
			}

			function addSomeNumber(num){
				return num + 200;
			}
			var result = addSomeNumber(100);//300  下面的函数覆盖上面的函数  变量addSomeNumber被覆盖

		3.函数声明和函数表达式
			解析顺序不一样：
				函数声明：解析器会率先读取函数声明，并且在执行任何代码之前都能使用
				函数表达式：必须等到解析器执行到那行代码才会执行

				alert(sum(10,10));//20
				function sum(num1,num2){//JS引擎把函数声明提升到了顶部
					return num1 + num2;
				}


				alert(sum(10,10));//unexpected identifier  意外的标识符
				var sun = function(num1,num2){// 在执行到这段之前  sum中没有保存有对函数的引用
					return num1 + num2;
				}

		4.作为值的函数
			函数名是变量，所以函数也可以作为值来使用

			把一个函数传递给另一个函数：
				function callSomeFunction(someFunction,someArgument){
					return someFunction(someArgument);
				}
				function add10(num){
					return num + 10;
				}
				var result1 = callSomeFunction(add10,10);
				alert(result1);//20
				function getGreeting(name){
					return "hello, " + name;
				}
				var result2 = callSomeFunction(getGreeting,"Nicholas");
				alert(result2);//"hello,Nicholas"

			从一个函数中返回另一个函数：
				function creatComparisonFunction(propertyName){
					return function(object1,object2){
						var value1 = object1[propertyName];
						var value2 = object2[propertyName];
						if (value1 < value2) {
							return -1;
						}else if(value1 > value2){
							return 1;
						}else{
							return 0;
						}
					}
				}
				var date = [{name: "Zachary",age:28},{name:"Nicholas",age:29}];
				data.sort(creatComparisonFunction("name"));
				alert(data[0].name);//Nichalas
				data.sort(creatComparisonFunction("age"));
				alert(data[0].name);//Zachary

		5.函数内部属性
			arguments  :用来保存函数参数。（前面有提 18.函数 那里）
				arguments.callee  该属性是个指针，指向拥有这个arguments对象的函数

				不用arguments.callee属性：
					function factorial(num){
						if (num <= 1) {
							return 1;
						}else{
							return num * factorial(num - 1);
						}
					}//此函数存在耦合性 可以改写成下面的形式

				使用callee属性：
					function factorial(num){
						if (num <= 1) {
							return 1;
						}else{
							return num * arguments.callee(num - 1);
						}
					}//无论引用函数名时使用的是什么名字，都可以保证正常的递归调用
					var trueFactorial = factorial;//trueFactorial获得了函数的指针
					factorial = function(){
						return 0;//此时factorial成了返回0 的函数，不影响trueFactorial
					}
					alert(trueFactorial(5));//120
					alert(factorial(5));//0

			this对象:引用的是函数执行的环境对象，当在全局作用域中调用函数，this对象引用的就是window
				window.color = "red";
				var o = {color:"blue"};
				function sayColor(){
					alert(this.color);
				}
				sayColor();//"red"
				o.sayColor = sayColor;
				o.sayColor();//"blue"

			函数的名字仅仅是一个包含指针的变量而已

			函数的caller:不能为这个属性赋值，会报错
				function outer(){
					inner();
				}
				function inner(){
					alert(inner.caller);//caller属性 指向拥有这个arguments对象的函数 即outer（）
				}
				outer();//function outer(){inner();}

		6.函数属性和方法
			每个函数都包含两个属性:length/prototype
				length:长度
				prototype属性非常多，第六章详细讲解。

			每个函数都有两个非继承而来的方法：apply()/call()
				这两个函数实际上等于设置函数体内this对象的值,扩充函数赖以运行的作用域

				apply():接受两个参数：运行函数的作用域和参数数组  第二个参数可以使数组实例 也可以是arguments对象
					function sum(num1,num2){
						return num1 + num2;
					}
					function sum1(num1,num2){
						return sum.apply(this,arguments);//传入arguments对象 此时this是在全局作用域中调用
					}
					function sum2(num1,num2){
						return sum.apply(this,[num1,num2]);//传入数组
					}
					alert(sum1(10, 10));//20
					alert(sum2(10, 10));//20
				在严格模式下，未指定环境对象而调用函数，this值不会转型为window。除非明确声明调价到或者调用某个函数的apply()或call(),否则this是undifined。

				call():跟apply()相同，唯一不同在于接收参数的方式
					function sum(num1,num2){
						return num1 + num2;
					}
					function sum1(num1,num2){
						return sum.call(this,num1,num2);
					}
					alert(sum1(10, 10));//20

				扩充函数赖以运行的作用域的例子：
					window.color = "red";
					var o = {color:"blue"};
					function sayColor(){
						alert(this.color);
					}
					sayColor();//red
					sayColor.call(this);//red
					sayColor.call(window);//red
					sayColor.call(o);//blue  this对象指向了o

			bind():创建一个函数的实例，其this值会被绑定到传给bind()函数的值。 兼容性IE9+
				window.color = "red";
				var o = {color:"blue"};
				function sayColor(){
					alert(this.color);
				}
				var objectSayColor = sayColor.bind(o);//此时 sayColor里this的值为o
				objectSayColor();//blue

	六.基本包装类型
		substring() 方法用于提取字符串中介于两个指定下标之间的字符。
		基本包装类型：  string  boolean number 三种类型

		引用类型和基本类型的区别在于对象的生存期。
		引用类型的对象，在执行流离开当前作用域之前一直保存在内存中
		基本包装类型的对象，只存在于一行代码的执行瞬间，然后立即被销毁。
		所以基本包装类型不能再运行时添加属性和方法

		1.boolean类型
			boolean表达式中所有对象都会被转化true  总之非常绕  建议永远不要使用布尔对象

		2.number类型
			toString():
				var num = 10;
				alert(num.toString());//"10"
				alert(num.toString(2));//"1010"
				alert(num.toString(8));//"12"
				alert(num.toString(10));//"10"
				alert(num.toString(16));//"a"

			toFixed(): IE8之前不能精确表达[0.5~0.94]之间的四舍五入
				var num = 10;
				alert(num.toFixed(2));//"10.00"  精确到几位小数

			toExponential():
				var num = 99;
				alert(num.toExponential(1));//"1e+2"
				alert(num.toExponential(2));//"99"
				alert(num.toExponential(3));//"99.0"

		3.String类型
			字符方法：
				charAt()
				charCodeAt()  字符编码
					var stringValue = "hello world";
					alert(stringValue.charAt(1));//"e"
					alert(stringValue.charCodeAt(1));//"101"
					alert(stringValue[1]);//"e" 方括号表示法 IE8+兼容

			字符串操作方法：
				concat():字符串拼接
					var stringValue = "hello ";
					var result = stringValue.concat("world");
					alert(result);//"hello world"
					alert(stringValue);//"hello"

			基于子字符串创建新字符串的方法：
				slice():第二个参数指定子字符串最后一个字符后面的位置
				substr():第二个参数指定返回的字符个数
				substring():第二个参数指定子字符串最后一个字符后面的位置
				返回子字符串，对原始字符串没有任何影响。接收一到两个参数。一个参数时，则字符串末尾作为结束位置。两个参数时，第一个参数指定开始位置
					var stringValue = "hello world";
					alert(stringValue.slice(3));//"lo world"
					alert(stringValue.substring(3));//"lo world"
					alert(stringValue.sunstr(3));//"lo world"
					alert(stringValue.slice(3,7));//"lo w"
					alert(stringValue.substring(3,7));//"lo w"
					alert(stringValue.substr(3,7));//"lo worl"

				如果传入的参数有负值：
					var stringValue = "hello world";
					alert(stringValue.slice(-3));//"rld"  字符串长度加参数 11 + -3 = 8 相当于slice（8）
					alert(stringValue.substring(-3));//"hello world"	将-3转化成0  substring（0）
					alert(stringValue.sunstr(-3));//"rld"	字符串长度加参数 11 + -3 = 8 相当于slice（8）
					alert(stringValue.slice(3,-4));//"lo w"	字符串长度加参数 11 + -7 = 7 相当于slice（3,7）
					alert(stringValue.substring(3,-4));//"lel"	将-4转化成0  substring（3,0）
					alert(stringValue.substr(3,-4));//""空字符串	将-4转化成0  substr（3,0）返回空字符串

			字符串位置方法：
				indexOf()	lastIndexOf()  返回子字符串的位置  若没找到  返回-1
					var stringValue = "hello world";
					alert(stringValue.indexOf("o"));//4  返回第一个符合的字符串位置
					alert(stringValue.lastIndexOf("o"));//7  返回最后一个符合的字符串位置

					var stringValue = "hello world";
					alert(stringValue.indexOf("o"，6));//7  从6位置向后找  
					alert(stringValue.lastIndexOf("o",6));//4  从6位置向前找
				实例：通过循环找到所有匹配的子字符串
					var  stringValue = "ldjehoif feoqfofjkndf f efqwofjoeiwqfjka df  foweqfjklsdajfoewjfosaff";
					var positions = new Array();
					var pos = stringValue.indexOf("e");
					while(pos > -1){
						positions.push(pos);
						pos = stringValue.indexOf("e", pos+1);
					}
					document.getElementsByTagName("body")[0].innerHTML = positions;//3,10,24,32,48,60

			trim():创建一个字符串的副本，删除前置及后缀的所有空格，并返回结果 兼容性IE9+
				var  stringValue = "   fjif  f jaofjdoa f    ";
				var trimmedStringValue = stringValue.trim();
				alert(stringValue);//"   fjif  f jaofjdoa f    "
				alert(trimmedStringValue);//"fjif  f jaofjdoa f"

				trimLeft():删除字符串开头空格  IE不支持
				trimRight():删除字符串末尾空格  IE不支持

			字符串大小写转换方法：
				常用：
					toLowerCase()	小写			
					toUpperCase()	大写
				针对特定地区：
					toLocaleLowerCase()
					toLocaleUpperCase()

			字符串模式匹配方法：
				match():本质上等同于调用RegExp.exec()方法相同。接收一个参数，正则表达式或者正则对象
					var text = "cat,bat,sat,fat";
					var pattern = /.at/;
					var matches = text.march(pattern);//与pattern.exec(text)相同
					alert(matches.index);//0
					alert(matches[0]);//"cat"
					alert(pattern.lastIndex);//0

				search():参数与match()参数相同,返回字符串中第一个匹配项的索引，若没有，返回-1，从头向后查找
					var text = "cat,bat,sat,fat";
					var pos = text.search(/at/);
					alert(pos);//1

				replace():替换子字符串。接收两个参数，第一个参数可以是正则或者字符串，第二个可以是字符串或者一个函数。

					如果第一个参数是字符串，那么只会替换第一个子字符串，要想替换所有，就要提供一个正则，全局g标志
						var text = "cat,bat,sat,fat";
						var resule = text.replace("at","ond");
						alert(result);//"cond,bat,sat,fat"
						var result = text.replace(/at/g,"ond");
						alert(result);//"cond,bond,sond,fond"

					如果第二个参数是字符串，可以使用特殊的字符序列，将正则得到的值插入
						var text = "cat,bat,sat,fat";
						var resule = text.replace(/(.at)/g,"word($1)");
						alert(result);//"word(cat),word(bat),word(sat),word(fat)"

						字符序列				替换文本
						$$						$
						$&						匹配整个模式的子字符串。与RegExp.lastMatch的值相同
						$'						匹配的子字符串之前的子字符串。与RegExp.leftContext的值相同					'
						$`						匹配的子字符串之后的子字符串。与RegExp.rightContext的值相同					`
						$n 						匹配第n个捕获组的子字符串，其中n等于0~9，例如$1是匹配第一个捕获组的子字符串
						$nn 					匹配第nn个捕获组的子字符串，其中n等于01~99，例如$01是匹配第一个捕获组的子字符串								

					如果第二个参数是函数,在只有一个捕获组的情况下，会向函数传递三个参数：模式的匹配项、模式匹配项在字符串中的位置、原始字符串
					function htmlEscape(text){
						return text.replace(/[<>"&]/g,function(match,pos,originalText){
							switch(match){
								case "<":
									return "&lt;";
								case ">":
									return "&gt;";
								case "&":
									return "&amp;";
								case "\"":
									return "&quot;";
							}
						});
					}
					alert(htmlEscape("<p class=\"greeting\">hello world!</p>"));//&lt;p class=&quot;greeting&quot;&gt;hello world!&lt;/p&gt;

				split():基于指定的分隔符将一个字符串分隔成多个子字符串，结果放在一个数组里。第一个参数是分隔符，分隔符可以是字符串，也可以是正则。第二个参数可选，用于指定数组的大小
					var colorText = "red,blue,green,yellow";
					var colors1 = colorText.split(",");//["red","blue","green","yellow"]
					var colors2 = colorText.split(",",2);//["red","blue"]
					var colors3 = colorText.split(/[^\,]+/);//["", ",", ",", ",", ""]  split的正则会有浏览器的兼容性问题，慎用

			localeCompare():比较两个字符串，返回值：
								①如果字符串在字母表中应该排在字符串参数之前，返回肤质，大部分是-1，但不绝对
								②如果字符串等于字符串参数，返回0
								③如果字符串在字母表中排字符串参数之后，返回正数，大部分是1，但不绝对
				var stringValue = "yellow";
				alert(stringValue.localeCompare("brick"));//1
				alert(stringValue.localeCompare("yellow"));//0
				alert(stringValue.localeCompare("zoo"));//-1

				因为localeCompare()的返回值按情况而定，所以最好这样写：
					function determineOrder(value){
						var result = stringValue.localeCompare(value);
						if (result < 0) {
							alert("the string 'yellow' comes before the string '" + value + "'.");
						}else if (result > 0) {
							alert("the string 'yellow' comes after the string '" + value + "'.");
						}else{
							alert("the string 'yellow' comes equal the string '" + value + "'.");
						}
					}
					determineOrder("brick");
					determineOrder("yellow");
					determineOrder("zoo");

					localeCompare()方法根据地区决定行为

			fromCharCode():接收一或多个字符编码，然后转换，从本质上看，跟charCodeAt()作用相反
				alert(String.fromCharCode(104,101,108,108,111));//"hello"

			HTML方法：建议不要用，因为他们创建的标记通常无法表达语义。那我就不写了 ^_^

	七.单体内置对象
		1.global对象：全局对象//略过  跟window对象有重合  第八章详解windou对象
			所有在全局作用域中定义的属性和方法，都是GLOBAL对象的属性。
				uri编码方法：
					encodeURI():用于整个URI，不会对本身属于RUI的特殊字符进行编码，不如斜杠，冒号等等
					encodeURICompoment()：用于URI中的某一段。会对特殊字符进行编码

		2.math对象
			属性 						说明
			Math.E 						自然对数的底数 常量e的值
			Math.LN10					10的自然对数
			Math.LN2 					2的自然对数
			Math.LOG2E					以2为底e得对数
			Math.LOG10E					以10为底e得对数
			Math.PI 					π的值
			Math.SQRT1_2				1/2的平方根 （2的平方根的倒数）
			Math.SQRT2 					2的平方根

			Math.min();	 
			Math.max();
				var max =Math.max(3,665,42,65,43,5);
				alert(max);//665

				var values = [1,2,3,4,5,6,7,8,9];
				var max = Math.max.apply(Math, values);

			舍入方法：
				Math.ceil():向上舍入 加
				Math.floor():向下舍入 减
				Math.round():四舍五入

			random():随机数
				格式：值 = Math.floor(Math.random()*可能值的总数+第一个可能的值)

				选择一个1~10的数值：
				var num = Math.floor(Math.random()*10+1);
				选择一个2~10的数值：
				var num = Math.floor(Math.random()*9+2);

				实例：从数组中随机挑选一项
					function selectFrom(lowerValue,upperValue){
						var choices = upperValue-lowerValue+1;
						return Math.floor(Math.random()*choices+lowerValue);
					}
					var colors = ["red","green","blue","yellow","black","purple","brown"];
					var color = colors[selectFrom(0,colors.length-1)];
					alert(color);

			Math方法还有很多，其他的比较小众，不一一列举了，详情百度。











					

