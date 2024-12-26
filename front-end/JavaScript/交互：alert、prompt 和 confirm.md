# alert
消息提示框

alert("Hello")



# prompt
<font style="color:rgb(49, 49, 48);">浏览器会显示一个带有输入文本消息的模态窗口，还有 input 框和确定/取消按钮。</font>

接收两个参数

result = prompt（title,[default]);

`**title**`

<font style="color:rgb(49, 49, 48);">显示给用户的文本</font>

`**default**`

<font style="color:rgb(49, 49, 48);">可选的第二个参数，指定 input 框的初始值。</font>

<font style="color:rgb(49, 49, 48);"></font>

# <font style="color:rgb(49, 49, 48);">confirm</font>
显示带有question以及确定还有取消两个按钮的模态窗口

确定返回true，取下返回false

<font style="color:rgb(49, 49, 48);">  
</font>

```plain
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // 如果“确定”按钮被按下，则显示 true
```

## [<font style="color:rgb(49, 49, 48);">总结</font>](https://zh.javascript.info/alert-prompt-confirm#zong-jie)
<font style="color:rgb(49, 49, 48);">我们学习了与用户交互的 3 个浏览器的特定函数：</font>

`**alert**`

<font style="color:rgb(49, 49, 48);">显示信息。</font>

`**prompt**`

<font style="color:rgb(49, 49, 48);">显示信息要求用户输入文本。点击确定返回文本，点击取消或按下</font><font style="color:rgb(49, 49, 48);"> </font><font style="color:rgb(49, 49, 48);">Esc</font><font style="color:rgb(49, 49, 48);"> </font><font style="color:rgb(49, 49, 48);">键返回</font><font style="color:rgb(49, 49, 48);"> </font>`null`<font style="color:rgb(49, 49, 48);">。</font>

`**confirm**`

<font style="color:rgb(49, 49, 48);">显示信息等待用户点击确定或取消。点击确定返回</font><font style="color:rgb(49, 49, 48);"> </font>`true`<font style="color:rgb(49, 49, 48);">，点击取消或按下</font><font style="color:rgb(49, 49, 48);"> </font><font style="color:rgb(49, 49, 48);">Esc</font><font style="color:rgb(49, 49, 48);"> </font><font style="color:rgb(49, 49, 48);">键返回</font><font style="color:rgb(49, 49, 48);"> </font>`false`<font style="color:rgb(49, 49, 48);">。</font>

<font style="color:rgb(49, 49, 48);">这些方法都是模态的：它们暂停脚本的执行，并且不允许用户与该页面的其余部分进行交互，直到窗口被解除。</font>

<font style="color:rgb(49, 49, 48);">上述所有方法共有两个限制：</font>

1. <font style="color:rgb(49, 49, 48);">模态窗口的确切位置由浏览器决定。通常在页面中心。</font>
2. <font style="color:rgb(49, 49, 48);">窗口的确切外观也取决于浏览器。我们不能修改它。</font>

