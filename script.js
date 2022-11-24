//* Objekt

const donuts = [
  {
    name: "Red velvet",
    price: 22,
    rating: 4,
    amount: 0,
    sum: 0,
    imgFile: "images/special-donut.png",
  },
  {
    name: "Caramel Crisp",
    price: 16,
    rating: 4,
    amount: 0,
    sum: 0,
    imgFile: "images/special-donut.png",
  },
  {
    name: "La La Latte",
    price: 14,
    rating: 5,
    amount: 0,
    sum: 0,
    imgFile: "images/special-donut.png",
  },
  {
    name: "Tutti Frutti",
    price: 14,
    rating: 3,
    amount: 0,
    sum: 0,
    imgFile: "images/special-donut.png",
  },
  {
    name: "Oreo",
    price: 16,
    rating: 5,
    amount: 0,
    sum: 0,
    imgFile: "images/special-donut.png",
  },
  {
    name: "Choklad",
    price: 12,
    rating: 4,
    amount: 0,
    sum: 0,
    imgFile: "images/special-donut.png",
  },
  {
    name: "Viol",
    price: 16,
    rating: 3,
    amount: 0,
    sum: 0,
    imgFile: "images/special-donut.png",
  },
  {
    name: "Lime key pie",
    price: 20,
    rating: 4,
    amount: 0,
    sum: 0,
    imgFile: "images/special-donut.png",
  },
  {
    name: "Cheesecake",
    price: 16,
    rating: 4,
    amount: 0,
    sum: 0,
    imgFile: "images/special-donut.png",
  },
  {
    name: "Glazed",
    price: 12,
    rating: 5,
    amount: 0,
    sum: 0,
    imgFile: "images/special-donut.png",
  },
];

//* Munkcontainer

const donutContainer = document.querySelector("#donutContainer .donuts"); // Ändrade selektor här

function renderDonuts() {
  donutContainer.innerHTML = ""; // Här töms hela innehållet i #donutContainer

  /*
  I utskriften, ta bort <section id="donutContainer"> så att du bara fyller på "inne i den",
  istället för att skriva ut den också och även <div class="donuts">, så att du "bara"
  skriver in <article>-elementen.
  */
  for (let i = 0; i < donuts.length; i++) {
    let extraCSSClass = '';
    if (i === 0) {
      extraCSSClass = 'special-donut';
    }
    donutContainer.innerHTML += `
        <article class="donutGrid ${extraCSSClass}">
          <img src="${donuts[i].imgFile}" alt="${donuts[i].name}" height="240">
          <div class="donutContent">
            <h3 class="donutName">${donuts[i].name}</h2>
            <div class="donutDetails">
              <div class="donutPrice">
                <div class="donutAmount">
                  <span class="price">${donuts[i].price}</span> kr
                </div>
                <span class="amount">${donuts[i].amount}</span> st
                <span class="sum">${donuts[i].sum} kr</span>
                <button class="minus" data-id="${i}">-</button>
                <button class="plus" data-id="${i}">+</button>  
              </div>
            </div>
          </div>
        </article>
    `;
  }


//* Denna koden eller den under?
const plusButtons = donutContainer.querySelectorAll('button.plus');

plusButtons.forEach(btn => {

btn.addEventListener('click', updateDonutAmount);

});

//* Andra varianten

 document.querySelectorAll("button.plus").forEach((btn) => {
    btn.addEventListener("click", updateDonutAmount);
  });

  document.querySelectorAll("button.minus").forEach((btn) => {
    btn.addEventListener("click", updateDonutAmountMinus);
  }); 

  //* Nedanstående funkar inte? 

  // const amount = donuts.reduce((previousValue, donut) => {
  //   return donut.amount + previousValue;
  // }, 0);

  // const sum = donuts.reduce((previousValue, donut) => {
  //   return donut.price + previousValue;
  // }, 0);

  // document.querySelector("#cartSum").innerHTML = amount;
  // document.querySelector("#cartSum").innerHTML = sum;

}

//* Behövs koden nedan fortfarande eller har jag skrivit ungefär samma sak i det
//* som direkt följer for-loopen?

//* Öka antal munkar vid klick av plusknapp

function updateDonutAmount(e) {
  const id = e.currentTarget.dataset.id; // Om du vill skicka med ID:t till funktionen updateDonutSum
  // "plocka upp" den här, och sedan skicka med den på rad 168 till funktionen updateDonutSum

  const amountEl = e.currentTarget.parentElement.querySelector(".amount");

  let amount = Number(amountEl.innerText);
  amountEl.innerHTML = amount + 1;

  updateDonutSum(e.currentTarget.parentElement, id);
}

//* Minska antal munkar vid klick av minusknapp

function updateDonutAmountMinus(e) {
  const id = e.currentTarget.dataset.id;
  
  const amountEl = e.currentTarget.parentElement.querySelector(".amount");

  let amount = Number(amountEl.innerText);

  if (amount - 1 < 0) {
    return;
  }

  amountEl.innerHTML = amount - 1;

  updateDonutSum(e.currentTarget.parentElement, id);
}

renderDonuts(); /* Om den här tas bort kommer min CSS tillbaka */

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


//* Uppdatera kostnad av munk vid klick av plus och minus

function updateDonutSum(donutElement, id) {
  console.log(donutElement);
  console.log('id', id);
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