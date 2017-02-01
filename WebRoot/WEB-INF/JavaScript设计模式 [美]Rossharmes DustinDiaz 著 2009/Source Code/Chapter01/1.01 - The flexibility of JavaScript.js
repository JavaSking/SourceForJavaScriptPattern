/* 1、过程式的程序设计 */

function startAnimation() {

}

function stopAnimation() {

}

/* 2、定义类 */

var Anim = function() {

};
Anim.prototype.start = function() {

};
Anim.prototype.stop = function() {

};

/* 3、定义类：类的方法声明内嵌在类的声明中 */

var Anim = function() { 

};
Anim.prototype = {
		
  start: function() {
  	
  },
  stop: function() {
  	
  }
};

/* 4、使用Function定义。 */

/**
 * Function.prototype.method用于为类添加新方法。
 * 
 * @param name
 *          方法名。
 * @param fn
 *          用作方法的函数。
 */
Function.prototype.method = function(name, fn) {
	
  this.prototype[name] = fn;
};

var Anim = function() { 

};
Anim.method('start', function() {

});
Anim.method('stop', function() {

});



/* 5、方法链式调用 */

Function.prototype.method = function(name, fn) {
	
    this.prototype[name] = fn;
    return this;
};

var Anim = function() { 

};
Anim.method('start', function() {

  }).method('stop', function() {

  });