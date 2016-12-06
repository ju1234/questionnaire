/**
 * Created by jufei on 2016/12/5.
 */
(function () {
    function FillIn(obj) {
        var height = document.documentElement.clientHeight || document.body.clientHeight;
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;
        obj.style.minHeight = height+scroll - 80 + "px";
    }
    window.FillIn = FillIn;
})();

function $(id) {
    return document.getElementById(id);
}





function addRadio(parent,count,obj,amend) {
    var box = document.createElement("div");
    box.className = "question";
    var title = document.createElement("div");
    title.className = "question-title";
    var content = document.createElement("div");
    content.className = "question-content";
    if(amend){
        title.innerHTML = "<i>"+count+".</i><span contenteditable='true' class='revise'> 这里是标题</span>";
        for(var i = 0;i<4;i++){
            var name = "p"+count;
            var p = "<div><input type='radio' name = "+name+"><span contenteditable='true' class='revise'>选项</span></div>";
            content.innerHTML += p;
        }
    }else {
        title.innerHTML = "<i>"+count+".</i><span> 这里是标题</span>";
        for(var i = 0;i<4;i++){
            var name = "p"+count;
            var p = "<div><input type='radio' name = "+name+"><span>选项</span></div>";
            content.innerHTML += p;
        }
    }
    box.appendChild(title);
    box.appendChild(content);

    parent.insertBefore(box, obj);

}

function addCheck(parent,count,obj,amend) {
    var box = document.createElement("div");
    box.className = "question";
    var title = document.createElement("div");
    title.className = "question-title";
    var content = document.createElement("div");
    content.className = "question-content";
    if(amend){
        title.innerHTML = "<i>"+count+".</i><span contenteditable='true'class='revise'> 这里是标题</span>";
        for(var i = 0;i<4;i++){
            var name = "p"+count;
            var p = "<div><input type='checkbox' name = "+name+"><span contenteditable='true' class='revise'>选项</span></div>";
            content.innerHTML += p;
        }
    }else {
        title.innerHTML = "<i>"+count+".</i><span> 这里是标题</span>";
        for(var i = 0;i<4;i++){
            var name = "p"+count;
            var p = "<div><input type='checkbox' name = "+name+"><span>选项</span></div>";
            content.innerHTML += p;
        }
    }
    box.appendChild(title);
    box.appendChild(content);
    parent.insertBefore(box, obj);
}

function addTextarea(parent,count,obj,amend) {
    var box = document.createElement("div");
    box.className = "question";
    var title = document.createElement("div");
    title.className = "question-title";
    if(amend){
        title.innerHTML = "<i>"+count+".</i><span contenteditable='true' class='revise'> 这里是标题</span>";
    }else {
        title.innerHTML = "<i>"+count+".</i><span> 这里是标题</span>";
    }
    var content = document.createElement("div");
    content.className = "question-content";
    var textarea = document.createElement("textarea");
    content.appendChild(textarea);
    box.appendChild(title);
    box.appendChild(content);
    parent.insertBefore(box, obj);
}



//edit页

function EditaddRadio(parent,obj,amend,data) {
    var box = document.createElement("div");
    box.className = "question";
    var title = document.createElement("div");
    title.className = "question-title";
    var content = document.createElement("div");
    content.className = "question-content";
    if(amend){
        title.innerHTML = "<i>"+data.title.split(".")[0]+".</i><span contenteditable='true' class='revise'>"+data.title.split(".")[1]+"</span>";
        for(var i = 0;i<4;i++){
            var name = data.name;
            var p = "<div><input type='radio' name = "+name+"><span contenteditable='true' class='revise'>"+data.item[i]+"</span></div>";
            content.innerHTML += p;
        }
    }else {
        title.innerHTML = "<i>"+data.title.split(".")[0]+".</i><span>"+data.title.split(".")[1]+"</span>";
        for(var i = 0;i<4;i++){
            var name = data.name;
            var p = "<div><input type='radio' name = "+name+"><span>"+data.item[i]+"</span></div>";
            content.innerHTML += p;
        }
    }
    box.appendChild(title);
    box.appendChild(content);

    parent.insertBefore(box, obj);

}

function EditaddCheck(parent,obj,amend,data) {
    var box = document.createElement("div");
    box.className = "question";
    var title = document.createElement("div");
    title.className = "question-title";
    var content = document.createElement("div");
    content.className = "question-content";
    if(amend){
        title.innerHTML = "<i>"+data.title.split(".")[0]+".</i><span contenteditable='true' class='revise'>"+data.title.split(".")[1]+"</span>";
        for(var i = 0;i<4;i++){
            var name = data.name;
            var p = "<div><input type='checkbox' name = "+name+"><span contenteditable='true' class='revise'>"+data.item[i]+"</span></div>";
            content.innerHTML += p;
        }
    }else {
        title.innerHTML = "<i>"+data.title.split(".")[0]+".</i><span>"+data.title.split(".")[1]+"</span>";
        for(var i = 0;i<4;i++){
            var name = data.name;
            var p = "<div><input type='checkbox' name = "+name+"><span>"+data.item[i]+"</span></div>";
            content.innerHTML += p;
        }
    }
    box.appendChild(title);
    box.appendChild(content);
    parent.insertBefore(box, obj);
}

function EditaddTextarea(parent,obj,amend,data) {
    var box = document.createElement("div");
    box.className = "question";
    var title = document.createElement("div");
    title.className = "question-title";
    if(amend){
        title.innerHTML = "<i>"+data.title.split(".")[0]+".</i><span contenteditable='true' class='revise'>"+data.title.split(".")[1]+"</span>";
    }else {
        title.innerHTML = "<i>"+data.title.split(".")[0]+".</i><span>"+data.title.split(".")[1]+"</span>";
    }
    var content = document.createElement("div");
    content.className = "question-content";
    var textarea = document.createElement("textarea");
    content.appendChild(textarea);
    box.appendChild(title);
    box.appendChild(content);
    parent.insertBefore(box, obj);
}

function editSaveData(data,index) {
    data.title = $("title").innerText;
    data.time = $("time").innerText;
    data.question = [];
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
                console.log(q.item);
            });
            data.question.push(q);

        });
        var s = JSON.stringify(data);
        var allData = localStorage.data.split("@");
        allData.splice(index,1,s);

        var string = "";
        if(allData.length>1){
            allData.forEach(function (e,index) {
                if(index == 0){
                    string += e;
                }else {
                    string += "@"+e;
                }
            });
        }else {
            string = allData[0];
        }
        localStorage.data = string;
    }
}



// 删除数据
function deleteData(index) {
    var allData = localStorage.data;
    var dataArr = allData.split("@");
    dataArr.splice(index,1);
    var string = "";
    if(typeof dataArr[0] == "undefined"){
        localStorage.data = "";
    }else {
        if(dataArr.length>1){
            dataArr.forEach(function (e,index) {
                if(index == 0){
                    string = e;
                }else {
                    string += "@"+e;
                }
            });
            localStorage.data = string;
        }else {
            string = dataArr[0];
            localStorage.data = string;
        }
    }
}

