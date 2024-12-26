原始类型（基本类型）：

Undefined,Null,Boolean,Number,String

引用类型（复杂类型）：Object

## typeof和instanceof检测数据类型的异同
```javascript
console.log(typeof(123)) // number
console.log(typeof(true))//boolean
console.log(typeof('MOC')) // string
console.log(typeof(undefined)) //undefined
console.log(typeof(null)) //object而不是null
//计算器typeof返回数据类型机器码  01011 ：000 =》object
//null 00000000...000 =>object
//js bug

console.log(typeof([])) //object
console.log(typeof(new Date())) //object
console.log(typeof({})) //object
console.log(typeof(function(){})) //function
console.log(typeof Array) //function 为什么不是object
//typeof引用类型object:object function
//object 定义一个[[call]]

//面试题
var str = 'MOOC'
console.log('-----')
console.log(str) //MMOC
console.log(typeof('MOOC')) //string
var str1 = new String('MOOC') //实例化后的对象
console.log(str1) //{}key : value 0:M,1:O,2:O,3:C
console.log(typeof(str1)) //object
console.log('--------')
```



typeof少null多function



## instanceof检测
```javascript
//instanceof检测bool:true false
//A 检测B
console.log([] instanceof Array) ; //true array
console.log({} instanceof Object) ; //true
console.log?(new Date() instanceof Date) ;//true
 function Person() {}
 console.log(new Person() instanceof Person) ;//true

 console.log([] instanceof Object) ; //true
 console.log(new Date() instanceof Object) ;//true
 console.log(new Person instanceof object) ;//true
 //instanceof 原型链Ainstanceof Btrue，Binstanceof C true
//儿子 爸爸 爷爷

if(typeof(val) !== undefined) {}
console.log(Object.prototype.toString.call('1')) //string
console.log(Object.prototype.toString.call([])) //Array
```

typeof 和instanceof 检测数据类型的异同

typeof返回值是一个字符串，该字符串说明运算数的类型;结果为numberboolean,string,function(函数)object(NULL数组对象),undefined。

instanceof 是用来判断A是否为B的实例对象检测的是原型



## 数据的存储形式————堆栈
## 深浅拷贝
1、遍历赋值

2、Object.create()

3、JSON.parse()和JSON.stringify()

## 浅拷贝
```javascript
//遍历
var obj = {
    a:'hello',
    b:{a:'world',
        b:111
    },
    c:[11,'jack','tom']
}

//方法一objCopy遍历
function simpleClone(objNew) {
    var obj = {}
    for(var i in objNew) {
            obj[i] = objNew[i]
    }
    return obj
}

var objCopy = simpleClone(obj)
objCopy.b.a = 'world1'
console.log(obj)
console.log(objCopy)

//方法二：直接赋值的形式
var objCopy = Object.create(obj)
console.log(obj)
console.log(objCopy)
```

## 深拷贝
```javascript
//深拷贝
//第一种方法遍历
function deepClone(startObj,endObj) {
    var obj = endObj || {}
    for(var i in startObj) {
        if(typeof startObj[i] === 'object') {
            obj[i] = startObj[i].constructor === Array ? [] :{}
            deepClone(startObj[i],obj[i])
        }else {
            obj[i] == startObj[i]
        }
    }
    return obj
}
var objCopy = deepClone(obj)
objCopy.a = 'world1'
objCopy.c[0] = '0'
console.log(obj) //world
console.log(objCopy) //world1

//深拷贝，第二种方法，JSON.prase,JSON.stringify
var objCopy = JSON.parse(JSON.stringify(obj)) //object ->string ->object
objCopy.a = 'world1'
objCopy.c[0] = '0'
console.log(obj)
console.log(objCopy)
```



## 常见的问题
```javascript
//特殊类型的饮食转换NaN,0,undefined ,null ,""=>false,true
// if(!val) {

// }else {

// }
// var bool = Boolean(NaN)
// console.log(bool) //false

//逻辑运算符&&和||在因某事转换的情况、
console.log(true && true) //true
console.log(true || true) //true
console.log(0 && 5) //false
var a = 9
if(a === 0) {
    console.log(a)
}else {
    console.log(1)
}
console.log()


//==和=== 的区别 0==0
console.log(undefined == null) //true
console.log(undefined === null) //false
if(a!==b) {
    ESlint
}
```



## js舍入误差
```javascript
//js舍入误差
console.log(0.1 + 0.2) //0.30000000000000004
// js IEEE754标准
// 0.1 => 0.1110110101
// 0.2 => 0.1010101
console.log(0.1.toString(2))//0.0001100110011001100110011001100110011001100110011001101
console.log(0.1 + 0.2) //0.30000000000000004
//二进制  =》十进制 ：0.3000004
//方案1：
console.log(parseFloat((0.1+0.2).toFixed(2)))  //0.3
// 对结果使用 toFixed(2) 方法，将数字转换为字符串，并保留两位小数。
// 使用 parseFloat 将得到的字符串转换回浮点数。

//方案2
function add(num1,num2) {
    m = Math.pow(10,2)
    return (num1 * m + num2*m ) /m
}
console.log(add(0.1 , 0.2))
```

















