// JavaScript for letter-by-letter magnification
document.addEventListener('DOMContentLoaded', function () {
    const heading = document.querySelector('.magnify-heading');
    const text = heading.textContent.trim();
    const letters = text.split('');

    const magnifiedText = letters.map(letter => `<span>${letter}</span>`).join('');
    heading.innerHTML = magnifiedText;
});
