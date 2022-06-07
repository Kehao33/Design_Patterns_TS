/**
 * 迪米特法则： 最少知道原则
 * 目的是为了让类之间实现高内聚，低耦合，控制权限
 */

// 销售员类
class Salesman {
  constructor(public name: string) {}

  // 销售员会销售，没毛病！
  sale() {
    console.log(this.name + " sale product");
  }
}

// 销售经理
class SaleManager {
  private salesmen: Salesman[] = [new Salesman("zhang3"), new Salesman("li4")];

  sale() {
    // 销售经理的销售就是通知他收下的销售员开始销售
    this.salesmen.forEach((salesman) => salesman.sale());
  }
}

// CEO
class CEO {
  private saleManager: SaleManager = new SaleManager();

  sale() {
    // CEO 类的销售就是通知某个销售经理去销售，注意，这里不是直接去通知销售员销售
    this.saleManager.sale();
  }
}

const ceo = new CEO();
ceo.sale();
