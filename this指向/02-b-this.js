function foo(num) {
  console.log("foo: " + num);
  // 记录函数foo被调用的次数
  // 注意：在当前的调用方式下，this确实指向foo
  this.count++;
}

foo.count = 0;

var i;

for(i=0; i<10; i++){
  if(i>5){
    // 使用call(..)可以确保this指向函数对象foo本身
    foo.call(foo, i);
  }
}

console.log(foo.count);