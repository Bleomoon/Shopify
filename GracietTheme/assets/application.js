function openMenu(){
    const navbar = document.querySelector('.navbar');
    const navbarBtn = document.querySelector('.navbar-toggler');

    /*Ici on crée un type open, qui s'il est présent alors c'est ouvert, sinon non */
    if(navbar.classList.contains('open'))
    {
        navbar.classList.remove('open');
        navbarBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    else
    {
        navbar.classList.add('open');
        navbarBtn.innerHTML = '<i class="fas fa-times"></i>'
    }
}