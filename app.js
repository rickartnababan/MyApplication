'use strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Gelap";
    } else {
        this.textContent = "Terang";
    }
    console.log('current class name: ' + className);
});

const beranda = document.querySelector('#beranda');
beranda.addEventListener('click', function() {
    alert('ini halam beranda gaes');
});