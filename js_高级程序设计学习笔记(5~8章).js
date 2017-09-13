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
				



