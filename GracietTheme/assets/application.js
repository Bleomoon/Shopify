function openMenuNav(){
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

function openPanier()
{
    ;
}

function openSearch()
{

}

function openUser()
{
    const userBar = document.querySelector('.user');
    const userBarBtn = document.querySelector('.header-icons-user');

    if(userBar.classList.contains('open'))
    {
        userBar.classList.remove('open');
        userBarBtn.innerHTML = '<i class="fas fa-user"></i>';
    }
    else
    {
        userBar.classList.add('open');
        userBarBtn.innerHTML = '<i class="fas fa-times"></i>';
    }
}