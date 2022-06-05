/**
 * object-oriented 面向对象编程
 * 抽象编程
 */

interface IStorage {
  save(key: string, value: any): void;
  read(key: string): any;
}

class UserInfo {
  public name: string;

  // storage 不管他是怎样的storage，我们抽象有这样的 对象/类 即可
  constructor(name: string, public storage: IStorage) {
    this.name = name;
  }

  save() {
    this.storage.save("userInfo", JSON.stringify(this));
  }

  read() {
    return this.storage.read("userInfo");
  }
}

class LocalStorage implements IStorage {
  save(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  read(key: string) {
    return localStorage.getItem(key);
  }
}

const local = new LocalStorage();
const userInfo = new UserInfo("zhang3", local);
console.log(userInfo.name);
