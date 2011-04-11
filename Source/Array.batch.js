/*
---

name: Array.batch

description: Similar to Array.each, but loops in batches, use setTimeout to allow the Browser thread to do other things, like respond to UI events and changes.

license: MIT-style license.

copyright: Copyright (c) 2011 [Sean McArthur](http://seanmonstar.net/).

authors: Sean McArthur (@seanmonstar)

requires: [Core/Core]

provides: [Array.batch]

...
*/
Array.implement('batch', function(callback, loopsPerBatch, delay, bind) {
	if(!loopsPerBatch) loopsPerBatch = 10;
	if(!delay) delay = 50;
	if(callback) {
		var loops = 0,
			index = 0,
			that = this;
		function doLoops() {
			loops = 0;
			for (var length = that.length; (index < length) && loops < loopsPerBatch; index++) {
				loops++;
				callback.call(bind, that[index], index, that);
			}
			if(index < length) {
				doLoops.delay(delay);
			}
		}
		doLoops();
	}
})