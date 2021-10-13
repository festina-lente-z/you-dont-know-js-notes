var obj = {
  value: 'obj',
  fn: function(){console.log(this.value);}
}
obj.fn();

// 默认绑定