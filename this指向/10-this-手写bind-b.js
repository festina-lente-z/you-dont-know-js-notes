// 模拟实现bind
Function.prototype.bind = function (context){
  // 调用 bind 的不是函数，需要抛出异常
  if(typeof this !== "function"){
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  // this 指向调用者
  var self = this;
  // 实现“传入参数”，因为第一个参数是指定的this，所以只截取第一个之后的参数
  var args = Array.prototype.slice.call(arguments, 1); //?????为什么这样写
  console.log(arguments);
  console.log(args);

  // 实现“返回一个函数”
  return function(){
    // 实现“柯里化”，此时的arguments是指bind返回的函数传入的参数
    // 即 return function 的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    // 实现"指定this"
    return self.apply(context, args.concat(bindArgs));
  }

}
