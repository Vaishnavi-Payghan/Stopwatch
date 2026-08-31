const timer = document.querySelector(".timer");
const startbtn = document.querySelector("#start");
const stopbtn = document.querySelector("#stop");
const resetbtn = document.querySelector("#reset");

let totalSeconds = 0;
let timerInterval = null;

function updateDisplay(){
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  let hString = hours < 10 ? "0"+ hours : hours;
  let mString = minutes < 10 ? "0"+ minutes : minutes;
  let sString = seconds < 10 ? "0"+ seconds : seconds;

  timer.textContent = `${hString}:${mString}:${sString}`;
}
function startTimer(){
  if(timerInterval == null){
    startbtn.disabled = true;
    stopbtn.disabled = false;
    timerInterval = setInterval(()=>{
      totalSeconds++;
      updateDisplay();
  },1000);
  }
  
}

function stopTimer(){
  clearInterval(timerInterval);
  timerInterval = null;
  startbtn.disabled = false;
  stopbtn.disabled = true;
}

function resetTimer(){
  stopTimer();
  totalSeconds = 0;
  updateDisplay();
}
startbtn.addEventListener("click",startTimer);
stopbtn.addEventListener("click",stopTimer);
resetbtn.addEventListener("click",resetTimer);