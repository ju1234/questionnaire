/**
 * Created by jufei on 2016/12/6.
 */
var content = $("content");
FillIn(content);


var data;
var allData = localStorage.data;
if(allData.indexOf("@")>0){
    var dataArr = localStorage.data.split("@");
    data = JSON.parse(dataArr[localStorage.index]);
}else {
    data = JSON.parse(allData);
}


$("title").innerText = data.title;
$("time").innerText = data.time;



var paper = $("paper-content");
var save = $("save");
var nqb = $("new-question-btn");
var types = document.getElementsByClassName("qt");
var newQuestion = $("new-question");

var count = data.question.length+1;

// 加载原有数据
data.question.forEach(function (e) {
    if(e.type == "r"){
        EditaddRadio(paper,nqb,true,e)
    }else if(e.type == "c"){
        EditaddCheck(paper,nqb,true,e)
    }else if(e.type == "t"){
        EditaddTextarea(paper,nqb,true,e)
    }
});

// 储存数据
save.addEventListener("click",function () {
    editSaveData(data,localStorage.index);
     window.location.href = "index.html";
});

// 添加问题
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