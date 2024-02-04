const range = document.querySelector('input');
const text = document.querySelector('#text');

range.addEventListener('input', function() {
    const rangevalue = range.value;
    text.style.fontSize = rangevalue +"px"
});