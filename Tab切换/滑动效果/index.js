/**
 * Created by fm_babybear on 2017/6/12.
 */
$(".tabs li").on("click",function () {
    var $this=$(this)
    var index=$this.index()
    var width=$('.wrap').width()
    $this.siblings().removeClass('active')
    $this.addClass('active')
    $this.parents('.mod-tab').find('.panels').animate({
        left:-index*width
    })
})