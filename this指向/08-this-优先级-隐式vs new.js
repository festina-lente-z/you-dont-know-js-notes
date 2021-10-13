// function foo(something) {
//   this.a = something;
// }

// var obj1 = {
//   foo: foo
// };

// var obj2 = {};

function foo(something){
  console.log(this.a);
}
var obj1 = {
  a: 2,
  foo
}
var obj2 = {
  a:3
}
var a = 9;
obj1.foo(2);
// console.log(obj1.a); // 2

obj1.foo.call(obj2, 3);
// console.log(obj2.a); // 3

var bar = new obj1.foo(4);

// console.log(obj1.a); // 不会 2
// console.log(bar.a); // 4
