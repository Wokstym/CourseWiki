var imgbuttons = document.querySelectorAll(".grid-item img")
var imgbuttons = document.querySelectorAll(".grid-item img")
function show(img){
    img.previousElementSibling.style = "visibility: visible; height:200px";
    img.style ="-webkit-filter: blur(5px); filter: blur(5px);"
}
function hide(img){
    img.previousElementSibling.style = "visibility: hidden; height:0";
    img.style ="-webkit-filter: none; filter: none;"
}
function hideOrShow(img){
    for(item of imgbuttons){
        if (item != img){
            if (item.previousElementSibling.offsetHeight!=0)
            hide(item)
        }
    }
    if (img.previousElementSibling.offsetHeight==0)
    show(img)
    else{
        hide(img);
    }
}
for(item of imgbuttons){
    item.addEventListener('click',function(){hideOrShow(this)})
}
