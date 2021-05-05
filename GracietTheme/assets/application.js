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
    document.getElementById('searchbox').classList.toggle('show');
}

function openUser()
{
    const userBar = document.querySelector('.user');
    const userBarBtn = document.querySelector('.header-icons-Ref');

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
    document.getElementById('associateProduct').classList.toggle('open');
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

function openFilters(){
    const productFilterBtn = document.getElementById('productFilterBtn');
    const productFilter = document.getElementById('productFilter');
    
    if (productFilter.classList.contains('open')){
        productFilter.classList.remove('open');
        productFilterBtn.innerHTML ='<i class="fas fa-minus"></i> Filtres';
    }
    else{
        productFilter.classList.add('open');
        productFilterBtn.innerHTML = '<i class="fas fa-plus"></i> Filtres';
    }
}

function changeClassOfLayout(i)
{
    if(i == 1)
        document.getElementById('myLayout').className = 'oneProduct-Standard';
    else if(i == 2)
        document.getElementById('myLayout').className = 'oneProduct-List';
    else
        document.getElementById('myLayout').className = 'oneProduct-Grid';
}


function showCart()
{
    document.getElementById("showCart").style.display = "block";
}