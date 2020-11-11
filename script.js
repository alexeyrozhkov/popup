const buttonCreatePopup = document.querySelector('.button');
const popupElement = document.querySelector('.popup');
const buttonClosetPopup = document.querySelector('.closet');
const overlay = document.querySelector('.overlay');

function removeElement(element) {
    element.style.display = 'none';
}
function showElement(element) {
    element.style.display = "block";
}

document.addEventListener('keydown',function(e) {
    if(e.key == 'Escape') {
        removeElement(overlay);
        showElement(buttonCreatePopup);  
    }
});


buttonCreatePopup.onclick = function() {
    removeElement(buttonCreatePopup);
    showElement(overlay);
}

overlay.onclick = function(e) {
    let target = e.target;
    if(!target.classList.contains('popup') || target.classList.contains('closet')) {
        removeElement(overlay);
        showElement(buttonCreatePopup);
        return;
    }
    
}