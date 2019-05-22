window.onscroll = () => {
    let intro = document.querySelector('.intro-links');
    let navbar = document.querySelector('.navbar');

    if (isElementInViewport(intro)) {
        if (navbar.classList.contains('navbar-fade-in')) {
            navbar.classList.remove('navbar-fade-in');
        }
        navbar.classList.add('navbar-fade-out');
    } else {
        if (navbar.classList.contains('navbar-fade-out')) {
            navbar.classList.remove('navbar-fade-out');
        }

        navbar.style.display = 'inherit';
        navbar.classList.add('navbar-fade-in');
    }
};

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.bottom >= 0
    );
}