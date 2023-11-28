// JavaScript for the looped typewriter effect
const headingElement = document.getElementById('typewriter-heading');
const text = headingElement.textContent;
const speed = 1200; // Adjust the speed (milliseconds per letter)
let index = 0;
let loopCount = 0;
const maxLoops = 1000; // Set the number of times to loop (change as needed)

function typeWriter() {
    if (index < text.length) {
        headingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        // Wait for a moment before erasing the text
        setTimeout(eraseText, 500);
    }
}

function eraseText() {
    if (index >= 0) {
        const truncatedText = text.substring(0, index);
        headingElement.innerHTML = truncatedText;
        index--;
        setTimeout(eraseText, speed);
    } else {
        // Start typing again if not reached the desired number of loops
        if (loopCount < maxLoops) {
            loopCount++;
            setTimeout(typeWriter, 100); // Wait for a moment before starting over
        }
    }
}
// Start the typewriter effect when the page loads
window.onload = typeWriter;
