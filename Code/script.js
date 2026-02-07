const noButton = document.getElementById('no');

noButton.addEventListener('mouseover', () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});