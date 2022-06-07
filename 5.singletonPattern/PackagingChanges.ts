/**
 * 封装变化
 */

interface PackagingChanges {
  new (): PackagingChanges;
  hello: any;
}

function PackagingChanges() {}

PackagingChanges.prototype.hello = function () {
  console.log("hello");
};

// 希望 createInstan 可以创建任何类型的实例
const createInstan = function (Constructor: any) {
  let instance: any;

  return function (this: any) {
    if (!instance) {
      Constructor.apply(this, arguments);
      // 保证 this.__proto__ = Constructor.prototype
      Object.setPrototypeOf(this, Constructor.prototype);
      instance = this;
    }

    return instance;
  };
};

const SingleInstance = createInstan(PackagingChanges);
const inst1 = new (SingleInstance as any)();
const inst2 = new (SingleInstance as any)();
console.log(inst1 === inst2);
