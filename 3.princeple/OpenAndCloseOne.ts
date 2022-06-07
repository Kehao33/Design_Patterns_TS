{
  // workspace
  /**
   * 开放封闭原则，对修改关闭，对扩展开放
   * 新增需求的时候： 尽量不修改原来的代码, 此文件为了保证我们和上一个文件区分，所以加了一个o_ 前缀
   */
  class Customer {
    // 为了实现 扩展开放原则，这里的 Customer 的构造函数新增一个 discount 的属性
    constructor(public rank: string, public discount: number = 1) {}
  }

  class Product {
    constructor(public name: string, public price: number) {}
    // 不同的客户有不同的价格，普通客户和VIP客户
    cost(customer: Customer) {
      // 针对不同的客户就直接使用价格* this.price 即可
      return this.price * customer.discount;
    }
  }

  const o_product = new Product("computer", 10000);
  const o_member = new Customer("member", 0.8);
  const o_vip = new Customer("vip", 0.6);
  const o_superVip = new Customer("superVip", 0.4);
  const o_normal = new Customer("normal");

  console.log(o_product.cost(o_member));
  console.log(o_product.cost(o_vip));
  console.log(o_product.cost(o_normal));
}
