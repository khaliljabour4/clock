setInterval(()=>{
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let hhc = document.querySelector('#time .circle svg circle:nth-child(2)')
let mmc = document.querySelector('#time .circle svg circle:nth-child(2)')
let ssc = document.querySelector('#time .circle svg circle:nth-child(2)')

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h >= 12 ? "PM" : "AM";

if(h > 12){
  h = h - 12;
}

h = (h < 10) ? "0" + h : h ;
m = (m < 10) ? "0" + m : m ;
s = (s < 10) ? "0" + s : s ;

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
// ampm.innerHTML = am;

let equa = 440 - (440 * s)/60;
console.log(equa);
hhc.style.strokeDashoffset = 440 - (440 * h)/12;
mmc.style.strokeDashoffset = 440 - (440 * m)/60;
ssc.style.strokeDashoffset = 440 - (440 * s)/60;




})