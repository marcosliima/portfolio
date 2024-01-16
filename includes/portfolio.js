window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    var menuHeight = menu.offsetHeight;
    
    if (window.pageYOffset > 0) {
        menu.classList.add('is-sticky');
    } else {
        menu.classList.remove('is-sticky');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

