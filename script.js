function openMenu() {
    var menu =
    document.querySelector('.hizmet');
    menu.classList.toggle('active');
    
    document.querySelector('.hizmet').addEventListener('mouseclick',openMenu);
    document.querySelector('.hizmet').addEventListener('mouseleave',openMenu);
}