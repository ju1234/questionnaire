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
        EditaddRadio(paper,nqb,false,e)
    }else if(e.type == "c"){
        EditaddCheck(paper,nqb,false,e)
    }else if(e.type == "t"){
        EditaddTextarea(paper,nqb,false,e)
    }
});

// 提交数据
var submit = document.getElementById("submit");
submit.onclick = function () {
    window.location.href = "index.html";
};