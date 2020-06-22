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

var flag = 0;
// 用来取消提示框

function chk() {
    if(sessionStorage.getItem("username") ) {
        if(flag == 0) {
            alert("欢迎您"+sessionStorage.getItem("username") );
        }
        flag = 1;
    }
    else {
        alert("请先登录再访问");
        window.location.href = "../login/login.html";
    }
}