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








				



