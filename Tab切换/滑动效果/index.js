/**
 * Created by fm_babybear on 2017/6/12.
 */
$(".tabs li").on("click",function () {
    var $this=$(this)
    var index=$this.index()
    var height=$('.wrap').height()
    $this.siblings().removeClass('active')
    $this.addClass('active')
    $this.parents('.mod-tab').find('.panels').animate({
        top:-index*height
    })
})