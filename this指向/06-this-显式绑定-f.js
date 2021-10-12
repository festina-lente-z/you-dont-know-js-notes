// API调用的“上下文”

function foo(el){
  console.log(el, this.id);
}

var obj = {
  id: "awesome"
};

// 调用foo()时把this绑定到obj
[1,2,3].forEach(foo, obj);

