// SWITCH
const check = document.getElementById('toggle');
const slider = document.getElementById('slider');
const annuallyTitle = document.querySelectorAll('.price-annually');
const monthlyTitle = document.querySelectorAll('.price-monthly');

check.addEventListener('change', () => {
    if (check.checked) {
        slider.style.left = "5px";
        annuallyTitle.forEach(price => price.style.display = "flex");
        monthlyTitle.forEach(price => price.style.display = "none");

    } else {
        slider.style.left = "32px";
        annuallyTitle.forEach(price => price.style.display = "none");
        monthlyTitle.forEach(price => price.style.display = "flex");
    }
})