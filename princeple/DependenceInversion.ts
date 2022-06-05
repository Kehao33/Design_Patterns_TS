/**
 * 依赖倒置原则
 * 依赖抽象，而不是依赖具体的实现
 * demo 说明： 比如一个 单身汉 为了找女朋友，
 * 那么他应该是面向抽象去定义一个 Girlfriend ，然后传递 具体的 美女即可
 * 依赖抽象去找女朋友，而不是直接去找一个具体的女朋友（这样不利于扩展）
 */

interface Girlfriend {
  age: number;
  height: number;
  cook(): void;
}

class WangXinLin implements Girlfriend {
  age: number = 23;
  height: number = 177;
  cook() {
    console.log("煮面");
  }
}

class HaanMeimei implements Girlfriend {
  age: number = 32;
  height: number = 170;
  cook() {
    console.log("煮粥");
  }
}

class SingleDog {
  constructor(public girlfriend: Girlfriend) {}
}

const zhang3 = new SingleDog(new WangXinLin());
zhang3.girlfriend.cook();

const li4 = new SingleDog(new HaanMeimei());
li4.girlfriend.cook();
