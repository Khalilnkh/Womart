var menuToggle = document.querySelector('.mobile-menu-toggle');
var menuBtn = document.querySelector('.menu-btn');
var menuList = document.querySelector('.mobile-menu #menu__wrapper');
var menuWrapper = document.querySelectorAll('#menu__wrapper li .menu-btn');
var menuLink = document.querySelectorAll('#menu__wrapper-link');
var overlayMenu = document.querySelector('.mobile__menu .overlay__menu')

function toggleMenu(e) {
    document.body.classList.toggle('mmenu-active');

    e.preventDefault();
}

function btnToggle(e) {
    menuList.classList.toggle('d-block');

    e.preventDefault();
}

function menuWrapperToggle(e) {
    menuLink.classList.toggle('d-block');

    e.preventDefault();
}

function closeMenu() {
    document.body.classList.remove('mmenu-active');
}

menuToggle.addEventListener('click', toggleMenu);

menuBtn.addEventListener('click', btnToggle);

menuWrapper.forEach(function(menuBtn) {
    // menuBtn üzerinde click olayını dinleyin
    menuBtn.addEventListener('click', function(e) {
        // İlgili menü öğesini bulun (menuBtn'in üst ebeveyninin sonraki kardeşi)
        var menu = menuBtn.parentElement.nextElementSibling;
        
        // Eğer menü varsa ve menü gösterilmiyorsa (display özelliği "none" ise)
        if (menu && getComputedStyle(menu).display === 'none') {
            // Menüyü göstermek için display özelliğini "block" olarak ayarlayın
            menu.style.display = 'block';
        } else {
            // Aksi halde, menüyü gizlemek için display özelliğini "none" olarak ayarlayın
            menu.style.display = 'none';
        }
        
        // varsayılan davranışı engelleme
        e.preventDefault();
    });
});

menuLink.forEach(function(link) {
    var lastUlElement = link;
    if (lastUlElement) {
        lastUlElement.classList.add('new-class');
    }
});

overlayMenu.addEventListener('click', closeMenu);
