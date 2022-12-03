//* Objekt

const today = new Date();
const isFriday = today.getDay() === 6;
const isMonday = today.getDay() === 1;

const donuts = [
  {
    name: "Coco",
    price: 12,
    rating: 4,
    amount: 0,
    sum: 0,
    imgFile: "images/coco.jpg",
  },
  {
    name: "My Neighbor TotOreo",
    price: 16,
    rating: 4,
    amount: 0,
    sum: 0,
    imgFile: "images/oreo.jpg",
  },
  {
    name: "Chocolat",
    price: 14,
    rating: 5,
    amount: 0,
    sum: 0,
    imgFile: "images/chocolate.jpg",
  },
  {
    name: "Lé(m)on",
    price: 14,
    rating: 3,
    amount: 0,
    sum: 0,
    imgFile: "images/lemon.jpg",
  },
  {
    name: "Mangonolia",
    price: 16,
    rating: 5,
    amount: 0,
    sum: 0,
    imgFile: "images/mangoripple.jpg",
  },
  {
    name: "Moulin Rouge",
    price: 12,
    rating: 4,
    amount: 0,
    sum: 0,
    imgFile: "images/cherry.jpg",
  },
  {
    name: "Berry Poppins",
    price: 16,
    rating: 3,
    amount: 0,
    sum: 0,
    imgFile: "images/berrypoppins.jpg",
  },
  {
    name: "Applecalypse Now",
    price: 20,
    rating: 4,
    amount: 0,
    sum: 0,
    imgFile: "images/apple.jpg",
  },
  {
    name: "Meminto",
    price: 16,
    rating: 4,
    amount: 0,
    sum: 0,
    imgFile: "images/mint.jpg",
  },
  {
    name: "Coco",
    price: 12,
    rating: 5,
    amount: 0,
    sum: 0,
    imgFile: "images/coco.jpg",
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
                        <h3 class="donutName">La La Latte</h2>
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
      let adjustedPrice = donuts[i].price;
      if (isFriday && isMonday) {
        adjustedPrice = adjustedPrice * 1.15;
      }
      // Donutgrid
      donutContainer.innerHTML += `
        <article class="donutGrid">
          <img src="${donuts[i].imgFile}" alt="${donuts[i].name}" height="240">
          <div class="donutContent">
            <h3 class="donutName">${donuts[i].name}</h3>
            <div class="donutDetails">
              <div class="donutPrice">
                <div class="donutAmount">
                  <span class="price">${donuts[i].adjustedPrice}</span> kr
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

  renderCart();
  renderPrice()
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

  renderCart();
  renderPrice()
}

//* Plus och minus - uppdatera antal munkar vid klick

document.querySelectorAll("button.plus").forEach((btn) => {
  btn.addEventListener("click", updateDonutAmount);
});

document.querySelectorAll("button.minus").forEach((btn) => {
  btn.addEventListener("click", updateDonutAmountMinus);
});

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


donuts[id].amount = Number(orderedAmount);
donuts[id].sum = Number(donutSinglePrice) * Number(orderedAmount);


}

//* Dropdownfilter - mobil

document.getElementById("dropBtn").onclick = function () { filterDisplay() };

function filterDisplay() {
  document.getElementById("filterDropdown").classList.toggle("show");
}

// Sortera munkar 

const sortPrice = document.querySelector("#priceSort");
sortPrice.addEventListener("click", sortByPrice);

function sortByPrice(e) {
  e.preventDefault();
  donuts.sort((a, b) => a.price - b.price);
  renderDonuts();
}

const sortPriceMobile = document.querySelector("#priceSortMobile");
sortPrice.addEventListener("click", sortByPrice);

function sortByPrice(e) {
  e.preventDefault();
  donuts.sort((a, b) => a.price - b.price);
  renderDonuts();
}

//* Formulär

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
  const lastNameValue = lastName.value.trim();
  const streetValue = street.value.trim();
  const zipCodeValue = zipCode.value.trim();
  const cityValue = city.value.trim();
  const codeValue = code.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const socialSecurityValue = socialSecurity.value.trim();

  // Namn

  if(firstNameValue === '') {
    // Visa error
    // Lägg till error class
    setErrorFor(firstName, 'Måste fyllas i');
  } else {
    // Lägg till success class
    setSuccessFor(firstName);
  }

  if(lastNameValue === '') {
    setErrorFor(lastName, 'Måste fyllas i');
  } else {
    setSuccessFor(lastName);
  }

  // Adress

  if(streetValue === '') {
    setErrorFor(street, 'Måste fyllas i');
  } else {
    setSuccessFor(street);
  }

  if(zipCodeValue === '') {
    setErrorFor(zipCode, 'Måste fyllas i (5 siffror)');
  } else if (!isZipCode(zipCodeValue)) {
    setErrorFor(zipCode, 'Postnumret är inte skrivet i ett giltigt format');
  } else {
    setSuccessFor(zipCode);
  }

  if(cityValue === '') {
    setErrorFor(city, 'Måste fyllas i');
  } else {
    setSuccessFor(city);
  }

  if(codeValue === '') {
    setErrorFor(code, 'Måste fyllas i - om du inte har en portkod skriv 0');
  } else {
    setSuccessFor(code);
  }

  // Telefon

  if(phoneValue === '') {
    setErrorFor(phone, 'Måste fyllas i');
  } else if(!isPhone(phoneValue)) {
    setErrorFor(phone, 'Telefonnumret är inte skrivet i ett giltigt format');
  } else {
    setSuccessFor(phone);
  }

  // Epost

  if(emailValue === '') {
    setErrorFor(email, 'Måste fyllas i')
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Epostadressen är inte giltig');
  } else {
    setSuccessFor(email);
  }

  // Personnummer

  if(socialSecurityValue === '') {
    setErrorFor(socialSecurity, 'Måste fyllas i');
  } else if(!isSocialSecurity(socialSecurityValue)) {
    setErrorFor(socialSecurity, 'Personnumret är ogiltigt');
  } else {
    setSuccessFor(socialSecurity);
  }

}

// Timer

setInterval (orderTimeOut, 900000);

// Funktion för error och success

function setErrorFor(input, message) {
  const formControl = input.parentElement; //parent = form-control
  const small = formControl.querySelector('small');
  formControl.classList.remove('success');
  formControl.classList.add('error');
  small.classList.remove('toggle-hidden');

  // Error class
  formControl.className = 'form-control error'; 

  // Felmeddelande i small-tagg
  small.innerText = message;
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.classList.add('success');
  formControl.classList.remove('error');

  // Rensa errormeddelande
  small.innerText = "";
}

// Regex-funktioner 

function isZipCode(zipCode) {
  return /[0-9]{3}[0-9]{2}/g.test(zipCode);
}

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(email);
}

function isPhone(phone) {
  return /^07(0|2|3|6|9)\d{7}$/g.test(phone);
}

function isSocialSecurity(socialSecurity) {
  return /^\d{6,8}[-|(\s)]{0,1}\d{4}$/.test(socialSecurity);
}

// Rensa formulär

const clearFormBtn = document.querySelector('#clear');
clearFormBtn.addEventListener('click', clearForm);

function clearForm() {
  const formController = document.querySelectorAll('.form-control');
  document.querySelector('.form').reset();
  formController.forEach((div) => {
  div.classList.remove('success', 'error');
  });
  document.querySelector('small').classList.add('toggle-hidden');
}

// Kortbetalning och faktura

const addCardForm = document.getElementById('cardDetails');
const addInvoiceForm = document.getElementById('invoiceDetails')

function handleRadioClick() {
  if (document.getElementById('card').checked) {
    cardDetails.style.display = 'block';
  } else {
    cardDetails.style.display = 'none';
  }
  if (document.getElementById('invoice').checked) {
    invoiceDetails.style.display = 'block';
  } else {
    invoiceDetails.style.display = 'none';
  }
}

const radioButtons = document.querySelectorAll('input[name="paymentOption"]');
radioButtons.forEach(radio => {
  radio.addEventListener('click', handleRadioClick);
});

// Varukorg

// Summan uppdateras

function renderCart() {
  cart.innerHTML = '';

  for (let i = 0; i < donuts.length; i++) {
    if (donuts[i].amount > 0) {
      cart.innerHTML += `
                <img src="${donuts[i].imgFile}" alt="${donuts[i].name}" height="90">
                  <h4 class="donutName">${donuts[i].name}</h2>
                      <div class="donutDetails">
                          <div class="donutPrice">
                              <span><span class="price">${donuts[i].price}</span>
                                  <p class="priceText"> kr</p>
                          </div>
                          <div class="donutAmount">
                              <span class="amount" id="cartAmount">${donuts[i].amount}</span> st
                              <span class="sum" id="cartSum">${donuts[i].sum} kr</span>
                              </div>
                      </div>
      `
    }
  }
}

renderCart();

function renderPrice() {
  cartTotal.innerHTML = '';
  const amount = donuts.reduce((previousValue, donut) => {
    return (donut.amount * donut.price) + previousValue;
      }, 
      0
      );

      cartTotal.innerHTML += `
      <p>Totalt: </p><p id="totalPrice">${amount} kr</p>
      `
    }

renderPrice()

// Timer som rensar formulär efter viss tid


function orderTimeOut() {
    clearForm();
    alert('Dy fyllde i dina uppgifter för långsamt.');
  }

// Specialregler 

let totalPrice = 0;
for (let i = 0; i < donuts.length; i++) {
  if (donuts[i].amount > 0) {
    totalPrice += donuts[i].amount * donuts[i].price;
  }
}

console.log(totalPrice);

if (today.getDay() === 6 && today.getHours() < 10) {
  discount.innerHTML += `
  <p>DMåndagsrabatt! Njut av 10 % rabatt på din beställning!</p>
  ${totalPrice * 0.1} kr. Totalsumman blir: ${totalPrice * 0.9} kr.`;
  console.log('Måndagsrabatt! Njut av 10 % rabatt på din beställning:', totalPrice * 0.1, 'kr. Totalsumman blir:', totalPrice * 0.9, 'kr.');

} 

function mondaySpecial() {
  const date = new Date();
  discount.innerHTML = '';

  if (date.getDay() === 6 && date.getHours() < 10) {
    total.discountText = 'Måndagsrabatt! Njut av 10% rabatt på din beställning!';

    total.price = Math.round(total.price * 0.9);
    discount.innerHTML = total.discountText;
  }
}

// ---- FORMULÄR ----
// x Nya fält för kortbetalning och faktura 
// x Knapp för att rensa beställning och order
// x Fält för rabattkod
// x Timer som rensar formulär

// ---- VARUKORG ----
// x Visuell feedback på att varukorgen uppdateras
// Specialregler vid beställning 

// ---- ÖVRIGT ----
// x Sortera i bokstavsordning
// Prettier och ESLint
// x Responsitivitet - surfplatta
// Publicera!!!!
// x Byt bilder på munkarna
// x Rensa errormeddelanden