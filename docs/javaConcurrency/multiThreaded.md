# 十三、多线程开发良好的实践

给线程起个有意义的名字，这样可以方便找 Bug。

缩小同步范围，从而减少锁争用。例如对于 synchronized，应该尽量使用同步块
而不是同步方法。

多用同步工具少用 wait() 和 notify()。首先，CountDownLatch, CyclicBarrier,
Semaphore 和 Exchanger 这些同步类简化了编码操作，而用 wait() 和 notify() 很难
实现复杂控制流；其次，这些同步类是由最好的企业编写和维护，在后续的 JDK
中还会不断优化和完善。

使用 BlockingQueue 实现生产者消费者问题。

多用并发集合少用同步集合，例如应该使用 ConcurrentHashMap 而不是
Hashtable。

使用本地变量和不可变类来保证线程安全。

使用线程池而不是直接创建线程，这是因为创建线程代价很高，线程池可以有效
地利用有限的线程来启动任务。




