
const localStoragePerfil = JSON.parse(localStorage.getItem('ArrPerfil'))

let arrRepo;
let avatar ;
let namePerfil ;

 function saveNameAndAvatar(arr){
     avatar = arr.avatar_url
     namePerfil = arr.name
    apiRepo(arr.repos_url)
}

function btnNewPerfil(){
    const btnNew = document.querySelector('.perfil__button')

    btnNew.addEventListener('click',()=>{
        window.location.href = "/index.html";
    })
}

async function apiRepo(url){
    let urlRepo = url

   await fetch(urlRepo)
    .then(response => response.json())
    .then(data => {
        arrRepo = data
        renderRepositorys()
        
    })
    .catch(error => console.error(error))

}

async function renderRepositorys(){
    
    const mainElement = document.querySelector('.main');
    const perfilImg = document.getElementById('perfil__img');
    const nameProfile = document.querySelector('.perfil__title');
    perfilImg.src = `${avatar}`;
    nameProfile.innerHTML = namePerfil;
    
    arrRepo.forEach(element => {
        const repositorysSection = document.querySelector('.main__repositorys');
    
        const repositorysUnity = document.createElement('div');
        repositorysUnity.classList.add('repositorys--unity');
        repositorysSection.appendChild(repositorysUnity);
    
        const repositorysTitle = document.createElement('h1');
        repositorysTitle.classList.add('repositorys__title');
        repositorysTitle.textContent = element.name;
        repositorysUnity.appendChild(repositorysTitle);
    
        const repositorysDescription = document.createElement('span');
        repositorysDescription.classList.add('repositorys__description');
        repositorysDescription.textContent = element.description;
        repositorysUnity.appendChild(repositorysDescription);
    
        const repositorysButton = document.createElement('input');
        repositorysButton.classList.add('repositorys__button');
        repositorysButton.setAttribute('type', 'button');
        repositorysButton.setAttribute('value', 'Repositório');
        repositorysUnity.appendChild(repositorysButton);
        repositorysButton.addEventListener('click',()=>{
            window.open(element.html_url)
        })
    
    
        // // Adiciona as seções criadas à seção principal "main"
        mainElement.appendChild(repositorysSection);
        
        // openProfile()
        
    });
}


 function openProfile(){
    window.location.href = "./src/pages/profile.html";
}

saveNameAndAvatar(localStoragePerfil)
btnNewPerfil()