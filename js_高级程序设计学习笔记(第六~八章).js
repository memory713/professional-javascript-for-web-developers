// 2017/9/26   liwen
第六章.面向对象的程序设计（全书进度：20%）
	一.理解对象
		对象是一组没有特定顺序的值
		创建自定义对象：
			var person = new Object();
			person.name = "Nicholas";
			person.age = 29;
			person.job = "Software Engineer";
			person.sayName = function(){
				alert(this.name);
			}
			person.sayName();//"Nicholas"

			也可以这么写：
			var person = {              
			    name : "Nicholas",
			    age : 29,
			    job : "Software Engineer",
			    sayName : function(){
			        alert(this.name);
			    }
			}
			person.sayName();//"Nicholas"

		1.属性类型
			数据属性：
				Configurable属性：能否通过delete删除属性，能否修改属性特性，能否把属性修改为浏览器属性
								  特征默认值为TRUE,
				Enumerable属性：能否通过FOR-IN循环返回属性，类似上方字面量语法创建的例子。默认true
				Writable属性：能否修改属性的值，默认true
				Value属性：包含这个属性的数据值，value特性一般被设定为指定的值，其他上面的属性都为true
					var persom = {
						name:"Nicholas";//value特性被设置为"Nicholas"
					}
			要修改默认属性的值，要通过Object.defineProperty()方法相同，这个方法建议不要用，在浏览器的兼容上处理的不好，本身也有很无语的一面。了解就好。

			访问器属性：
