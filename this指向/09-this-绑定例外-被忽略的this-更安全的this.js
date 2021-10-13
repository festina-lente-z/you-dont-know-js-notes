function foo(a,b){
  console.log("a:" + a + ", b:" + b);
}
// DMZ空对象
var ø = Object.create(null);

// 把数组“展开”成参数
foo.apply(ø, [1,2]);

// 使用bind()进行柯里化
var bar = foo.bind(ø, 4);
bar(5);