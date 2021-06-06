// (function (doc, win) {
//     const boxs = document.getElementsByClassName("box")
//     boxs.forEach(item => {
//         item.appendChild("<div class='lt'></div>")
//     })
// })(document, window);
$(document).ready(function (){
    $(".box").append("<div class='lt'></div>");
    $(".box").append("<div class='rt'></div>")
    $(".box").append("<div class='lb'></div>")
    $(".box").append("<div class='rb'></div>")
})
