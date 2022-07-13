const currDate = document.querySelector('.date');
const currTime = document.querySelector('.time');
let finalDate = currDate.querySelector("h1");


const clk = ()=>{
  let clck = new Date();
  let currYr = clck.getFullYear();
  let currMonth = clck.getMonth()+1;
  let currDay = clck.getDate();
  let currHr  = clck.getHours();
  let currMin = clck.getMinutes();
  let currSec = clck.getSeconds();
  currDate.innerText = `${currYr} ${currMonth} ${currDay}`;
  currTime.innerText = `${currHr} ${currMin} ${currSec}`;
}

const final = () => {
  clk();
  setInterval(clk, 1000);
}

final();
