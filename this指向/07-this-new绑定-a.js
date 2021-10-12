function foo(a){
  this.a = a;
}
// 使用new来调用foo()时，我们会构造一个新对象并把它绑定到foo()调用中的this上
var bar = new foo(2);
console.log(bar.a);

