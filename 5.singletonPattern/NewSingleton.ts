/**
 * 透明的定义我们的单例
 *
 */

const NewSingleton = (function () {
  let newIntance: any;

  return function (this: any) {
    console.log("this", this);

    if (newIntance) {
      return newIntance;
    } else {
      return (newIntance = this);
    }
  };
})();

const newSingle1 = new (NewSingleton as any)();
const newSingle2 = new (NewSingleton as any)();
console.log(newSingle1 === newSingle2);
