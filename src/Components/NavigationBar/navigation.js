
window.onload = function () {
setTimeout(function() {  
var Menu = document.getElementById('dropdownmenu');
var home = document.getElementById('Home');
var Phonestxt = document.getElementById('Phones');
var Audiotxt = document.getElementById('Audio');
var Wactchestxt = document.getElementById('Watches');
var section = document.getElementById('mainsection');
var cardone = document.getElementById('cardone');
var cardtwo = document.getElementById('cardtwo');
var cardthree = document.getElementById('cardthree');
var Textbox = document.getElementById('textsection');
var maintxt = document.getElementById('Type-txt');
var devicetxtone = document.getElementById('deviceone');
var devicetxttwo = document.getElementById('devicetwo');
var devicetxtthree = document.getElementById('devicethree');

//Phone txt trigger for the drop down//
Phonestxt.addEventListener('mouseover', function () {
    setTimeout(function () {
    Menu.style.height = '60vh';
    Menu.style.transition = '0.5s';
    cardone.style.backgroundImage = 'url("../public/assets/Images/Yuva 2 Pro.png")';
    cardone.style.backgroundSize = 'cover';
    cardtwo.style.backgroundImage = 'url("../public/assets/Images/Blaze5G.png")';
    cardtwo.style.backgroundSize = 'cover';
    cardthree.style.backgroundImage = 'url("../public/assets/Images/Yuva 2 Pro.png")';
    Textbox.style.display='block';
    maintxt.innerHTML = ' Available Phones';
    devicetxtone.innerHTML = 'Yuva 2 Pro';
    devicetxttwo.innerHTML = 'Blaze 5G';
    devicetxtthree.innerHTML = 'Yuva 2 Pro';

    cardone.addEventListener('mouseover', function(){
        cardone.style.backgroundImage = 'url("../public/assets/Images/yuva-2-img-1-removebg-preview.png")';
        cardone.style.transition = '0.5s';
    });
    cardone.addEventListener('mouseleave', function(){
        cardone.style.backgroundImage = 'url("../public/assets/Images/Yuva 2 Pro.png")';
        cardone.style.transition = '0.5s';
    });
    cardtwo.addEventListener('mouseover', function(){
        cardtwo.style.backgroundImage = 'url("../public/assets/Images/blaze-5g-6gb-img-1-removebg-preview.png")';
        cardtwo.style.transition = '0.5s';
    });
    cardtwo.addEventListener('mouseleave', function(){
        cardtwo.style.backgroundImage = 'url("../public/assets/Images/Blaze5G.png")';
        cardtwo.style.transition = '0.5s';
    });
    },400); 

    Menu.style.height = '0vh';
    Menu.style.transition = '0.5s';
    Textbox.style.display='none';
});
Audiotxt.addEventListener('mouseover', function () {
    Menu.style.height = '0vh';
    Menu.style.transition = '0.5s';
    Textbox.style.display='none';

    setTimeout(function () {
        Menu.style.height = '60vh';
        Menu.style.transition = '0.5s';
        cardone.style.backgroundImage = 'url("../public/assets/Images/gtab 3.png")';
        cardtwo.style.backgroundImage = 'url("../public/assets/Images/gtab 4.png")';
        cardtwo.style.backgroundSize = '90%';
        cardthree.style.backgroundImage = 'url("../public/assets/Images/GW29B-黑色-合盖.png")';
        Textbox.style.display='block';
        maintxt.innerHTML = ' Available Audio Products';
        devicetxtone.innerHTML = 'GTab Air3';
        devicetxttwo.innerHTML = 'GTab Air4';
        devicetxtthree.innerHTML = 'GTab X7';

        cardone.addEventListener('mouseover', function(){
            cardone.style.backgroundImage = 'url("../public/assets/Images/x6-removebg-preview.png")';
            cardone.style.transition = '0.5s';
        });
        cardone.addEventListener('mouseleave', function(){
            cardone.style.backgroundImage = 'url("../public/assets/Images/gtab 3.png")';
            cardone.style.transition = '0.5s';
        });
        cardtwo.addEventListener('mouseover', function(){
            cardtwo.style.backgroundImage = 'url("../public/assets/Images/x6-removebg-preview.png")';
            cardtwo.style.transition = '0.5s';
        });
        cardtwo.addEventListener('mouseleave', function(){
            cardtwo.style.backgroundImage = 'url("../public/assets/Images/gtab 3.png")';
            cardtwo.style.transition = '0.5s';
        });
        cardthree.addEventListener('mouseover', function(){
            cardthree.style.backgroundImage = 'url("../public/assets/Images/X7-hover.png")';
            cardthree.style.transition = '0.5s';
        });
        cardthree.addEventListener('mouseleave', function(){
            cardthree.style.backgroundImage = 'url("../public/assets/Images/GW29B-黑色-合盖.png")';
            cardthree.style.transition = '0.5s';
        });
    },400);
});
Wactchestxt.addEventListener('mouseover', function () {
    setTimeout(function () {
    Menu.style.height = '60vh';
    Menu.style.transition = '0.5s';
    cardone.style.backgroundImage = 'url("../public/assets/Images/gttab gt4.png")';
    cardone.style.backgroundSize = '125%';
    cardtwo.style.backgroundImage = 'url("../public/assets/Images/G Tab FT8 Pro.png")';
    cardtwo.style.backgroundSize = 'cover';
    cardthree.style.backgroundImage = 'url("../public/assets/Images/GTX3.5-300x300-removebg-preview.png")';
    Textbox.style.display='block';
    maintxt.innerHTML = 'Available Watches';
    devicetxtone.innerHTML = 'GTab GT3 Pro';
    devicetxttwo.innerHTML = 'GTab FT8 Pro';
    devicetxtthree.innerHTML = 'GTab GTX';
    },400);

    Menu.style.height = '0vh';
    Menu.style.transition = '0.5s';
    Textbox.style.display='none';
});


/////////////////////////////common animation to work properly//////////////////////////////////////////
Menu.addEventListener('mouseleave', function () {
    Menu.style.height = '0';
    Menu.style.transition = '0.5s';
    Textbox.style.display='none';
});
home.addEventListener('mouseover', function () {
    Menu.style.height = '0';
    Menu.style.transition = '0.5s';
    Textbox.style.display='none';
});

//////////////////////////////////////////mobile animations/////////////////////////////////////////
let isCross = false;
const mobileicon = document.getElementById('mobilemenuicon');
var mobiledrop = document.getElementById('mobilemenudrop');
var mobilelinks = document.getElementById('mobile-links');

mobileicon.addEventListener('click', function () {
    if (isCross) {
        mobileicon.style.backgroundImage = 'url("../public/assets/Icons/Hamburger.png")';
        mobiledrop.style.height = '0'; 
        mobiledrop.style.transition = '0.5s';
        mobHome.style.display = 'none';
        mobPhone.style.display = 'none';
        mobAudio.style.display = 'none';
        mobWatches.style.display = 'none';
    } else {
        mobileicon.style.backgroundImage = 'url("../public/assets/Icons/Cross.png")';
        mobiledrop.style.height = '60vh';
        mobiledrop.style.transition = '0.5s';
        mobHome.style.display = 'block';
        mobPhone.style.display = 'block';
        mobAudio.style.display = 'block';
        mobWatches.style.display = 'block';
    }
    isCross = !isCross;
});

/////////////////////////////////////Mobile Dropdown content animation///////////////////////////////
var mobHome = document.getElementById('Home-mobile');
var mobPhone = document.getElementById('Phones-mobile');
var mobAudio= document.getElementById('Audio-mobile');
var mobWatches = document.getElementById('Watches-mobile');
var phoneprodmob = document.getElementById('mbphoneCont');
var audprodmob = document.getElementById('mbaudioCont');
var mbwatchCont = document.getElementById('mbwatchCont');

mobPhone.addEventListener('click', function () {
    if (isCross) {
        mobiledrop.style.height = '100vh';
        mobiledrop.style.transition = '0.5s';
        mobAudio.style.top = '60%';
        mobWatches.style.top = '70%';
        phoneprodmob.style.display = 'block';

    } else {
        mobiledrop.style.height = '60vh';
        mobAudio.style.top = '40%';
        mobWatches.style.top = '50%';
        phoneprodmob.style.display = 'none';
    }
    isCross = !isCross;
});
mobAudio.addEventListener('click', function () {
    if (isCross) {
        mobiledrop.style.height = '100vh';
        mobiledrop.style.transition = '0.5s';
        mobWatches.style.top = '70%';
        audprodmob.style.display = 'block';
    } else {
        mobiledrop.style.height = '60vh';
        mobiledrop.style.transition = '0.5s';
        mobWatches.style.top = '50%';
        audprodmob.style.display = 'none';
    }
    isCross = !isCross;
});
mobWatches.addEventListener('click', function () {
    if (isCross) {
        mobiledrop.style.height = '100vh';
        mobiledrop.style.transition = '0.5s';
        mbwatchCont.style.display = 'block';
    } else {
        mobiledrop.style.height = '60vh';
        mobiledrop.style.transition = '0.5s';       
        mbwatchCont.style.display = 'none';
    }
    isCross = !isCross;
});
}, 100);
};
