console.log('welcome')


let emailinput = document.getElementById('EmailC');
let msgdiv = document.getElementById('textemail');
emailinput.addEventListener('keypress', validate);

let passinput = document.getElementById('PasswordC');
let msgdiv1 = document.getElementById('textpass');
passinput.addEventListener('keypress', validatePassword);

//let button = document.getElementsByClassName('btn');



function validate() {
    let val = emailinput.value;
    console.log(val)
    if (val.length < 3 || (!val.includes("@")) || (!val.includes("."))) {
        //console.log("invalid");
        msgdiv.innerText = "Make sure email is more that 3 character and has @ and a . "
        msgdiv.style.color = "red";

    }
    else {
        msgdiv.innerText = "";
    }
}

function validatePassword() {
    let val = passinput.value;
    if (val.length < 8) {
        msgdiv1.innerText = "Make sure password is more than 8 characters "
        msgdiv1.style.color = "red";
    }
    else {
        msgdiv1.innerText = "All good to go!";
        msgdiv1.style.color = "green"
    }
}

function myfunction() {
    if (emailinput.value.length == "" || passinput.value.length == "") {
        alert("fill the detail");
    }
    else if (passinput.value.length < 8 || (!emailinput.value.includes("@")) || (!emailinput.value.includes("."))) {
        alert("fill the Correct detail");
    }
    else {
        confirm("Press a OK!");
        alert("successful signup!")
    }

}