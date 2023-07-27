let emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  onClickSubscribe();
});

function onClickSubscribe() {
  let email = document.getElementById("email").value;
  if (email && validateEmail(email)) {
    displaySuccessPage(email);
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

function displaySuccessPage(email) {
  let successPage = document.getElementById("successPage");
  let emailPage = document.getElementById("emailPage");
  successPage.style.display = "flex";
  emailPage.style.display = "none";

  let spanEmail = document.getElementById("spanEmail");
  spanEmail.innerText = email;
}
