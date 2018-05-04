'use strict'

var positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

var prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

var hitName = positions[2], hitPrice = prices[2];

//task 1
var hit = {
  name: 'Ховерборд Mattel 2016',
  price: 666
};

console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} Q`);

//task 2
var items = [];
for (var i=0; i < positions.length; i++){
  items[i] = {name: positions[i], price: prices[i]};
  items.push(items[i]);
}

console.log(`Купите ${items[4].name} по цене ${items[4].price} Q`);

//task 3
var indexItem = 0;
var countItem = 51;

function showDiscount(indexItem, countItem){
  var nameItem = positions[indexItem];
  var price = prices[0];
  var discount = 0;
  
  if (countItem > 0 && countItem < 10){
    discount = 5;
  } else if (countItem > 10 && countItem < 50){
    discount = 7;
  } else if (countItem > 50 && countItem < 100){
    discount = 10;
  } else if (countItem > 100){
    discount = 15;
  }
  
  var wholesalePrice = ((100 - discount)/100) * price;
  var benefit = (discount / 100) * price;
  
  console.log(`${nameItem} — стоимость партии из ${countItem} штук ${wholesalePrice.toFixed()} Q (скидка ${discount} %), ваша выгода ${benefit.toFixed()} Q!`);
}

showDiscount(0, 12);
showDiscount(3, 97);

//task 4
items[3].amount = 4;
var itemIndex = 2;


function updateAmount(itemIndex, rate){
  var item = items[itemIndex];
  
  if (rate === undefined){
    rate = 1;
  } else {
      if (item.amount === undefined){
      return;
    } else if (item.amount === 0 || rate > item.amount) {
      console.log(`${item.name} закончился на складе`);
    } else if (item.amount > rate) {
      var amount = item.amount - rate;
      console.log(`${item.name} - остаток ${item.amount} шт`);
    } else if (item.amount === rate) {
      amount = item.amount - rate;
      console.log(`Это был последний ${item.name}, вам повезло!`);
    } 
  }
}

updateAmount(1, 17);
updateAmount(3, 3);
updateAmount(3);


