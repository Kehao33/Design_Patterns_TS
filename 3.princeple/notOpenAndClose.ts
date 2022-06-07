/**
 * 开放封闭原则，对修改关闭，对扩展开放
 * 新增需求的时候： 尽量不修改原来的代码
 */
class Customer {
  constructor(public rank: string) {}
}

class Product {
  constructor(public name: string, public price: number) {}
  // 不同的客户有不同的价格，普通客户和VIP客户
  cost(customer: Customer) {
    // 如果 新的功能需要加一个 superVip 然后 得到 更低的花费，这个时候就不得不新增一个case（这便违反了开闭原则）
    switch (customer.rank) {
      case "member":
        return this.price * 0.8;
      case "vip":
        return this.price * 0.6;
      default:
        return this.price;
    }
  }
}

const product = new Product("computer", 10000);
const member = new Customer("member");
const vip = new Customer("vip");
const superVip = new Customer("superVip");
const normal = new Customer("normal");

console.log(product.cost(member));
console.log(product.cost(vip));
console.log(product.cost(normal));
