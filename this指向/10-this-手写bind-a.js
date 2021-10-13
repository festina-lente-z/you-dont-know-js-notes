let value = 2;
let foo = {
  value: 1
};
function bar(name, age){
  return {
    value: this.value,
    name: name,
    age: age
  }
};

bar.call(foo, "jack", 20);//直接执行了函数
console.log(bar.call(foo, "jack", 20));

let bindFoo1 = bar.bind(foo, "jack", 20);//返回一个函数
bindFoo1();
console.log(bindFoo1());

let bindFoo2 = bar.bind(foo, "jack");//返回一个函数
bindFoo2(20);
console.log(bindFoo2(20));
// 函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式
