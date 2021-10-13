// 如果把null或者undefined作为this的绑定对象传入call、apply或者bind，这些值在调用时会被忽略，实际应用的是默认绑定规则
function foo(){ 
  console.log(this.a);
}
var a = 2;

foo.call(null);