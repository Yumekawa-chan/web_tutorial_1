const myHeading = document.querySelector("h1");

let ramen = "jiro";

if(ramen == "jiro"){
    alert("Welcome to my site.")
}else{
    alert("good bye.")
}

function add(num1,num2){
    let result = num1 + num2;
    return result;
}

console.log(add(1,2));

document.querySelector("img").addEventListener("click", () => {
    alert("Don't touch me!!!");
}); 
  

let myButton = document.querySelector("button");

function setUserName() {
    const myName = prompt("input yout name");
    localStorage.setItem("name", myName);
    myHeading.textContent = `javascript is cool!${myName} is cool too!`;
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Javascript is cool,${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
  
  
