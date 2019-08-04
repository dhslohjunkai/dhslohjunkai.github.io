let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/MJ 2.jpg') {
      myImage.setAttribute ('src','images/MJ 1.jpg');
    } else {
      myImage.setAttribute ('src','images/MJ 2.jpg');
    }
}



let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Why Michael Jordan is the GOAT, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Why Michael Jordan is the GOAT, ' + storedName;
  }
myButton.onclick = function() {
    setUserName();
  }