let name = prompt("LÜTFEN ADINIZI GİRİNİZ")

let myName = document.querySelector("#myName")
myName.innerHTML = "Adım " + name

function showTime() {
    const today = new Date();
    let weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = weekday[today.getDay()];
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + " " + d;
    setTimeout(showTime, 1000);
    }

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
    }
showTime()