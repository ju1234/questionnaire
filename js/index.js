/**
 * Created by jufei on 2016/12/5.
 */
var content = $("content");
FillIn(content);
var paper = $("paper");

// 根据localStorage生成页面
if(localStorage.data != null && localStorage.data != ""){
    var data = localStorage.data.split("@");
    addTitle(paper);
    data.forEach(function (e) {
        addContent(e);
    })

}else if(localStorage.data == "" || localStorage.data == null){
    var btn = document.createElement("button");
    btn.type = "button";
    btn.innerText = "新建问卷";
    btn.className = "new-btn";
    btn.style.marginTop = (paper.offsetHeight - 40)/2 - 40 + "px";
    btn.onclick = function () {
        window.location.href = "new.html";
    };
    paper.appendChild(btn);
}

localStorage.select = 0;

function addTitle(obj) {
    var box = document.createElement("div");
    box.className = "top-title";
    for(var i = 0;i<5;i++){
        var div = document.createElement("div");
        (function (k) {
            switch (k){
                case 0:
                    div.className = "test-title";
                    div.innerText = "标题";
                    box.appendChild(div);
                    break;
                case 1:
                    div.className = "test-time";
                    div.innerText = "时间";
                    box.appendChild(div);
                    break;
                case 2:
                    div.className = "test-state";
                    div.innerText = "状态";
                    box.appendChild(div);
                    break;
                case 3:
                    div.className = "test-operate";
                    div.innerText = "操作";
                    box.appendChild(div);
                    break;
                case 4:
                    div.className = "test-new";
                    var btn = document.createElement("button");
                    btn.innerText = "新建问卷";
                    btn.type = "button";
                    btn.onclick = function () {
                        window.location.href = "new.html";
                    };
                    div.appendChild(btn);
                    box.appendChild(div);
                    break;
            }
        })(i)
    }
    obj.appendChild(box)
}


function addContent(e) {
    var box = document.createElement("div");
    var data = JSON.parse(e);
    box.className = "line";
    for(var i=0;i<4;i++){
        var div = document.createElement("div");
        (function (k) {
            switch (k){
                case 0:
                    div.className = "test-title";
                    div.innerText = data.title;
                    box.appendChild(div);
                    break;
                case 1:
                    div.className = "test-time";
                    div.innerText = data.time;
                    box.appendChild(div);
                    break;
                case 2:
                    div.className = "test-state";
                    div.innerText = "已发布";
                    box.appendChild(div);
                    break;
                case 3:
                    div.className = "btn-group";
                    for(var j = 0;j<3;j++){
                        var btn = document.createElement("button");
                        (function (k) {
                            switch (k){
                                case 0:
                                    btn.innerText = "编辑";
                                    btn.type = "button";
                                    div.appendChild(btn);
                                    break;
                                case 1:
                                    btn.innerText = "删除";
                                    btn.type = "button";
                                    div.appendChild(btn);
                                    break;
                                case 2:
                                    btn.innerText = "查看";
                                    btn.type = "button";
                                    div.appendChild(btn);
                                    break;
                            }
                        })(j);
                    }
                    box.appendChild(div);
                    break;
            }
        })(i)
    }
    paper.appendChild(box);
}


//按钮添加点击事件
var btns = document.getElementsByTagName("button");
var edit = [],
    deleteBtn = [],
    viewBtn = [];

[].forEach.call(btns,function (e) {
    if(e.innerText == "编辑"){
        edit.push(e);
    } else if(e.innerText == "删除"){
        deleteBtn.push(e);
    }else if(e.innerText == "查看"){
        viewBtn.push(e);
    }
});

edit.forEach(function (e,index) {
    e.onclick = function () {
        localStorage.index = index;
        window.location.href = "edit.html";
    }
});

viewBtn.forEach(function (e,index) {
    e.onclick = function () {
        localStorage.index = index;
        window.location.href = "view.html";
    }
});

deleteBtn.forEach(function (e,index) {
    e.onclick = function () {
        createDialog(index);

    }
});

function createDialog(index) {
    // 背景
    var bg = document.createElement("div");
    bg.className = "dialog-bg";
    var height = document.documentElement.clientHeight || document.body.clientHeight;
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    bg.style.height = height + "px";
    bg.onclick = function (e) {
        if(e.target.className == "dialog-bg"){
            document.body.removeChild(bg);
        }
    };

    // 询问框
    var dialog = document.createElement("div");
    dialog.className = "dialog";
    dialog.style.left = (width - 400)/2 + "px";
    dialog.style.top = (height - 250)/2 + "px";
    var h3 = document.createElement("h3");
    h3.innerText = "是否删除此问卷";
    h3.setAttribute("style","text-align:center;margin-bottom:30px;");
    var btn_yes = document.createElement("button");
    btn_yes.setAttribute("style","padding:5px;color:red;margin-right:20px;margin-left:80px;")
    btn_yes.innerText = "是";
    var btn_no = document.createElement("button");
    btn_no.style.padding = "5px";
    btn_no.innerText = "否";

    //关闭按钮
    var close = document.createElement("span");
    close.setAttribute("style","cursor:pointer;font-size:40px;position:absolute;top:0;right:20px;");
    close.innerHTML = '&times';

    // 拖拽栏
    var drag = document.createElement("span");
    drag.setAttribute("style","width:350px;height:50px;position:absolute;left:0;top:0;cursor:move");



    dialog.appendChild(h3);
    dialog.appendChild(btn_yes);
    dialog.appendChild(btn_no);
    dialog.appendChild(close);
    dialog.appendChild(drag);
    bg.appendChild(dialog);


    document.body.appendChild(bg);

    btn_yes.onclick = function () {
        localStorage.index = index;
        deleteData(index);
        window.location.href = "index.html";
    };
    close.onclick = btn_no.onclick = function () {
        document.body.removeChild(bg);
    };

    var move = false;
    var left = null,
        top = null;
    drag.onmousedown = function (e) {
        move = true;
        left = e.clientX - dialog.offsetLeft;
        top = e.clientY - dialog.offsetTop;
    };
    drag.onmouseup = function () {
        move = false;
        left = null;
        top = null;
    };
    drag.onmousemove = function (e) {
        if(move){
            dialog.style.left = e.clientX - left +"px";
            dialog.style.top = e.clientY - top +"px";
        }
    }
}

