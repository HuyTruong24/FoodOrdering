import { verifyCredentials } from "./api.js"
const emailInput = document.querySelector('.email')
const passwordInput = document.querySelector('.password')
const loginBtn = document.querySelector('.login-button')

async function loadLoginPage(){
    try {
        loginBtn.addEventListener('click', async ()=>{
            
                const email = emailInput.value
                const password = passwordInput.value

                if(email.length > 0 && password.length > 0){
                    const data = await verifyCredentials(email,password)
                    console.log(data)
                    const {success} = data
                    if(success){
                        window.location.href = 'homepage.html'
                    }
                }
            
        })
     } catch (error) {
            
    }
    
}
function addToCookie(token){
    
}
document.addEventListener('DOMContentLoaded', loadLoginPage)