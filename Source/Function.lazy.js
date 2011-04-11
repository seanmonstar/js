/*
---

name: Function.lazy

description: For functions that setup a closure, closure is only executed when function is called.

license: MIT-style license.

copyright: Copyright (c) 2011 [Sean McArthur](http://seanmonstar.net/).

authors: Sean McArthur (@seanmonstar)

requires: [Core/Core]

provides: [Function.lazy]

...
*/
Function.prototype.lazy = function() {
	var fn = this,
		init = false;
	return function() {
		if(!init) {
			init = true;
			fn = fn.apply(this, arguments);
		}
		return fn.apply(this, arguments);
	}
};