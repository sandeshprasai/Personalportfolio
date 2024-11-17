window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const leftLogoText = document.querySelector('.left_logo li'); // Select the <li> inside .left_logo
    if (width < 650) {
        leftLogoText.innerText = "SANDESH";
    } else {
        leftLogoText.innerText = "SANDESH PRASAI";
    }
});

const initialWidth = window.innerWidth;
const leftLogoText = document.querySelector('.left_logo li');
leftLogoText.innerText = initialWidth < 650 ? "SANDESH" : "SANDESH PRASAI";