// 硬绑定02
// 硬绑定的典型应用场景就是创建一个包裹函数，负责接收参数并返回值
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = {
  a: 2
};

var bar = function(){
  return foo.apply(obj, arguments)
};

var b = bar(3);
console.log(b);

