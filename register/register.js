function reg() {
    var username = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    var repwd = document.getElementById("repassword").value;
    if(username == "") {
        alert("用户名不能为空");
        return false;
        // 下面就返回去了，不继续运行了
    }
    if(pwd == "" || repwd == "") {
        alert("密码不能为空");
        return false;
    }

    if(repwd != pwd) {
        alert("两次输入的密码不相同");
        return false;
    }

    localStorage.setItem("uname",username);
    localStorage.setItem("password",pwd);
    alert("注册成功");
    window.location.href = "../login/login.html";

}