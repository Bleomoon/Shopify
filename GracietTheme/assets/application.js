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
    const ficheProduct_associateProduct_products = document.querySelector('.ficheProduct-associateProduct-products');
    const ficheProduct_associateProduct_Btn = document.querySelector('.ficheProduct-associateProduct-Btn');

    /*Si on appuie sur produits associés*/
    if (ficheProduct_associateProduct_products.contains('open'))
    {
        ficheProduct_associateProduct_products.remove('open');
        ficheProduct_associateProduct_Btn.innerHTML = 'Produits associes <i class="fas fa-plus"></i>';
    }
    else
    {
        ficheProduct_associateProduct_products.add('open');
        ficheProduct_associateProduct_Btn.innerHTML = 'Produits associes <i class="fas fa-minus"></i>'
    }
}

function infosComplementairesProduct(){
    const infosComp = document.querySelector('.infosComplementairesProduct-Show');
    const infosCompBtn = document.querySelector('.infosComplementairesProduct-Btn');

    /*Si on appuie sur produits associés*/
    if (infosComp.contains('open')) {
        infosComp.remove('open');
        infosCompBtn.innerHTML = 'Description';
    }
    else {
        infosComp.add('open');
        infosCompBtn.innerHTML = 'Informations Complémentaires'
    }
}