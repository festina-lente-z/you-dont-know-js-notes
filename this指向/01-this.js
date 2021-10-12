function identify() {
  return this.name.toUpperCase();
  // this指向什么？
}

function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name: "Kyle"
}

var you = {
  name: "Reader"
}

identify.call(me); //this指向me？ KYLE？
identify.call(you);//this指向you？ READER？

speak.call(me); // Hello, I'm KYLE？
speak.call(you); // Hello, I'm READER？

// 这段代码可以在不同的上下文对象（me和you）中重复使用函数identify()和speak()，不用针对每个对象编写不同的函数
// 如果不使用this，那就需要给identify()和speak()显式传入一个上下文对象

function identifyx(context) {
  return context.name.toUpperCase();
}

function speakx(context) {
  var greeting = "Hello, I'm " + identifyx(context);
  console.log(greeting);
}

identifyx(you);
speakx(me);

// this提供了一种更优雅的方式来隐式“传递”一个对象引用，因此可以将API设计得更加简洁并且易于复用
// 随着使用的模式越来越复杂，显式传递上下文对象会让代码变得越来越混乱，使用this则不会这样
// this可以帮助函数自动引用合适的上下文对象
