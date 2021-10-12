// this并不像我们所想的那样指向函数本身

function foo(num){
  console.log("foo: " + num);
  // 记录函数foo被调用的次数
  this.count++;
}

foo.count = 0;

var i;
for(i=0; i<10; i++) {
  if(i>5){
    foo(i);
  }
}
// 6,7,8,9
console.log(foo);
console.log(foo.count); // 0

/* 
  执行foo.count = 0时，的确向函数对象foo添加来一个属性count。
  但函数内部代码this.count中的this并不是指向那个函数对象
 */