// 发生在传入回调函数时的隐式丢失
function foo(){
  console.log(this.a);
}

function doFoo(fn){

  fn(); // <-- 调用位置
}

var obj = {
  a: 2,
  foo: foo
};

var a = "1oops, global"; // a是全局对象的属性

doFoo(obj.foo); // 根据前面，这里其实有一个参数赋值的操作，所以看成是agr = obj.foo，然后和情况1相同，指向的是函数foo本身，因此使用的是默认绑定

// 参数传递其实就是一种隐式赋值，因此我们传入函数时也会被隐式赋值
