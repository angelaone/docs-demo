原始类型可以作为对象属性键：1、字符串2、symbol类型



否则用其他的类型，比如数字，会被自动转换成字符串，例如obj[1]和obj["1"]相同，obj[true]和obj["true"]相同



## symbol代表唯一的标识符
可以用Symbol()创建这种类型的值：

let id = Symbol()



let id = Symbol("id")//id的描述为名为”id“的Symbol

```javascript
let id1 = Symbol("id")
let id2 = Symbol("id")

console.log(id1 == id2) //false
```

有两个描述相同的symbol，他们不相等

## [<font style="color:rgb(49, 49, 48);">“隐藏”属性</font>](https://zh.javascript.info/symbol#yin-cang-shu-xing)
<font style="color:rgb(49, 49, 48);">symbol 允许我们创建对象的“隐藏”属性，代码的任何其他部分都不能意外访问或重写这些属性。</font>

```javascript
let user = { // 属于另一个代码
    name: "John"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;
  
console.log( user[id] ); // 1  我们可以使用 symbol 作为键来访问数据
```

Symbol标识符即便有通过的名字也不会有冲突

如果字符串用相同的名字就会有冲突

```javascript
let user = { name: "John" };

// 我们的脚本使用了 "id" 属性。
user.id = "Our id value";

// ……另一个脚本也想将 "id" 用于它的目的……

user.id = "Their id value"
// 砰！无意中被另一个脚本重写了 id！
```



对象字面量中的Symbol

如果我们要在对象字面量{...}中使用symbol，则需要用方括号括起来

```javascript
let id = Symbol("id");

let user = {
    name:"john",
    [id] :123 //而不是"id":123
}
```

## Symbol在for ..in 中会被跳过
symbol属性不会参与for...in循环

```javascript
let id = Symbol("id");
let user = {
    name: "john",
    age:30,
    [id]:123
}

for(let key in user) console.log(key) //name,age(没有Symbol)

//使用symbol任务直接访问
console.log("Direct" + user[id]) // direct:123
```

[<font style="color:rgb(49, 49, 48);">Object.keys(user)</font>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)<font style="color:rgb(49, 49, 48);"> </font><font style="color:rgb(49, 49, 48);">也会忽略它们。这是一般“隐藏符号属性”原则的一部分。如果另一个脚本或库遍历我们的对象，它不会意外地访问到符号属性。</font>

<font style="color:rgb(49, 49, 48);">相反，</font>[<font style="color:rgb(49, 49, 48);">Object.assign</font>](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)<font style="color:rgb(49, 49, 48);"> 会同时复制字符串和 symbol 属性：</font>

```javascript
let id = Symbol("id");
let user = {
    name: "john",
    age:30,
    [id]:123
}

let clone = Object.assign({},user);
console.log(clone[id]) //123
```



## 全局Symbol
所有的symbol都是不同的，即便Symbol的名字相同，当我们想要相同的名字有着相同的实体，，

解决办法：注册全局symbol注册表，确保名字相同的symbol返回的是相同的symbol

`Symbol.for(key)`<font style="color:rgb(49, 49, 48);">。</font>

<font style="color:rgb(49, 49, 48);">要从注册表中读取（不存在则创建）symbol，请使用 </font>`Symbol.for(key)`<font style="color:rgb(49, 49, 48);">。</font>

<font style="color:rgb(49, 49, 48);">该调用会检查全局注册表，如果有一个描述为 </font>`key`<font style="color:rgb(49, 49, 48);"> 的 symbol，则返回该 symbol，否则将创建一个新 symbol（</font>`Symbol(key)`<font style="color:rgb(49, 49, 48);">），并通过给定的 </font>`key`<font style="color:rgb(49, 49, 48);"> 将其存储在注册表中。</font>

```javascript
// 从全局注册表中读取
let id = Symbol.for("id") //如果symbol不存在，则创建他

// 再次读取（可能是在代码中的另一个位置）
let idAgain = Symbol.for("id")

    // 相同的 symbol
console.log(id === idAgain)
```



## Symbol.keyFor
<font style="color:rgb(49, 49, 48);">对于全局 symbol，</font>`Symbol.for(key)`<font style="color:rgb(49, 49, 48);"> 按名字返回一个 symbol。</font>

<font style="color:rgb(49, 49, 48);">相反，通过全局 symbol 返回一个名字，我们可以使用 </font>`Symbol.keyFor(sym)`<font style="color:rgb(49, 49, 48);">：</font>

```javascript
//通过name获取symbol
let sym = Symbol.for("name")
let sym2 = Symbol.for("id")

// 通过symbol获取name
console.log(Symbol.keyFor(sym))  //name
console.log(Symbol.keyFor(sym2)) //id
```

`Symbol.keyFor`<font style="color:rgb(49, 49, 48);"> </font><font style="color:rgb(49, 49, 48);">内部使用全局 symbol 注册表来查找 symbol 的键。所以它不适用于非全局 symbol。如果 symbol 不是全局的，它将无法找到它并返回</font><font style="color:rgb(49, 49, 48);"> </font>`undefined`<font style="color:rgb(49, 49, 48);">。</font>

<font style="color:rgb(49, 49, 48);">但是，所有 symbol 都具有 </font>`description`<font style="color:rgb(49, 49, 48);"> 属性。</font>

```javascript
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log( Symbol.keyFor(globalSymbol) ); // name，全局 symbol
console.log( Symbol.keyFor(localSymbol) ); // undefined，非全局

console.log( localSymbol.description ); // name
```

## [<font style="color:rgb(49, 49, 48);">系统 symbol</font>](https://zh.javascript.info/symbol#xi-tong-symbol)
<font style="color:rgb(49, 49, 48);">JavaScript 内部有很多“系统” symbol，我们可以使用它们来微调对象的各个方面。</font>

<font style="color:rgb(49, 49, 48);">它们都被列在了</font><font style="color:rgb(49, 49, 48);"> </font>[<font style="color:rgb(49, 49, 48);">众所周知的 symbol</font>](https://tc39.github.io/ecma262/#sec-well-known-symbols)<font style="color:rgb(49, 49, 48);"> </font><font style="color:rgb(49, 49, 48);">表的规范中：</font>

+ `Symbol.hasInstance`
+ `Symbol.isConcatSpreadable`
+ `Symbol.iterator`
+ `Symbol.toPrimitive`
+ <font style="color:rgb(49, 49, 48);">……等等。</font>

<font style="color:rgb(49, 49, 48);">例如，</font>`Symbol.toPrimitive`<font style="color:rgb(49, 49, 48);"> 允许我们将对象描述为原始值转换。</font>

