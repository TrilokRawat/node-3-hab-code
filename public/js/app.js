
console.log('client side javascript is loaded')

const weatherForm = document.querySelector('form')
const vale = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(vale.value)
})