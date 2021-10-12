// 硬绑定03
// 创建一个可以重复使用的辅助函数
function foo(something){
  console.log(this.a, something);
  return this.a + something;
}

// 简单的辅助绑定函数
function bind(fn, obj){
  return function(){
    return fn.apply(obj, arguments);
  }
}

var obj = {
  a:2
};

var bar = bind(foo, obj);

var b = bar(3);

console.log(b);

