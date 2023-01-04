const hour_span = document.getElementById("hour");
const minute_span = document.getElementById("mins");
const seconds_span = document.getElementById("secs");


const clock = () => {
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();
      
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    
    hour_span.innerHTML = hours;
    minute_span.innerHTML = ":" + minutes;
    seconds_span.innerHTML = ":" + seconds;  
}

setInterval(clock, 100);

// clock();