// 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器，提供的this值被忽略，同时调用时的参数被提供给模拟函数
let value = 2;
let foo = {
  value: 1
};
function bar(name, age){
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}
bar.prototype.friend = 'kevin';

let bindFoo = bar.bind(foo, 'Jack');
let obj = new bindFoo(20);
// undefined
// Jack
// 20


obj.habit;

obj.friend;
