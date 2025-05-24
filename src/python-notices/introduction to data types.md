---
title: 初始数据类型
icon: blog
date: 2025-05-18 17:49:22
author: qcoding
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

## 初始数据类型

## 1. 数字型：int, float 

```python
int_num = 1
float_num = 1.2
t = type(int_num)
f = type(float_num)
print(int_num)
print("int_num type is:", type(int_num))
print(float_num)
print("float_num type is:", type(float_num))

''' output:
1
int_num type is: <class 'int'>
1.2
float_num type is: <class 'float'>
'''
```

## 2. 字符串string

```python
string = "Hello world"
t = type(string)
print(string)
print("string type is:", type(string))

''' output:
Hello world
string type is: <class 'str'>
'''
```

#### 特点

1. 有序性
2. 不可变性( `string[0] = "a" # TypeError: 'str' object does not support item assignment`)
3. 任意字符都可以写进去

## 3. 列表

```python
lst = ['abc', 1, 1.1, [12, "efg"], True]
t = type(lst)
print(lst)
print("lst type is:", t)
'''
output:
['abc', 1, 1.1, [12, 'efg'], True]
lst type is: <class 'list'>
'''
```

#### 特点

1. 有序性
2. 可变性
3. 任意Pythonleix都可以写进去![image-20250518122027044](./introduction%20to%20data%20types.assets/image-20250518122027044.png)
