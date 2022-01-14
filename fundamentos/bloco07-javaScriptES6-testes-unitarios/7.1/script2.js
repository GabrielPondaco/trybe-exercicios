const btnClick = document.querySelector('#btnClick');
const clickCount = document.querySelector('#clickCount');
let clicks = 0;
btnClick.addEventListener('click', contaClick => clickCount.innerText = `Clicks: ${clicks += 1}`)
