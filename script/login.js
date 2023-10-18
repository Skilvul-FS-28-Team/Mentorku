
const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click',function(event){
    event.preventDefault()

    const masukEmail = document.getElementById('masuk-email').value
    const masukPassword = document.getElementById('masuk-password').value

    fetch('https://652fcff56c756603295db5bd.mockapi.io/user')
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        const userExist = res.find(user=>user.email===masukEmail && user.password===masukPassword)
        console.log(userExist);
        if(userExist===undefined){
            console.log("salah")
        } else {
            console.log('bener cuy')
        }
    })


})