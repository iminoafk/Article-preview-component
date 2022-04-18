// séléctionne le bouton share
const share = document.getElementById('share');

// séléctionne la div share-info
const shareInfo = document.getElementById('share-info');
const d = document.getElementById('d');


const matchResult = window.matchMedia("(max-width:1040px)");

function isSmallScreen(){
    return window.matchMedia("(max-width:1040px)").matches;
}
shareInfo.classList.add('hidden');



if (isSmallScreen() === true){
    share.addEventListener('click', () => {  
        shareInfo.classList.toggle('visible');
        d.classList.toggle('hidden'); 
    });
} else {
    share.addEventListener('click', () => {   
        shareInfo.classList.toggle('hidden');
    });
}

