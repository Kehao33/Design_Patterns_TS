{
  /**
   * 类之间的关系
   * 关联（聚合和组合）、泛化 和依赖
   * 聚合： 两者之间的生命周期并不一定相同（如班级和学生）
   * 组合： 两者之间的生命周期相同 （如人和器官）
   */

  class Categroy {
    // 如果两个类之间相互关联，那么就是双向关联
    public products?: Product[];
  }

  class Product {
    // 实例属性是一个新的类，那么就是关联关系
    constructor(public catgegory: Categroy) {}
  }

  class Class {
    // 学生聚合在一起了就成为了班级
    constructor(public students: Student[]) {}
  }

  class Student {
    constructor(public clazz: Class) {}
  }

  class Heart {}

  class Person {
    constructor(public heart: Heart) {}
  }
}
