const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-items");


function myfunction(){
    if(inputBox.value===''){
        alert("Please write something......")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        // adding delete icon
        let span=document.createElement("span");
        span.innerHTML="<img src='images/trash.png' class='mark'>";
        li.appendChild(span);
    }
    // clear the input box after adding items
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check")
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

// save data in local storage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();