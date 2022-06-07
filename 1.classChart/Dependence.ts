/**
 * 依赖关系： 一个对象依赖于另一个对象， 如人依赖于水（水TM是生命之源）
 * public 公共的 自己和自己的children 以及其他都可以访问的
 */

class Water {}

export class Animal {
  public age: number | undefined;
  public name: string | undefined;
  // 类的依赖关系在代码中的表示是属性关系
  public water: Water | undefined;

  public eat() {
    console.log("eat");
  }

  public drink() {
    console.log("drink");
  }
}
