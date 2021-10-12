// 硬绑定04
// y由于硬绑定是一种非常常用的模式，ES5提供了内置的方法Function.prototype.bind

function foo(something){
  console.log(this.a, something);
  return this.a + something;
}

var obj = {
  a:4
};

var bar = foo.bind(obj);
// bind()会返回一个硬编码的新函数，它会把你指定的参数设置为this的上下文并调用原始函数
var b = bar(3);

console.log(b);


