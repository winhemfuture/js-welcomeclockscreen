var name = prompt("Please enter your name","John/Jane Doe");
let h1 = document.querySelector("h1");
h1.innerHTML = "Hi! "+name+" Welcome";

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var d = date.getDay();
    var dayText;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    switch (d) {
        case 1:
            dayText="Monday";
            break;
        case 2:
            dayText="Tuesday";
            break;
        case 3:
            dayText="Wednesday";
            break;
        case 4:
            dayText="Thursday";
            break;
        case 5:
            dayText="Friday";
            break;
        case 6:
            dayText="Saturday";
            break;
        case 7:
            dayText="Sunday";
            break;
        default:
            break;
    }
    var time = h + ":" + m + ":" + s + " " + dayText;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();