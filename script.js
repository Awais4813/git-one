var li = document.querySelectorAll("li");
li.forEach((val)=>{
    val.addEventListener("mousedown",function() {
        val.style.backgroundColor = "rgb(179, 179, 179)";
        val.style.borderColor = "rgb(179, 179, 179)";
    })
    val.addEventListener("mouseup",function() {
        val.style.backgroundColor = "white";
        val.style.color = "black";
        val.style.borderColor = "white";
    })
    val.addEventListener("mouseleave",function(){
        val.style.backgroundColor = "";
        val.style.color = "white";
    })
    val.addEventListener("mouseenter",function(){
        val.style.backgroundColor = "white";
        val.style.color = "black";
    })
})