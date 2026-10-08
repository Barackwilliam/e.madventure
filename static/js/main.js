(function () {
    "use strict";

    // Spinner (hidden by default now; make sure it's gone if a page still shows it)
    var spinner = document.getElementById('spinner');
    if (spinner) spinner.classList.remove('show');
    window.addEventListener('pageshow', function () {
        if (spinner) spinner.classList.remove('show');
    });


    // Initiate the wowjs
    if (typeof WOW !== 'undefined') {
        new WOW({ mobile: true, offset: 50 }).init();
    }


    // Sticky Navbar + back to top button
    var navbars = document.querySelectorAll('.navbar');
    var backToTop = document.querySelector('.back-to-top');
    function onScroll() {
        var y = window.scrollY;
        navbars.forEach(function (nav) {
            nav.classList.toggle('sticky-top', y > 45);
            nav.classList.toggle('shadow-sm', y > 45);
        });
        if (backToTop) backToTop.classList.toggle('show-btn', y > 300);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTop) {
        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    // Dropdown on mouse hover (desktop only)
    var desktop = window.matchMedia('(min-width: 992px)');
    document.querySelectorAll('.dropdown').forEach(function (dd) {
        var toggle = dd.querySelector('.dropdown-toggle');
        var menu = dd.querySelector('.dropdown-menu');
        function set(open) {
            if (!desktop.matches) return;
            dd.classList.toggle('show', open);
            if (menu) menu.classList.toggle('show', open);
            if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
        dd.addEventListener('mouseenter', function () { set(true); });
        dd.addEventListener('mouseleave', function () { set(false); });
    });

})();
