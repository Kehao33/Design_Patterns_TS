# 设计模式学习

运行本代码的方法：

npm install -g ts-node

ts-node filename.ts

### 面向对象

- 以类和对象作为组织代码的基本单位，并实现封装、抽象、继承、多态四个特性
- 软件开发经历分析、设计和编码三个阶段
  - 面向对象分析（OOA) Object Oriented Analysis
  - 面向对象设计（OOD) Object Oriented Design
  - 面向对象编程（OOP） Object Oriented Programming

#### 抽象（Abstract）

- 抽象主要是隐藏方法的实现，让调用者只关系有哪些功能而不是关系功能的实现
- 抽象可以提高代码的可扩展性和维护性，修改实现不需要改变定义，可以减少代码的改动范围

#### 继承

- 继承的目的是为了复用
- 但是当继承过深的时候，可维护性和可读性就会变差，且子类和父类存在着耦合关系，修改父类的时候，子类会受到影响（所以宁组合、勿继承）

### 封装

定义： 封装就是把数据和方法封装起来
封装的好处：

- 封装的目的是为了减少耦合，不该外部访问的的就不要让外部访问
- 有利于数据的接口权限管理
- 仅暴露有限的必要接口，提高类的易用性
  权限修饰符：
- public ： 共有修饰符，可以在类内部或者类外使用 public 修饰的属性或方法（public 也是默认的权限修饰符）
- protected： 受保护的修饰符，可以在本类和子类中使用 protected 修饰的属性和方法
- private： 私有修饰符，只可以在类内部使用 private 修饰的属性和方法

#### 多态

定义： 多态是指相同的行为 表现得不一样
优点：

- 实现面向接口编程
- 保持子类的开放性和灵活性，可以重写父类中的方法

## 设计原则

### 开闭原则 （Open and closed principle）

- 对扩展开放，对修改关闭
  总结： 修改意味着可能更改之前的实现逻辑，这可能会因为修改而制造出 bug，而扩展意味着可以扩展出新的功能

### 单一职责原则（Single responsibility principle) 比如 lodash 的工具方法

- 一个类或者模块只负责一个职责，如果功能特别复杂就进行拆分
- 单一职责可以降低类的复杂性，提高代码可读性，可维护性
- 当类代码行数过多，方法过多，功能太多，职责太杂的时候就要对类进行拆分
- 拆分不能过度，如果拆分过度就会损失内聚性和维护性

### 里氏替换原则 （Liskov Substitution Principle)

- 所有应用基类的地方必须能透明的使用其子类对象
- 子类能替换掉父类，使用者可能根本就不需要知道是父类还是子类，反之则不行
- 里氏替换原则是开闭原则的实现基础，程序设计的时候尽量使用积累定义及引用，运行时在决定使用哪个子类
- 里式替换原则可以提高代码的复用性，提高代码的可扩展性，也是增加了耦合性
- 相对于多态，这个原则是讲类应该如何设计，子类如果违反了父类的功能则表示违反了里氏替换原则
  总结： 子类能替换父类（尽可能的使用父类或者抽象类)，子类不能违反父类的功能

### 依赖倒转原则（Dependence Inversion Principle)

- 面向接口编程，依赖于抽象而不依赖于具体实现
- 要求我们在程序代码中传递参数时或在关联关系中，尽量引用层次高的抽象层类
- 使用方值关注接口而不关注具体类的实现
  总结： 面向接口编程、面向抽象编程，关注接口而不关注具体类的实现（依赖抽象而不依赖于具体）

当你定义一个类的时候，会得到两个类型：

- 类 的类型
- 实例 的类型 或者是 类的原型 的类型

### 接口隔离原则 （Interface Segregation Priciple)

- 保证定义接口单一独立，避免出现繁杂多任务的接口（单一职责的接口）
- 类之间的依赖关系应该建立在最小的接口上（实现接口的类不应该依赖它不需要的功能接口）
- 接口尽量细化，而接口中的方法应尽量的少
  总结： 接口尽量单一，实现单一职责接口

### 迪米特法则（Law of Demeter)

- 即最少知道原则
- 一个软件实体应该尽可能地少于其他实体发生相互作用
- 迪米特法则的初衷在于降低类之间的耦合度
- 类定义时尽量要实现内聚， 少使用 public 修饰符，尽量使用 private、protected 权限窄的修饰符
  总结： 高内聚低耦合，控制权限，减少关联

### 合成复用原则

- 合成复用原则是通过将已有的的对象纳入新对象中，作为新对象的成员来实现的
- 新对象可以调用已有对象的功能，从而达到复用
- 原则是尽量首先使用组合、聚合的关系，而不是使用继承
  总结： 宁组合、勿继承 （专人做专事，继承的耦合度太高了）

#### 类之间的关系

- 类之间基本关系有： 关联（聚合和组合）、泛化和依赖
- 如果一个类单依赖另一个类，那么他们之间就是单关联，如果彼此依赖，则为相互依赖（双向关联）
- 关联关系包括两种特列：聚合和组合
  - 聚合： 用来表示整体与部分的关系或者 拥有 关系，代表部分的对象可能会被整体拥有，但并不一定会随着整体的消亡而销毁，比如班级和学生
  - 合成、组合 要比聚合的关系强得多，部分与整体的生命周期是一致的，比如人和人的器官

#### 设计原则小总结

- 开闭原则是核心，对修改关闭对扩展开发是程序设计的基石
- 单一职责要求要求我们设计接口和模块功能的时候尽量保证单一性和原子性，修改一条不影响全局和其他模块
- 里氏替换原则 和 依赖倒转 原则要求面向接口和抽象编程，不要依赖具体实现，依赖抽象编程，而不是依赖具体编程

#### 学习好设计原则后

- 可维护性提高了，Bug 更容易更改了
- 可读性 提高了，更容易看懂了
- 可扩展性提高了，更容易添加新功能了
- 灵活性提高了，方法和接口更容易复用了
- 代码更清晰了，一看就知道在干嘛了
- 可复用性提高了
- 可测试性提高了，单元测试和集成测试更高了

## 设计模式

### 工厂模式

##### 简单工厂模式

- 简单工厂模式是由一个工厂对象决定创建出哪一种产品类的实例

##### 工厂方法模式

- 工厂方法模式 Factory Method, 又称为 多态性工厂模式
- 在工厂方法模式中，核心的工厂类不在负责所有的产品的创建，而是将具体创建的工作交给工厂子类去做

##### 抽象工厂模式

- 抽象工厂模式可以向客户端提供一个接口，使客户端在不必指定具体产品的具体的情况下，创建更多产品中的产品对象
- 抽象工厂模式针对的是同一类或同等级产品，而抽象工厂模式针对的是多种类的产品设计
- 系统中有多个产品族，每个具体工厂负责创建同一族但属于不提供产品登记（产品种类）的产品
- 产品族是一组相关或相互依赖的对象
- 系统一次只能消费某一族产品族时，只需要增加新的工厂类即可，无需修改源当代吗；但是如果需要产品族中新增一个新种类的产品时，则所有的工厂类的都需要修改

###### 组成角色

- 抽象工厂： 提供了创建产品的接口，包含多个创建产品的方法，即包含多个类似创建的产品方法
- 具体体工厂： 实现抽象工厂定义的接口，完成某个具体的创建
- 抽象产品： 抽象产品定义，一般有多少抽象产品，抽象工厂中就包含多个创建产品的方法
- 具体产品： 抽象产品的实现类

### 单例模式

单例模式，保证一个类仅有一个实例，并且提供一个访问他的全局访问点；比如系统中只需要一个 modal 弹出框，可以使用单例模式保证 全局唯一

### 适配器模式

适配器模式又称为包装器模式，将一个类的接口转化为另外一个接口，解决类（对象 ）之间不兼容的问题
比如，Mac 电脑使用的充电器是 Type-C 接口，如果你要让其他接口能给 Mac 电脑充电，这个时候就需要一个转接线（这就是适配器的作用）

### 装饰器模式

装饰器模式，就是在不改变其原有的结构和功能为对象添加新功能的模式；不会破坏原有的功能，而在装饰的作用下新增了新的功能，比如人穿上了防晒服之后可以有防晒功能一样，亦或者是买了房子对其进行装修一样

- 装饰器模式比继承更加灵活，可以实现装饰器和被装饰器之间松耦合

#### 装饰器

装饰器是一种特殊的类型声明，他其实就是一个函数，他能够被附加到类声明、方法、属性或参数上，可以修改类的行为，因此装饰器有类装饰器，方法装饰器和属性装饰器；装饰器的写法分为普通装饰器和装饰器工厂

##### 类装饰器

类装饰器在类声明之前声明，用来监控、修改或替换类定义，类装饰器的参数是类的定义或类的构造函数
