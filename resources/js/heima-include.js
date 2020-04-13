/*包含页面*/
$(function(){
    $.get("http://web.shop.com:8020/webcode/header.html",function (data) {
        $("#header").html(data);
    });
    $.get("http://web.shop.com:8020/webcode/foot.html",function (data) {
        $("#footer").html(data);
    });
});