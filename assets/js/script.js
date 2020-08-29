function getPassword() {
    let chars = "012345QRSTUVWX67890abcdefghiuvwxyzABCDEFGH=?¡*][_:;{}IJKLMNOPYZ!#$%&/()+-><jklmnopqrst";
    let passowrdLength = 16;
    let password = "";
    for (let i = 0; i < passowrdLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
}

function copyPassword() {
    let coptText = document.getElementById("password");
    //coptText.select();
    coptText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById("message").innerHTML = "<br/>Copied to Clipboard!";
    window.setTimeout("eraseMessage();", 2000);
}

function eraseMessage() {
    document.getElementById("message").innerHTML = " ";
}