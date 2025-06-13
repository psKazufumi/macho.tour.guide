scroll({ reset:true });
ScrollReveal().reveal(".header", { delay:500 });


// 交差すると色が変わる
const menu = document.getElementById('menu');
const foto = document.getElementById('foto');
const n = document.querySelector('e_aboutus');

const options = {
    threshold: 1
};

const observer = new IntersectionObserver(showElement, options);
observer.observe(n);
function showElement(){
    n.style.opacity = 0;
};