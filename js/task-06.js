const input = document.querySelector('input')
const valid = document.querySelector('.valid')
const invalid = document.querySelector('.invalid')


input.addEventListener("blur", symbolsCheck);

function symbolsCheck() {
    const correctLength = this.dataset.length;
    const inputDataLength = this.value.length;

    if (correctLength == inputDataLength) {
        this.style.border = "solid #4caf50";
    }else{
        this.style.border = "solid #f44336";
    }
}