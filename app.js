const nameVal = document.getElementById("name");
const num = document.getElementById("number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const confirmBtn = document.getElementById("confirm");
const modal = document.querySelector(".thank_you_modal");
let cardNum = document.querySelector(".card_num");
let cardName = document.querySelector(".card_name");
let cardDate = document.querySelector(".card_date");
let cardCvc = document.querySelector(".card_code");
const form = document.querySelector(".form");
const continueBtn = document.getElementById("continue");
const input = document.querySelectorAll(".input");
const inputMain = document.querySelector(".inputMainWraper");

let values = [];

// -- Functionality ----

function setError(input) {
  const formInput = input.parentElement;
  const small = formInput.lastElementChild;
  input.classList.add("error");
  small.style.visibility = "visible";
}
function hideError(input) {
  const formInput = input.parentElement;
  const small = formInput.lastElementChild;
  input.classList.add("success");
  small.style.visibility = "hidden";
}

values.push(nameVal, num, month, year, cvc);

values.forEach((val) =>
  val.addEventListener("input", () => {
    hideError(val);
  })
);

function checkInputs() {
  values.forEach((el) => {
    if (el.value === "") {
      setError(el);
    } else {
      hideError(el);
    }
  });
}

const formatCardNumber = (value) => {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  const onlyNumbers = value.replace(/[^\d]/g, "");

  let formated = onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter((group) => !!group).join(" ")
  );
  return formated;
};

function cardData() {
  checkInputs();

  if (
    (nameVal.value !== "") &
    (num.value !== "") &
    (month.value !== "") &
    (year.value !== "") &
    (cvc.value !== "")
  ) {
    cardName.innerHTML = nameVal.value;
    cardNum.innerHTML = formatCardNumber(num.value);
    cardDate.innerHTML = `${month.value}/${year.value}`;
    cardDate.innerHTML = `${month.value}/${year.value}`;
    cardCvc.innerHTML = cvc.value;
    form.style.display = "none";
    modal.style.display = "flex";
  }
}

confirmBtn.addEventListener("click", cardData);

continueBtn.addEventListener("click", () => {
  window.location.reload();
});
