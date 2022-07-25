let html = document.querySelector("#html");
let style = document.querySelector("#style");
let i = 0;
let str_temp = "";
let str = `
/* 你好, 我叫小陈
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
 */
#div1 {
   border: 1px solid red;
   width: 400px;
   height: 400px;
   position: fixed;
   top: 20px;
   right: 20px;
}

/* 接下来我把div变成一个八卦图
 * 首先, 把div变成一个圆
 */
#div1 {
   border-radius: 50%;
   box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
   border: none; 
}

/* 八卦是阴阳形成的
 * 一黑一白
 */
#div1 {
   background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
}

/* 阴阳互补,相辅相成*/
#div1::before {
   content: '';
   display: block;
   width: 200px;
   height: 200px;
   /* border: 1px solid red; */
   background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);
   border-radius: 50%;
   position: absolute;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
}

#div1::after {
   content: '';
   display: block;
   width: 200px;
   height: 200px;
   /* border: 1px solid red; */
   background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%);
   border-radius: 50%;
   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translateX(-50%);
}
`;
function start() {
  let inter_id = setInterval(() => {
    console.log("拿到下标" + i);
    // 判断每次拼接,回车/空格/字符
    if (str[i] === "\n") {
      str_temp += "<br>";
    } else if (str[i] === " ") {
      str_temp += "&nbsp";
    } else {
      str_temp += str[i];
    }
    // 每次修改页面
    html.innerHTML = str_temp;
    style.innerHTML = str.substring(0, i + 1); //不需要空格/换行
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    // 判断是否清除定时器
    i >= str.length - 1 && clearInterval(inter_id);
    // 自增
    i = i + 1;
  }, 50);
}

start();
console.log("总长度" + str.length);
