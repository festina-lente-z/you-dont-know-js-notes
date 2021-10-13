// 输出什么？

function foo(){
  console.log(this.name);
}

function Foo(fn){
  fn();
}

var obj = {
  name: 'zl',
  foo,
}

var name = 'Heternally';

Foo(obj.foo); //参数赋值操作 agr = obj.foo,指向的是foo本身，因此是默认绑定
// Heternally