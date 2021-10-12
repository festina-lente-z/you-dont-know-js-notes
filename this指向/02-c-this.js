function foo(){
  var a = 2;
  this.bar(); //试图通过this.bar()来引用bar()函数，
}

function bar(){
  console.log(this.a);debugger
}

foo(); //undefined