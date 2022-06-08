namespace classDecoratorSpace {
  /**
   * 装饰器就是一个函数
   * 如果装饰器函数是用来修饰类的，那么 target {装饰器的入参} 就是类的构造函数
   * 类装饰器用来监控、修改或替换类党的定义
   *
   */
  interface Animal {
    swings: number;
    fly: Function;
  }

  // 此时flyable 就是类装饰器
  function flyable(target: any) {
    // 修改或者替换类的定义,给类添加属性或者方法
    target.prototype.swings = 2;
    target.prototype.fly = () => {
      console.log("can fly");
    };
  }

  @flyable
  class Animal {
    constructor() {}
  }

  const animal = new Animal();
  animal.fly();
}

namespace returnClassDecoratorSpace {
  /**
   * 可以使用一个函数来return 出一个装饰器对类进行装饰
   */
  interface Animal {
    swings: number;
    fly: Function;
  }

  // 此时 returnClassDecorator 返回的是一个类装饰器
  function returnClassDecorator(swings: number) {
    // 修改或者替换类的定义,给类添加属性或者方法
    return function classDecorator(target: any) {
      target.prototype.swings = swings;
      target.prototype.fly = () => {
        console.log("can fly too.");
      };
    };
  }

  @returnClassDecorator(2)
  class Animal {
    constructor() {}
  }

  const animal = new Animal();
  animal.fly();
}
