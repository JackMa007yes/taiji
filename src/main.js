let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `
/*你好, 我是一名前端新人 
接下来我演示一下我的前端功底
首先我要准备一个div
*/
#div1 {
    border:1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把div变成一个八卦图
注意看好了
首先，把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
    poso
}
/* 八卦是阴阳形成的
一黑一白
*/
#div1{
    background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球*/
#div1::before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 1);
    background: rgb(0,0,0);
    background: rgb(0,0,0);
background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}

#div1::after {
    content: '';
    position: absolute;
    top: 100px;
    left: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    border-radius: 50%;
    display: block;
    width: 100px;
    height: 100px;
    background-color: rgba(0, 0, 0, 1);
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
`
let string2 = ''
    // string = string.replace(/\n/g, '<br>')


let n = 0
    // demo.innerHTML = string.substring(0, n)
    // 字符串第0个到第n个

let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            // 如果是回车  就不照搬
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp'
        } else {
            // 如果不是回车就照搬
            string2 += string[n]
        }
        // string2 += (string[n] === '\n' ? "<br>" : string[n])
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 9999)
        demo.scrollTo(0, 9999)
        if (n + 1 < string.length) {
            n += 1;
            step()
        }
    }, 10);
}

step()



// setInterval(() => {
//     n = n + 1;
//     demo.innerHTML = n;
// }, 1000);