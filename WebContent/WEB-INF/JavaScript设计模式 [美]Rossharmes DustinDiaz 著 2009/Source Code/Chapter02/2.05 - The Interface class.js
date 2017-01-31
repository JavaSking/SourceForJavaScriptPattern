/* Interface类用于检查目标对象是否实现了指定接口（实现了指定接口的全部方法） */

/**
 * Interface的构造函数。
 * 
 * @param name
 *          接口名。
 * @param methods
 *          接口方法名（字符串）数组。
 */
var Interface = function(name, methods){

	if (arguments.length != 2) {
		throw new Error("Interface constructor called with " + arguments.length + "arguments, but expected exactly 2.");
	}

	this.name = name;
	this.methods = [];
	for (var i = 0, len = methods.length; i < len; i++) {
		if (typeof methods[i] !== 'string') {
			throw new Error("Interface constructor expects method names to be " + "passed in as a string.");
		}
		this.methods.push(methods[i]);
	}
};

/**
 * 检查目标对象是否实现了指定接口。<br>
 * 指定接口{@code Interface}通过不定参数传递。
 * 
 * @param object 目标对象。
 */
Interface.ensureImplements = function(object){

	if (arguments.length < 2) {
		throw new Error("Function Interface.ensureImplements called with " + arguments.length + "arguments, but expected at least 2.");
	}

	for (var i = 1, len = arguments.length; i < len; i++) {
		var interface = arguments[i];
		if (interface.constructor !== Interface) {
			throw new Error("Function Interface.ensureImplements expects arguments " + "two and above to be instances of Interface.");
		}

		for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
			var method = interface.methods[j];
			/* 目标对象不存在指定接口方法 */
			if (!object[method] || typeof object[method] !== 'function') {
				throw new Error("Function Interface.ensureImplements: object " + "does not implement the " + interface.name + " interface. Method " + method + " was not found.");
			}
		}
	}
};
