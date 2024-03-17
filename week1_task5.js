'use strict';

//process也是Node.js提供的一个对象，它代表当前Node.js进程。
console.log(process.version);
console.log(process.platform);
console.log(process.arch);
console.log(process.cwd());//返回当前工作目录


//JavaScript程序是由事件驱动执行的 <<单线程模型>>，Node.js也不例外。
//Node.js不断执行响应事件的JavaScript函数，<<直到>>没有任何响应事件的函数可以执行时，Node.js就退出了。
//如果我们想要在下一次事件响应中执行代码，可以调用process.nextTick()：

process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');
//terminal中显示如下：
//nextTick was set!
//nextTick callback!
//这说明传入process.nextTick()的函数不是立刻执行，而是要等到下一次事件循环。


//Node.js进程本身的事件就由process对象来处理。如果我们响应exit事件，就可以在程序即将退出时执行某个回调函数：
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});

if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}


//terminal中显示如下：
// nextTick was set!
// node.js
// nextTick callback!
// about to exit with code: 0
//question(3)为什么typeof(window)打印的node.js 会在nextTick was set!和nextTick callback!中间出现？试了很多次都是这样的
