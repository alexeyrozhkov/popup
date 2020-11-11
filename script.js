const buttonShowPopup = document.querySelector('.button');
const popupElement = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');

function hideElement(element) {
    element.style.display = 'none';
}
function showElement(element) {
    element.style.display = "block";
}

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        hideElement(overlay);  
    }
});

buttonShowPopup.onclick = function() {
    showElement(overlay);
}

overlay.onclick = function(e) {
    const target = e.target;
    const isOverlay = target.classList.contains('overlay');
    const isClosedButton = target.classList.contains('closed');
    if(isOverlay || isClosedButton) {
        hideElement(overlay);
    }
}