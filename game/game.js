var objimg;

function dragstart(that) {
    objimg = that;
    console.log(objimg);
}

function enter() {
    e = window.event;
    e.preventDefault();
}

function getObj(that) {
    var obj = objimg.cloneNode();
    that.appendChild(obj);
    alert("诶！这个才是你的最佳选择");
}

function dragstart2() {
    alert("不如再想想？");
}