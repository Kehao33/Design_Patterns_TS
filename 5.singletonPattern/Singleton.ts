/**
 * 单例模式
 * 一个类只有一个 实例，这就叫做单例模式，见名知意把!
 * 
 * 一般也用单例模式来创建一个缓存实例
 * 可以查看的单例的源码 ： redux/createStore 方法
 */

class WindowOnlyOne {
  private static instance: WindowOnlyOne;
  private constructor() {}

  public static getInstance() {
    if (!WindowOnlyOne.instance) {
      WindowOnlyOne.instance = new WindowOnlyOne();
    }

    return WindowOnlyOne.instance;
  }
}

const w1 = WindowOnlyOne.getInstance();
const w2 = WindowOnlyOne.getInstance();
console.log(w1 === w1);
