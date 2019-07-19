var tID;

function stopAnimate(){
    clearInterval(tID);
}

function makeItRun(){

    var position = 400;
    var interval = 100;
    const diff = 400;


    tID = setInterval ( () => {
    document.getElementById("ss").style.backgroundPosition = `${position}px 0px`;

    if (position < 37200) 
    {position = position + diff;}
    else
    {position = 400;}
}
, interval );

}
