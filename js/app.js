'use strict';

console.log('Hello World');

//Global variables
let totalClicks = 0;
let clicksAllowed = 25;
let allProducts = [];
let ProductsToDisplay = [];

let myContainer = document.querySelector('section');
// let myButton = document.querySelector('div')
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');


function Products(name, fileExt = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExt}`;
  this.views = 0;
  this.clicks = 0;
  allProducts.push(this);
}

new Products('sweep', 'png');
new Products('bag');
new Products('banana');
new Products('bathroom');
new Products('boots');
new Products('breakfast');
new Products('bubblegum');
new Products('chair');
new Products('cthulhu');
new Products('dog-duck');
new Products('dragon');
new Products('pen');
new Products('pet-sweep');
new Products('scissors');
new Products('shark');
new Products('tauntaun');
new Products('unicorn');
new Products('usb', 'gif');
new Products('water-can');
new Products('wine-glass');

function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {


  while (ProductsToDisplay.length < 6) {
    let indexArray = getRandomIndex(allProducts.length);
    while (ProductsToDisplay.includes(indexArray)) {
      indexArray = getRandomIndex(allProducts.length);
    }
    ProductsToDisplay.push(indexArray);
  }



  let ProductsOneIndex = ProductsToDisplay.shift();
  let ProductsTwoIndex = ProductsToDisplay.shift();
  let ProductsThreeIndex = ProductsToDisplay.shift();

  imageOne.src = allProducts[ProductsOneIndex].src;
  imageOne.title = allProducts[ProductsOneIndex].name;
  allProducts[ProductsOneIndex].views++;

  imageTwo.src = allProducts[ProductsTwoIndex].src;
  imageTwo.title = allProducts[ProductsTwoIndex].name;
  allProducts[ProductsTwoIndex].views++;

  imageThree.src = allProducts[ProductsThreeIndex].src;
  imageThree.title = allProducts[ProductsThreeIndex].name;
  allProducts[ProductsThreeIndex].views++;
}

// function renderResults() {
//   let myList = document.querySelector('ul');
//   for (let i = 0; i < allProducts.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${allProducts[i].name} had ${allProducts[i].clicks} votes, and was  seen ${allProducts[i].views} times.`;
//     myList.appendChild(li);
//   }
// }

function handleClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }
  totalClicks++;
  let ProductsClicked = event.target.title;

  for (let i = 0; i < allProducts.length; i++) {
    if (ProductsClicked === allProducts[i].name) {
      allProducts[i].clicks++;
    }
  }
  renderProducts();
  if (totalClicks === clicksAllowed) {
    myContainer.removeEventListener('click', handleClick);
  }
}

// function handleButtonClick(event) {
//   if (totalClicks === clicksAllowed)
//     renderResults();
// }

renderProducts();


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});


myContainer.addEventListener('click', handleClick);
// myButton.addEventListener('click', handleButtonClick);
