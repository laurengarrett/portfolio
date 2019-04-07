//function alertMe() {
//    alert('help');
//}

//alertMe();

//intro page, language selection*******************************
var english = document.getElementById('en');
var spanish = document.getElementById('es');
var name = document.getElementById('name');

//english
if (english) {
    english.addEventListener('mouseover', function () {
        english.innerHTML = 'enter site';
    });

    english.addEventListener('mouseout', function () {
        english.innerHTML = 'english';
    });
}

//spanish
if (spanish) {
    spanish.addEventListener('mouseover', function () {
        spanish.innerHTML = 'entrar en el sitio web';
    });

    spanish.addEventListener('mouseout', function () {
        spanish.innerHTML = 'espa&ntilde;ol';
    });
}
//intro page, language selection*******************************

//index / home page, navigation menu***************************
var navmenu = document.getElementById('nav-menu');
var content = document.getElementById('intro-content');
var hamicon = document.getElementById('hamicon');
var close = document.getElementById('close');

//show menu
hamicon.onclick = function () { showMenu(); };
function showMenu() {
    //hide main content and hamburger icon
    content.style.display = 'none';
    hamicon.style.display = 'none';

    //show menu
    navmenu.style.display = 'block';
    close.style.display = 'block';
}

//close menu
//document.getElementById('close').onclick = function () { closeMenu(); };
function closeMenu() {
    //close hidden menu
    navmenu.style.display = 'none';
    close.style.display = 'none';

    //display original content
    content.style.display = 'block';
    hamicon.style.display = 'block';
}
//index / home page, navigation menu***************************