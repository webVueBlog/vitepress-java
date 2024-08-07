# 十一、线程安全

线程安全有以下几种实现方式：

> 不可变

不可变（Immutable）的对象一定是线程安全的，不需要再采取任何的线程安全保障
措施。只要一个不可变的对象被正确地构建出来，永远也不会看到它在多个线程之中
处于不一致的状态。多线程环境下，应当尽量使对象成为不可变，来满足线程安全。

不可变的类型：

* final 关键字修饰的基本数据类型
* String
* 枚举类型
* Number 部分子类，如 Long 和 Double 等数值包装类型，BigInteger 和 BigDecimal 等大数据类型。但同为 Number 的原子类 AtomicInteger 和 AtomicLong 则是可变 的。

![img_77.png](img_77.png)

![img_78.png](img_78.png)

Collections.unmodifiableXXX() 先对原始的集合进行拷贝，需要对集合进行修改的方
法都直接抛出异常

![img_79.png](img_79.png)

> 互斥同步

synchronized 和 ReentrantLock。

> 非阻塞同步

互斥同步最主要的问题就是线程阻塞和唤醒所带来的性能问题，因此这种同步也称为
阻塞同步。

互斥同步属于一种悲观的并发策略，总是认为只要不去做正确的同步措施，那就肯定
会出现问题。无论共享数据是否真的会出现竞争，它都要进行加锁（这里讨论的是概
念模型，实际上虚拟机会优化掉很大一部分不必要的加锁）、用户态核心态转换、维
护锁计数器和检查是否有被阻塞的线程需要唤醒等操作。

随着硬件指令集的发展，我们可以使用基于冲突检测的乐观并发策略：先进行操作，
如果没有其它线程争用共享数据，那操作就成功了，否则采取补偿措施（不断地重
试，直到成功为止）。这种乐观的并发策略的许多实现都不需要将线程阻塞，因此这
种同步操作称为非阻塞同步。

## 1. CAS

乐观锁需要操作和冲突检测这两个步骤具备原子性，这里就不能再使用互斥同步来保
证了，只能靠硬件来完成。硬件支持的原子性操作最典型的是：比较并交换
（Compare-and-Swap，CAS）。CAS 指令需要有 3 个操作数，分别是内存地址 V、
旧的预期值 A 和新值 B。当执行操作时，只有当 V 的值等于 A，才将 V 的值更新为
B。

## 2. AtomicInteger

J.U.C 包里面的整数原子类 AtomicInteger 的方法调用了 Unsafe 类的 CAS 操作。
以下代码使用了 AtomicInteger 执行了自增的操作。

![img_80.png](img_80.png)

以下代码是 incrementAndGet() 的源码，它调用了 Unsafe 的 getAndAddInt() 。

![img_81.png](img_81.png)

以下代码是 getAndAddInt() 源码，var1 指示对象内存地址，var2 指示该字段相对对
象内存地址的偏移，var4 指示操作需要加的数值，这里为 1。通过 getIntVolatile(var1,
var2) 得到旧的预期值，通过调用 compareAndSwapInt() 来进行 CAS 比较，如果该字
段内存地址中的值等于 var5，那么就更新内存地址为 var1+var2 的变量为
var5+var4。

可以看到 getAndAddInt() 在一个循环中进行，发生冲突的做法是不断的进行重试。

![img_82.png](img_82.png)

## 3. ABA

如果一个变量初次读取的时候是 A 值，它的值被改成了 B，后来又被改回为 A，那
CAS 操作就会误认为它从来没有被改变过。

J.U.C 包提供了一个带有标记的原子引用类 AtomicStampedReference 来解决这个问
题，它可以通过控制变量值的版本来保证 CAS 的正确性。大部分情况下 ABA 问题
不会影响程序并发的正确性，如果需要解决 ABA 问题，改用传统的互斥同步可能会
比原子类更高效。

> 无同步方案

要保证线程安全，并不是一定就要进行同步。如果一个方法本来就不涉及共享数据，
那它自然就无须任何同步措施去保证正确性。

## 1. 栈封闭

多个线程访问同一个方法的局部变量时，不会出现线程安全问题，因为局部变量存储
在虚拟机栈中，属于线程私有的

![img_83.png](img_83.png)

![img_84.png](img_84.png)

![img_85.png](img_85.png)

## 2. 线程本地存储（Thread Local Storage）

如果一段代码中所需要的数据必须与其他代码共享，那就看看这些共享数据的代码是
否能保证在同一个线程中执行。如果能保证，我们就可以把共享数据的可见范围限制
在同一个线程之内，这样，无须同步也能保证线程之间不出现数据争用的问题。

符合这种特点的应用并不少见，大部分使用消费队列的架构模式（如“生产者-消费
者”模式）都会将产品的消费过程尽量在一个线程中消费完。其中最重要的一个应用
实例就是经典 Web 交互模型中的“一个请求对应一个服务器线程”（Thread-perRequest）的处理方式，这种处理方式的广泛应用使得很多 Web 服务端应用都可以使
用线程本地存储来解决线程安全问题。

可以使用 java.lang.ThreadLocal 类来实现线程本地存储功能。

对于以下代码，thread1 中设置 threadLocal 为 1，而 thread2 设置 threadLocal 为 2。
过了一段时间之后，thread1 读取 threadLocal 依然是 1，不受 thread2 的影响。

![img_86.png](img_86.png)

```angular2html
1
```

为了理解 ThreadLocal，先看以下代码：

![img_87.png](img_87.png)

![img_88.png](img_88.png)

每个 Thread 都有一个 ThreadLocal.ThreadLocalMap 对象。

![img_89.png](img_89.png)

当调用一个 ThreadLocal 的 set(T value) 方法时，先得到当前线程的 ThreadLocalMap
对象，然后将 ThreadLocal->value 键值对插入到该 Map 中。

![img_90.png](img_90.png)

get() 方法类似。

![img_91.png](img_91.png)

ThreadLocal 从理论上讲并不是用来解决多线程并发问题的，因为根本不存在多线程
竞争。

在一些场景 (尤其是使用线程池) 下，由于 ThreadLocal.ThreadLocalMap 的底层数据
结构导致 ThreadLocal 有内存泄漏的情况，应该尽可能在每次使用 ThreadLocal 后手
动调用 remove()，以避免出现 ThreadLocal 经典的内存泄漏甚至是造成自身业务混乱
的风险

## 3. 可重入代码（Reentrant Code）

这种代码也叫做纯代码（Pure Code），可以在代码执行的任何时刻中断它，转而去
执行另外一段代码（包括递归调用它本身），而在控制权返回后，原来的程序不会出
现任何错误。

可重入代码有一些共同的特征，例如不依赖存储在堆上的数据和公用的系统资源、用
到的状态量都由参数中传入、不调用非可重入的方法等。




