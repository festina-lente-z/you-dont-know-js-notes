function foo(something){
  this.a = something;
}

var obj1 = {};

var bar = foo.bind(obj1); // this指向obj1
bar(2);
console.log(obj1.a);// 2

var baz = new bar(3);
console.log(obj1.a);
console.log(baz.a);

// bar被硬绑定到obj1上，但是new bar(3)并没有像我们预计的那样把obj1.a修改为3
// 相反，new修改了硬绑定（到obj1的）调用bar()中的this。
// 因为使用了new绑定，我们得到了一个名字为baz的新对象，并且baz.a的值是3