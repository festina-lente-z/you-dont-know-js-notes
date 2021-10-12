function foo(){
  console.log(this.a);
}

var obj = {
  a: 5,
  foo: foo
};

obj.foo();