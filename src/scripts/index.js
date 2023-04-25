
function nameVerify(){
  const inputNameBtn = document.querySelector('.main__form-button')
  inputNameBtn.addEventListener('click',()=>{
     const inputName = document.querySelector('.main__form-input').value
    if(inputName.length === 0){
        const inptName = document.querySelector('.main__form-input')
         
        inptName.style.borderColor = '#c2255c';
          inptName.placeholder  = 'Insira um nome de usuario do github...!!'

        setTimeout(() => {
          inptName.placeholder  = 'Digite um usuário do github aqui...'
          inptName.style.borderColor = "rgba(255, 255, 255, 0.12)"
        }, 1000);
        
      }else {
        verifyNameApi(inputName)     
    }
  })
}


async function verifyNameApi(text){
  let nameInput = text
  const url = `https://api.github.com/users/${nameInput}`;
  await fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data.message == "Not Found"){
        window.location.href = "./src/pages/error.html";
      }
      else{
        localStorage.setItem('ArrPerfil',JSON.stringify(data))
        window.location.href = "./src/pages/profile.html";
    }
      
    })
    .catch(error => console.error(error));

}



nameVerify()