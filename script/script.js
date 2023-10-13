let select = document.getElementById('select');
        let listSearch = document.getElementById('list-search');
        let selectText = document.getElementById('select-text');
        let inputField = document.getElementById('search-input');
        let options = document.getElementsByClassName('options');

        select.onclick = function(){
            listSearch.classList.toggle("open");
        }

        for(option of options){
            option.onclick = function(){
                selectText.innerHTML = this.innerHTML;
                inputField.placeholder = "Yuk cari " + selectText.innerHTML +" faforitmu"
            }
        }