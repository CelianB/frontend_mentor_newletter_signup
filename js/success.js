window.addEventListener("load", function () {
  const url = new URL(window.location.href);
  const email = url.searchParams.get("email");

  if (email) document.getElementById("spanEmail").innerText = email;
});
