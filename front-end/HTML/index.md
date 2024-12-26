# 欢迎浏览 HTML 笔记

HTML（HyperText Markup Language，超文本标记语言）是构建网页和 Web 应用程序的基础语言。它用于定义网页的结构和内容，通过标记（标签）来描述文本、图像、链接、表格、表单等元素的布局和内容。HTML 是构建 Web 页面和应用的核心，它与 CSS 和 JavaScript 一起工作，分别负责页面的样式和交互。

---

### 核心特点

1. **标记语言**：

   - HTML 是一种标记语言，使用标签（tag）来描述网页的内容。标签通常成对出现，开标签 `<tag>` 和闭标签 `</tag>`。某些标签是自闭合的，如 `<img />` 或 `<br />`。

2. **网页结构**：

   - HTML 定义了网页的基本结构，包括文档类型、头部信息、主体内容等。

3. **超文本**：

   - HTML 支持超文本链接，可以通过 `<a>` 标签创建链接，将网页中的不同部分或外部资源连接起来。

4. **内容分层**：
   - HTML 通过不同的标签层次组织内容，例如：标题、段落、列表、表格、表单等。这样使得内容结构清晰且易于理解。

---

### 核心元素与标签

1. **文档结构**：

   - 每个 HTML 文档由以下几个主要部分组成：
     - `<!DOCTYPE html>`：声明文档类型，告知浏览器使用 HTML5 标准。
     - `<html>`：HTML 文档的根元素。
     - `<head>`：包含文档的元数据（如字符集、样式表、标题等）。
     - `<body>`：包含文档的可见内容（如文本、图片、链接等）。

   示例：

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Sample Page</title>
     </head>
     <body>
       <h1>Welcome to My Website</h1>
       <p>This is a sample webpage.</p>
     </body>
   </html>
   ```

2. **常见 HTML 标签**：

   - **标题标签**：`<h1>` 到 `<h6>`，表示不同级别的标题，`<h1>` 为最高级别。

     ```html
     <h1>Main Heading</h1>
     <h2>Sub Heading</h2>
     ```

   - **段落标签**：`<p>`，用于定义段落。

     ```html
     <p>This is a paragraph of text.</p>
     ```

   - **超链接标签**：`<a>`，用于创建超链接。

     ```html
     <a href="https://www.example.com">Visit Example</a>
     ```

   - **图片标签**：`<img>`，用于在页面中插入图片。通常带有 `src`（图片源）和 `alt`（替代文本）属性。

     ```html
     <img src="image.jpg" alt="Description of the image" />
     ```

   - **列表标签**：`<ul>`（无序列表）、`<ol>`（有序列表）、`<li>`（列表项）。

     ```html
     <ul>
       <li>Item 1</li>
       <li>Item 2</li>
     </ul>
     ```

   - **表格标签**：`<table>`、`<tr>`（表格行）、`<td>`（表格单元格）、`<th>`（表头单元格）。

     ```html
     <table>
       <tr>
         <th>Name</th>
         <th>Age</th>
       </tr>
       <tr>
         <td>John</td>
         <td>30</td>
       </tr>
     </table>
     ```

   - **表单标签**：`<form>`，用于创建用户输入数据的表单，常用的表单控件包括 `<input>`、`<textarea>`、`<select>`、`<button>` 等。
     ```html
     <form>
       <label for="name">Name:</label>
       <input type="text" id="name" name="name" />
       <input type="submit" value="Submit" />
     </form>
     ```

3. **块级元素与行内元素**：
   - **块级元素**：通常会占据整行并且可以设置宽高（如 `<div>`、`<p>`、`<h1>` 等）。
   - **行内元素**：只占据其内容的宽度，不会影响其他元素的布局（如 `<span>`、`<a>`、`<img>` 等）。

---

### HTML5 新特性

1. **语义化标签**：

   - HTML5 引入了多个语义化标签，使得网页结构更加清晰。常见的语义化标签包括：
     - `<header>`：页面或部分的头部。
     - `<nav>`：导航链接。
     - `<article>`：独立的内容块，通常代表一篇文章或一部分内容。
     - `<section>`：页面中的一个区域或段落。
     - `<footer>`：页面或部分的页脚。
     - `<aside>`：与主要内容略有关系的部分（如侧边栏）。

2. **多媒体元素**：

   - HTML5 提供了内建支持音频和视频的标签：
     - `<audio>`：用于嵌入音频内容。
     - `<video>`：用于嵌入视频内容。
     - 示例：
       ```html
       <video width="320" height="240" controls>
         <source src="movie.mp4" type="video/mp4" />
         Your browser does not support the video tag.
       </video>
       ```

3. **本地存储（LocalStorage 和 SessionStorage）**：

   - HTML5 引入了 Web 存储 API，使得在用户的浏览器中存储数据更加方便和持久：
     - `localStorage`：用于存储持久数据，即使浏览器关闭后数据仍然存在。
     - `sessionStorage`：用于存储会话数据，浏览器关闭后数据丢失。

4. **Canvas**：
   - `<canvas>` 元素允许开发者通过 JavaScript 绘制图形、动画、游戏等。

---

### HTML 与 Web 开发

- HTML 是构建网页的基础，CSS 和 JavaScript 负责样式和交互，因此这三者（HTML、CSS、JavaScript）通常一起使用，构成现代 Web 应用的核心技术栈。
- 随着 Web 开发的进步，HTML 的功能和表现力也不断增强，HTML5 特别关注提升 Web 应用的多媒体和互动体验。
