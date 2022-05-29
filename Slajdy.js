window.onload = function(){

    iloscSekcji = document.getElementsByTagName("article").lenght;

    sectTag = document.getElementsByTagName("article");

    document.body.style.margin = 30 +"px auto"

    pBar = document.getElementById("proBar");

    updateProgress(0);
};

//przyciski na klawiaturze

document.onkeydown = function (e){
    var keyCode = e.keyCode;

    if (keyCode == 39){ clidkedRight();}
    if (keyCode == 37){ clidkedLeft();}
};

var slajd = 0;
function clidkedRight(){
    if (slajd <iloscSekcji){
        window.scrollTo(0, (sectTag[slajd +1].offsetTop));
        slajd++;
        updateProgress(slajd);
    }
}

function clidkedLeft(){
    if (slajd <=0){}
    else {slajd--;
    updateProgress(slajd);
    window.scrollTo(0, (sectTag[slajd].offsetTop));
}

document.onkeydown = (e)=>{
    switch(e.keyCode){
        case 37:
            moveLeft();
            break;
            case 39:
                moveRight();
                break;
                
    }
}