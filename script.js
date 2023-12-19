let passwordBox = document.getElementById('password');
let copy = document.getElementById('copy');
let gen = document.getElementById('generate');

// const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase="abcdefghijklmnopqrstuvwxyz";
// const nums="0123456789";
const specialChars="!@#$&*^";

// gen.addEventListener('submit', genRandomText());

function genRandomText() {
    
  let password = "";
  
while (password.length!==12) {
    password += String.fromCharCode(65 + Math.floor(Math.random() * 26)); // this line generates random UPPERCASE characters
  password += String.fromCharCode(97 + Math.floor(Math.random() * 26)); // this line generates random LOWERCASE characters
  password += Math.floor(Math.random() * 10); // this line generates random NUMBERS
  password += specialChars[ Math.floor(Math.random() *specialChars.length)]; // this line generates random 
}
console.log(password);
passwordBox.value=password;
}


//copy functionality
function copying() {
    passwordBox.select();
    document.execCommand('copy');
}