/*
---

name: Function.curry

description: Pass in arguments one at a time, saving a new function each time.

license: MIT-style license.

copyright: Copyright (c) 2011 [Sean McArthur](http://seanmonstar.net/).

authors: Sean McArthur (@seanmonstar)

requires: [Core/Core]

provides: [Function.curry]

...
*/
Function.implement('curry', function() {
    var args = Array.from(arguments),
        method = this;
    return function() {
        return method.apply(this, args.concat(Array.from(arguments)));
    };
});