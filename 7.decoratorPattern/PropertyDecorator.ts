namespace propertyDecroatorSpace {
  /**
   * 实例属性装饰器
   * 实例方法装饰器
   * 静态属性装饰器
   * 静态方法装饰器
   */

  // 实例属性装饰器 的 target {第一个参数是类的原型对象} key {第二个参数是属性的名字}
  function instancePropertyDecorator(target, key) {
    console.log(target, key);
  }

  function staticPropertyDecorator() {}

  function instanceMethodDecorator() {}

  function staticMethodDecorator() {}

  class Demo {}
}
