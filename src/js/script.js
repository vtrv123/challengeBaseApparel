const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const errorImg = document.getElementById("error--img");

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

form.addEventListener("submit", function (e) {
  let messages = [];
  if (email.value === "" || email.value === null) {
    messages.push("Email is required");
  }
  if (!validateEmail(email.value)) {
    messages.push("Please provide a valid email");
  }
  if (validateEmail(email.value)) {
    e.preventDefault();
    email.value = "";
    errorElement.style.display = "none";
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.style.display = "block";
    errorElement.innerText = messages.join(", ");
    email.style.border = "1px solid hsl(0, 93%, 68%)";
    email.style.fontSize = "16px";
    email.style.color = "black";
    errorImg.style.display = "block";
  }
});
