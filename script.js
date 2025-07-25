const form = document.querySelector('form'),
         emailField = form.querySelector('.email-field'),
         emailInput = emailField.querySelector('.email'),
         passField = form.querySelector('.create-password'),
         passInput = passField.querySelector('.password'),
         cPass = form.querySelector('.confirm-password'),
         cPassInput = cPass.querySelector('.cPassword');

function checkEmail(){
 const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailInput.value.match(pattern)){
   return emailField.classList.add('invalid');
  }
  emailField.classList.remove('invalid');
}   

const eyeIcons = document.querySelectorAll('.show-hide');
 eyeIcons.forEach(eyeIcon =>{
    eyeIcon.addEventListener('click',()=>{
        const pInput = eyeIcon.parentElement.querySelector('input');
        // eyeIcon.classList.replace('bx-eye-slash','bx-eye') //<i class='bx  bx-eye'  ></i> 
        if(pInput.type === 'password'){
            eyeIcon.classList.replace('bx-eye-slash','bx-eye')
            return (pInput.type = 'text');
        }
        eyeIcon.classList.replace('bx-eye','bx-eye-slash')
        pInput.type = 'password';
    })
})

function createPassword(){
 const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
 if(!passInput.value.match(passwordRegex)){
    return passField.classList.add('invalid');
 }
   passField.classList.remove('invalid');
}

function confirmPassword(){
    if(passInput.value !== cPassInput.value || cPassInput.value === ''){
    return cPass.classList.add('invalid');
    }
    cPass.classList.remove('invalid');
}

form.addEventListener('submit', (e)=>{
   e.preventDefault();
   checkEmail();
   createPassword();
   confirmPassword();
})