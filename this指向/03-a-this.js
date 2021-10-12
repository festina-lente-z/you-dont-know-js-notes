function baz() {
  // 当前的调用栈(应该是栈顶元素？）是：baz
  // 因此，当前调用位置是在全局作用域
  debugger;
  console.log("baz");
  bar(); // bar的调用位置
}

function bar(){
  // 当前的调用栈是baz -> bar
  // 因此，当前调用位置在baz中
  debugger;
  console.log("bar");
  foo(); // <-- foo调用位置
}

function foo(){
  // 当前调用栈是baz -> bar -> foo
  // 因此，当前调用位置在bar中
  debugger;
  console.log("foo");
}

baz(); // <-- baz的调用位置