function errorPage(){
    const pageBtn = document.querySelector('.page__button')

    pageBtn.addEventListener('click',()=>{
        window.location.href = "/index.html";
        
    })
}

errorPage()