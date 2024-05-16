const passwordField = document.querySelector('.password__field'),
      lengthItem = document.querySelector('.length__field-item'),
      lengthRange = document.querySelector('.length__field-range'),
      numbers = document.querySelector('.checkbox-numbers'),
      symbols = document.querySelector('.checkbox-symbols'),
      btnGenerate = document.querySelector('.btn-generate'),
      btnCopy = document.querySelector('.password__copy'),
      charsNumbers = '0123456789',
      charsSymbols = '@#$%^&*([]';

lengthRange.addEventListener('input', ()=>{
    lengthItem.value = lengthRange.value
})
lengthItem.addEventListener('input', ()=>{
    lengthRange.value = lengthItem.value
})

btnGenerate.addEventListener('click', ()=>{
    
    let password = '';

    let charsLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numbers.checked){
        charsLetters += charsNumbers
    }
    if(symbols.checked){
        charsLetters += charsSymbols
    }


    if(lengthItem.value > 30){
        passwordField.innerHTML = "<p class='error'>Maximum length  <b>30 characters</b></p>";
    } else{
        for(let i = 0; i < lengthItem.value; i++){
            password += charsLetters[Math.floor(Math.random()*charsLetters.length)]
        }
    
        passwordField.innerHTML = password
    }
})

btnCopy.addEventListener('click', copyText );

function copyText() {
    navigator.clipboard.writeText(passwordField.innerText)
      .then(() => {
        const error = document.querySelector('.password__alert')
        if(!passwordField.innerText){
            error.textContent = "Failed to copy!"

            error.classList.add('password__alert-active')

            setTimeout(() => {
                error.classList.remove('password__alert-active')
            }, 2500);
        } else{
            error.textContent = "Password copied!"

            error.classList.add('password__alert-true')
            error.classList.add('password__alert-active')
            
            setTimeout(() => {
                error.classList.remove('password__alert-active')
            }, 2500);
        }
      })
      .catch(err => {
        console.error('Ошибка копирования текста: ', err);
      });
  }