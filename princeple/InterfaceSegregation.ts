/**
 * 接口隔离原则
 * 一个接口应该尽可能细化，即单个接口应该保持单一职责，不应该出现一个接口出现繁重的任务
 * 可以提高接口被 implemnts 的复用性，实现接口的类不应该实现不要的功能
 * 接口隔离原则的好处： 为了复用，单一职责，降低耦合度
 */

// 这个接口就定义得很垃圾，因为它的任务太繁重了，如果我是一个普通人，我咋会 fly（飞） 呢
interface FunctionDoing {
  run(): void;
  fly(): void;
  swim(): void;
}

// 如下接口细化，就很 nice ~
interface Running {
  run(): void;
}

interface Flying {
  fly(): void;
}

interface Swimming {
  swim(): void;
}

class BadAICar implements FunctionDoing {
  run(): void {
    console.log("bad run");
  }
  fly(): void {
    console.log("bad fly");
  }
  swim(): void {
    console.log("bad swim");
  }
}

class GoodAICar implements Running, Flying, Swimming {
  run(): void {
    console.log("good run");
  }
  fly(): void {
    console.log("good fly");
  }
  swim(): void {
    console.log("good swim");
  }
}

class Car implements Running {
  run(): void {
    console.log("car can runing");
  }
}
