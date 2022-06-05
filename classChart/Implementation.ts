/**
 * 实现关系 Implementation 一般就是实现某一接口
 * 你有敲代码的行为，而敲代码这一行为对于不同的开发是不一样的
 * 比如： 前端开发的就是 敲代码使用 js 或者 ts 来写的，而后端 可能是使用 java 或者 golang 来写的
 */

// 接口是行为的抽象，是 has 的关系
interface WriteTheCode {
  // 我就问你 能做不能做！
  do(): boolean;
}

class People {
  public name: string | undefined;
  public age: number | undefined;
}

// 前端用 ts 来写代码
export class FrontEnder extends People implements WriteTheCode {
  public name: string | undefined;
  public age: number | undefined;

  do() {
    console.log("fronter use typescript coding!");
    return true;
  }
}

// 后端用 java 来写代码
export class BackEnder extends People implements WriteTheCode {
  public name: string | undefined;
  public age: number | undefined;

  do() {
    console.log("use java coding!");
    return true;
  }
}
