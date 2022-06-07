{
  /**
   * 简单工厂
   * 缺点：
   *  * 如果要获取的类多，则 case 就多（人多最多）
   *  * 不符合开闭原则，新增或删除有一个品种，都要修改switch 语句
   *  在 简单工厂里， 是由 Factory 来创建的产品
   */
  abstract class Coffee {
    constructor(public name: string) {}
  }

  class AmericvanoCoffee extends Coffee {}

  class LatteCoffee extends Coffee {}

  class CapuccinoCoffee extends Coffee {}

  class CafeFactory {
    static order(name: string) {
      //缺点： 如果要创建新的品种咖啡，得新添加 case 语句，这不符合封闭原则
      switch (name) {
        case "Americano":
          return new AmericvanoCoffee("Americno");
        case "LatteCoffee":
          return new LatteCoffee("LatteCoffee");
        case "CapuccinoCoffee":
          return new CapuccinoCoffee("CapuccinoCoffee");
        default:
          return new Error("Not Exist");
      }
    }
  }

  console.log(CafeFactory.order("Americano"));
  console.log(CafeFactory.order("LatteCoffee"));
  console.log(CafeFactory.order("CapuccinoCoffee"));
}
