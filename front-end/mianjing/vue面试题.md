# 一、Vue2篇

### 1. 关于生命周期

##### 	1.1 生命周期有哪些？发送请求在created还是mounted？

```
请求接口测试：https://fcm.52kfw.cn/index.php?_mall_id=1&r=api/default/district
```

Vue2.x系统自带有8个

```
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
beforeDestroy
destroyed
```

发送请求在created还是mounted？

```
这个问题具体要看项目和业务的情况了，因为组件的加载顺序是，父组件引入了子组件，那么先执行父的前3个生命周期，再执行子的前4个生命周期，那么如果我们的业务是父组件引入子组件，并且优先加载子组件的数据，那么在父组件中当前的请求要房mounted中，如果当前组件没有依赖关系那么放在哪个生命周期中请求都是可以的。
```

##### 	1.2 为什么发送请求不在beforeCreate里？beforeCreate和created有什么区别？

为什么发送请求不在beforeCreate里？

```
因为：如果请求是在methods封装好了，在beforeCreate调用的时候，beforeCreate阶段是拿不到methods里面的方法的（会报错了）。
```

beforeCreate和created有什么区别？

```
beforeCreate没有$data
created中有$data

created是可以拿到methods的方法的
beforeCreate拿不到methods的方法
```

##### 	1.3 在created中如何获取dom

```
1. 只要写异步代码，获取dom是在异步中获取的，就可以了。
	例如：setTimeout、请求、Promise.xxx()等等...
2. 使用vue系统内置的this.$nextTick
```

##### 	1.4 一旦进入组件会执行哪些生命周期？

```
beforeCreate
created
beforeMount
mounted
```

##### 	1.5 第二次或者第N次进去组件会执行哪些生命周期？

##### 	1.6 父组件引入子组件，那么生命周期执行的顺序是？

```
父：beforeCreate、created、beforeMount
子：beforeCreate、created、beforeMount、mounted
...
父：mounted
```

##### 	1.7 加入keep-alive会执行哪些生命周期？

##### 1.8 你在什么情况下用过哪些生命周期？说一说生命周期使用场景

### 2. 关于组件

##### 	2.1 组件传值（通信）的方式

##### 	2.2 父组件直接修改子组件的值

##### 	2.3 子组件直接修改父组件的值

##### 	2.4 如何找到父组件

##### 	2.5 如何找到根组件

##### 	2.6 keep-alive

##### 	2.7 slot

##### 	2.8 如何封装组件

### 3. 关于Vuex

##### 	3.1 Vuex有哪些属性

##### 	3.2 Vuex使用state值

##### 	3.3 Vuex的getters值修改

##### 	3.4 Vuex的mutations和actions区别

##### 	3.5 Vuex持久化存储

### 4. 关于路由

##### 	4.1 路由的模式和区别

##### 	4.2 子路由和动态路由

##### 	4.3 路由传值

##### 	4.4 导航故障

##### 	4.5 $router和$route区别

##### 	4.6 导航守卫

### 5. 关于API

##### 	5.1 $set

##### 	5.2 $nextTick

##### 	5.3 $refs

##### 	5.4 $el

##### 	5.5 $data

##### 	5.6 $children

##### 	5.7 $parent

##### 	5.8 $root

##### 	5.9 data定义数据

##### 	5.10 computed计算属性

##### 	5.11 watch

##### 	5.12 methods和computed区别

### 6. 关于指令

##### 	6.1 如何自定义指令

##### 	6.2 vue单项绑定

##### 	6.3 v-if和v-for优先级

### 7. 关于原理

##### 	7.1 $nextTick原理

##### 	7.2 双向绑定原理

### 8. axios二次封装

# 二、Vue3篇

### 1. Vue2和Vue3区别

