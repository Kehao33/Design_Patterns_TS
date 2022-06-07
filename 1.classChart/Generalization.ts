/**
 * Generalization 泛化： 就是说 一个对象属于某一个大类，但是大类不应定是这个对象
 * 比如 你是人，但是人不是你，此时 “你”就是一个对象，而“人”就是一个大类，一般泛化是继承的关系，你懂了吗？
 *
 */

import { Animal } from "./Dependence";

export class Brid extends Animal {
  public swing: number | undefined;

  public fly() {
    console.log("brid can fly");
  }
}
