const buttonCreatePopup = document.querySelector('.button');
const popupElement = document.querySelector('.popup');
const buttonClosetPopup = document.querySelector('.closed');
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
    }
});


buttonCreatePopup.onclick = function() {
    showElement(overlay);
}

overlay.onclick = function(e) {
    let target = e.target;
    if(!target.classList.contains('overlay') && !target.classList.contains('closed')) {
        return;
    }
    removeElement(overlay);
}