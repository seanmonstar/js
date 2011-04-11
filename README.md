# js

A collection of JavaScript extensions that I've found useful in the past. Does depend on MooTools, but each one is simple enough to turn back into vanilla JS.

## Function

### Function.not

	function isOdd(num) {
		return num % 2;
	}
	
	isEven = Function.not(isOdd);
	
	isTrue = true
	isFalse = Function.not(isTrue); // function that returns !isTrue

### Function.kwargs

[Blog post](http://seanmonstar.com/post/3746460491/function-kwargs).

	var example = function(alpha, bravo, charlie) {
		console.log(alpha + ' ' + bravo + ' ' + charlie);
	}.kwargs();
	
	example();
	example('hello', 'world', '!');
	example({alpha: 'goodbye', charlie: 'world', bravo: 'cruel'});
	example('sup', { charlie: 'dog' });

### Function.curry

	function sum(a, b) {
		return a + b;
	}
	
	var twoPlus = sum.curry(2);
	
	twoPlus(3); // 2 + 3

### Function.lazy

	var digit_name = function(n) {
		var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		return function(n) {
			return names[n];
		};
	}.lazy();
	
	digit_name(3); //init, then return
	digit_name(2); //return

## Array

### Array.batch

Similar to Array.each, but loops in batches, use setTimeout to allow the Browser thread to do other things, like respond to UI events and changes. Useful for really big arrays, or really intensive functions.

### Array.range

Like `range` in Python.

	Array.range(3, 6); // [3, 4, 5]