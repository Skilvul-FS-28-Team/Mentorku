const urlParams = new URLSearchParams(window.location.search);

fetch('https://652ff6b96c756603295e01fb.mockapi.io/datamentor')
  .then(res => res.json())
  .then(res => {
    
    const idMentor = urlParams.get('id');

    const cardInfo = document.getElementById('hero');
    const selectedMentor = res.find(datamentor => datamentor.id === idMentor);
    console.log(selectedMentor)
    const headingMentors = 
    ` <div class="hero-section">
    <div class="hero-text">
      <img src="${selectedMentor.img}" alt="MentorKu">
      <div class="hero-desc">
        <h2>${selectedMentor.name} <span>${selectedMentor.field} di ${selectedMentor.company}</span></h2>
        <div class="hero-social-media">
          <a href="#" class="fa fa-linkedin" id="btn-sosmed"></a>
          <a href="#" class="fa fa-instagram" id="btn-sosmed"></a>
          <a href="#" class="fa fa-dribbble" id="btn-sosmed"></a>
          <a href="#" class="fa fa-youtube" id="btn-sosmed"></a>
        </div>
      </div>
    </div>
  </div>`

    cardInfo.innerHTML += headingMentors;
    


    // ubah deskripsi

    const descContainer = document.getElementById('desc-text')
    const descData = `${selectedMentor.desc}`

    descContainer.innerHTML += descData;
  })
  .catch(error => {
    console.error('Error fetching data from the API:', error);
  });


  const btnBooking = document.getElementById('btn-booking-mentor')

  btnBooking.addEventListener('click', function(){

    fetch('https://652ff6b96c756603295e01fb.mockapi.io/datamentor')
  .then(res => res.json())
  .then(res => {
    
    const idMentor = urlParams.get('id');
    const selectedMentor = res.find(datamentor => datamentor.id === idMentor);
    console.log(selectedMentor)
    
    const url = `detail-pembayaran.html?id=${selectedMentor.id}`;

    window.location.href = url;

   
  })
  .catch(error => {
    console.error('Error fetching data from the API:', error);
  });

    
  })
