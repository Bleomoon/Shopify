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

function openMenuNavSmallScreen(){
    const navbarSmallScreen = document.querySelector('.smallScreen');
    const navbarSmallScreenBtn = document.querySelector('.smallScreen-toggler');

    /*Ici on crée un type open, qui s'il est présent alors c'est ouvert, sinon non */
    if (navbarSmallScreen.classList.contains('open'))
    {
        navbarSmallScreen.classList.remove('open');
        navbarSmallScreenBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    else
    {
        navbarSmallScreen.classList.add('open');
        navbarSmallScreenBtn.innerHTML = '<i class="fas fa-times"></i>'
    }
}

function AssociateProductClick(){
    const associateProducts = document.querySelector('.ficheProduct-associateProduct-products');
    const associateProductsBtn = document.querySelector('.ficheProduct-associateProduct-Btn');

    /*Si on appuie sur produits associés*/
    if (associateProducts.contains('open'))
    {
        associateProducts.remove('open');
        associateProductsBtn.innerHTML = '<i class="fas fa-plus"></i>';
    }
    else
    {
        associateProducts.add('open');
        associateProductsBtn.innerHTML = '<i class="fas fa-minus"></i>'
    }
}