/**
 * 单一职责： 明确分工，一个类的功能尽可能单一，不要太杂
 * 并不是拆分的职责越细越好，因为也要符合高内聚
 */

{
  class Product {
    public name?: string;
    public price?: number;
    // 以为一个产品的类别 可能还有其他信息，所以这里是关联其他类
    public category?: Category;

    // 这个方法就不遵循单一职责，因为他意味着可能会更改名字，也可能意味这个更改价格
    // public updateProduct(productName?: string, productPrice?: number) {}

    // 只修改名字，就很符合单一职责
    public updateName(name: string) {
      this.name = name;
    }
  }

  class Category {
    public name?: string;
    public icon?: string;
  }
}
