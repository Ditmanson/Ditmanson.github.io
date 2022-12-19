const img = document.createElement('img');
img.src = 'Dog.png';
img.alt = 'A beautiful tree';
img.style.width = '30%';
img.style.height = '30%';
img.style.display = 'block';
img.style.margin = '0 auto';
document.body.appendChild(img);


const container = document.createElement('div');
container.style.position = 'absolute';
container.style.top = '50px';
container.style.right = '0';

const name = document.createElement('p');
name.innerHTML = 'Travis Ditmanson';
name.style.fontWeight = 'bold';
name.style.fontFamily = 'Calibri';
name.style.lineHeight = '.5';
const phone = document.createElement('p');
phone.innerHTML = '555-5555';
phone.style.fontWeight = 'bold';
phone.style.fontFamily = 'Calibri';
phone.style.lineHeight = '.5';

container.appendChild(name);
container.appendChild(phone);
document.body.appendChild(container);

const button = document.createElement('button');
button.innerHTML = 'Click me!';
button.onclick = myFunction;

// Add the button to the page
document.body.appendChild(button);

// Define the myFunction() function
function myFunction() {
    // Get the button element
    const button = document.querySelector('button');
    // Check the current text of the button
    if (button.innerHTML === 'Knock Knock') {
        // Change the button's text to "Button clicked!"
        button.innerHTML = 'Who\'s there?';
    } else {
        // Change the button's text back to "Click me!"
        button.innerHTML = 'Knock Knock';
    }

}