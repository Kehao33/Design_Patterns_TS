/**
 * 工厂方法
 * 即每个类都有一个对应的专门的工厂来创建自己的实例，这就是传说中的工厂方法啊，孩子
 * 好比 创建 红旗 的车子就是 红旗 公司创建的， 创建 坦克 车子 的就是坦克公司
 * 
 * 在工厂方法里， 不再由 Factory 来创建 产品， 而是创建 具体的工厂，然后具体的工厂来创建产品
 */

{
  abstract class Coffee {
    constructor(public name: string) {}
  }

  class AmericanoCoffee extends Coffee {}

  class LatteCoffee extends Coffee {}

  class CapuccinoCoffee extends Coffee {}

  // 面向接口，面向抽象编程
  abstract class CateFactory {
    abstract createCoffee(): Coffee;
  }

  class AmericanoCoffeeFactory extends CateFactory {
    createCoffee() {
      return new AmericanoCoffee("AmericanoCoffee create americanCoffee");
    }
  }

  class LatteCoffeeFactory extends CateFactory {
    createCoffee() {
      return new LatteCoffee("LatteCoffeeFactory create LatteCoffee");
    }
  }

  class CapuccinoCoffeeFactory extends CateFactory {
    createCoffee() {
      return new CapuccinoCoffee(
        "CapuccinoCoffeeFactory create CapuccinoCoffee"
      );
    }
  }

  const americanoCoffeeFactory = new AmericanoCoffeeFactory();
  console.log(americanoCoffeeFactory.createCoffee());

  const latteCoffeeFactory = new LatteCoffeeFactory();
  console.log(latteCoffeeFactory.createCoffee());

  const capuccinoCoffeeFactory = new CapuccinoCoffeeFactory();
  console.log(capuccinoCoffeeFactory.createCoffee());
}
