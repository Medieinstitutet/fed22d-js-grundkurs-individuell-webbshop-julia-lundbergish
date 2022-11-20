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
