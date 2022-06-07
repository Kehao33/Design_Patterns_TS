/**
 * 适配器模式，用来解决兼容的问题
 * 比如 我们的插座提供的电源是 220 v 的，我们需要一个适配器来将 220 v 的电源转化为电脑可用的 24 v
 */

// Socket 是需要被适配的类
class Socket {
  output() {
    return "220V";
  }
}

abstract class Power {
  // 定义一个抽象类，这个提供一个充电方法
  abstract charge(): string;
}

class PowerAdaptor extends Power {
  constructor(public socket: Socket) {
    super();
  }

  charge(): string {
    return `${this.socket.output()} 被转化为 24V 的可用充电电源`;
  }
}

// 得到电源适配器
const powerAdaptor = new PowerAdaptor(new Socket());
// 使用电源适配器提供的充电行为来充电
console.log(powerAdaptor.charge());
;
