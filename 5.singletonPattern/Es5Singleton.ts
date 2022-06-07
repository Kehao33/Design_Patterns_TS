// 使用 ES 实现单例模式
// 这种方法的确定是必须使用 getInstance 来获取我们的实例

function Es5Singleton() {}

Es5Singleton.prototype.hello = function () {
  console.log("hello");
};

Es5Singleton.getInstance = (() => {
  let instance: any;

  return () => {
    if (!instance) {
      instance = new (Es5Singleton as any)();
    }

    return instance;
  };
})();

const es51 = Es5Singleton.getInstance();
const es52 = Es5Singleton.getInstance();
console.log(es51 === es52);
