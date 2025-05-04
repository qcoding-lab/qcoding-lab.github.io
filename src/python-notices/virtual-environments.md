---
title: Pyhton virtual environments
icon: blog
date: 2025-05-04 17:34:53
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

## Python virtual environments

如果没有虚拟环境，两个版本的Djiango就会发生冲突（因为是在同一台Python肯定会冲突）就像一台电脑上只能安装一个版本的微信。

虚拟环境就像给每个项目提供一个小盒子，里面装着所有这个项目需要的东西，而且盒子之间是相互独立的。

### 为什么需要虚拟环境?

- 依赖管理: 不同项目可能需要不同版本的库，虚拟环境可以避免版本冲突。
- 项目隔离: 保持全局环境的感觉整洁，每个项目都有自己的环境，不会互相影响。
- 易于复制: 如果你想在另一台机器或者环境中复制你的项目，虚拟环境可以让这一个过程变得简单，因为你可以很容易地重新创建一个一模一样的环境

### 常见的Python虚拟环境

- venv: 自带的虚拟环境工具，从Python3.3开始内置
- pipenv: `pip` 和`venv`的结合
- conda: 开源包

### 创建虚拟环境venv

在指定文件夹下打开Terminal并且输入命令`python -m venv <name>`

激活环境: `<name>\Scripts\activate`

关闭环境: `deactivate`

查看安装包: `pip list`

### 更改虚拟环境

在pycharm里打开settings>Project>Python Interpreter>Add Interpreter 然后选中虚拟环境

