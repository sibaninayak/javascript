const heading = document.getElementById("heading");
// heading.textContent = new Date()
// heading.innerHTML = new Date()
// heading.innerText = Date()
// heading.innerText = new Date()
// heading.innerText = new Date

// heading.textContent = new Date().getDay()//2 - tue
// heading.textContent = new Date().getFullYear()//2023
// heading.textContent = new Date().getDate()//11
// heading.textContent = new Date().getMonth()//3 - april
// heading.textContent = new Date().getHours()//21 -
// heading.textContent = new Date().getMinutes()//20 - april
// heading.textContent = new Date().getSeconds()//20 - april
// heading.textContent = new Date().getMilliseconds()//20 - april
// heading.textContent = new Date().getTime()//20 - april
heading.textContent = new Date(1681228536857)//20 - april
// heading.textContent = new Date().getTimezoneOffset()//20 - april
// heading.textContent = new Date().getUTCDate()//20 - april
// heading.textContent = new Date().getUTCDay()//20 - april


// heading.textContent = new Date().toLocaleDateString()//20 - april
// heading.textContent = new Date().toTimeString()//20 - april
// heading.textContent = new Date().toLocaleString()//20 - april
// heading.textContent = new Date().toDateString()//20 - april
// heading.textContent = new Date().toString()//20 - april

let date = new Date()
date.setDate(21)
console.log(date)

// setTimeout(function () {
//     console.log('hello')
// }, 400);

// setInterval(function () {
//     return heading.textContent = date.getSeconds()
// }, 1000);