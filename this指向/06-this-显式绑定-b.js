// 硬绑定01

function foo(){
  console.log(this.a);
}

var obj = {
  a: 2
}

var bar = function(){
  foo.call(obj);
}
// 无论之后如何调用bar，它总会手动在obj上调用foo。这种绑定是一种显式的强制绑定，我们称之为“硬绑定”

bar();
setTimeout(bar, 100);

// 硬绑定的call不可能再修改它的this
bar.call(window);