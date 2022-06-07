// 单例与构建过程的分离
interface SplitSingleton {
  new (): SplitSingleton;
}

function SplitSingleton() {}

SplitSingleton.prototype.hello = function () {
  console.log("hello");
};

const createInstance = (function () {
  let instance: SplitSingleton;
  return function () {
    if (!instance) {
      instance = new (SplitSingleton as any)();
    }

    return instance;
  };
})();

const split1 = createInstance();
const split2 = createInstance();
