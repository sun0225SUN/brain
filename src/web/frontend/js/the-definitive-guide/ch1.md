---
title: JavaScript 简介
icon: post
order: 1
author: 小孙同学
date: 2023-08-20
category:
  - JavaScript
---

::: tip 本文内容在《JavaScript 权威指南（原书第七版）》的基础上，融入了一些我个人的理解、思考与总结。
:::

<iframe
  :src="$withBase('assets/markmap/js/the-definitive-guide/ch01.html')"
  width="100%"
  height="400"
  frameborder="0"
  scrolling="No"
  leftmargin="0"
  topmargin="0"
/>

## 1.1 你好 Javascript

### 1.1.1 JavaScript 的名字

JavaScript 是 Netscape 公司在 Web 诞生初期创造的。

严格来讲，JavaScript 是经 Sun Microsystems（现 Oracle）公司授权使用的一个商标，用于描述 Netscape （现 Mozilla）公司对这门语言的实现。

Netscape 公司将这门语言提交给欧洲计算机制造商协会（ECMA）进行标准化，但由于商标问题，这门语言的标准化版本只能使用一个较为尴尬的名字——“ECMAScript”。

实际上，每个人都称这门语言为 JavaScript。

### 1.1.2 JavaScript 的版本

2010 年以来，几乎所有的浏览器都支持 ECMAScript 标准的第 5 版。

::: warning 本书将以 ES5 作为兼容性基线，不再讨论该语言的早期版本。
:::

ES6 发布于 2015 年，增加了一些新特性，使 JavaScript 从一种脚本语言变成了一种严肃的、适用于大规模软件工程的通用语言。

自 ES6 以来，ECMAScript 规范开始以每年发布一次为基调，语言的版本也以年份来标识（ES2016、ES2017...ES2022、ES2023）。

随着 JavaScript 的发展，语言设计者试图纠正 JavaScript 早期版本（ES5 之前）存在的缺陷。但为了保持向后兼容性，无论一个特性的问题有多严重，也不能将其删除。

不过，在 ES5 及其以后的版本中，程序可以选择使用 JavaScript 的严格模式，在这种模式下，一些早期的语言错误会得到纠正。在 ES6 及以后版本中，使用新的语言特性通常会隐式地调用严格模式。

### 1.1.3 JavaScript 的模式

每种语言都必须有一个平台或标准库来执行基本的输入和输出之类的操作。

JavaScript 核心定义了一个极小的 API 用来处理数字、文本、数组、集合、映射等，但其并不包括任何输入和输出功能。输入和输出（以及更复杂的特性，如网络、存储和图形）由嵌入 JavaScript 的“宿主”负责。

JavaScript 的原始宿主环境是一个 Web 浏览器，也是 JavaScript 代码最常见的执行环境。浏览器允许 JavaScript 代码通过发送 HTTP 请求从用户的鼠标和键盘获取输入，允许 JavaScript 代码用 HTML 和 CSS 向用户显示输出。

2010 年以后，JavaScript 代码又有了一个新的宿主环境——Node。

与限制 JavaScript 只能使用浏览器提供的 API 不同，Node 允许 JavaScript 访问整个操作系统，允许 JavaScript 程序读写文件，通过网络**发送和接收数据**，以及**发送和处理 HTTP 请求**。

Node 是实现 Web 服务器的常用选择，也是编写简单实用程序脚本的方便工具，可以作为 shell 脚本的替代。

## 1.2 探索 JavaScript

在学习一门新的编程语言时，尝试运行书中的代码是很重要的。

### 1.2.1 DevTools

尝试几行 JavaScript 代码的最简单方式就是打开浏览器的 Web 开发者工具（按 F12、Ctrl-Shift-I 或 Command-Option-I），然后选择 Console (控制台)选项卡。

之后便可以在提示符后输入代码，并查看结果。

![](https://files.sunguoqi.com/brain-images/202309080331192.png)

### 1.2.2 Node

另一种尝试 JavaScript 代码的方法是从 [https://nodejs.org](https://nodejs.org) 下载并安装 Node。

安装完 Node 之后，打开终端，输入 `node` 来开始一个交互式的 JavaScript 会话:

```shell
# 添加空行纯属为了排版好看:)
$ node
Welcome to Node.js v18.16.1.
Type ".help" for more information.
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL

> let x = 2, y = 3;
undefined

> x + y
5

> (x === 2) && (y === 3)
true

> (x > 3) || (y < 3)
false
```

### 1.2.3 文本编辑器

当你需要尝试更长的代码块时，这种以行为单位的交互环境可能就不适合了，此时你需要安装一个文本编辑器，比如 [Visual Studio Code](https://code.visualstudio.com/)。

你可以在文本编辑器中写完一段代码，然后将其复制到浏览器控制台或 Node 会话中运行。

或者你可以将你的代码保存到一个文件中（扩展名为.js），然后用 Node 运行该 JavaScript 代码文件:

```sh
$ node snippet.js
```

## 1.3 JavaScript 之旅

本节内容通过代码示例对 JavaScript 语言做一个简单介绍。在本章之后，我们将深入到 JavaScript 的底层:

### 1.3.1 变量

第 2 章介绍了 JavaScript 注释、分号和 Unicode 字符集等内容。

第 3 章介绍了 JavaScript 变量以及可以赋给这些变量的值。

下面是一些示例代码，演示这两章的重点内容：

```js
// 双斜杠后面的这些文字都是注释。
// 一定要认真阅读这些注释，注释是对JavaScript代码的解读。

// 变量是一个代表值的名字
// 变量要使用 let 关键字声明
let x; // 声明一个名为 x 的变量。

// 可以使用一个等号为变量赋值
x = 0; // 现在变量x的值就是0
x; // => 0: 变量求值的结果就是它的值

// JavaScript 支持几种不同的值
x = 1; // 数值
x = 0.01; // 数值可以是整数或任意实数
x = "hello world"; // 文本字符串包含在引号中
// prettier-ignore
x = 'JavaScript'; // 单引号也用于界定字符串
x = true; // 布尔值
x = false; // 另一个布尔值
x = null; // null 是一个特殊的值，意思是没有值
x = undefined; // undefined 是另外一个特殊的值，和 null 类似
```

### 1.3.2 数组和对象

JavaScript 程序可以操作的另外两种非常重要的类型是对象和数组。

这些是第 6 章和第 7 章的主题，但它们非常重要，在你读到这些章节之前，你会多次看到它们

```js
// 一些注释以箭头（=>）开头，意为这行代码产生的值，

// 对象是 JavaScript 最重要的数据类型
// 对象是一个名/值对的集合，或者一个字符串到值的映射
let book = {
  // 对象包含在一对大括号中
  topic: "JavaScript", // 属性"topic"的值是"JavaScript"
  edition: 7, // 属性 "edition" 的值是 7
};

// 使用 . 或 []访问对象的属性值
book.topic; // => "JavaScript"
book["edition"]; // => 7: 另一种访问属性值的方式
book.author = "Flanagan"; // 通过赋值创建新属性
book.contents = {}; // {} 是一个没有属性的空对象

// 使用 (ES2020) ?.条件式访问属性:
book.contents?.ch01?.sect1; // => undefined: book.contents 没有 ch01 属性.

// JavaScript 同样支持值的数组 (数值索引的列表) of values:
let primes = [2, 3, 5, 7]; //  包含4个值的数组，[ 和 ]是定界符.
primes[0]; // => 2: 数组的第一个元素 (索引为0)
primes.length; // => 4: 数组包含多少个元素
primes[primes.length - 1]; // => 7: 数组的最后一个元素
primes[4] = 9; // 通过赋值添加新元素
primes[4] = 11; // 或者通过赋值修改已有元素
let empty = []; // [] 是一个没有元素的空数组
empty.length; // => 0

// 数组和对象可以保存另一个数组和对象
let points = [
  // 一个包含两个元素的数组
  { x: 0, y: 0 }, // 每个元素都是一个对象
  { x: 1, y: 1 },
];
let data = {
  // 一个对象包含两个属性
  trial1: [
    [1, 2],
    [3, 4],
  ], // 每个属性的值都是一个数组
  trial2: [
    [2, 3],
    [4, 5],
  ],
};
```

这里演示的在方括号内列出数组元素或在花括号内将对象属性名映射到属性值的语法称为**初始化表达式**，它只是第 4 章的主题之一。

表达式是 JavaScript 的一个短语，可以计算它来产生一个值。

在 JavaScript 中形成表达式最常见的方法之一是使用运算符：

<!-- prettier-ignore-start -->
```js
// 操作符用于操作值（操作数）以产生新的值
// 算数操作符是最简单的操作符
3 + 2; // => 5: 加
3 - 2; // => 1: 减
3 * 2; // => 6: 乘
3 / 2; // => 1.5: 除
points[1].x - points[0].x; // => 1: 更复杂的操作数也可以
"3" + "2"; // => "32": + 用于计算数值加法或拼接字符串

// JavaScript 定义了一些简写的算数操作符
let count = 0; // 定义变量
count++; // 递增变量
count--; // 递减变量
count += 2; // 加 2: 等价于 count = count + 2;
count *= 3; // 乘 3: 等价于 count = count * 3;
count; // => 6: 变量名也是表达式.

// 相等和关系操作符测试两个值是否相等、不等
// 小于，大于等等，它们求值为true，false
let x = 2, y = 3; // 这里的 = 用于赋值, 不是测试相等
x === y; // => false: 相等操作符
x !== y; // => true: 不等操作符
x < y; // => true: 小于操作符
x <= y; // => true: 小于或等于操作符
x > y; // => false: 大于操作符
x >= y; // => false: 大于或等于操作符
"two" === "three"; // => false: 两个字符串不相同
"two" > "three"; // => true: "tw" 按字母顺序表 "th"
false === x > y; // => true: false 等于 false

// 逻辑操作符组合或反转布尔值
(x === 2) && (y === 3) // => true: 两个比较都为true，&&是逻辑与

(x > 3) || y < 3; // => false: 两个比较都不是true || 逻辑或

!(x === y); // => true: !用于反转布尔值
```
<!-- prettier-ignore-end -->

如果 JavaScript 表达式像短语，那么 JavaScript 语句就像完整的句子。这部分是第 5 章的主题。

粗略地说，表达式不做任何事情只计算一个值：**它不以任何方式改变程序状态。**另一方面，语句没有值，但是它们可以改变状态。您已经在上面看到了变量声明和赋值语句。语句的另一大类是控制结构，比如条件语句和循环。在介绍函数之后，您将看到下面的示例。

### 1.3.3 函数

函数是一个已命名和参数化的 JavaScript 代码块，您只定义一次，然后可以反复调用它。

函数直到第 8 章才正式介绍，但就像对象和数组一样，在进入这一章之前，您将多次看到它们。下面是一些简单的例子：

```js
// 函数是可以调用的有参数的JavaScript代码块
function plus1(x) {
  // 定义一个名为plus，参数为x的函数，
  return x + 1; // 返回一个比传入值大1的值
}

plus1(y); // => 4: y 是 3, 因此这次调用返回 3+1

let square = function (x) {
  // 函数也是值，可以赋给变量
  return x * x; // 计算函数的值
};

square(plus1(y)); // => 16: 在一个表达式中调用两个函数
```

在 ES6 及以后版本中，有一种用于定义函数的快捷语法。

这种简洁的语法使用 => 将参数列表与函数体分开，因此以这种方式定义的函数称为**箭头函数**。

当您希望将一个未命名的函数作为参数传递给另一个函数时，最常用的是箭头函数。前面的代码用箭头函数重写后如下：

```js
const plus1 = (x) => x + 1; // 输入x映射为输出x+1
const square = (x) => x * x; // 输入x映射为x*x
plus1(y); // => 4: 函数调用相同
square(plus1(y)); // => 16
```

在通过对象使用函数时，我们称之为方法。

```js
// 在把函数赋值给对象的属性时，我们称之为“方法”
let a = []; // 创建一个空数组
a.push(1, 2, 3); //  使用 push() 给数组添加一个元素
a.reverse(); // 使用 reverse 方法对元素进行排序

// 我们也可以定义自己的方法，此时 this 关键字引用的是方法所在的对象，也就是前面定义的数组 points
points.dist = function () {
  // 定义一个方法计算两点间的距离
  let p1 = this[0]; // 数组中的第一个元素
  let p2 = this[1]; // 数组中的第二个元素
  let a = p2.x - p1.x; // x 坐标的差
  let b = p2.y - p1.y; // y 坐标的差
  return Math.sqrt(
    a * a + //
      b * b
  ); // Math.sqrt() 计算平方根
};

points.dist();
```

### 1.3.4 分支与循环

下面是一些函数，主要演示了常见的 JavaScript 控制结构语句：

```js
// JavaScript 语句中有条件和循环，语法与 C, C++, Java 等类似
function abs(x) {
  // 一个计算绝对值的函数
  if (x >= 0) {
    // if 语句...
    return x; // 如果比较为true则执行这段代码
  } else {
    return -x; // 否则执行这段代码
  } // 只有一条语句时，大括号是可选的
}

abs(-10) === abs(10); // => true

function sum(array) {
  // 计算数组元素之和
  let sum = 0; // 首先把表示和的sum变量初始化为0
  for (let x of array) {
    // 循环数组，将每个元素赋值为x
    sum += x; // 累加每个元素
  }
  return sum; // 返回计算和
}
sum(primes); // => 28:  2+3+5+7+11

function factorial(n) {
  // 一个计算阶乘的函数
  let product = 1; // 首先把表示阶乘值的变量初始化为 1
  while (n > 1) {
    // 当（）中的表达式为true时重复执行（）中的语句
    product *= n;
    n--;
  }
  return product; // 返回结果
}
factorial(4); // => 24: 1*4*3*2

function factorial2(n) {
  // 使用不同循环的另一个版本
  // prettier-ignore
  let i, product = 1; // 初始值为 1

  for (i = 2; i <= n; i++) {
    product *= i;
  }

  return product;
}
factorial2(5); // => 120: 1*2*3*4*5
```

JavaScript 支持面向对象的编程风格，但它与“经典的”面向对象编程语言有显著的不同。

第 9 章详细介绍了 JavaScript 的面向对象编程，并提供了很多示例。

下面是一个非常简单的示例，演示了如何定义一个 JavaScript 类来表示 2D 几何点。

作为这个类的实例的对象有一个名为 distance() 的方法，它计算点到原点的距离：

```js
class Point {
  // 类名首字母习惯大写
  constructor(x, y) {
    // 构造函数用用初始化实例
    this.x = x; // this关键字代表要初始化的新对象
    this.y = y;
  } // 构造函数中不要有 return语句

  distance() {
    // 计算从原点到当前坐标距离的方法
    return Math.sqrt(
      // 返回 x² + y²的平方根
      // this 引用的是调用这个实例方法的Point对象
      this.x * this.x + this.y * this.y
    );
  }
}

// 使用 Point() 构造函数和 new 创建 point 对象
let p = new Point(1, 1); // 几何平面上的点 (1,1).

// 调用p对象的方法
p.distance(); // => Math.SQRT2
```

## 1.4 字符频率柱形图

本章以一个简短但不平凡的 JavaScript 程序结束。

示例 1-1 是一个 Node 程序，它从标准输入中读取文本，根据文本计算字符频率直方图，然后打印该直方图。

你可以调用这样的程序来分析字符频率自己的源代码：

```sh
$ node charfreq.js < charfreq.js
T: ########### 11.22%
E: ########## 10.15%
R: ####### 6.68%
S: ###### 6.44%
A: ###### 6.16%
N: ###### 5.81%
O: ##### 5.45%
I: ##### 4.54%
H: #### 4.07%
C: ### 3.36%
L: ### 3.20%
U: ### 3.08%
/: ### 2.88%
```

这个示例使用了许多高级 JavaScript 特性，旨在演示真实的 JavaScript 程序是什么样的。

不过，即使你不理解这些代码也没关系，其中用到的特性本书后续章节都会介绍。

示例 1-1. 使用 JavaScript 计算自负频率柱状图

```js
/**
 * This Node program reads text from standard input, computes the frequency
 * of each letter in that text, and displays a histogram of the most
 * frequently used characters. It requires Node 12 or higher to run.
 *
 * In a Unix-type environment you can invoke the program like this:
 *    node charfreq.js < corpus.txt
 */

// This class extends Map so that the get() method returns the specified
// value instead of null when the key is not in the map
class DefaultMap extends Map {
  constructor(defaultValue) {
    super(); // Invoke superclass constructor
    this.defaultValue = defaultValue; // Remember the default value
  }

  get(key) {
    if (this.has(key)) {
      // If the key is already in the map
      return super.get(key); // return its value from superclass.
    } else {
      return this.defaultValue; // Otherwise return the default value
    }
  }
}

// This class computes and displays letter frequency histograms
class Histogram {
  constructor() {
    this.letterCounts = new DefaultMap(0); // Map from letters to counts
    this.totalLetters = 0; // How many letters in all
  }

  // This function updates the histogram with the letters of text.
  add(text) {
    // Remove whitespace from the text, and convert to upper case
    text = text.replace(/\s/g, "").toUpperCase();

    // Now loop through the characters of the text
    for (let character of text) {
      let count = this.letterCounts.get(character); // Get old count
      this.letterCounts.set(character, count + 1); // Increment it
      this.totalLetters++;
    }
  }

  // Convert the histogram to a string that displays an ASCII graphic
  toString() {
    // Convert the Map to an array of [key,value] arrays
    let entries = [...this.letterCounts];

    // Sort the array by count, then alphabetically
    entries.sort((a, b) => {
      // A function to define sort order.
      if (a[1] === b[1]) {
        // If the counts are the same
        return a[0] < b[0] ? -1 : 1; // sort alphabetically.
      } else {
        // If the counts differ
        return b[1] - a[1]; // sort by largest count.
      }
    });

    // Convert the counts to percentages
    for (let entry of entries) {
      entry[1] = (entry[1] / this.totalLetters) * 100;
    }

    // Drop any entries less than 1%
    entries = entries.filter((entry) => entry[1] >= 1);

    // Now convert each entry to a line of text
    let lines = entries.map(
      ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );

    // And return the concatenated lines, separated by newline characters.
    return lines.join("\n");
  }
}

// This async (Promise-returning) function creates a Histogram object,
// asynchronously reads chunks of text from standard input, and adds those chunks to
// the histogram. When it reaches the end of the stream, it returns this histogram
async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8"); // Read Unicode strings, not bytes
  let histogram = new Histogram();
  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}

// This one final line of code is the main body of the program.
// It makes a Histogram object from standard input, then prints the histogram.
histogramFromStdin().then((histogram) => {
  console.log(histogram.toString());
});
```

## 1.5 本章小结

本书以自底向上的方式解释了 JavaScript。这意味着我们需要从低层次开始，比如注释、标识符、变量和类型；然后构建表达式、语句、对象和函数；然后介绍高级语言抽象，比如类和模块。

本书的书名使用了“权威”这个词是认真的，接下来的章节会详细地解释这门语言，一开始可能会令人放干。然而，真正掌握 JavaScript 需要了解更多细节，希望您能抽出时间从头到尾阅读这本书。
