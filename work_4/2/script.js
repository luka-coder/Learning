function showTime(){
    d = document.getElementById("d");
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    session = "AM";
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h-12;
        session = "PM";
    }
    if(h<10){
        h = "0" + h;
    }
    if(m<10){
        m = "0" + m;
    }
    if(s<10){
        s = "0" + s;
    }
    time = h + ":" + m + ":" + s + " " + session;
    d.innerText = time;
    setTimeout(showTime, 1000);
}