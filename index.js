const currDate = document.querySelector('.date');
const currTime = document.querySelector('.time');
let finalDate = currDate.querySelector("h1");



const lengthChange = (num) => {
  if(String(num).length<2){
    return String(num).padStart(2,'0');
  }
  return num;
}


const clk = ()=>{
  let clck = new Date();
  let currYr = clck.getFullYear();
  let currMonth = lengthChange(clck.getMonth()+1);
  let currDay = lengthChange(clck.getDate());
  let currHr  = lengthChange(clck.getHours());
  let currMin = lengthChange(clck.getMinutes());
  let currSec = lengthChange(clck.getSeconds());
  currDate.innerText = `${currYr} ${currMonth} ${currDay}`;
  currTime.innerText = `${currHr} : ${currMin} : ${currSec}`;
}

const final = () => {
  clk();
  setInterval(clk, 1000);
}

final();
