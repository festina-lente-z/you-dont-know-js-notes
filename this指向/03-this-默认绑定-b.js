function foo() {
  console.log(this);
  console.log(this.a);
}

var a = 2;

(function(){
  "use strict";
  // 在严格模式下调用foo()不影响默认绑定
  console.log(this);
  foo();
})();