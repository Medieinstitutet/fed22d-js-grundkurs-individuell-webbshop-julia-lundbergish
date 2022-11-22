//* Objekt 

const donuts = [
  {
    name: 'Red velvet',
    price: 22,
    rating: 4,
    amount: 0,
  },
  {
    name: 'Caramel Crisp',
    price: 16,
    rating: 4,
    amount: 0,
  },
  {
    name: 'La La Latte',
    price: 14,
    rating: 5,
    amount: 0,
  },
  {
    name: 'Tutti Frutti',
    price: 14,
    rating: 3,
    amount: 0,
  },
  {
    name: 'Oreo',
    price: 16,
    rating: 5,
    amount: 0,
  },
  {
    name: 'Choklad',
    price: 12,
    rating: 4,
    amount: 0,
  },
  {
    name: 'Viol',
    price: 16,
    rating: 3,
    amount: 0,
  },
  {
    name: 'Lime key pie',
    price: 20,
    rating: 4,
    amount: 0,
  },
  {
    name: 'Cheesecake',
    price: 16,
    rating: 4,
    amount: 0,
  },
  {
    name: 'Glazed',
    price: 12,
    rating: 5,
    amount: 0,
  }
]

const donutContainer = document.querySelector('#donutContainer');

for (let i = 0; i < donuts.length; i++) {
  donutContainer.innerHTML += `
  <article class="donutGrid">
  <div class="donutContent">
  <h3 class="donutName">${donuts[i].name}</h2>
  <span class="price">${donuts[i].price} kr</span>
  <button class="plus" data-id="${i}"></button>
  </article>
  `;
}

function updateDonutAmount(e) {
  console.log(e.currentTarget.dataset.id);
}

document.querySelectorAll('button.plus').forEach((btn) => {
  btn.addEventListener('click', updateDonutAmount);
})

//* Kommentar jag inte har kommit på vad den ska heta än

const decreaseButtons = document.querySelectorAll(
  'button[data-operator="minus"]'
);

const increaseButtons = document.querySelectorAll(
  'button[data-operator="plus"]'
);

for (let i = 0; i < decreaseButtons.length; i++) {
  decreaseButtons[i].addEventListener("click", decreaseCount);
  increaseButtons[i].addEventListener("click", increaseCount);
}

//* Öka antal munkar vid klick av plusknapp

function increaseCount(e) {
  const amountEl = e.currentTarget.parentElement.querySelector(".amount");

  let amount = Number(amountEl.innerText);
  amountEl.innerHTML = amount + 1;

  updateDonutSum(e.currentTarget.parentElement);
}

//* Minska antal munkar vid klick av minusknapp

function decreaseCount(e) {
  const amountEl = e.currentTarget.parentElement.querySelector(".amount");

  let amount = Number(amountEl.innerText);

  if (amount - 1 < 0) {
    return;
  }

  amountEl.innerHTML = amount - 1;

  updateDonutSum(e.currentTarget.parentElement);
}

//* Uppdatera kostnad av munk vid klick av plus och minus

function updateDonutSum(donutElement) {
  console.log(donutElement);
  const donutSinglePrice =
    donutElement.parentElement.querySelector(".price").innerHTML;
  const orderedAmount = donutElement.querySelector(".amount").innerHTML;

  console.log(donutSinglePrice, orderedAmount);

  const sum = Number(donutSinglePrice) * Number(orderedAmount);

  donutElement.querySelector(".sum").innerHTML = sum + " kr";
}

//* Dropdownfilter - mobil

function myFunction() {
  document.getElementById("filterDropdown").classList.toggle("show");
}
