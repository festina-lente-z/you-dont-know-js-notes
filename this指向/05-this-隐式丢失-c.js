// 把函数传入语言内置的函数而不是传入自己声明的函数

function foo(){
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

var a = "oops, global";
// a是全局对象的属性
setTimeout(obj.foo, 100);
// setTimeout的实现和下面伪代码类似
/* function setTimeout(fn, delay) {
  // 等待delay毫秒
  fn(); // <-- 调用位置
} */
