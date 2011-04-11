/*
---

name: Function.not

description: Like Function.from, provides a function of the value passed in, but not'ed.

license: MIT-style license.

copyright: Copyright (c) 2011 [Sean McArthur](http://seanmonstar.net/).

authors: Sean McArthur (@seanmonstar)

requires: [Core/Core]

provides: [Function.not]

...
*/
Function.extend('not', function(val) {
    return function() {
        return !Function.from(val).apply(this, arguments);
    };
});