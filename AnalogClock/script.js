
function updateClock() {
    const now = new Date();
    const hours = now.getHours() || 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourAngle = (hours % 12) * 30 + minutes * 0.5;
    const minuteAngle = minutes * 6;
    const secondAngle = seconds * 6;

    $("#hourLine").css("transform", `rotate(${hourAngle}deg)`).children(".clock_number").html(hours).css("transform", `rotate(${- hourAngle}deg)`);
    $("#minuteLine").css("transform", `rotate(${minuteAngle}deg)`).children(".clock_number").html(minutes).css("transform", `rotate(${- minuteAngle}deg)`);
    $("#secondLine").css("transform", `rotate(${secondAngle}deg)`).children(".clock_number").html(seconds).css("transform", `rotate(${- secondAngle}deg)`); 
}

setInterval(updateClock, 1000);

updateClock();