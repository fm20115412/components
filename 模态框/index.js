/**
 * Created by fm_babybear on 2017/6/12.
 */
var btn=document.getElementById('btn'),
    cancle=document.getElementsByClassName('btn-cancle')[0],
    close=document.getElementsByClassName('close')[0],
    modalDialog=document.getElementsByClassName('modal-dialog')[0],
    modalCt=document.getElementsByClassName('modal-ct')[0]
btn.addEventListener('click',function (event) {
    event.stopPropagation()
    modalDialog.style.display='block'
})
modalCt.addEventListener('click',function (event) {
    event.stopPropagation()
    if(event.target ===cancle || event.target === close){
        modalDialog.style.display='none'
    }
})
document.body.addEventListener('click',function () {
    modalDialog.style.display='none'
})