//初始化网页，该隐藏的隐藏。
$(document).ready(function () {
    hidenAll();
});

//隐藏所有二级菜单图标
function hidenAll() {

    $("#ul_mac li").each(function (index, element) {
        $(element).hide();
    });

    $("#ul_ipad li").each(function (index, element) {
        $(element).hide();
    });

    $("#ul_iphone li").each(function (index, element) {
        $(element).hide();
    });
}

//收起所有二级菜单
function hiddenAll2Nav() {
    switch (nowShow) {
        case "mac_nav" :
            $("#mac_nav").slideUp();
            break;
        case "ipad_nav" :
            $("#ipad_nav").slideUp();
            break;
        case "iphone_nav" :
            $("#iphone_nav").slideUp();
            break;
    }

}

//一些标记变量
var nowShow = "";//正在显示的导航条


//隐藏导航条和二级导航条
function hideNav() {
    switch (nowShow) {
        case "mac_nav":
            hiddenAll2Nav();
            $("#ul_mac li").each(function (index, element) {
                $(element).hide();
            });
            break;
        case "ipad_nav":
            hiddenAll2Nav();
            $("#ul_ipad li").each(function (index, element) {
                $(element).hide();
            });
            break;
        case "iphone_nav":
            hiddenAll2Nav();
            $("#ul_iphone li").each(function (index, element) {
                $(element).hide();
            });
            break;


    }
}


//遍历li显示
function showNavLi(whoShow) {
    switch (whoShow) {
        case "mac_nav" :
            $("#mac_nav").slideDown();
            $("#ul_mac li").each(function (index, element) {
                $(element).slideDown((index + 1) * 150);
            });
            break;
        case "ipad_nav" :
            $("#ipad_nav").slideDown();
            $("#ul_ipad li").each(function (index, element) {
                $(element).slideDown((index + 1) * 150);
            });
            break;
            case "iphone_nav" :
            $("#iphone_nav").slideDown();
            $("#ul_iphone li").each(function (index, element) {
                $(element).slideDown((index + 1) * 150);
            });
            break;
    }
}


//显示mac导航条
function showMacNav() {
    if (nowShow != "mac_nav") {
        hideNav();
    }
    showNavLi("mac_nav");
    nowShow = "mac_nav";
}

//显示ipad导航条
function showIpadNav() {
    if (nowShow != "ipad_nav") {
        hideNav();
    }
    showNavLi("ipad_nav");
    nowShow = "ipad_nav"
}
//显示iphone导航条
function showIphoneNav() {
    if (nowShow != "iphone_nav") {
        hideNav();
    }
    showNavLi("iphone_nav");
    nowShow = "iphone_nav"
}






