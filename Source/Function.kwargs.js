/*
---

name: Function.kwargs

description: Allows passing keyword arguments to a function, inpired by Python.

license: MIT-style license.

copyright: Copyright (c) 2011 [Sean McArthur](http://seanmonstar.net/).

authors: Sean McArthur (@seanmonstar)

requires: [Core/Core]

provides: [Function.kwargs]

...
*/
Function.implement('kwargs', function() {
    var that = this,
        argNames = this.toString().match(/\(([^\)]+)/)[1];
    
    argNames = argNames ? argNames.split(',').map(String.trim) : [];
    
    return function() {
        var args = Array.from(arguments);
        if (args.length && (args.length < that.length)) {
            var kwargs = args.pop();
            if (typeOf(kwargs) == 'object') {
                for (var i = 0; i < argNames.length; i++) {
                    if(argNames[i] in kwargs) {
                        args[i] = kwargs[argNames[i]];
                    }
                }
            } else {
                args.push(kwargs);
            }
        }
      
        that.apply(that, args);
    };
});