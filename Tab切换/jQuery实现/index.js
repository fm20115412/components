/**
 * Created by fm_babybear on 2017/6/12.
 */
$(".ct .item").on("click",function () {
    var $item=$(this);
    var $index=$item.index();
    $item.addClass("active");
    $item.siblings().removeClass("active");
    $(".panel").removeClass("active");
    $(".panel").eq($index).addClass("active");
})