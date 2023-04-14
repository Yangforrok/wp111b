## HTML 的基礎知識
 HTML（Hypertext Markup Language）是一種用於創建網頁和其他互動式文檔的標記語言，它使用標籤和屬性描述文檔的內容和結構，讓瀏覽器能夠正確地顯示文檔的內容。以下是 HTML 的基礎知識：

1. HTML 文檔的結構：一個 HTML 文檔由多個元素（element）組成，每個元素由標籤（tag）和內容（content）組成，標籤用於描述元素的類型和屬性，內容用於描述元素的內容。

2. HTML 的基本結構：一個 HTML 文檔包含三個主要部分：DOCTYPE聲明、HTML標籤和HEAD、BODY標籤。DOCTYPE聲明用於聲明文檔類型，HTML標籤用於包裹整個文檔，HEAD標籤用於包含文檔的元信息，BODY標籤用於包含文檔的主要內容。

3. HTML 標籤的屬性：HTML 標籤可以擁有屬性（attribute），用於描述標籤的詳細信息，例如標籤的 ID、class、style 等等。屬性通常由鍵值對組成，例如：class="container"。

4. 常用的 HTML 標籤：HTML 標籤有很多種，其中比較常用的包括：<p>（段落）、<h1> - <h6>（標題）、<a>（超鏈接）、<img>（圖片）、<ul> 和 <li>（無序列表）、<ol> 和 <li>（有序列表）等等。

5. HTML 的版本：HTML 的版本有很多種，從最初的 HTML 1.0 到最新的 HTML5，每個版本都有自己的新特性和改進，開發者需要選擇合適的版本來開發自己的網頁。

總體來說，HTML 是網頁開發中非常重要的一個環節，開發者需要了解 HTML 的基礎知識，包括文檔結構、標籤、屬性等等，才能夠正確地創建和維護網頁。
## HTML 的結構
HTML（Hypertext Markup Language）是一種用於創建網頁和其他互動式文檔的標記語言，HTML 文檔的結構包括以下三個主要部分：

1. DOCTYPE聲明：DOCTYPE聲明用於聲明 HTML 文檔的版本和類型，告訴瀏覽器該如何解析文檔。例如，以下是 HTML5 的 DOCTYPE聲明：
<!DOCTYPE html>
2. HTML 標籤：HTML 標籤用於包裹整個文檔，告訴瀏覽器這是一個 HTML 文檔。HTML 標籤通常寫在文檔的最開頭和最結尾處，例如：
3. HEAD 和 BODY 標籤：HEAD 和 BODY 標籤是 HTML 文檔的兩個主要部分。HEAD 標籤包含文檔的元信息，例如標題、描述、CSS 风格表和腳本等等。BODY 標籤包含文檔的主要內容，例如文字、圖像、表格、表單等等。以下是 HEAD 和 BODY 標籤的基本結構：

<html>
  <head>
    <!-- 文檔的元信息，例如標題、描述、CSS 风格表和腳本等等 -->
  </head>
  <body>
    <!-- 文檔的主要內容，例如文字、圖像、表格、表單等等 -->
  </body>
</html>

<html>
  <!-- 文檔的內容 -->
</html>
總體來說，HTML 文檔的結構是簡單的層次結構，由 DOCTYPE聲明、HTML 標籤和 HEAD、BODY 標籤組成，開發者需要遵循這個結構來創建自己的 HTML 文檔。

## HTML 的常用標籤
HTML 的標籤用於定義網頁的結構和內容。以下是一些 HTML 中常用的標籤：

1. <html>：定義整個 HTML 文檔。

2. <head>：定義文檔的元信息，包括標題、字符集、腳本等等。

3. <body>：定義文檔的主要內容。

4. <h1>~<h6>：定義標題，其中<h1>是最大的標題，<h6>是最小的標題。

5. <p>：定義段落。

6. <a>：定義超鏈接，通過該標籤可以在文本或圖像中添加連接到其他頁面或文件的鏈接。

7. <img>：定義圖像，通過該標籤可以在網頁上插入圖片。

8. <ul> 和 <li>：定義無序列表，<ul>標籤用來定義列表，<li>標籤用來定義列表項。

9. <ol> 和 <li>：定義有序列表，<ol>標籤用來定義列表，<li>標籤用來定義列表項。

10. <table>、<thead>、<tbody>、<tr>、<th>、<td>：定義表格，<table>標籤用來定義表格，<thead>和<tbody>標籤用來定義表格的標題和主體部分，<tr>標籤用來定義表格中的行，<th>標籤用來定義表格的標題列，<td>標籤用來定義表格的內容列。

11. <form>、<input>、<button>：定義表單，<form>標籤用來定義表單，<input>標籤用來定義表單中的輸入字段，<button>標籤用來定義表單中的按鈕。

以上僅是 HTML 中常用標籤的一部分，還有很多其他的標籤可以用來定義網頁的結構和內容。
## HTML 的表單
HTML 中的表單用於收集和提交用戶輸入的數據，如用戶名、密碼、郵件地址等等。以下是一個簡單的表單的示例：
<form>
  <label for="username">用戶名：</label>
  <input type="text" id="username" name="username"><br>

  <label for="password">密碼：</label>
  <input type="password" id="password" name="password"><br>

  <label for="email">郵件地址：</label>
  <input type="email" id="email" name="email"><br>

  <input type="submit" value="提交">
</form>
上面的 HTML 代碼定義了一個包含用戶名、密碼和郵件地址等輸入字段的表單。其中，<form>標籤用來定義表單，<label>標籤用來定義輸入字段的標籤，<input>標籤用來定義表單中的輸入字段，<input type="submit">用來定義提交按鈕。

在表單提交之前，還需要指定表單提交的目標地址。可以使用 action 屬性指定提交的目標地址，例如：
<form action="http://example.com/submit-form" method="post">
  <!-- 表單內容 -->
</form>
其中，action 屬性指定了表單提交的目標地址，method="post"則指定了使用 POST 方法提交表單數據。當用戶提交表單時，表單數據會被發送到指定的目標地址。目標地址可以是一個 URL，也可以是一個服務器端的腳本文件。
HTML 中的表單用於收集和提交用戶輸入的數據，如用戶名、密碼、郵件地址等等。以下是一個簡單的表單的示例：

html
Copy code
<form>
  <label for="username">用戶名：</label>
  <input type="text" id="username" name="username"><br>

  <label for="password">密碼：</label>
  <input type="password" id="password" name="password"><br>

  <label for="email">郵件地址：</label>
  <input type="email" id="email" name="email"><br>

  <input type="submit" value="提交">
</form>
上面的 HTML 代碼定義了一個包含用戶名、密碼和郵件地址等輸入字段的表單。其中，<form>標籤用來定義表單，<label>標籤用來定義輸入字段的標籤，<input>標籤用來定義表單中的輸入字段，<input type="submit">用來定義提交按鈕。

在表單提交之前，還需要指定表單提交的目標地址。可以使用 action 屬性指定提交的目標地址，例如：

html
Copy code
<form action="http://example.com/submit-form" method="post">
  <!-- 表單內容 -->
</form>
其中，action 屬性指定了表單提交的目標地址，method="post"則指定了使用 POST 方法提交表單數據。當用戶提交表單時，表單數據會被發送到指定的目標地址。目標地址可以是一個 URL，也可以是一個服務器端的腳本文件。
## HTML5 新增的功能
HTML5 是 HTML 的第五個版本，自從 2014 年正式發布以來，帶來了許多新的功能和改進。以下是一些 HTML5 新增的功能：

語意化標籤：HTML5 引入了一些新的標籤，如 <article>、<aside>、<header>、<footer> 等，用於更好地描述網頁的內容和結構，提高了網頁的可讀性和可訪問性。

多媒體支持：HTML5 引入了一些新的標籤，如 <audio>、<video> 等，用於在網頁上播放音頻和視頻，不再需要使用第三方插件（如 Flash）來實現。

Canvas 和 SVG：HTML5 引入了一些新的技術，如 Canvas 和 SVG，用於在網頁上繪製圖形和動畫。Canvas 提供了一個繪圖 API，可以使用 JavaScript 程序繪製圖形和動畫，而 SVG 則使用 XML 描述繪圖內容。

新的表單控件：HTML5 引入了一些新的表單控件，如 <input type="date">、<input type="time">、<input type="email"> 等，用於更方便地收集用戶輸入的數據。

Web 存儲：HTML5 引入了一些新的 Web 存儲技術，如 Local Storage 和 Session Storage，用於在用戶端存儲數據，可以用於實現離線應用和持久化存儲等功能。

Web Workers：HTML5 引入了 Web Workers 技術，可以讓 JavaScript 程序在後台運行，從而提高網頁的性能和反應速度。

WebSocket：HTML5 引入了 WebSocket 技術，用於實現客戶端和服務器端之間的即時通信，可以用於實現聊天室、遊戲等應用。

這些功能的出現，使得網站開發更加豐富多彩、交互性更強，也更能滿足用戶的需求。
## HTML5 新增的功能
HTML5 是 HTML 的第五個版本，自從 2014 年正式發布以來，帶來了許多新的功能和改進。以下是一些 HTML5 新增的功能：

1. 語意化標籤：HTML5 引入了一些新的標籤，如 <article>、<aside>、<header>、<footer> 等，用於更好地描述網頁的內容和結構，提高了網頁的可讀性和可訪問性。

2. 多媒體支持：HTML5 引入了一些新的標籤，如 <audio>、<video> 等，用於在網頁上播放音頻和視頻，不再需要使用第三方插件（如 Flash）來實現。

3. Canvas 和 SVG：HTML5 引入了一些新的技術，如 Canvas 和 SVG，用於在網頁上繪製圖形和動畫。Canvas 提供了一個繪圖 API，可以使用 JavaScript 程序繪製圖形和動畫，而 SVG 則使用 XML 描述繪圖內容。

4. 新的表單控件：HTML5 引入了一些新的表單控件，如 <input type="date">、<input type="time">、<input type="email"> 等，用於更方便地收集用戶輸入的數據。

5. Web 存儲：HTML5 引入了一些新的 Web 存儲技術，如 Local Storage 和 Session Storage，用於在用戶端存儲數據，可以用於實現離線應用和持久化存儲等功能。

Web Workers：HTML5 引入了 Web Workers 技術，可以讓 JavaScript 程序在後台運行，從而提高網頁的性能和反應速度。

WebSocket：HTML5 引入了 WebSocket 技術，用於實現客戶端和服務器端之間的即時通信，可以用於實現聊天室、遊戲等應用。

這些功能的出現，使得網站開發更加豐富多彩、交互性更強，也更能滿足用戶的需求。