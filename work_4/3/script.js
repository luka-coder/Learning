function timeDiffer(){
    d = document.getElementById("d");
    start = new Date(2016, 1 , 1);
    end = new Date();
    diff = end - start;
    days = 1000*60*60*24;
    hours = 1000*60*60;
    minutes = 1000*60;
    seconds = 1000;
    d.innerHTML = Math.floor(diff/days) + " " + "დღე";
    d.innerHTML += "<br>";
    d.innerHTML += Math.floor(diff/hours) + " " + "საათი";
    d.innerHTML += "<br>";
    d.innerHTML += Math.floor(diff/minutes) + " " + "წუთი";
    d.innerHTML += "<br>";
    d.innerHTML += Math.floor(diff/seconds) + " " + "წამი";
    d.innerHTML += "<br>";
    d.innerHTML += "გასულია 2016 წლის 1 იანვრის შემდეგ";
}