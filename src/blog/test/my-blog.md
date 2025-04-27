---
title: Vuepress text editing guide
icon: blog
date: 2025-04-13 17:12:23
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
changelog: true
---

## 1. 标题编写

::: md-demo 演示

# Title 1

## Title2

### Title3

#### Title4

##### Title5

###### Title6

> 文章中不需要标题一，一般从标题二开始就行(不需要标题一的格式‘、 title’ 标题一会被识别为文章标题二不显示出来。)

::: 

## 2. 代码块

::: md-demo 代码块添加演示

1. Markdown 语法

```markdown
# Title1
## Title2
### Title3
#### Title4
##### Title5
###### Title6
```

2. python code

``````python
import python

def number_game():
    print("欢迎来到猜数字游戏！我已经想好了一个 1 到 100 之间的数字，你有 7 次机会来猜它。")
    num = random.randint(1, 100)
    # print(num)
    count = 0
    limit = 7
    answer = False
    while count < limit:
        guess = input()
        if not guess.isdigit():
            print('无效输入，请输入 1-100 之间的整数！')
            continue
        guess = int(guess)
        if guess < 1 or guess > 100:
            print("数字超出范围，请输入 1-100 之间的整数！")
            continue
        else:
            count += 1



        if guess < num:
            print("太小了，请再试试！")
        elif guess > num:
            print("太大了，请再试试！")
        elif guess == num:
            print("恭喜你，猜对了！")
            answer = True
            break

    if not answer:
        print(f'很遗憾，你已经用完所有机会！正确答案是: {num}')

print("game starts")
number_game()
``````

3. java code

```java
public class HelloWorld {
    public static void main(String[] args) {
        // 输出 Hello Bornforthis 到控制台
        System.out.println("Hello, Bornforthis!");
    }
}
```

:::

## 3. 链接插入

::: md-demo 链接插入演示

`[link name](url)`

[qcoding-lab](https://qcoding-lab.github.io/)

:::

## 4. 图片插入

::: md-demo 插入图片演示

`[图片描述])(图片链接地址)`

![image-20250413120516576](./my-blog.assets/image-20250413120516576.png)



:::

## 5. 有序序列

::: md-demo

1. Adam
2. Berta
3. Christian
     	1. Hello, I’m Mr. Q
4. Diana

:::

## 6. 无序序列

::: md-demo 

- Burger
    - Hamburger
    - Cheeseburger
- Döner

:::

## 7. 数学公式

7.1 基础演示

::: md-demo

$$x, y, z$$

可以通过在 $ 字符之前使用或在 $ 字符前后添加空格来完成转义:
方程,
a = 1 是一个 Tex 8 =1和$a=$不是。
Python一对一转

:::

7.2 行内语法

::: md-demo

Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.

:::

7.3 显示语法

::: md-demo
$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$
:::

-  [TeX 教程](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes)

- [Tex 速查表](https://mdit-plugins.github.io/zh/tex.html#tex-tutorial)

## 8. 任务列表

::: md-demo

- [x] Plan A
- [ ] Plan B

:::

## 9. 选项卡

:::: md-demo

::: tabs

@tab Math

$e^{i\pi}+1=0$

@tab practice

Nothing

@tab More

There is nothing more to explain

:::

---

::: tabs#travel

@tab PlanA#Peking

Go to Peking

@tab PlanB#Shanghai

Go to Shanghai

:::

---

::: tabs#travel

@tab Peking

- 天安门
- 朝阳区
- 人民大会堂

@tab Shanghai

- 上海滩
- 东方明珠

::::

## 10. 代码块分组

:::: md-demo

::: code-tabs

@tab code 1

``````python
print('hello bornforthis')
``````

@tab code 2

``````Python
a = 1
b = 1
print(a + b)
``````



@tab code 3

``````python
a = b = 1
print(a)
print(b)
``````



:::

---

::: code-tabs#shell

@tab Python

```python
a, b, c = 1, 2, 3
```

@tab pnpm

``````bash
pnpm add -D 组件名称
``````

:::

---

::: code-tabs#shell

@tab Python

``````python
print(a, b, c)
``````

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

::: 



::::

## 11. 行内代码

::: md-demo

pnpm install xxxx

Test: `pnpm install xxxx`

:::

## 12. 提示容器

:::: md-demo

::: important

ACHTUNG WICHTIG!

:::

::: info

DURCHSAGE

:::

::: note

Notitzen

:::

::: tip

:::

::: warning

:::

::: caution

:::

::: details

HAHA! Umsonst gedrückt

:::

::::

## 13. 标记

::: md-demo

Hello ==world==

:::

## 14. 剧透

::: md-demo

Hello !!world!!

:::

## 15. 自定义对齐

:::: md-demo

::: left

Text-align: left

:::

::: center

Text-Align: center

:::

::: right

Text-align: right

:::

::::

## 16. 文章加密

Open: theme.ts

```typescript
encrypt: {
    config: {
        // 这会加密整个 guide 目录，并且两个密码都是可用的
        "/guide/": ["1234", "5678"],
        // 这只会加密 /config/page.html
        "/config/page.html": ["1234", "1234343"],
    }
}
```

