import { createUsers } from "./api.js"
const emailInput = document.querySelector('.email')
const passwordInput = document.querySelector('.password')
const retypePasswordInput = document.querySelector('.retype-password')
const registerBtn = document.querySelector('.register-button')

async function loadLoginPage(){
    try {
        registerBtn.addEventListener('click', async ()=>{
            const email = emailInput.value
            const password = passwordInput.value
            const retypePass = retypePasswordInput.value

            if(email.length > 0 && password.length > 0 && retypePass.length > 0){
                const response = await createUsers(email,password,retypePass)
                const { success } = response
                if(success){
                    window.location.href = 'index.html'
                }
            }
            
            
        })
    } catch (error) {
        console.error(error)
    }
    
}
document.addEventListener('DOMContentLoaded', loadLoginPage)