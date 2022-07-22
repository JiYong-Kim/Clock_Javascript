let count = document.querySelector('.time');
const startButton = document.querySelector('.start');
const lapButton = document.querySelector('.lap');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');



startButton.addEventListener('click', function(){
  let startTime = new Date();
  count.innerText = `${timeCalc(startTime)}`;
})

resetButton.addEventListener('click', function(){
  count.innerText = `00:00:00.000`;
});


const timeCalc = (startTime) => {
  let currentTime = new Date();
  let timePassed = currentTime - startTime;
  count.innerText = `${timePassed}`;
}

const stopwatch = (startTime) => {
  timeCalc(startTime);
  setInterval(timeCalc,1000);
}
