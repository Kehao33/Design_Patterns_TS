/**
 * 里氏替换原则
 * 尽可能使用父类或者抽象类
 * 任何使用父类的地方都可以使用子类
 * 里氏替换原则： 重点在替换，任何可以传递父类的地方，都可以把子类传递进去
 * 里式替换是一个原则，要求子类不能违反父类的功能和规定/
 */

{
  abstract class AbstractDrink {
    abstract getPrice(): number;
  }

  // 可口可乐
  class CocaCola extends AbstractDrink {
    getPrice(): number {
      return 3;
    }
  }

  // 雪碧
  class Sprite extends AbstractDrink {
    getPrice(): number {
      return 4;
    }
  }

  // 芬达饮料
  class Fanta extends AbstractDrink {
    getPrice(): number {
      return 5;
    }
  }

  class Customer {
    // 尽可能使用父类或者抽象类
    drink(abstractDrink: AbstractDrink) {
      // 这里的 abstractDrink 也是可以有具体的 子类替换掉（即子类能替换父类）
      console.log("abstractDrink>>>", abstractDrink);
      console.log("花费: ", abstractDrink.getPrice());
    }
  }

  const customer1 = new Customer();
  customer1.drink(new Sprite());
  customer1.drink(new Fanta());
  customer1.drink(new CocaCola());
}
