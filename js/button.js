var button = document.getElementById('app-button');
var text = document.getElementById('text-container');

button.addEventListener('click', function () {
    text.innerHTML = 'You clicked the button!';
});
