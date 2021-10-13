function foo(){
  console.log(this.a);
}

var a = 2;
var o = {a: 3, foo: foo};
var p = {a: 4};

o.foo();
foo.call(p);

(p.foo = o.foo)();

// 赋值表达式p.foo = o.foo的返回值是目标函数的引用，因此调用位置是foo()而不是p.foo()或者o.foo()
// 这里应用的是默认绑定