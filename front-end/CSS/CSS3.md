<font style="color:rgb(51, 51, 51);">CSS 用于控制网页的样式和布局。</font>

<font style="color:rgb(51, 51, 51);">CSS3 是最新的 CSS 标准。</font>

```html
div
{
    transform:rotate(30deg);
}
```

<font style="color:rgb(51, 51, 51);">一些最重要CSS3模块如下：</font>

+ <font style="color:rgb(51, 51, 51);">选择器</font>
+ <font style="color:rgb(51, 51, 51);">盒模型</font>
+ <font style="color:rgb(51, 51, 51);">背景和边框</font>
+ <font style="color:rgb(51, 51, 51);">文字特效</font>
+ <font style="color:rgb(51, 51, 51);">2D/3D转换</font>
+ <font style="color:rgb(51, 51, 51);">动画</font>
+ <font style="color:rgb(51, 51, 51);">多列布局</font>
+ <font style="color:rgb(51, 51, 51);">用户界面</font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);">用 CSS3，你可以创建圆角边框，添加阴影框，并作为边界的形象而不使用设计程序，如 Photoshop。</font>

<font style="color:rgb(51, 51, 51);">在本章中，您将了解以下的边框属性：</font>

+ <font style="color:rgb(51, 51, 51);">border-radius</font>
+ <font style="color:rgb(51, 51, 51);">box-shadow</font>
+ <font style="color:rgb(51, 51, 51);">border-image</font>

## <font style="color:rgb(51, 51, 51);">CSS3 圆角</font>
```html
div
{
border:2px solid;
border-radius:25px;
}
```

## <font style="color:rgb(51, 51, 51);">CSS3 盒阴影</font>
<font style="color:rgb(51, 51, 51);">CSS3 中的 box-shadow 属性被用来添加阴影:</font>

```html
div
{
box-shadow: 10px 10px 5px #888888;
}
```

## <font style="color:rgb(51, 51, 51);">CSS3 边界图片</font>
<font style="color:rgb(51, 51, 51);">有了 CSS3 的 border-image 属性，你可以使用图像创建一个边框：</font>

<font style="color:rgb(51, 51, 51);">border-image 属性允许你指定一个图片作为边框！ 用于创建上文边框的原始图像：</font>

<font style="color:rgb(51, 51, 51);">在 div 中使用图片创建边框:</font>

```html
div
{
border-image:url(border.png) 30 30 round;
-webkit-border-image:url(border.png) 30 30 round; /* Safari 5 and older */
-o-border-image:url(border.png) 30 30 round; /* Opera */
}
```

## <font style="color:rgb(51, 51, 51);">新边框属性</font>
| <font style="color:rgb(255, 255, 255);">属性</font> | <font style="color:rgb(255, 255, 255);">说明</font> | <font style="color:rgb(255, 255, 255);">CSS</font> |
| --- | --- | --- |
| [<font style="color:rgb(51, 51, 51);">border-image</font>](http://it028.com/css3-pr-border-image.html) | <font style="color:rgb(51, 51, 51);">设置所有边框图像的速记属性。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">border-radius</font>](http://it028.com/css3-pr-border-radius.html) | <font style="color:rgb(51, 51, 51);">一个用于设置所有四个边框- *-半径属性的速记属性</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">box-shadow</font>](http://it028.com/css3-pr-box-shadow.html) | <font style="color:rgb(51, 51, 51);">附加一个或多个下拉框的阴影</font> | |


<font style="color:rgb(51, 51, 51);"></font>

## <font style="color:rgb(51, 51, 51);">CSS3 圆角属性</font>
| <font style="color:rgb(255, 255, 255);">属性</font> | <font style="color:rgb(255, 255, 255);">描述</font> |
| --- | --- |
| [<font style="color:rgb(51, 51, 51);">border-radius</font>](http://it028.com/css3-pr-border-radius.html) | <font style="color:rgb(51, 51, 51);">所有四个边角 border-*-*-radius 属性的缩写</font> |
| [<font style="color:rgb(51, 51, 51);">border-top-left-radius</font>](http://it028.com/css3-pr-border-top-left-radius.html) | <font style="color:rgb(51, 51, 51);">定义了左上角的弧度</font> |
| [<font style="color:rgb(51, 51, 51);">border-top-right-radius</font>](http://it028.com/css3-pr-border-top-right-radius.html) | <font style="color:rgb(51, 51, 51);">定义了右上角的弧度</font> |
| [<font style="color:rgb(51, 51, 51);">border-bottom-right-radius</font>](http://it028.com/css3-pr-border-bottom-right-radius.html) | <font style="color:rgb(51, 51, 51);">定义了右下角的弧度</font> |
| [<font style="color:rgb(51, 51, 51);">border-bottom-left-radius</font>](http://it028.com/css3-pr-border-bottom-left-radius.html) | <font style="color:rgb(51, 51, 51);">定义了左下角的弧度</font> |


## <font style="color:rgb(51, 51, 51);">CSS3 border-radius - 指定每个圆角</font>
<font style="color:rgb(51, 51, 51);">如果你在 border-radius 属性中只指定一个值，那么将生成 4 个 圆角。</font>

<font style="color:rgb(51, 51, 51);">但是，如果你要在四个角上一一指定，可以使用以下规则：</font>

+ **<font style="color:rgb(51, 51, 51);">四个值:</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">第一个值为左上角，第二个值为右上角，第三个值为右下角，第四个值为左下角。</font>
+ **<font style="color:rgb(51, 51, 51);">三个值:</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">第一个值为左上角, 第二个值为右上角和左下角，第三个值为右下角</font>
+ **<font style="color:rgb(51, 51, 51);">两个值:</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">第一个值为左上角与右下角，第二个值为右上角与左下角</font>
+ **<font style="color:rgb(51, 51, 51);">一个值：</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">四个圆角值相同</font>

<font style="color:rgb(51, 51, 51);">以下为三个实例:</font>

<font style="color:rgb(51, 51, 51);">1. 四个值 - border-radius: 15px 50px 30px 5px:</font>

<font style="color:rgb(51, 51, 51);">2. 三个值 - border-radius: 15px 50px 30px:</font>

## <font style="color:rgb(51, 51, 51);">CSS3 背景</font>
+ <font style="color:rgb(51, 51, 51);">background-image</font>
+ <font style="color:rgb(51, 51, 51);">background-size</font>
+ <font style="color:rgb(51, 51, 51);">background-origin</font>
+ <font style="color:rgb(51, 51, 51);">background-clip</font>

## <font style="color:rgb(51, 51, 51);">CSS3 background-image属性</font>
<font style="color:rgb(51, 51, 51);">CSS3中可以通过background-image属性添加背景图片。</font>

<font style="color:rgb(51, 51, 51);">不同的背景图像和图像用逗号隔开，所有的图片中显示在最顶端的为第一张。</font>

```html
#example1 { 
    background-image: url(img_flwr.gif), url(paper.gif); 
    background-position: right bottom, left top; 
    background-repeat: no-repeat, repeat; 
}
```

<font style="color:rgb(51, 51, 51);">可以给不同的图片设置多个不同的属性</font>

```html
#example1 {
    background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
}
```

## <font style="color:rgb(51, 51, 51);">CSS3 background-size 属性</font>
<font style="color:rgb(51, 51, 51);">background-size指定背景图像的大小。CSS3以前，背景图像大小由图像的实际大小决定。</font>

<font style="color:rgb(51, 51, 51);">CSS3中可以指定背景图片，让我们重新在不同的环境中指定背景图片的大小。您可以指定像素或百分比大小。</font>

<font style="color:rgb(51, 51, 51);">你指定的大小是相对于父元素的宽度和高度的百分比的大小。</font>

```html
div
{
    background:url(img_flwr.gif);
    background-size:80px 60px;
    background-repeat:no-repeat;
}
```

## <font style="color:rgb(51, 51, 51);">CSS3的background-Origin属性</font>
<font style="color:rgb(51, 51, 51);">background-Origin属性指定了背景图像的位置区域。</font>

<font style="color:rgb(51, 51, 51);">content-box, padding-box,和 border-box区域内可以放置背景图像。</font>

```html
div
{
    background:url(img_flwr.gif);
    background-repeat:no-repeat;
    background-size:100% 100%;
    background-origin:content-box;
}

```

| ## <font style="color:rgb(51, 51, 51);">CSS3 多个背景图像</font> |
| --- |


```html
body
{ 
    background-image:url(img_flwr.gif),url(img_tree.gif);
}
```

## <font style="color:rgb(51, 51, 51);">CSS3 background-clip属性</font>
<font style="color:rgb(51, 51, 51);">CSS3中background-clip背景剪裁属性是从指定位置开始绘制。</font>

```html
#example1 { 
    border: 10px dotted black; 
    padding: 35px; 
    background: yellow; 
    background-clip: content-box; 
}
```

## <font style="color:rgb(51, 51, 51);">新的背景属性</font>
| <font style="color:rgb(255, 255, 255);">顺序</font> | <font style="color:rgb(255, 255, 255);">描述</font> | <font style="color:rgb(255, 255, 255);">CSS</font> |
| --- | --- | --- |
| [<font style="color:rgb(51, 51, 51);">background-clip</font>](http://it028.com/css3-pr-background-clip.html) | <font style="color:rgb(51, 51, 51);">规定背景的绘制区域。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">background-origin</font>](http://it028.com/css3-pr-background-origin.html) | <font style="color:rgb(51, 51, 51);">规定背景图片的定位区域。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">background-size</font>](http://it028.com/css3-pr-background-size.html) | <font style="color:rgb(51, 51, 51);">规定背景图片的尺寸。</font> | <font style="color:rgb(51, 51, 51);">3</font> |


# <font style="color:rgb(0, 0, 0);">CSS3 </font><font style="color:rgb(100, 133, 76);">渐变（Gradients）</font>
+ **<font style="color:rgb(51, 51, 51);">线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向</font>**
+ **<font style="color:rgb(51, 51, 51);">径向渐变（Radial Gradients）- 由它们的中心定义</font>**

<font style="color:rgb(0, 0, 0);">带有指定的角度的线性渐变：</font>

<font style="color:rgb(0, 85, 170);">#grad</font><font style="color:olive;">{</font><font style="color:green;">background-image:</font><font style="color:gray;">linear-gradient(-</font><font style="color:maroon;">90</font><font style="color:gray;">deg, </font><font style="color:rgb(0, 0, 139);">red</font><font style="color:gray;">, </font><font style="color:rgb(0, 0, 139);">yellow</font><font style="color:gray;">); </font><font style="color:olive;">}</font>

## <font style="color:rgb(51, 51, 51);">使用多个颜色结点</font>
<font style="color:rgb(51, 51, 51);">下面的实例演示了如何设置多个颜色结点：</font>

## <font style="color:rgb(97, 127, 16);background-color:rgb(229, 238, 204);">实例</font>
<font style="color:rgb(0, 0, 0);background-color:rgb(229, 238, 204);">带有多个颜色结点的从上到下的线性渐变：</font>

<font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">#grad</font><font style="color:olive;background-color:rgb(229, 238, 204);">{</font><font style="color:green;background-color:rgb(229, 238, 204);">background-image:</font><font style="color:gray;background-color:rgb(229, 238, 204);">linear-gradient(</font><font style="color:rgb(0, 0, 139);background-color:rgb(229, 238, 204);">red</font><font style="color:gray;background-color:rgb(229, 238, 204);">, </font><font style="color:rgb(0, 0, 139);background-color:rgb(229, 238, 204);">yellow</font><font style="color:gray;background-color:rgb(229, 238, 204);">, </font><font style="color:rgb(0, 0, 139);background-color:rgb(229, 238, 204);">green</font><font style="color:gray;background-color:rgb(229, 238, 204);">); </font><font style="color:olive;background-color:rgb(229, 238, 204);">}</font>



## <font style="color:rgb(51, 51, 51);">使用透明度（transparent）</font>
<font style="color:rgb(51, 51, 51);">CSS3 渐变也支持透明度（transparent），可用于创建减弱变淡的效果。</font>

<font style="color:rgb(51, 51, 51);">为了添加透明度，我们使用 rgba() 函数来定义颜色结点。rgba() 函数中的最后一个参数可以是从 0 到 1 的值，它定义了颜色的透明度：0 表示完全透明，1 表示完全不透明。</font>

<font style="color:rgb(51, 51, 51);">下面的实例演示了从左边开始的线性渐变。起点是完全透明，慢慢过渡到完全不透明的红色：</font>

## <font style="color:rgb(97, 127, 16);background-color:rgb(229, 238, 204);">实例</font>
<font style="color:rgb(0, 0, 0);background-color:rgb(229, 238, 204);">从左到右的线性渐变，带有透明度：</font>

<font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">#grad</font><font style="color:olive;background-color:rgb(229, 238, 204);">{</font><font style="color:green;background-color:rgb(229, 238, 204);">background-image:</font><font style="color:gray;background-color:rgb(229, 238, 204);">linear-gradient(to</font><font style="color:rgb(170, 17, 17);background-color:rgb(229, 238, 204);">right</font><font style="color:gray;background-color:rgb(229, 238, 204);">, rgba(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">255</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0</font><font style="color:gray;background-color:rgb(229, 238, 204);">), rgba(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">255</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">1</font><font style="color:gray;background-color:rgb(229, 238, 204);">)); </font><font style="color:olive;background-color:rgb(229, 238, 204);">}</font>

## <font style="color:rgb(51, 51, 51);">重复的线性渐变</font>
<font style="color:rgb(51, 51, 51);">repeating-linear-gradient() 函数用于重复线性渐变：</font>

## <font style="color:rgb(97, 127, 16);background-color:rgb(229, 238, 204);">实例</font>
<font style="color:rgb(0, 0, 0);background-color:rgb(229, 238, 204);">一个重复的线性渐变：</font>

<font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">#grad</font><font style="color:olive;background-color:rgb(229, 238, 204);">{</font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">/* 标准的语法 */</font><font style="color:green;background-color:rgb(229, 238, 204);">background-image:</font><font style="color:gray;background-color:rgb(229, 238, 204);">repeating-linear-gradient(</font><font style="color:rgb(0, 0, 139);background-color:rgb(229, 238, 204);">red</font><font style="color:gray;background-color:rgb(229, 238, 204);">, </font><font style="color:rgb(0, 0, 139);background-color:rgb(229, 238, 204);">yellow</font><font style="color:maroon;background-color:rgb(229, 238, 204);">10</font><font style="color:rgb(170, 17, 17);background-color:rgb(229, 238, 204);">%</font><font style="color:gray;background-color:rgb(229, 238, 204);">, </font><font style="color:rgb(0, 0, 139);background-color:rgb(229, 238, 204);">green</font><font style="color:maroon;background-color:rgb(229, 238, 204);">20</font><font style="color:rgb(170, 17, 17);background-color:rgb(229, 238, 204);">%</font><font style="color:gray;background-color:rgb(229, 238, 204);">); </font><font style="color:olive;background-color:rgb(229, 238, 204);">}</font>

# <font style="color:rgb(0, 0, 0);">CSS3</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(100, 133, 76);">文本效果</font>
---

## <font style="color:rgb(51, 51, 51);">CSS3 文本效果</font>
<font style="color:rgb(51, 51, 51);">CSS3中包含几个新的文本特征。</font>

<font style="color:rgb(51, 51, 51);">在本章中您将了解以下文本属性：</font>

+ <font style="color:rgb(51, 51, 51);">text-shadow</font>
+ <font style="color:rgb(51, 51, 51);">box-shadow</font>
+ <font style="color:rgb(51, 51, 51);">text-overflow</font>
+ <font style="color:rgb(51, 51, 51);">word-wrap</font>
+ <font style="color:rgb(51, 51, 51);">word-break</font>

## <font style="color:rgb(51, 51, 51);">CSS3 的文本阴影</font>
<font style="color:rgb(51, 51, 51);">CSS3 中，text-shadow属性适用于文本阴影。</font>  


```html
h1
{
    text-shadow: 5px 5px 5px #FF0000;
}
```

## <font style="color:rgb(51, 51, 51);">CSS3的换行</font>
<font style="color:rgb(0, 85, 170);">p</font><font style="color:olive;">{</font><font style="color:green;">word-wrap:</font><font style="color:rgb(170, 17, 17);">break-word</font><font style="color:gray;">;</font><font style="color:olive;">}</font>

## <font style="color:rgb(51, 51, 51);">新文本属性</font>
| <font style="color:rgb(255, 255, 255);">属性</font> | <font style="color:rgb(255, 255, 255);">描述</font> | <font style="color:rgb(255, 255, 255);">CSS</font> |
| --- | --- | --- |
| [<font style="color:rgb(51, 51, 51);">hanging-punctuation</font>](http://it028.com/css3-pr-hanging-punctuation.html) | <font style="color:rgb(51, 51, 51);">规定标点字符是否位于线框之外。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">punctuation-trim</font>](http://it028.com/css3-pr-punctuation-trim.html) | <font style="color:rgb(51, 51, 51);">规定是否对标点字符进行修剪。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">text-align-last</font>](http://it028.com/css3-pr-text-align-last.html) | <font style="color:rgb(51, 51, 51);">设置如何对齐最后一行或紧挨着强制换行符之前的行。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">text-emphasis</font>](http://it028.com/css3-pr-text-emphasis.html) | <font style="color:rgb(51, 51, 51);">向元素的文本应用重点标记以及重点标记的前景色。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">text-justify</font>](http://it028.com/css3-pr-text-justify.html) | <font style="color:rgb(51, 51, 51);">规定当 text-align 设置为 "justify" 时所使用的对齐方法。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">text-outline</font>](http://it028.com/css3-pr-text-outline.html) | <font style="color:rgb(51, 51, 51);">规定文本的轮廓。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">text-overflow</font>](http://it028.com/css3-pr-text-overflow.html) | <font style="color:rgb(51, 51, 51);">规定当文本溢出包含元素时发生的事情。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">text-shadow</font>](http://it028.com/css3-pr-text-shadow.html) | <font style="color:rgb(51, 51, 51);">向文本添加阴影。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">text-wrap</font>](http://it028.com/css3-pr-text-wrap.html) | <font style="color:rgb(51, 51, 51);">规定文本的换行规则。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">word-break</font>](http://it028.com/css3-pr-word-break.html) | <font style="color:rgb(51, 51, 51);">规定非中日韩文本的换行规则。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">word-wrap</font>](http://it028.com/css3-pr-word-wrap.html) | <font style="color:rgb(51, 51, 51);">允许对长的不可分割的单词进行分割并换行到下一行。</font> | <font style="color:rgb(51, 51, 51);">3</font> |


## <font style="color:rgb(51, 51, 51);">CSS3 字体描述</font>
<font style="color:rgb(51, 51, 51);">下表列出了所有的字体描述和里面的@font-face规则定义：</font>

| <font style="color:rgb(255, 255, 255);">描述符</font> | <font style="color:rgb(255, 255, 255);">值</font> | <font style="color:rgb(255, 255, 255);">描述</font> |
| --- | --- | --- |
| <font style="color:rgb(51, 51, 51);">font-family</font> | _<font style="color:rgb(51, 51, 51);">name</font>_ | <font style="color:rgb(51, 51, 51);">必需。规定字体的名称。</font> |
| <font style="color:rgb(51, 51, 51);">src</font> | _<font style="color:rgb(51, 51, 51);">URL</font>_ | <font style="color:rgb(51, 51, 51);">必需。定义字体文件的 URL。</font> |
| <font style="color:rgb(51, 51, 51);">font-stretch</font> | + <font style="color:rgb(51, 51, 51);">normal</font><br/>+ <font style="color:rgb(51, 51, 51);">condensed</font><br/>+ <font style="color:rgb(51, 51, 51);">ultra-condensed</font><br/>+ <font style="color:rgb(51, 51, 51);">extra-condensed</font><br/>+ <font style="color:rgb(51, 51, 51);">semi-condensed</font><br/>+ <font style="color:rgb(51, 51, 51);">expanded</font><br/>+ <font style="color:rgb(51, 51, 51);">semi-expanded</font><br/>+ <font style="color:rgb(51, 51, 51);">extra-expanded</font><br/>+ <font style="color:rgb(51, 51, 51);">ultra-expanded</font> | <font style="color:rgb(51, 51, 51);">可选。定义如何拉伸字体。默认是 "normal"。</font> |
| <font style="color:rgb(51, 51, 51);">font-style</font> | + <font style="color:rgb(51, 51, 51);">normal</font><br/>+ <font style="color:rgb(51, 51, 51);">italic</font><br/>+ <font style="color:rgb(51, 51, 51);">oblique</font> | <font style="color:rgb(51, 51, 51);">可选。定义字体的样式。默认是 "normal"。</font> |
| <font style="color:rgb(51, 51, 51);">font-weight</font> | + <font style="color:rgb(51, 51, 51);">normal</font><br/>+ <font style="color:rgb(51, 51, 51);">bold</font><br/>+ <font style="color:rgb(51, 51, 51);">100</font><br/>+ <font style="color:rgb(51, 51, 51);">200</font><br/>+ <font style="color:rgb(51, 51, 51);">300</font><br/>+ <font style="color:rgb(51, 51, 51);">400</font><br/>+ <font style="color:rgb(51, 51, 51);">500</font><br/>+ <font style="color:rgb(51, 51, 51);">600</font><br/>+ <font style="color:rgb(51, 51, 51);">700</font><br/>+ <font style="color:rgb(51, 51, 51);">800</font><br/>+ <font style="color:rgb(51, 51, 51);">900</font> | <font style="color:rgb(51, 51, 51);">可选。定义字体的粗细。默认是 "normal"。</font> |
| <font style="color:rgb(51, 51, 51);">unicode-range</font> | _<font style="color:rgb(51, 51, 51);">unicode-range</font>_ | <font style="color:rgb(51, 51, 51);">可选。定义字体支持的 UNICODE 字符范围。默认是 "U+0-10FFFF"。</font> |




# <font style="color:rgb(0, 0, 0);">CSS3</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(100, 133, 76);">2D 转换</font>
---

## <font style="color:rgb(51, 51, 51);">CSS3 转换</font>
<font style="color:rgb(51, 51, 51);">CSS3 转换可以对元素进行移动、缩放、转动、拉长或拉伸。</font>

<font style="color:rgb(51, 51, 51);">在本章您将了解2D变换方法：</font>

+ <font style="color:rgb(51, 51, 51);">translate()</font>
+ <font style="color:rgb(51, 51, 51);">rotate()</font>
+ <font style="color:rgb(51, 51, 51);">scale()</font>
+ <font style="color:rgb(51, 51, 51);">skew()</font>
+ <font style="color:rgb(51, 51, 51);">matrix()</font>

<font style="color:rgb(51, 51, 51);">在下一章中您将了解3D转换。</font>

```html
div
{
transform: rotate(30deg);
-ms-transform: rotate(30deg); /* IE 9 */
-webkit-transform: rotate(30deg); /* Safari and Chrome */
}

```

## <font style="color:rgb(51, 51, 51);">translate() 方法</font>
![]()

<font style="color:rgb(51, 51, 51);">translate()方法，根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动。</font>

<font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">div</font><font style="color:olive;background-color:rgb(229, 238, 204);">{</font><font style="color:green;background-color:rgb(229, 238, 204);">transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">translate</font><font style="color:gray;background-color:rgb(229, 238, 204);">(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">50</font><font style="color:rgb(170, 17, 17);background-color:rgb(229, 238, 204);">px</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">100</font><font style="color:rgb(170, 17, 17);background-color:rgb(229, 238, 204);">px</font><font style="color:gray;background-color:rgb(229, 238, 204);">)</font><font style="color:gray;background-color:rgb(229, 238, 204);">; -</font><font style="color:green;background-color:rgb(229, 238, 204);">ms-transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">translate</font><font style="color:gray;background-color:rgb(229, 238, 204);">(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">50</font><font style="color:rgb(170, 17, 17);background-color:rgb(229, 238, 204);">px</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">100</font><font style="color:rgb(170, 17, 17);background-color:rgb(229, 238, 204);">px</font><font style="color:gray;background-color:rgb(229, 238, 204);">)</font><font style="color:gray;background-color:rgb(229, 238, 204);">; </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">/*</font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);"> IE 9 </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">*/</font><font style="color:gray;background-color:rgb(229, 238, 204);"> -</font><font style="color:green;background-color:rgb(229, 238, 204);">webkit-transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">translate</font><font style="color:gray;background-color:rgb(229, 238, 204);">(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">50</font><font style="color:rgb(170, 17, 17);background-color:rgb(229, 238, 204);">px</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">100</font><font style="color:rgb(170, 17, 17);background-color:rgb(229, 238, 204);">px</font><font style="color:gray;background-color:rgb(229, 238, 204);">)</font><font style="color:gray;background-color:rgb(229, 238, 204);">; </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">/*</font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);"> Safari and Chrome </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">*/</font><font style="color:olive;background-color:rgb(229, 238, 204);">}</font>

<font style="color:rgb(0, 0, 0);background-color:rgb(229, 238, 204);">  
</font>**<font style="color:rgb(255, 255, 255);background-color:rgb(138, 192, 7);">尝试一下 »</font>**

<font style="color:rgb(51, 51, 51);">translate值（50px，100px）是从左边元素移动50个像素，并从顶部移动100像素。</font>

---

## <font style="color:rgb(51, 51, 51);">rotate() 方法</font>
![]()

<font style="color:rgb(51, 51, 51);">rotate()方法，在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转。</font>

![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435443395-54e084ef-59b9-44ce-b59c-0c8ce4122089.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435443401-d03009de-c328-4311-a317-6d7ef2fe6b11.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435443403-a2ee1d60-6a81-401f-9540-a21601c47350.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435443496-d5d85429-07b3-4bd4-8ce3-f1fbabd748ab.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435443619-e79d20c2-2eb6-4393-bd62-b213d494966d.gif)

## <font style="color:rgb(97, 127, 16);background-color:rgb(229, 238, 204);">实例</font>
<font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">div</font><font style="color:olive;background-color:rgb(229, 238, 204);">{</font><font style="color:green;background-color:rgb(229, 238, 204);">transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">rotate</font><font style="color:gray;background-color:rgb(229, 238, 204);">(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">30</font><font style="color:gray;background-color:rgb(229, 238, 204);">deg</font><font style="color:gray;background-color:rgb(229, 238, 204);">)</font><font style="color:gray;background-color:rgb(229, 238, 204);">; -</font><font style="color:green;background-color:rgb(229, 238, 204);">ms-transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">rotate</font><font style="color:gray;background-color:rgb(229, 238, 204);">(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">30</font><font style="color:gray;background-color:rgb(229, 238, 204);">deg</font><font style="color:gray;background-color:rgb(229, 238, 204);">)</font><font style="color:gray;background-color:rgb(229, 238, 204);">; </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">/*</font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);"> IE 9 </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">*/</font><font style="color:gray;background-color:rgb(229, 238, 204);"> -</font><font style="color:green;background-color:rgb(229, 238, 204);">webkit-transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">rotate</font><font style="color:gray;background-color:rgb(229, 238, 204);">(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">30</font><font style="color:gray;background-color:rgb(229, 238, 204);">deg</font><font style="color:gray;background-color:rgb(229, 238, 204);">)</font><font style="color:gray;background-color:rgb(229, 238, 204);">; </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">/*</font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);"> Safari and Chrome </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">*/</font><font style="color:olive;background-color:rgb(229, 238, 204);">}</font>

<font style="color:rgb(0, 0, 0);background-color:rgb(229, 238, 204);">  
</font>[<font style="color:rgb(0, 0, 0);background-color:rgb(229, 238, 204);">尝试一下 »</font>](http://it028.com/try.php-filename=trycss3_transform_rotate.htm)

<font style="color:rgb(51, 51, 51);">rotate值（30deg）元素顺时针旋转30度。</font>

---

## <font style="color:rgb(51, 51, 51);">scale() 方法</font>
![]()

<font style="color:rgb(51, 51, 51);">scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数：</font>

![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435443779-b562e866-9f17-4ee3-a5ba-60374bad538f.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435443797-86fd81b2-2627-4117-833c-f2731ac6e6b6.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435443897-c901d61f-2e46-4ca9-9805-f4cf362b1a08.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435443953-ce84deda-b83b-4146-abee-0db7d5192f6d.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435444173-f89416f2-7184-46df-9687-123c2eea18a0.gif)

## <font style="color:rgb(97, 127, 16);background-color:rgb(229, 238, 204);">实例</font>
<font style="color:gray;background-color:rgb(229, 238, 204);">-ms-transform:</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">scale</font><font style="color:gray;background-color:rgb(229, 238, 204);">(2,3); </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">/*</font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);"> IE 9 </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">*/</font><font style="color:gray;background-color:rgb(229, 238, 204);"> -webkit-transform: </font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">scale</font><font style="color:gray;background-color:rgb(229, 238, 204);">(2,3); </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">/*</font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);"> Safari </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">*/</font><font style="color:gray;background-color:rgb(229, 238, 204);"> transform: </font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">scale</font><font style="color:gray;background-color:rgb(229, 238, 204);">(2,3); </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">/*</font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);"> 标准语法 </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">*/</font>

<font style="color:rgb(0, 0, 0);background-color:rgb(229, 238, 204);">  
</font>**<font style="color:rgb(255, 255, 255);background-color:rgb(138, 192, 7);">尝试一下 »</font>**

<font style="color:rgb(51, 51, 51);">scale（2,3）转变宽度为原来的大小的2倍，和其原始大小3倍的高度。</font>

---

## <font style="color:rgb(51, 51, 51);">skew() 方法</font>
### <font style="color:rgb(51, 51, 51);">语法</font>
transform:skew(<angle> [,<angle>]);

<font style="color:rgb(51, 51, 51);">包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜。</font>

+ <font style="color:rgb(51, 51, 51);">skewX(<angle>);表示只在X轴(水平方向)倾斜。</font>
+ <font style="color:rgb(51, 51, 51);">skewY(<angle>);表示只在Y轴(垂直方向)倾斜。</font>

![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435444305-a4366cb1-df52-41c3-b013-836e526ec7f3.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435444284-67fe3635-aa98-49b0-bab9-04ddc21d4abe.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435444565-6c45d7f1-a300-4010-963d-6084d4f8b8f1.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435444544-5d8296f9-e8f1-4abe-aa5d-99159713a017.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435444766-95bdc2d4-9ada-4c27-9c65-82e8a7c4fc9b.gif)

## <font style="color:rgb(97, 127, 16);background-color:rgb(229, 238, 204);">实例</font>
<font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">div</font><font style="color:olive;background-color:rgb(229, 238, 204);">{</font><font style="color:green;background-color:rgb(229, 238, 204);">transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">skew</font><font style="color:gray;background-color:rgb(229, 238, 204);">(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">30</font><font style="color:gray;background-color:rgb(229, 238, 204);">deg</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">20</font><font style="color:gray;background-color:rgb(229, 238, 204);">deg</font><font style="color:gray;background-color:rgb(229, 238, 204);">)</font><font style="color:gray;background-color:rgb(229, 238, 204);">; -</font><font style="color:green;background-color:rgb(229, 238, 204);">ms-transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">skew</font><font style="color:gray;background-color:rgb(229, 238, 204);">(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">30</font><font style="color:gray;background-color:rgb(229, 238, 204);">deg</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">20</font><font style="color:gray;background-color:rgb(229, 238, 204);">deg</font><font style="color:gray;background-color:rgb(229, 238, 204);">)</font><font style="color:gray;background-color:rgb(229, 238, 204);">; </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">/*</font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);"> IE 9 </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">*/</font><font style="color:gray;background-color:rgb(229, 238, 204);"> -</font><font style="color:green;background-color:rgb(229, 238, 204);">webkit-transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">skew</font><font style="color:gray;background-color:rgb(229, 238, 204);">(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">30</font><font style="color:gray;background-color:rgb(229, 238, 204);">deg</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">20</font><font style="color:gray;background-color:rgb(229, 238, 204);">deg</font><font style="color:gray;background-color:rgb(229, 238, 204);">)</font><font style="color:gray;background-color:rgb(229, 238, 204);">; </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">/*</font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);"> Safari and Chrome </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">*/</font><font style="color:olive;background-color:rgb(229, 238, 204);">}</font>

<font style="color:rgb(0, 0, 0);background-color:rgb(229, 238, 204);">  
</font>**<font style="color:rgb(255, 255, 255);background-color:rgb(138, 192, 7);">尝试一下 »</font>**

<font style="color:rgb(51, 51, 51);">skew(30deg,20deg) 元素在X轴和Y轴上倾斜20度30度。</font>

---

## <font style="color:rgb(51, 51, 51);">matrix() 方法</font>
![]()

<font style="color:rgb(51, 51, 51);">matrix()方法和2D变换方法合并成一个。</font>

<font style="color:rgb(51, 51, 51);">matrix 方法有六个参数，包含旋转，缩放，移动（平移）和倾斜功能。</font>

![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435444984-458e7726-5122-4e7a-9d19-195cb68c1a5c.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435445131-25c021d2-aaa2-4b93-8dbc-9eb81a6c1840.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435445177-93524f41-9dcd-4e07-b5b6-240723473ece.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435445258-c56d02a9-8ad9-4e9f-9a74-9fee9b745386.gif)![](https://cdn.nlark.com/yuque/0/2024/gif/45412035/1732435445443-94a26c8b-5462-496c-87b3-a9efa6237f58.gif)

## <font style="color:rgb(97, 127, 16);background-color:rgb(229, 238, 204);">实例</font>
<font style="color:rgb(0, 0, 0);background-color:rgb(229, 238, 204);">利用matrix()方法旋转div元素30°</font>

<font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">div</font><font style="color:olive;background-color:rgb(229, 238, 204);">{</font><font style="color:green;background-color:rgb(229, 238, 204);">transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">matrix</font><font style="color:gray;background-color:rgb(229, 238, 204);">(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0.866</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0.5</font><font style="color:gray;background-color:rgb(229, 238, 204);">,-</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0.5</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0.866</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0</font><font style="color:gray;background-color:rgb(229, 238, 204);">)</font><font style="color:gray;background-color:rgb(229, 238, 204);">; -</font><font style="color:green;background-color:rgb(229, 238, 204);">ms-transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">matrix</font><font style="color:gray;background-color:rgb(229, 238, 204);">(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0.866</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0.5</font><font style="color:gray;background-color:rgb(229, 238, 204);">,-</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0.5</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0.866</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0</font><font style="color:gray;background-color:rgb(229, 238, 204);">)</font><font style="color:gray;background-color:rgb(229, 238, 204);">; </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">/*</font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);"> IE 9 </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">*/</font><font style="color:gray;background-color:rgb(229, 238, 204);"> -</font><font style="color:green;background-color:rgb(229, 238, 204);">webkit-transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">matrix</font><font style="color:gray;background-color:rgb(229, 238, 204);">(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0.866</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0.5</font><font style="color:gray;background-color:rgb(229, 238, 204);">,-</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0.5</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0.866</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0</font><font style="color:gray;background-color:rgb(229, 238, 204);">,</font><font style="color:maroon;background-color:rgb(229, 238, 204);">0</font><font style="color:gray;background-color:rgb(229, 238, 204);">)</font><font style="color:gray;background-color:rgb(229, 238, 204);">; </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">/*</font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);"> Safari and Chrome </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">*/</font><font style="color:olive;background-color:rgb(229, 238, 204);">}</font>

<font style="color:rgb(0, 0, 0);background-color:rgb(229, 238, 204);">  
</font>**<font style="color:rgb(255, 255, 255);background-color:rgb(138, 192, 7);">尝试一下 »</font>**

  


---

## <font style="color:rgb(51, 51, 51);">新转换属性</font>
<font style="color:rgb(51, 51, 51);">以下列出了所有的转换属性:</font>

| <font style="color:rgb(255, 255, 255);">Property</font> | <font style="color:rgb(255, 255, 255);">描述</font> | <font style="color:rgb(255, 255, 255);">CSS</font> |
| --- | --- | --- |
| [<font style="color:rgb(51, 51, 51);">transform</font>](http://it028.com/css3-pr-transform.html) | <font style="color:rgb(51, 51, 51);">适用于2D或3D转换的元素</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">transform-origin</font>](http://it028.com/css3-pr-transform-origin.html) | <font style="color:rgb(51, 51, 51);">允许您更改转化元素位置</font> | <font style="color:rgb(51, 51, 51);">3</font> |


## <font style="color:rgb(51, 51, 51);">2D 转换方法</font>
| <font style="color:rgb(255, 255, 255);">函数</font> | <font style="color:rgb(255, 255, 255);">描述</font> |
| --- | --- |
| <font style="color:rgb(51, 51, 51);">matrix(</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 2D 转换，使用六个值的矩阵。</font> |
| <font style="color:rgb(51, 51, 51);">translate(</font>_<font style="color:rgb(51, 51, 51);">x</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">y</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 2D 转换，沿着 X 和 Y 轴移动元素。</font> |
| <font style="color:rgb(51, 51, 51);">translateX(</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 2D 转换，沿着 X 轴移动元素。</font> |
| <font style="color:rgb(51, 51, 51);">translateY(</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 2D 转换，沿着 Y 轴移动元素。</font> |
| <font style="color:rgb(51, 51, 51);">scale(</font>_<font style="color:rgb(51, 51, 51);">x</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">y</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 2D 缩放转换，改变元素的宽度和高度。</font> |
| <font style="color:rgb(51, 51, 51);">scaleX(</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 2D 缩放转换，改变元素的宽度。</font> |
| <font style="color:rgb(51, 51, 51);">scaleY(</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 2D 缩放转换，改变元素的高度。</font> |
| <font style="color:rgb(51, 51, 51);">rotate(</font>_<font style="color:rgb(51, 51, 51);">angle</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 2D 旋转，在参数中规定角度。</font> |
| <font style="color:rgb(51, 51, 51);">skew(</font>_<font style="color:rgb(51, 51, 51);">x-angle</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">y-angle</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 2D 倾斜转换，沿着 X 和 Y 轴。</font> |
| <font style="color:rgb(51, 51, 51);">skewX(</font>_<font style="color:rgb(51, 51, 51);">angle</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 2D 倾斜转换，沿着 X 轴。</font> |
| <font style="color:rgb(51, 51, 51);">skewY(</font>_<font style="color:rgb(51, 51, 51);">angle</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 2D 倾斜转换，沿着 Y 轴。</font> |




# <font style="color:rgb(0, 0, 0);">CSS3</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(100, 133, 76);">3D 转换</font>
---

## <font style="color:rgb(51, 51, 51);">3D 转换</font>
<font style="color:rgb(51, 51, 51);">3D 转换方法：</font>

+ <font style="color:rgb(51, 51, 51);">rotateX()</font>
+ <font style="color:rgb(51, 51, 51);">rotateY()</font>

## <font style="color:rgb(51, 51, 51);">rotateX() 方法</font>
<font style="color:rgb(51, 51, 51);">rotateX()方法，围绕其在一个给定度数X轴旋转的元素。</font>

<font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">div</font><font style="color:olive;background-color:rgb(229, 238, 204);">{</font><font style="color:green;background-color:rgb(229, 238, 204);">transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">rotateX</font><font style="color:gray;background-color:rgb(229, 238, 204);">(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">120</font><font style="color:gray;background-color:rgb(229, 238, 204);">deg</font><font style="color:gray;background-color:rgb(229, 238, 204);">)</font><font style="color:gray;background-color:rgb(229, 238, 204);">; -</font><font style="color:green;background-color:rgb(229, 238, 204);">webkit-transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">rotateX</font><font style="color:gray;background-color:rgb(229, 238, 204);">(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">120</font><font style="color:gray;background-color:rgb(229, 238, 204);">deg</font><font style="color:gray;background-color:rgb(229, 238, 204);">)</font><font style="color:gray;background-color:rgb(229, 238, 204);">; </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">/*</font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);"> Safari 与 Chrome </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">*/</font><font style="color:olive;background-color:rgb(229, 238, 204);">}</font>

<font style="color:rgb(0, 0, 0);background-color:rgb(229, 238, 204);">  
</font>**<font style="color:rgb(255, 255, 255);background-color:rgb(138, 192, 7);"></font>**<font style="color:rgb(51, 51, 51);">rotateY() 方法</font>

<font style="color:rgb(51, 51, 51);">rotateY()方法，围绕其在一个给定度数Y轴旋转的元素。</font>

<font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">div</font><font style="color:olive;background-color:rgb(229, 238, 204);">{</font><font style="color:green;background-color:rgb(229, 238, 204);">transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">rotateY(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">130</font><font style="color:gray;background-color:rgb(229, 238, 204);">deg); -</font><font style="color:green;background-color:rgb(229, 238, 204);">webkit-transform:</font><font style="color:gray;background-color:rgb(229, 238, 204);">rotateY(</font><font style="color:maroon;background-color:rgb(229, 238, 204);">130</font><font style="color:gray;background-color:rgb(229, 238, 204);">deg); </font><font style="color:rgb(170, 85, 0);background-color:rgb(229, 238, 204);">/* Safari 与 Chrome */</font><font style="color:olive;background-color:rgb(229, 238, 204);">}</font>

## <font style="color:rgb(51, 51, 51);">转换属性</font>
<font style="color:rgb(51, 51, 51);">下表列出了所有的转换属性：</font>

| <font style="color:rgb(255, 255, 255);">属性</font> | <font style="color:rgb(255, 255, 255);">描述</font> | <font style="color:rgb(255, 255, 255);">CSS</font> |
| --- | --- | --- |
| [<font style="color:rgb(51, 51, 51);">transform</font>](http://it028.com/css3-pr-transform.html) | <font style="color:rgb(51, 51, 51);">向元素应用 2D 或 3D 转换。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">transform-origin</font>](http://it028.com/css3-pr-transform-origin.html) | <font style="color:rgb(51, 51, 51);">允许你改变被转换元素的位置。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">transform-style</font>](http://it028.com/css3-pr-transform-style.html) | <font style="color:rgb(51, 51, 51);">规定被嵌套元素如何在 3D 空间中显示。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">perspective</font>](http://it028.com/css3-pr-perspective.html) | <font style="color:rgb(51, 51, 51);">规定 3D 元素的透视效果。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">perspective-origin</font>](http://it028.com/css3-pr-perspective-origin.html) | <font style="color:rgb(51, 51, 51);">规定 3D 元素的底部位置。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">backface-visibility</font>](http://it028.com/css3-pr-backface-visibility.html) | <font style="color:rgb(51, 51, 51);">定义元素在不面对屏幕时是否可见。</font> | <font style="color:rgb(51, 51, 51);">3</font> |


## <font style="color:rgb(51, 51, 51);">3D 转换方法</font>
| <font style="color:rgb(255, 255, 255);">函数</font> | <font style="color:rgb(255, 255, 255);">描述</font> |
| --- | --- |
| <font style="color:rgb(51, 51, 51);">matrix3d(</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,   </font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 3D 转换，使用 16 个值的 4x4 矩阵。</font> |
| <font style="color:rgb(51, 51, 51);">translate3d(</font>_<font style="color:rgb(51, 51, 51);">x</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">y</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">z</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 3D 转化。</font> |
| <font style="color:rgb(51, 51, 51);">translateX(</font>_<font style="color:rgb(51, 51, 51);">x</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 3D 转化，仅使用用于 X 轴的值。</font> |
| <font style="color:rgb(51, 51, 51);">translateY(</font>_<font style="color:rgb(51, 51, 51);">y</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 3D 转化，仅使用用于 Y 轴的值。</font> |
| <font style="color:rgb(51, 51, 51);">translateZ(</font>_<font style="color:rgb(51, 51, 51);">z</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 3D 转化，仅使用用于 Z 轴的值。</font> |
| <font style="color:rgb(51, 51, 51);">scale3d(</font>_<font style="color:rgb(51, 51, 51);">x</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">y</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">z</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 3D 缩放转换。</font> |
| <font style="color:rgb(51, 51, 51);">scaleX(</font>_<font style="color:rgb(51, 51, 51);">x</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 3D 缩放转换，通过给定一个 X 轴的值。</font> |
| <font style="color:rgb(51, 51, 51);">scaleY(</font>_<font style="color:rgb(51, 51, 51);">y</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 3D 缩放转换，通过给定一个 Y 轴的值。</font> |
| <font style="color:rgb(51, 51, 51);">scaleZ(</font>_<font style="color:rgb(51, 51, 51);">z</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 3D 缩放转换，通过给定一个 Z 轴的值。</font> |
| <font style="color:rgb(51, 51, 51);">rotate3d(</font>_<font style="color:rgb(51, 51, 51);">x</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">y</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">z</font>_<font style="color:rgb(51, 51, 51);">,</font>_<font style="color:rgb(51, 51, 51);">angle</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 3D 旋转。</font> |
| <font style="color:rgb(51, 51, 51);">rotateX(</font>_<font style="color:rgb(51, 51, 51);">angle</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义沿 X 轴的 3D 旋转。</font> |
| <font style="color:rgb(51, 51, 51);">rotateY(</font>_<font style="color:rgb(51, 51, 51);">angle</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义沿 Y 轴的 3D 旋转。</font> |
| <font style="color:rgb(51, 51, 51);">rotateZ(</font>_<font style="color:rgb(51, 51, 51);">angle</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义沿 Z 轴的 3D 旋转。</font> |
| <font style="color:rgb(51, 51, 51);">perspective(</font>_<font style="color:rgb(51, 51, 51);">n</font>_<font style="color:rgb(51, 51, 51);">)</font> | <font style="color:rgb(51, 51, 51);">定义 3D 转换元素的透视视图。</font> |


## <font style="color:rgb(51, 51, 51);">CSS3 过渡</font>
<font style="color:rgb(51, 51, 51);">CSS3中，我们为了添加某种效果可以从一种样式转变到另一个的时候，无需使用Flash动画或JavaScript。用鼠标移过下面的元素：</font>

```html
div
{
    transition: width 2s;
    -webkit-transition: width 2s; /* Safari */
}

```

```html
规定当鼠标指针悬浮(:hover)于 <div>元素上时：

div:hover
{
    width:300px;
}
```

## <font style="color:rgb(51, 51, 51);">多项改变</font>
```html
div
{
    transition: width 2s, height 2s, transform 2s;
    -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
}
```

## <font style="color:rgb(51, 51, 51);">过渡属性</font>
<font style="color:rgb(51, 51, 51);">下表列出了所有的过渡属性:</font>

| <font style="color:rgb(255, 255, 255);">属性</font> | <font style="color:rgb(255, 255, 255);">描述</font> | <font style="color:rgb(255, 255, 255);">CSS</font> |
| --- | --- | --- |
| [<font style="color:rgb(51, 51, 51);">transition</font>](http://it028.com/css3-pr-transition.html) | <font style="color:rgb(51, 51, 51);">简写属性，用于在一个属性中设置四个过渡属性。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">transition-property</font>](http://it028.com/css3-pr-transition-property.html) | <font style="color:rgb(51, 51, 51);">规定应用过渡的 CSS 属性的名称。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">transition-duration</font>](http://it028.com/css3-pr-transition-duration.html) | <font style="color:rgb(51, 51, 51);">定义过渡效果花费的时间。默认是 0。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">transition-timing-function</font>](http://it028.com/css3-pr-transition-timing-function.html) | <font style="color:rgb(51, 51, 51);">规定过渡效果的时间曲线。默认是 "ease"。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">transition-delay</font>](http://it028.com/css3-pr-transition-delay.html) | <font style="color:rgb(51, 51, 51);">规定过渡效果何时开始。默认是 0。</font> | <font style="color:rgb(51, 51, 51);">3</font> |


# <font style="color:rgb(0, 0, 0);">CSS3 </font><font style="color:rgb(100, 133, 76);">动画</font>
## <font style="color:rgb(51, 51, 51);">CSS3 @keyframes 规则</font>
<font style="color:rgb(51, 51, 51);">要创建 CSS3 动画，你需要了解 @keyframes 规则。</font>

<font style="color:rgb(51, 51, 51);">@keyframes 规则是创建动画。</font>

<font style="color:rgb(51, 51, 51);">@keyframes 规则内指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式。</font>  
 

## <font style="color:rgb(51, 51, 51);">CSS3的动画属性</font>
<font style="color:rgb(51, 51, 51);">下面的表格列出了 @keyframes 规则和所有动画属性：</font>

| <font style="color:rgb(255, 255, 255);">属性</font> | <font style="color:rgb(255, 255, 255);">描述</font> | <font style="color:rgb(255, 255, 255);">CSS</font> |
| --- | --- | --- |
| [<font style="color:rgb(51, 51, 51);">@keyframes</font>](http://it028.com/css3-pr-animation-keyframes.html) | <font style="color:rgb(51, 51, 51);">规定动画。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">animation</font>](http://it028.com/css3-pr-animation.html) | <font style="color:rgb(51, 51, 51);">所有动画属性的简写属性，除了 animation-play-state 属性。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">animation-name</font>](http://it028.com/css3-pr-animation-name.html) | <font style="color:rgb(51, 51, 51);">规定 @keyframes 动画的名称。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">animation-duration</font>](http://it028.com/css3-pr-animation-duration.html) | <font style="color:rgb(51, 51, 51);">规定动画完成一个周期所花费的秒或毫秒。默认是 0。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">animation-timing-function</font>](http://it028.com/css3-pr-animation-timing-function.html) | <font style="color:rgb(51, 51, 51);">规定动画的速度曲线。默认是 "ease"。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">animation-fill-mode</font>](http://it028.com/css3-pr-animation-fill-mode.html) | <font style="color:rgb(51, 51, 51);">规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">animation-delay</font>](http://it028.com/css3-pr-animation-delay.html) | <font style="color:rgb(51, 51, 51);">规定动画何时开始。默认是 0。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">animation-iteration-count</font>](http://it028.com/css3-pr-animation-iteration-count.html) | <font style="color:rgb(51, 51, 51);">规定动画被播放的次数。默认是 1。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">animation-direction</font>](http://it028.com/css3-pr-animation-direction.html) | <font style="color:rgb(51, 51, 51);">规定动画是否在下一周期逆向地播放。默认是 "normal"。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">animation-play-state</font>](http://it028.com/css3-pr-animation-play-state.html) | <font style="color:rgb(51, 51, 51);">规定动画是否正在运行或暂停。默认是 "running"。</font> | <font style="color:rgb(51, 51, 51);">3</font> |




## <font style="color:rgb(51, 51, 51);">CSS3 多列属性</font>
<font style="color:rgb(51, 51, 51);">下表列出了所有 CSS3 的多列属性：</font>

| <font style="color:rgb(255, 255, 255);">属性</font> | <font style="color:rgb(255, 255, 255);">描述</font> |
| --- | --- |
| [<font style="color:rgb(51, 51, 51);">column-count</font>](http://it028.com/css3-pr-column-count.html) | <font style="color:rgb(51, 51, 51);">指定元素应该被分割的列数。</font> |
| [<font style="color:rgb(51, 51, 51);">column-fill</font>](http://it028.com/css3-pr-column-fill.html) | <font style="color:rgb(51, 51, 51);">指定如何填充列</font> |
| [<font style="color:rgb(51, 51, 51);">column-gap</font>](http://it028.com/css3-pr-column-gap.html) | <font style="color:rgb(51, 51, 51);">指定列与列之间的间隙</font> |
| [<font style="color:rgb(51, 51, 51);">column-rule</font>](http://it028.com/css3-pr-column-rule.html) | <font style="color:rgb(51, 51, 51);">所有 column-rule-* 属性的简写</font> |
| [<font style="color:rgb(51, 51, 51);">column-rule-color</font>](http://it028.com/css3-pr-column-rule-color.html) | <font style="color:rgb(51, 51, 51);">指定两列间边框的颜色</font> |
| [<font style="color:rgb(51, 51, 51);">column-rule-style</font>](http://it028.com/css3-pr-column-rule-style.html) | <font style="color:rgb(51, 51, 51);">指定两列间边框的样式</font> |
| [<font style="color:rgb(51, 51, 51);">column-rule-width</font>](http://it028.com/css3-pr-column-rule-width.html) | <font style="color:rgb(51, 51, 51);">指定两列间边框的厚度</font> |
| [<font style="color:rgb(51, 51, 51);">column-span</font>](http://it028.com/css3-pr-column-span.html) | <font style="color:rgb(51, 51, 51);">指定元素要跨越多少列</font> |
| [<font style="color:rgb(51, 51, 51);">column-width</font>](http://it028.com/css3-pr-column-width.html) | <font style="color:rgb(51, 51, 51);">指定列的宽度</font> |
| [<font style="color:rgb(51, 51, 51);">columns</font>](http://it028.com/css3-pr-columns.html) | <font style="color:rgb(51, 51, 51);">设置 column-width 和 column-count 的简写</font> |


## <font style="color:rgb(51, 51, 51);">CSS3 用户界面</font>
<font style="color:rgb(51, 51, 51);">在 CSS3 中, 增加了一些新的用户界面特性来调整元素尺寸，框尺寸和外边框。</font>

<font style="color:rgb(51, 51, 51);">在本章中，您将了解以下的用户界面属性：</font>

+ <font style="color:rgb(51, 51, 51);">resize</font>
+ <font style="color:rgb(51, 51, 51);">box-sizing</font>
+ <font style="color:rgb(51, 51, 51);">outline-offset</font>

## <font style="color:rgb(51, 51, 51);">新的用户界面特性</font>
| <font style="color:rgb(255, 255, 255);">属性</font> | <font style="color:rgb(255, 255, 255);">说明</font> | <font style="color:rgb(255, 255, 255);">CSS</font> |
| --- | --- | --- |
| [<font style="color:rgb(51, 51, 51);">appearance</font>](http://it028.com/css3-pr-appearance.html) | <font style="color:rgb(51, 51, 51);">允许您使一个元素的外观像一个标准的用户界面元素</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">box-sizing</font>](http://it028.com/css3-pr-box-sizing.html) | <font style="color:rgb(51, 51, 51);">允许你以适应区域而用某种方式定义某些元素</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">icon</font>](http://it028.com/css3-pr-icon.html) | <font style="color:rgb(51, 51, 51);">为创作者提供了将元素设置为图标等价物的能力。</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">nav-down</font>](http://it028.com/css3-pr-nav-down.html) | <font style="color:rgb(51, 51, 51);">指定在何处使用箭头向下导航键时进行导航</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">nav-index</font>](http://it028.com/css3-pr-nav-index.html) | <font style="color:rgb(51, 51, 51);">指定一个元素的Tab的顺序</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">nav-left</font>](http://it028.com/css3-pr-nav-left.html) | <font style="color:rgb(51, 51, 51);">指定在何处使用左侧的箭头导航键进行导航</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">nav-right</font>](http://it028.com/css3-pr-nav-right.html) | <font style="color:rgb(51, 51, 51);">指定在何处使用右侧的箭头导航键进行导航</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">nav-up</font>](http://it028.com/css3-pr-nav-up.html) | <font style="color:rgb(51, 51, 51);">指定在何处使用箭头向上导航键时进行导航</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">outline-offset</font>](http://it028.com/css3-pr-outline-offset.html) | <font style="color:rgb(51, 51, 51);">外轮廓修饰并绘制超出边框的边缘</font> | <font style="color:rgb(51, 51, 51);">3</font> |
| [<font style="color:rgb(51, 51, 51);">resize</font>](http://it028.com/css3-pr-resize.html) | <font style="color:rgb(51, 51, 51);">指定一个元素是否是由用户调整大小</font> | <font style="color:rgb(51, 51, 51);">3</font> |


# <font style="color:rgb(0, 0, 0);">CSS 分页实例</font>
```html
ul.pagination {
    display: inline-block;
    padding: 0;
    margin: 0;
}

ul.pagination li {display: inline;}

ul.pagination li a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
}

 <body>
    <ul class="pagination">
      <li><a href="#!">&laquo;</a></li>
      <li><a class="active" href="#!">1</a></li>
      <li><a href="#!">2</a></li>
      <li><a href="#!">3</a></li>
      <li><a href="#!">4</a></li>
      <li><a href="#!">5</a></li>
      <li><a href="#!">&raquo;</a></li>
    </ul>
  </body>
```

# <font style="color:rgb(0, 0, 0);">CSS3 框大小</font>
<font style="color:rgb(51, 51, 51);">CSS3 </font>`<font style="color:rgb(51, 51, 51);">box-sizing</font>`<font style="color:rgb(51, 51, 51);"> 属性可以设置 width 和 height 属性中包含了 padding(内边距) 和 border(边框)。</font>

**<font style="color:rgb(51, 51, 51);">width(宽) + padding(内边距) + border(边框) = 元素实际宽度</font>**

**<font style="color:rgb(51, 51, 51);">height(高) + padding(内边距) + border(边框) = 元素实际高度</font>**

```html
.div1 {
    width: 300px;
    height: 100px;
    border: 1px solid blue;
}

.div2 {
    width: 300px;
    height: 100px;
    padding: 50px;
    border: 1px solid red;
}
```

## <font style="color:rgb(51, 51, 51);">CSS3 弹性盒子(Flex Box)</font>
## <font style="color:rgb(51, 51, 51);">CSS3 弹性盒子内容</font>
<font style="color:rgb(51, 51, 51);">弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成。</font>

<font style="color:rgb(51, 51, 51);">弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。</font>

<font style="color:rgb(51, 51, 51);">弹性容器内包含了一个或多个弹性子元素。</font>

**<font style="color:rgb(51, 51, 51);">注意：</font>**<font style="color:rgb(51, 51, 51);"> 弹性容器外及弹性子元素内是正常渲染的。弹性盒子只定义了弹性子元素如何在弹性容器内布局。</font>

<font style="color:rgb(51, 51, 51);">弹性子元素通常在弹性盒子内一行显示。默认情况每个容器只有一行。</font>

<font style="color:rgb(51, 51, 51);">以下元素展示了弹性子元素在一行内显示，从左到右:</font>

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
    display: -webkit-flex;
    display: flex;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
 
.flex-item {
    background-color: cornflowerblue;
    width: 100px;
    height: 100px;
    margin: 10px;
}
</style>
</head>
<body>
 
<div class="flex-container">
  <div class="flex-item">flex item 1</div>
  <div class="flex-item">flex item 2</div>
  <div class="flex-item">flex item 3</div> 
</div>
 
</body>
</html>
```

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);">如果我们设置 </font>`<font style="color:rgb(51, 51, 51);">direction</font>`<font style="color:rgb(51, 51, 51);"> 属性为 </font>`<font style="color:rgb(51, 51, 51);">rtl</font>`<font style="color:rgb(51, 51, 51);"> (right-to-left),弹性子元素的排列方式也会改变，页面布局也跟着改变:</font>

```html
body {
    direction: rtl;
}
 
.flex-container {
    display: -webkit-flex;
    display: flex;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
 
.flex-item {
    background-color: cornflowerblue;
    width: 100px;
    height: 100px;
    margin: 10px;
}

```

`<font style="color:rgb(51, 51, 51);">flex-direction</font>`<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">属性指定了弹性子元素在父容器中的位置。</font>

### <font style="color:rgb(51, 51, 51);">语法</font>
```plain
flex-direction: row | row-reverse | column | column-reverse
```

`<font style="color:rgb(51, 51, 51);">flex-direction</font>`<font style="color:rgb(51, 51, 51);">的值有:</font>

+ <font style="color:rgb(51, 51, 51);">row：横向从左到右排列（左对齐），默认的排列方式。</font>
+ <font style="color:rgb(51, 51, 51);">row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。</font>
+ <font style="color:rgb(51, 51, 51);">column：纵向排列。</font>
+ <font style="color:rgb(51, 51, 51);">column-reverse：反转纵向排列，从后往前排，最后一项排在最上面。</font>

## <font style="color:rgb(51, 51, 51);">justify-content 属性</font>
<font style="color:rgb(51, 51, 51);">内容对齐（justify-content）属性应用在弹性容器上，把弹性项沿着弹性容器的</font><font style="color:#DF2A3F;background-color:#FBDE28;">主轴线（main axis）对齐</font><font style="color:rgb(51, 51, 51);">。</font>

<font style="color:rgb(51, 51, 51);">justify-content 语法如下：</font>

<font style="color:rgb(51, 51, 51);">justify-content: flex-start | flex-end | center | space-between | space-around</font>

<font style="color:rgb(51, 51, 51);">各个值解析:</font>

+ **<font style="color:rgb(51, 51, 51);">flex-start：</font>**<font style="color:rgb(51, 51, 51);">  
</font>

<font style="color:rgb(51, 51, 51);">弹性项目向行头紧挨着填充。这个是默认值。第一个弹性项的main-start外边距边线被放置在该行的main-start边线，而后续弹性项依次平齐摆放。</font>

+ **<font style="color:rgb(51, 51, 51);">flex-end：</font>**<font style="color:rgb(51, 51, 51);">  
</font>

<font style="color:rgb(51, 51, 51);">弹性项目向行尾紧挨着填充。第一个弹性项的main-end外边距边线被放置在该行的main-end边线，而后续弹性项依次平齐摆放。</font>

+ **<font style="color:rgb(51, 51, 51);">center：</font>**<font style="color:rgb(51, 51, 51);">  
</font>

<font style="color:rgb(51, 51, 51);">弹性项目居中紧挨着填充。（如果剩余的自由空间是负的，则弹性项目将在两个方向上同时溢出）。</font>

+ **<font style="color:rgb(51, 51, 51);">space-between：</font>**<font style="color:rgb(51, 51, 51);">  
</font>

<font style="color:rgb(51, 51, 51);">弹性项目平均分布在该行上。如果剩余空间为负或者只有一个弹性项，则该值等同于flex-start。否则，第1个弹性项的外边距和行的main-start边线对齐，而最后1个弹性项的外边距和行的main-end边线对齐，然后剩余的弹性项分布在该行上，相邻项目的间隔相等。</font>

+ **<font style="color:rgb(51, 51, 51);">space-around：</font>**<font style="color:rgb(51, 51, 51);">  
</font>

<font style="color:rgb(51, 51, 51);">弹性项目平均分布在该行上，两边留有一半的间隔空间。如果剩余空间为负或者只有一个弹性项，则该值等同于center。否则，弹性项目沿该行分布，且彼此间隔相等（比如是20px），同时首尾两边和弹性容器之间留有一半的间隔（1/2*20px=10px）。</font>

<font style="color:rgb(51, 51, 51);"></font>

## <font style="color:rgb(51, 51, 51);">align-items 属性</font>
`<font style="color:rgb(51, 51, 51);">align-items</font>`<font style="color:rgb(51, 51, 51);"> 设置或检索弹性盒子元素在</font><font style="color:#DF2A3F;background-color:#FBDE28;">侧轴（纵轴）</font><font style="color:rgb(51, 51, 51);">方向上的对齐方式。</font>

### <font style="color:rgb(51, 51, 51);">语法</font>
```plain
align-items: flex-start | flex-end | center | baseline | stretch
```

<font style="color:rgb(51, 51, 51);">各个值解析:</font>

+ <font style="color:rgb(51, 51, 51);">flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。</font>
+ <font style="color:rgb(51, 51, 51);">flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。</font>
+ <font style="color:rgb(51, 51, 51);">center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。</font>
+ <font style="color:rgb(51, 51, 51);">baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。</font>
+ <font style="color:rgb(51, 51, 51);">stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。</font>

## <font style="color:rgb(51, 51, 51);">flex-wrap 属性</font>
**<font style="color:rgb(51, 51, 51);">flex-wrap</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">属性用于指定弹性盒子的子元素换行方式。</font>

### <font style="color:rgb(51, 51, 51);">语法</font>
```plain
flex-wrap: nowrap|wrap|wrap-reverse|initial|inherit;
```

<font style="color:rgb(51, 51, 51);">各个值解析:</font>

+ **<font style="color:rgb(51, 51, 51);">nowrap</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">- 默认， 弹性容器为单行。该情况下弹性子项可能会溢出容器。</font>
+ **<font style="color:rgb(51, 51, 51);">wrap</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">- 弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行</font>
+ **<font style="color:rgb(51, 51, 51);">wrap-reverse</font>**<font style="color:rgb(51, 51, 51);"> -反转 wrap 排列。</font>

## <font style="color:rgb(51, 51, 51);">align-content 属性</font>
`<font style="color:rgb(51, 51, 51);">align-content</font>`<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">属性用于修改</font><font style="color:rgb(51, 51, 51);"> </font>`<font style="color:rgb(51, 51, 51);">flex-wrap</font>`<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">属性的行为。类似于</font><font style="color:rgb(51, 51, 51);"> </font>`<font style="color:rgb(51, 51, 51);">align-items</font>`<font style="color:rgb(51, 51, 51);">, 但它不是设置弹性子元素的对齐，而是设置各个行的对齐。</font>

### <font style="color:rgb(51, 51, 51);">语法</font>
```plain
align-content: flex-start | flex-end | center | space-between | space-around | stretch
```

<font style="color:rgb(51, 51, 51);">各个值解析:</font>

+ `<font style="color:rgb(51, 51, 51);">stretch</font>`<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">- 默认。各行将会伸展以占用剩余的空间。</font>
+ `<font style="color:rgb(51, 51, 51);">flex-start</font>`<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">- 各行向弹性盒容器的起始位置堆叠。</font>
+ `<font style="color:rgb(51, 51, 51);">flex-end</font>`<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">- 各行向弹性盒容器的结束位置堆叠。</font>
+ `<font style="color:rgb(51, 51, 51);">center</font>`<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">-各行向弹性盒容器的中间位置堆叠。</font>
+ `<font style="color:rgb(51, 51, 51);">space-between</font>`<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">-各行在弹性盒容器中平均分布。</font>
+ `<font style="color:rgb(51, 51, 51);">space-around</font>`<font style="color:rgb(51, 51, 51);"> - 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。</font>

<font style="color:rgb(51, 51, 51);"></font>

## <font style="color:rgb(51, 51, 51);">弹性子元素属性</font>
### <font style="color:rgb(51, 51, 51);">排序</font>
### <font style="color:rgb(51, 51, 51);">语法</font>
```plain
order:
```

<font style="color:rgb(51, 51, 51);">各个值解析:</font>

+ <font style="color:rgb(51, 51, 51);"><integer>：用整数值来定义排列顺序，数值小的排在前面。可以为负值。</font>

### <font style="color:rgb(51, 51, 51);">对齐</font>
<font style="color:rgb(51, 51, 51);">设置"margin"值为"auto"值，自动获取弹性容器中剩余的空间。所以设置垂直方向margin值为"auto"，可以使弹性子元素在弹性容器的两上轴方向都完全居中。</font>

<font style="color:rgb(51, 51, 51);">以下实例在第一个弹性子元素上设置了 </font>`<font style="color:rgb(51, 51, 51);">margin-right: auto;</font>`<font style="color:rgb(51, 51, 51);"> 。 它将剩余的空间放置在元素的右侧：</font>

### <font style="color:rgb(51, 51, 51);">完美的居中</font>
<font style="color:rgb(51, 51, 51);">以下实例将完美解决我们平时碰到的居中问题。</font>

<font style="color:rgb(51, 51, 51);">使用弹性盒子，居中变的很简单，只想要设置 </font>`<font style="color:rgb(51, 51, 51);">margin: auto;</font>`<font style="color:rgb(51, 51, 51);"> 可以使得弹性子元素在两上轴方向上完全居中:</font>

### <font style="color:rgb(51, 51, 51);">align-self</font>
`<font style="color:rgb(51, 51, 51);">align-self</font>`<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">属性用于设置弹性元素自身在侧轴（纵轴）方向上的对齐方式。</font>

### <font style="color:rgb(51, 51, 51);">语法</font>
```plain
align-self: auto | flex-start | flex-end | center | baseline | stretch
```

<font style="color:rgb(51, 51, 51);">各个值解析:</font>

+ <font style="color:rgb(51, 51, 51);">auto：如果'align-self'的值为'auto'，则其计算值为元素的父元素的'align-items'值，如果其没有父元素，则计算值为'stretch'。</font>
+ <font style="color:rgb(51, 51, 51);">flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。</font>
+ <font style="color:rgb(51, 51, 51);">flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。</font>
+ <font style="color:rgb(51, 51, 51);">center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。</font>
+ <font style="color:rgb(51, 51, 51);">baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。</font>
+ <font style="color:rgb(51, 51, 51);">stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。</font>

### <font style="color:rgb(51, 51, 51);">flex</font>
`<font style="color:rgb(51, 51, 51);">flex</font>`<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">属性用于指定弹性子元素如何分配空间。</font>

### <font style="color:rgb(51, 51, 51);">语法</font>
```plain
flex: auto | initial | none | inherit |  [ flex-grow ] || [ flex-shrink ] || [ flex-basis ]
```

<font style="color:rgb(51, 51, 51);">各个值解析:</font>

+ <font style="color:rgb(51, 51, 51);">auto: 计算值为 1 1 auto</font>
+ <font style="color:rgb(51, 51, 51);">initial: 计算值为 0 1 auto</font>
+ <font style="color:rgb(51, 51, 51);">none：计算值为 0 0 auto</font>
+ <font style="color:rgb(51, 51, 51);">inherit：从父元素继承</font>
+ <font style="color:rgb(51, 51, 51);">[ flex-grow ]：定义弹性盒子元素的扩展比率。</font>
+ <font style="color:rgb(51, 51, 51);">[ flex-shrink ]：定义弹性盒子元素的收缩比率。</font>
+ <font style="color:rgb(51, 51, 51);">[ flex-basis ]：定义弹性盒子元素的默认基准值。</font>

## <font style="color:rgb(51, 51, 51);">CSS3 弹性盒子属性</font>
<font style="color:rgb(51, 51, 51);">下表列出了在弹性盒子中常用到的属性:</font>

| <font style="color:rgb(255, 255, 255);">属性</font> | <font style="color:rgb(255, 255, 255);">描述</font> |
| --- | --- |
| [<font style="color:rgb(51, 51, 51);">display</font>](http://it028.com/pr-class-display.html) | <font style="color:rgb(51, 51, 51);">指定 HTML 元素盒子类型。</font> |
| [<font style="color:rgb(51, 51, 51);">flex-direction</font>](http://it028.com/css3-pr-flex-direction.html) | <font style="color:rgb(51, 51, 51);">指定了弹性容器中子元素的排列方式</font> |
| [<font style="color:rgb(51, 51, 51);">justify-content</font>](http://it028.com/css3-pr-justify-content.html) | <font style="color:rgb(51, 51, 51);">设置弹性盒子元素在主轴（横轴）方向上的对齐方式。</font> |
| [<font style="color:rgb(51, 51, 51);">align-items</font>](http://it028.com/css3-pr-align-items.html) | <font style="color:rgb(51, 51, 51);">设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式。</font> |
| [<font style="color:rgb(51, 51, 51);">flex-wrap</font>](http://it028.com/css3-pr-flex-wrap.html) | <font style="color:rgb(51, 51, 51);">设置弹性盒子的子元素超出父容器时是否换行。</font> |
| [<font style="color:rgb(51, 51, 51);">align-content</font>](http://it028.com/css3-pr-align-content.html) | <font style="color:rgb(51, 51, 51);">修改 flex-wrap 属性的行为，类似 align-items, 但不是设置子元素对齐，而是设置行对齐</font> |
| [<font style="color:rgb(51, 51, 51);">flex-flow</font>](http://it028.com/css3-pr-flex-flow.html) | <font style="color:rgb(51, 51, 51);">flex-direction 和 flex-wrap 的简写</font> |
| [<font style="color:rgb(51, 51, 51);">order</font>](http://it028.com/css3-pr-order.html) | <font style="color:rgb(51, 51, 51);">设置弹性盒子的子元素排列顺序。</font> |
| [<font style="color:rgb(51, 51, 51);">align-self</font>](http://it028.com/css3-pr-align-self.html) | <font style="color:rgb(51, 51, 51);">在弹性子元素上使用。覆盖容器的 align-items 属性。</font> |
| [<font style="color:rgb(51, 51, 51);">flex</font>](http://it028.com/css3-pr-flex.html) | <font style="color:rgb(51, 51, 51);">设置弹性盒子的子元素如何分配空间。</font> |


# <font style="color:rgb(0, 0, 0);">CSS3 多媒体查询</font>
+ <font style="color:rgb(51, 51, 51);">viewport(视窗) 的宽度与高度</font>
+ <font style="color:rgb(51, 51, 51);">设备的宽度与高度</font>
+ <font style="color:rgb(51, 51, 51);">朝向 (智能手机横屏，竖屏) 。</font>
+ <font style="color:rgb(51, 51, 51);">分辨率</font>

## <font style="color:rgb(51, 51, 51);">多媒体查询语法</font>
<font style="color:rgb(51, 51, 51);">多媒体查询由多种媒体组成，可以包含一个或多个表达式，表达式根据条件是否成立返回 true 或 false。</font>

<font style="color:rgb(0, 0, 139);background-color:rgb(229, 238, 204);">@media</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">not</font><font style="color:gray;background-color:rgb(229, 238, 204);">|</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">only</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">mediatype</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">and</font><font style="color:gray;background-color:rgb(229, 238, 204);"> (</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">expressions</font><font style="color:gray;background-color:rgb(229, 238, 204);">) </font><font style="color:olive;background-color:rgb(229, 238, 204);">{</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">CSS</font><font style="color:gray;background-color:rgb(229, 238, 204);"> 代码...; </font><font style="color:olive;background-color:rgb(229, 238, 204);">}</font>

<font style="color:rgb(51, 51, 51);">如果指定的多媒体类型匹配设备类型则查询结果返回 true，文档会在匹配的设备上显示指定样式效果。</font>

<font style="color:rgb(51, 51, 51);">除非你使用了 not 或 only 操作符，否则所有的样式会适应在所有设备上显示效果。</font>

+ **<font style="color:rgb(51, 51, 51);">not:</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">not是用来排除掉某些特定的设备的，比如 @media not print（非打印设备）。</font>
+ **<font style="color:rgb(51, 51, 51);">only:</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">用来定某种特别的媒体类型。对于支持Media Queries的移动设备来说，如果存在only关键字，移动设备的Web浏览器会忽略only关键字并直接根据后面的表达式应用样式文件。对于不支持Media Queries的设备但能够读取Media Type类型的Web浏览器，遇到only关键字时会忽略这个样式文件。</font>
+ **<font style="color:rgb(51, 51, 51);">all:</font>**<font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">所有设备，这个应该经常看到。</font>

<font style="color:rgb(51, 51, 51);">你也可以在不同的媒体上使用不同的样式文件：</font>

<font style="color:gray;background-color:rgb(229, 238, 204);"><</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">link</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">rel</font><font style="color:gray;background-color:rgb(229, 238, 204);">="</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">stylesheet</font><font style="color:gray;background-color:rgb(229, 238, 204);">" </font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">media</font><font style="color:gray;background-color:rgb(229, 238, 204);">="</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">mediatype</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">and</font><font style="color:gray;background-color:rgb(229, 238, 204);">|</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">not</font><font style="color:gray;background-color:rgb(229, 238, 204);">|</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">only</font><font style="color:gray;background-color:rgb(229, 238, 204);"> (</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">expressions</font><font style="color:gray;background-color:rgb(229, 238, 204);">)" </font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">href</font><font style="color:gray;background-color:rgb(229, 238, 204);">="</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">print</font><font style="color:rgb(0, 85, 170);background-color:rgb(229, 238, 204);">.css</font><font style="color:gray;background-color:rgb(229, 238, 204);">"></font>

---

## <font style="color:rgb(51, 51, 51);">CSS3 多媒体类型</font>
| <font style="color:rgb(255, 255, 255);">值</font> | <font style="color:rgb(255, 255, 255);">描述</font> |
| --- | --- |
| <font style="color:rgb(51, 51, 51);">all</font> | <font style="color:rgb(51, 51, 51);">用于所有多媒体类型设备</font> |
| <font style="color:rgb(51, 51, 51);">print</font> | <font style="color:rgb(51, 51, 51);">用于打印机</font> |
| <font style="color:rgb(51, 51, 51);">screen</font> | <font style="color:rgb(51, 51, 51);">用于电脑屏幕，平板，智能手机等。</font> |
| <font style="color:rgb(51, 51, 51);">speech</font> | <font style="color:rgb(51, 51, 51);">用于屏幕阅读器</font> |


<font style="color:rgb(51, 51, 51);">  
</font><font style="color:rgb(51, 51, 51);"> </font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);"></font>

