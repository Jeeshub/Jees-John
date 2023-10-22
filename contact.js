const scriptURL = 'https://script.google.com/macros/s/AKfycbyDJ9vE_a1TJ8pFmhcuGAjk5jNHIvtrtp7U9cb216Yr_7DKQkjIO6LuO4Dx1ZFLqxPb/exec'

const form = document.forms['contact-form']

form.addEventListener('submit' , e=>{
    e.preventDefault()
    fetch(scriptURL, {method:'post',body:new FormData(form)})
    .then(Response=>alert("thank you. "))
    .then(() =>{ window.location.reload(); })
    .catch(error => console.error('Error!',error.message))

})