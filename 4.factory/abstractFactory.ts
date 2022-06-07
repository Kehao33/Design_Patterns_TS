{
  /**
   * 抽象工厂方法适合 创建 同一大类下创建不同的产品
   *
   */
  abstract class AmericanoCoffee {}
  abstract class LatteCoffee {}
  abstract class CapuccinoCoffee {}

  class StarBucksAmericanoCoffee extends AmericanoCoffee {}
  class LuckinAmericanoCoffee extends AmericanoCoffee {}

  class StarBucksLatteCoffee extends LatteCoffee {}
  class LuckinLatteCoffee extends LatteCoffee {}

  class StarBucksCappuccinoCoffee extends CapuccinoCoffee {}
  class LuckinCappuccinoCoffee extends CapuccinoCoffee {}

  // 抽象工具方法，他是使用于其他工厂的一个标准， 抽象工厂里需要定义创建不同产品的方法
  abstract class CafeFactory {
    abstract createAmericanoCoffee(): AmericanoCoffee;
    abstract createLatteCoffee(): LatteCoffee;
    abstract createCappuccinoCoffee(): CapuccinoCoffee;
  }

  class StarBucsCafeFactory extends CafeFactory {
    createAmericanoCoffee(): AmericanoCoffee {
      return new StarBucksAmericanoCoffee();
    }

    createLatteCoffee(): LatteCoffee {
      return new StarBucksLatteCoffee();
    }

    createCappuccinoCoffee(): CapuccinoCoffee {
      return new LuckinCappuccinoCoffee();
    }
  }

  class LuckinCafeFactory extends CafeFactory {
    createAmericanoCoffee(): AmericanoCoffee {
      return new LuckinAmericanoCoffee();
    }

    createLatteCoffee(): LatteCoffee {
      return new LuckinLatteCoffee();
    }

    createCappuccinoCoffee(): CapuccinoCoffee {
      return new StarBucksCappuccinoCoffee();
    }
  }

  // 创建一个瑞新咖啡工厂
  const luckinCafeFactory = new LuckinCafeFactory();
  // 瑞新咖啡工厂创建出 美式咖啡
  luckinCafeFactory.createAmericanoCoffee();
  // 瑞新咖啡工厂创建 拿铁咖啡
  luckinCafeFactory.createLatteCoffee();
}
