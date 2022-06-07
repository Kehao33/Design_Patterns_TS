/**
 * 多态的意思就是 同一行为的不同表现
 * 比如 猫 和 狗 这两个类 都实现了 Animal 中的 Speak 行为，但是他们的叫声 是不同的，这就是多态啊，baby
 *
 * 实现多态的步骤
 * 1. 定义一个父类或者一个接口或者一个抽象类
 * 2. 其他类 实现 接口 或 继承父类或抽象类
 * 3. 重写接口的方法或者父类或抽象类的方法
 */

// abstract class SpeakClass {
//   abstract speak(): void;
// }

interface SpeakAnimal {
  speak(): void;
}

class Dog implements SpeakAnimal {
  speak() {
    console.log("Wang wang ~");
  }
}

class Cat implements SpeakAnimal {
  speak() {
    console.log("Miao miao ~");
  }
}

const task = (animal: SpeakAnimal) => {
  animal.speak();
};

task(new Dog());
task(new Cat());
