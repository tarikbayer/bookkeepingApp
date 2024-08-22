// This is a comment in js

// Selecting an HTML element by its ID and changing its content
document.getElementById("main-heading").innerText = "Changed Heading!";

// Selecting an HTML element by its class and changing its background color
document.querySelector(".text").style.backgroundColor = "yellow";


// Defining a function 
function changeHeadingText(newText) {
    document.getElementById("main-heading").innerText = newText;
}

// Calling the function
changeHeadingText("Bookkeeping App");

// Function to change the heading text when called
function handleButtonClick() {
    document.getElementById("main-heading").innerText = "You clicked the button!";
}

// Attaching the function to the button click event
document.getElementById("change-text-button").addEventListener("click", handleButtonClick);

// Defining an array of transaction
const transactions = ["Invoice 001", "Invoice 002", "Payment 001"];

// Accessing the items in the array
console.log(transactions[0]);
console.log(transactions[1]);

// Looping through the array and dlogging each item
for (let i = 0; i < transactions.length; i++) {
    console.log(transactions[i]);
}

// Selecting the body element to append new content
const body = document.body;

// Creating a list element
const ul = document.createElement("ul");

//Looping through transactions and adding them as list items
for (let i = 0; i < transactions.length; i++) {
    const li = document.createElement("li");
    li.innerText = transactions[i];
    ul.appendChild(li);
}

// Appending the list to the body 
body.appendChild(ul);

document.getElementById("check-input-button").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    const messageElement = document.getElementById("input-message");

    if (userInput === "JavaScript") {
        messageElement.textContent = "You're learning Javascript!"; 
    } else {
        messageElement.textContent = "Keep trying!"
    }
     
});