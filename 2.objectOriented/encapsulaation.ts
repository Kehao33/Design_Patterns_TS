/**
 * 封装的目的就是为了 保证权限的安全，不让外部访问私有数据，可以保护类的隐私
 * 封装的目的也是为了 对实现隐藏
 * 能不给外界暴露的就不要暴露
 */

class Animal {
  // public 中是指公有屬性，此属性可以在本类、其他类、子类中使用
  public name: string;
  // protected 受保护的属性，此屬性可以在本类和子类中访问，其他类不能访问
  protected age: number;
  // private 私有的，只有在本类类部才可以访问，子类和其他类都无法访问
  private weight: number;

  constructor(name: string, age: number, weight: number) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  getWeight() {
    return this.weight;
  }
}

class Person extends Animal {
  // balance 是属于 Person 的属性，而不是 Animal 的属性
  private balance: number;

  constructor(name: string, age: number, weight: number, balance: number) {
    super(name, age, weight);
    this.balance = balance;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    // Property 'weight' is private and only accessible within class 'Animal'.ts(2341)
    // return this.weight;
    // 可以提供过 super 调用父类的方法
    return super.getWeight();
  }
}

const p1 = new Person("jake", 23, 110, 1000000000);
p1.name;
p1.getAge();
p1.getWeight();
