let homeScoreEl = document.getElementById("score-home"),
    guestScoreEl = document.getElementById("score-guest"),
    homeScore = Number(homeScoreEl.textContent),
    guestScore = Number(guestScoreEl.textContent),
    add1HomeBtn = document.getElementById("add-1-home-btn"),
    add2HomeBtn = document.getElementById("add-2-home-btn"),
    add3HomeBtn = document.getElementById("add-3-home-btn"),
    add1GuestBtn = document.getElementById("add-1-guest-btn"),
    add2GuestBtn = document.getElementById("add-2-guest-btn"),
    add3GuestBtn = document.getElementById("add-3-guest-btn"),
    timeEl = document.getElementById("time"),
    startBtn = document.getElementById("time-start-btn"),
    stopBtn = document.getElementById("time-stop-btn"),
    resetBtn = document.getElementById("reset-btn"),
    totalTime = 720,
    countdown;


function timer(){
    //Split total time into minutes and seconds
    let min = Math.floor(totalTime/60), 
        sec = totalTime%60;
    //If seconds gets below ten, pad single digit w/ leading zero   
        if(sec<10){
            sec = '0' + sec;
        }

    //display the time in format MM:SS
    timeEl.textContent =`${min}:${sec}`;

    //Decrease total time by one second
    totalTime--;

    //Stop the interval when totalTime reaches 0
    if(totalTime < 0){
        clearInterval(countdown);
        timeEl.textContent = `00:00`;
    }


}

resetBtn.onclick = function(){
    homeScore = 0;
    guestScore = 0;
    timeEl.textContent = '12:00';
    homeScoreEl.textContent = `0`;
    guestScoreEl.textContent = `0`;
    clearInterval(countdown);

}

stopBtn.onclick = function(){

    clearInterval(countdown);
}

startBtn.onclick = function(){
    countdown = setInterval(timer, 1000);
}



add1HomeBtn.onclick = function(){
    homeScore++;
    homeScoreEl.textContent = homeScore;
}

add2HomeBtn.onclick = function(){
    homeScore+=2;
    homeScoreEl.textContent = homeScore;
}

add3HomeBtn.onclick = function(){
    homeScore+=3;
    homeScoreEl.textContent = homeScore;
}

add1GuestBtn.onclick = function(){
    guestScore++;
    guestScoreEl.textContent = guestScore;
}

add2GuestBtn.onclick = function(){
    guestScore+=2;
    guestScoreEl.textContent = guestScore;
}

add3GuestBtn.onclick = function(){
    guestScore+=3;
    guestScoreEl.textContent = guestScore;
}