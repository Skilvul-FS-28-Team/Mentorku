const registerbtn = document.getElementById("register-btn");

registerbtn.addEventListener("click", function(event){
    event.preventDefault()

    const namaDepan = document.getElementById('NamaDepan').value;
    const NamaBelakang = document.getElementById('NamaBelakang').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('NoTelp').value;

    fetch('https://652ff6b96c756603295e01fb.mockapi.io/regist', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({firstName: NamaDepan, 
        lastName: NamaBelakang,
        email: email,
        password: password,
        phone: phone
    })

  }) .then(res=>res.json())
  .then(res=>{
    alert("Register Berhasil")

    const url = `login.html`;

    window.location.href = url;
  })
  .catch(error => {
    alert("Gagal Mendaftar Harap Coba Lagi Nanti");
  });
})