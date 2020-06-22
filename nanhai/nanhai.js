var index=0;
//改变图片
function ChangeImg() {
    index++;
    var a=document.getElementsByClassName("img-slide");
    if(index>=a.length) index=0;
    for(var i=0;i<a.length;i++){
        a[i].style.display='none';
    }
    a[index].style.display='block';
}
//设置定时器，每隔两秒切换一张图片
setInterval(ChangeImg,2000); 