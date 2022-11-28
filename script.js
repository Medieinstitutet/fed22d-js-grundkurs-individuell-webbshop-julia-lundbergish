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

  // Specialstylad donut 
  for (let i = 0; i < donuts.length; i++) {
    let extraCSSClass = '';
    if (i === 0) {
      donutContainer.innerHTML += `
      <article class="special-donut">
                    <img src="images/special-donut.png" alt="" height="240">
                    <div class="donutContent">
                        <h2 class="donutNameSpecial">Månadens donut</h2>
                        <h3 class="donutName">Caramel Crisp</h2>
                        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aperiam, optio
                            ullam alias dolore maiores necessitatibus sit dolor molestiae tenetur cum.
                            <br><br>
                            Odio quasi magnam nobis debitis unde incidunt. Commodi laborum velit.
                        </p>
                        <!-- Rating icons -->
                        <div class="donutDetails">
                            <div class="donutPrice">
                                <span><span class="price">22</span><p class="priceText"> kr</p>
                            </div>
                            <div class="donutAmount">
                                <span class="amount">0</span> st
                                <span class="sum">0 kr</span>
                                <button class="minus" data-id="${i}">-</button>
                                <button class="plus" data-id="${i}">+</button> 
                            </div>
                        </div>
                    </div>
                </article>
                `
    } else {
      // Donutgrid
      donutContainer.innerHTML += `
        <article class="donutGrid">
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
  }

  //* Funktion för att öka antal munkar vid klick av plusknapp

  function updateDonutAmount(e) {
    const id = e.currentTarget.dataset.id; // Om du vill skicka med ID:t till funktionen updateDonutSum
    // "plocka upp" den här, och sedan skicka med den på rad 168 till funktionen updateDonutSum

    const amountEl = e.currentTarget.parentElement.querySelector(".amount");

    let amount = Number(amountEl.innerText);
    amountEl.innerHTML = amount + 1;

    updateDonutSum(e.currentTarget.parentElement, id);
  }

  //* Funktion för att minska antal munkar vid klick av minusknapp

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

  //* Plus och minus - uppdatera antal munkar vid klick

  document.querySelectorAll("button.plus").forEach((btn) => {
    btn.addEventListener("click", updateDonutAmount);
  });

  document.querySelectorAll("button.minus").forEach((btn) => {
    btn.addEventListener("click", updateDonutAmountMinus);
  });

  

  /* const amount = donuts.reduce((previousValue, donut) => {
    return (donut.amount * donut.price) + previousValue;
      }, 
      0
      );
  
    console.log(sum);

  const sum = donuts.reduce((previousValue, donut) => {
    return donut.price + previousValue;
    }, 
    0
    ); */

  // document.querySelector("#cartSum").innerHTML = amount;
  // document.querySelector("#cartSum").innerHTML = sum;

}

// Funktion för att skriva ut munkar 
renderDonuts();


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

document.getElementById("dropBtn").onclick = function () { filterDisplay() };

function filterDisplay() {
  document.getElementById("filterDropdown").classList.toggle("show");
}

//* Form

const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const street = document.getElementById('street');
const zipCode = document.getElementById('zipCode');
const city = document.getElementById('city');
const code = document.getElementById('code');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

// Kontrollera värden utifrån input

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNamevalue = lastName.value.trim();
  const streetValue = street.value.trim();
  const zipCodeValue = zipCode.value.trim();
  const cityValue = city.value.trim();
  const codeValue = code.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();

  if(firstNameValue === '') {
    // show error
    // add error class
    setErrorFor(firstName, 'Måste fyllas i');
  } else {
    // add success class
    setSuccessFor(firstName);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //parent = form-control
  const small = formControl.querySelector('small');

  // error class
  formControl.className = 'form-control error'; 

  // felmeddelande i small-tagg
  small.innerText = message;

}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}