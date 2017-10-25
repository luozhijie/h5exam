//初始化网页，该隐藏的隐藏。
$(document).ready(function () {
    var li = $("#ul_mac li");
    li.each(function (index,element) {
        $(element).hide();
    })

})

//一些标记变量
var macNavIsShow = false;

//遍历li显示
function showMacNavLi() {
    var li = $("#ul_mac li");
    li.each(function (index,element) {
        $(element).slideDown((index+1)*200);
    })
}


//显示mac导航条
function showMacNav() {
    if(!macNavIsShow){
        console.log("aaa");
    macNavIsShow = true;
    $("#mac_nav").slideDown("slow");
     showMacNavLi();
    }
}





