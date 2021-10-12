function foo(){
  "use strict";
  // 在严格模式下运行
  console.log(this.a);
}

// 声明在全局中的变量，就是全局对象的一个同名属性
var a = 2;
// window.a = 3;

foo();