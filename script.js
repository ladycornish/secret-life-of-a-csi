const nav = document.querySelector(".nav");
const btn = document.querySelector('.hamburger');

btn.addEventListener('click', () => {
    nav.classList.toggle('visible')

    setTimeout(function () {
        document.querySelector('.nav').style.display = 'none'
    }, 5000)
    setTimeout("location.reload(true);", 5000);
})

