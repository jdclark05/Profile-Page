function edit() {
    var element = document.querySelector(".id-margin h1");
    element.innerText = element.innerText.split("").reverse().join("").toLowerCase();
} 

function add(num) {
    console.log("add");
    var countElement = document.getElementById("countTotal");
    countElement.innerText =  parseInt(countElement.innerText) + 1;
    deny(num);
}

function deny(num) {
    console.log("deny");
    var countElement = document.getElementById("countSub")
    countElement.innerText =  parseInt(countElement.innerText) - 1;
    document.getElementById("user" + num).remove();

}