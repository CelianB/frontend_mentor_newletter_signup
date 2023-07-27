let loginForm = document.getElementById("emailForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
});
function checkEmail() {
  let email = document.getElementById("email").value;
  if (email && validateEmail(email)) {
    window.location.replace("./success.html?email=" + email);
  } else {
    updateErrorLabel(true);
    updateInputStyle(true);
  }
}
/// Not the best function to check if an email is correct but it is readable and easy to understand
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function updateErrorLabel(isError) {
  let error = document.getElementById("error");
  if (isError) {
    error.style.display = "initial";
  } else {
    error.style.display = "none";
  }
}

function updateInputStyle(isError) {
  let email = document.getElementById("email");
  if (isError) {
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }
}
