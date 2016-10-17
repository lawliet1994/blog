//var gen = prompt("what's your gender ? (male/famele)");
// if (gen == "male") {
//     var bac = document.getElementById("main");
//     bac.style.background="green";
//     alert("welcome,man")
// }
// else {
//     alert("welcome,lady")
// }
var abi = document.getElementById("hehe").getElementsByTagName("div");
function show(num) {
    for (var i=0;i<abi.length;i++)
    if (i==num){  
        abi[i].className="fou";
    }else{
        abi[i].className="";
    }
}