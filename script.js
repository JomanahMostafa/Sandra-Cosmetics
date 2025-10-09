const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('#navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


const slides = document.querySelectorAll('.home .slide');
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

function next() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function pre() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}


setInterval(next, 5000);


const reveals = document.querySelectorAll('.reveal');
const options = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, options);

reveals.forEach(el => observer.observe(el));