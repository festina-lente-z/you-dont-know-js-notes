function foo(){
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

var bar = obj.foo; // 函数别名
// 虽然bar是obj.foo的一个引用，但实际上，它引用的是foo函数本身，因此此时的
// bar()其实是一个不带任何修饰的函数调用，因此应用了默认绑定

var a = "oops, global"; // a是全局对象的属性

bar();