# 二、容器中的设计模式

## 迭代器模式

![img_2.png](img_2.png)

Collection 继承了 Iterable 接口，其中的 iterator() 方法能够产生一个 Iterator 对象，通
过这个对象就可以迭代遍历 Collection 中的元素。

从 JDK 1.5 之后可以使用 foreach 方法来遍历实现了 Iterable 接口的聚合对象。

![img_3.png](img_3.png)

## 适配器模式


`java.util.Arrays#asList()` 可以把数组类型转换为 List 类型。

```angular2html
@SafeVarargs
public static <T> List<T> asList(T... a)
```

应该注意的是 asList() 的参数为泛型的变长参数，不能使用基本类型数组作为参数，
只能使用相应的包装类型数组。

```angular2html
Integer[] arr = {1, 2, 3};
List list = Arrays.asList(arr)
```

也可以使用以下方式调用 asList()：

```angular2html
List list = Arrays.asList(1, 2, 3);

```

