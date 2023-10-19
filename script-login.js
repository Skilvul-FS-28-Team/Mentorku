const btnlogin = document.getElementById('login');

btnlogin.addEventListener('click', function(event){
    event.preventDefault();

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value


    fetch('https://652ff6b96c756603295e01fb.mockapi.io/regist')
    .then(res=>res.json())
  .then(res=>{
    console.log(res)
    const userExist = res.find(user=>user.email === email && user.password === password)
    console.log(userExist);
    if(userExist===undefined){
        console.log("Email atau Password Salah")
    }
  })
})