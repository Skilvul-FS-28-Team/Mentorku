// Mendapatkan query parameter 'search' dari URL
const urlParams = new URLSearchParams(window.location.search);
const searchValue = urlParams.get('search');

// Menampilkan nilai searchValue di input dengan ID 'search-input'
document.getElementById('search-input').value = searchValue;

let searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click',function(event){
    event.preventDefault()

    let isiInputField = document.getElementById('search-input').value;
    let resultContainer = document.getElementById('result-container')
    resultContainer.innerHTML = ""

    fetch('https://652ff6b96c756603295e01fb.mockapi.io/datamentor')
    .then(res=>res.json())
    .then(res=>{

        const userExist = res.filter(datamentor => datamentor.name.toLowerCase().includes(isiInputField.toLowerCase()));

        if (userExist.length > 0) {
            for (let i = 0; i < userExist.length; i++) {
                let cardElement = 
                `<div class="col">
                <a href="/detail-mentor.html?id=${userExist[i].id}">
                  <div class="card card-mentor">
                    <img src="${userExist[i].img}" alt="" srcset="">
                    <h3>${userExist[i].name}</h3>
                    <div class="mentor-company d-inline-flex gap-2 align-items-center">
                      <i class="bi bi-suitcase-lg"></i><div class="mentor-company-text">${userExist[i].field} di ${userExist[i].company}</div>
                    </div>
                    <div class="mentor-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                      <div class="mentor-experience">
                        Experience <br> <b>${userExist[i].yoe}</b>
                      </div>
                      <div class="mentor-status">
                        avaliable
                      </div>
                    </div>
                    <div class="price-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                      <div class="price">
                        Rp${userExist[i].price}
                      </div>
                      <div class="rating d-inline-flex gap-1">
                        <i class="bi bi-star-fill"></i>4.9<b>(576)</b>
                      </div>
                    </div>
                  </div>
                </a>
              </div>`



                resultContainer.innerHTML += cardElement;
            }

        } else {
            
            resultContainer.innerHTML += "<h1>Mentor Faforitmu tidak ditemukan</h1>";
            
        }
    })
})

