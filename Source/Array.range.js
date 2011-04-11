/*
---

name: Array.range

description: Returns an array with the range of numbers in it.

license: MIT-style license.

copyright: Copyright (c) 2011 [Sean McArthur](http://seanmonstar.net/).

authors: Sean McArthur (@seanmonstar)

requires: [Core/Core]

provides: [Array.range]

...
*/
Array.extend('range', function(min, max) {
	if(!max) {
		max = min;
		min = 0;
	}
	var arr = [];
	for(var i = min; i < max; i++) {
		arr.push(i);
	}
	return arr;
});