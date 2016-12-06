/**
 * Created by jufei on 2016/12/5.
 */
var content = $("content");
FillIn(content);


// 添加问题
var newQuestion = $("new-question");
var paper = $("paper-content");
var nqb = $("new-question-btn");
var types = document.getElementsByClassName("qt");
var type = null,
    count = 1;

// 设置问题类型
[].forEach.call(types,function (e,index) {
    switch (index){
        case 0:
            e.addEventListener("click",function () {
                type = 0;
            });
            break;
        case 1:
            e.addEventListener("click",function () {
                type = 1;
            });
            break;
        case 2:
            e.addEventListener("click",function () {
                type = 2;
            });
            break;
    }
});
// 新建类型
newQuestion.addEventListener("click",function () {
    switch (type){
        case 0:
            addRadio(paper,count,nqb,true);
            count++;
            break;
        case 1:
            addCheck(paper,count,nqb,true);
            count++;
            break;
        case 2:
            addTextarea(paper,count,nqb,true);
            count++;
            break;
    }
});


// 使用localStroge储存数据
var save = $("save");
var data = {};

function saveData() {
    data.title = $("title").innerText;
    data.question = [];
    data.time = $("time").value;
    var question = document.getElementsByClassName("question");
    if(question.length>0){
        localStorage.has = 1;
        [].forEach.call(question,function (e) {
            var q = {};
            q.title = e.getElementsByClassName("question-title")[0].innerText;
            q.item = [];
            var input = e.getElementsByTagName("input")[0] || e.getElementsByTagName("textarea")[0];
            if(input.tagName == "INPUT"){
                if(input.type == "radio"){
                    q.type = "r";
                }else if(input.type == "checkbox"){
                    q.type = "c";
                }
                    q.name = input.name;
            }else if(input.tagName == "TEXTAREA"){
                q.type = "t";
            }
            var items = e.getElementsByClassName("question-content")[0].getElementsByTagName("span");
            [].forEach.call(items,function (e) {
                q.item.push(e.innerText);
            });
            data.question.push(q);
        });
        var s = JSON.stringify(data);
        if(localStorage.data == "" || localStorage.data == null){
            localStorage.data  = s;
        }else {
            localStorage.data += "@" + s;
        }
    }

}

save.addEventListener("click",function () {
    if($("time").value == ""){
        alert("请输入日期")
    }else {
        saveData();
        window.location.href = "index.html";
    }
});

