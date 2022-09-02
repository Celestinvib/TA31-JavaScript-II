
getDate(); 

const interval = setInterval(getDate, 1000);

function getDate() {
    currentDate = new Date();

    document.getElementById('hour').innerHTML = currentDate.getHours();
    document.getElementById('minute').innerHTML = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    document.getElementById('second').innerHTML = (seconds < 10) ? '0'+seconds : seconds;
}