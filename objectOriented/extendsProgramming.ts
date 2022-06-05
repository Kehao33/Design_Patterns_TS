/**
 * 继承是实现代码逻辑的复用
 * 过渡使用继承或者说继承层次过深会导致代码可读性、可维护性变差
 * 且子类和父类的高度耦合，修改父类的代码会直接影响到子类（有句话是这样说D： 宁组合不继承）
 */

export class Animal {
  constructor(public name: string) {}
  eat() {
    console.log("animal eating");
  }
}

const animal = new Animal("animal");
animal.eat();

class Dog extends Animal {}

const dog = new Dog("dog");
dog.eat();
