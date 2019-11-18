x = 0;

function goRight(){
    box = document.getElementById("box");
    if(x >= 460){
        clearInterval(k);
    }
    else{
        box.style.left = x + "px";
        console.log(box);
        x+=10;
    }
}
function goRightClick(){
    k = setInterval(goRight,100);
}
