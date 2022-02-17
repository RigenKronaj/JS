const button = document.querySelector('#remove-color-button');
const choice = document.querySelector('#colorSelect');
button.addEventListener('click', removeColor);

function removeColor() {
    choice.remove(choice.selectedIndex);
}