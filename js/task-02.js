const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');


const firstItem = document.createElement('li');    
firstItem.textContent = 'Potatoes';
list.prepend(firstItem);
document.querySelector('li').classList.add('item'); //agrega una clase al item en la lista


const secondItem = document.createElement('li');
secondItem.textContent = 'Mushrooms';
list.prepend(secondItem);
document.querySelector('li').classList.add('item');


const thirdItem = document.createElement('li');
thirdItem.textContent = 'Garlic';
list.prepend(thirdItem);
document.querySelector('li').classList.add('item');


const fourthItem = document.createElement('li');
fourthItem.textContent = 'Tomatos';
list.prepend(fourthItem);
document.querySelector('li').classList.add('item');


const fiveItem = document.createElement('li');
fiveItem.textContent = 'Herbs';
list.prepend(fiveItem);
document.querySelector('li').classList.add('item');


const lastItem = document.createElement('li');
lastItem.textContent = 'Condiments';
list.prepend(lastItem);
document.querySelector('li').classList.add('item');

