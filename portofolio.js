let Name = document.getElementById("Nameform");
let Email = document.getElementById("Emailform");
let Message = document.getElementById("Messageform");

let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");
let msgErrMsg = document.getElementById("msgErrMsg");

let button = document.getElementById("submit");

Name.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    nameErrMsg.textContent = "Required*";
  } else {
    nameErrMsg.textContent = "";
  }
});

Email.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    emailErrMsg.textContent = "Required*";
  } else {
    emailErrMsg.textContent = "";
  }
});

Message.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    msgErrMsg.textContent = "Required*";
  } else {
    msgErrMsg.textContent = "";
  }
});

button.addEventListener("click", function (event) {
  if (Name.value === "" || Email.value === "" || Message.value === "") {
    alert("Please fill the required fields");
  }
});
