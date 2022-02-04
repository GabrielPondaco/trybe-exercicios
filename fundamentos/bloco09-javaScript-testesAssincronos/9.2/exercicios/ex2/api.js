// apiScript.js     
const API_URL = 'https://api.coincap.io/v2/assets';
const ul = document.querySelector('ul');
const createItemList = (coin) => {
  const itemList = document.createElement('li');
  itemList.innerHTML = `${coin.name} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)}`;
  ul.appendChild(itemList);
}

const fetchCoins = () => {
  
  const myObject = {
    method: 'GET',
    headers: { 'Accept-Encoding': 'deflate' }
  };

  fetch(API_URL)
  .then((response) => response.json())
  .then((datas) => datas.data.filter((data, index) => index < 10).forEach((each) => {
    createItemList(each);
  }))


};

window.onload = () => fetchCoins();