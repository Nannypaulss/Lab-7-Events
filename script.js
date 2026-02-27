// mouse events, mouseenter and mouse leave 
const mouseBtn = document.getElementById("mouseBtn");
const mouseMsg = document.getElementById("mouseMsg");

mouseBtn.addEventListener("mouseenter", function() {
    mouseMsg.textContent = "Mouse has successfully hovered over the button.";
});

mouseBtn.addEventListener("mouseleave", function() {
    mouseMsg.textContent = "Mouse has left the button.";
});
//keyboard events
const keyInput = document.getElementById("keyInput");
const keyMsg = document.getElementById("keyMsg");

keyInput .addEventListener ("keydown", function (event) {
    keyMsg.textContent = `Key "${event.key}" is pressed.`;
})


//form event

const form = document.getElementById("myform");
const nameInput = document.getElementById("name");
const formMsg = document.getElementById("formMsg");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    if (nameInput.value === "") {
        formMsg.textContent = "Please enter your name.";
    } else {
        formMsg.textContent = `Hello, ${nameInput.value}! Your form has been submitted.`;
    }  });

//focus and blur events
// Focus and blur events (FIXED)
const focusInput = document.getElementById("focusinput"); // matches HTML
const focusMsg = document.getElementById("focusMsg");

focusInput.addEventListener("focus", function() {
    focusMsg.textContent = "Input field is focused.";
});

focusInput.addEventListener("blur", function() {
    focusMsg.textContent = "Input field lost focus.";
});

//event delegation
// Event Delegation
const container = document.getElementById("btnContainer");
const delegationMsg = document.getElementById("delegationMsg");

container.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        delegationMsg.textContent = "You clicked: " + event.target.textContent;
    }
});
    