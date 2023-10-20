const urlParams = new URLSearchParams(window.location.search);

fetch('https://652ff6b96c756603295e01fb.mockapi.io/datamentor')
  .then(res => res.json())
  .then(res => {
    // Di sini, data adalah array dari digimon yang diambil dari API.
    const idMentor = urlParams.get('id');
    console.log(idMentor)

    const cardInfo = document.querySelector('.card-info');
    const selectedMentor = res.find(datamentor => datamentor.id === idMentor);
    
        // ganti nama di note bayar
    const namamentor = document.getElementById('namamentor')
    const descData = `${selectedMentor.name}`
    namamentor.innerHTML += descData;

    // ganti nama di note card
    const namacard = document.querySelector('.card-title');
    namacard.innerHTML += `${selectedMentor.name}`
    
    
  })
  .catch(error => {
    console.error('Error fetching data from the API:', error);
  });


const paymentBtn = document.getElementById('cta-payment');

paymentBtn.addEventListener('click',function(){
  const url = `payment-barcode.html`;

    window.location.href = url;
})
