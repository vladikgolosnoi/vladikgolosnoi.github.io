// var myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";


// document.querySelector("html").onclick = function () {
//     alert("Ouch! Stop poking me!");
//   };


// Image switcher code

// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'firefox-icon.png') {
    myImage.setAttribute ('src','firefox2.png');
  } else {
    myImage.setAttribute ('src','firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Пожалуйста введите ваше имя.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Мозила крутая, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Мозила крутая, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
