const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no')

window.addEventListener('load', () => {
    const rect = yesBtn.getBoundingClientRect();
    yesBtn.style.left = rect.left + 'px';
    yesBtn.style.top = rect.top + 'px';
});

yesBtn.addEventListener('mouseenter', () => {
    const btnW = yesBtn.offsetWidth;
    const btnH = yesBtn.offsetHeight;

    const maxX = window.innerWidth - btnW;
    const maxY = window.innerHeight - btnH;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    yesBtn.style.left = randomX + 'px';
    yesBtn.style.top = randomY + 'px';
});