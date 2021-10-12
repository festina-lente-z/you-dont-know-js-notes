function foo(){
  var a  = 8
  console.log(this.a);
}

var obj = {
  a: 2
};


foo.call(obj);
// 通过foo.call()，我们可以在调用foo时强制把它的this绑定到obj上

// this和词法作用域没关系！！！！！！！
// this既不指向函数自身也不指向函数的词法作用域
// 所以不可能指向foo函数里面的a
// 指向被调用的位置！