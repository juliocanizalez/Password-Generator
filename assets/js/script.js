function getPassword() {
  let length = 16;
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#!$%&/_-*+";
  let password = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  document.getElementById("password").value = password;
}

function copyPassword() {
  let copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.getElementById("message").innerHTML = "<br/>Copied to Clipboard!";
  window.setTimeout("eraseMessage();", 2000);
}

function eraseMessage() {
  document.getElementById("message").innerHTML = " ";
}
