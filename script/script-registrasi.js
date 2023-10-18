const registBtn = document.getElementById('register-btn');

registBtn.addEventListener('click',function(event){
    event.preventDefault()

    const namaDepan = document.getElementById('NamaDepan').value;
    const namaBelakang = document.getElementById('NamaBelakang').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('NoTelp').value;

    fetch('https://652fcff56c756603295db5bd.mockapi.io/user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({firstName: namaDepan, 
                        lastName: namaBelakang, email: email, password:password,
                        phone :phone})
  }) .then(res=>res.json())
     .then(res=>alert("register berhasil"))
})

