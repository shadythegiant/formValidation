"use strict";
const form = document.querySelector(".form");
const formInput = document.querySelector(".input");
// const submitButton = document.querySelector(".submit-btn")
const sucessContainer = document.querySelector(".success-container");
const dismissbtn = document.querySelector(".dismiss-btn");
const spanEmail = document.querySelector(".email");

// check if email valid
function checkEmailValid(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// eventListener

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const elementParent = form.parentElement;

  if (formInput.value === "") {
    elementParent.className = "sign-up error";
  } else if (checkEmailValid(formInput.value)) {
    sucessContainer.className = "success-container visible";

    spanEmail.innerText = formInput.value;
  } else {
    elementParent.className = "sign-up error";
  }
});

dismissbtn.addEventListener("click", function (e) {
  e.preventDefault();
  const elementParent = form.parentElement;
  sucessContainer.className = "success-container";
  formInput.value = "";

  elementParent.className = "sign-up";
});
