 function log() {
     var username = document.getElementById("username").value;
     var pwd = document.getElementById("password").value;
     if(username == "" || pwd == "") {
         alert("输入不能为空");
         return false;
    }
    // localStorage里有
    if(localStorage.getItem("uname")) {
        var uname = localStorage.getItem("uname").toString();
        var pass = localStorage.getItem("password").toString();
        if(uname == username) {
            if(pwd == pass) {
                sessionStorage.setItem("username",uname);
                alert("登录成功");
                window.location.href = "../index/index.html";
            }
            else {
                alert("输入的密码不正确");
            }
        }
        else {
            alert("输入的用户名不正确");
        }
    }
    else {
        alert("请先注册");
    }
}