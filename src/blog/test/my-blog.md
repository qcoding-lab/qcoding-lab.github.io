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

