(function (doc, win) {
    var docEl = doc.documentElement,//根元素html
        //判断窗口有没有orientationchange这个方法，有就赋值给一个变量，没有就返回resize方法。
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {

            var clientWidth = docEl.clientWidth,clientHeight = docEl.clientHeight;
            if (!clientHeight) return;
            docEl.style.fontSize = clientHeight / 90 + "px";
        };
    if (!doc.addEventListener) return;
    window.onload = recalc
    win.addEventListener(resizeEvt, recalc, false);//addEventListener事件方法接受三个参数：第一个是事件名称比如点击事件onclick，第二个是要执行的函数，第三个是布尔值
    doc.addEventListener('DOMContentLoaded', recalc, false)//绑定浏览器缩放与加载时间
})(document, window);
