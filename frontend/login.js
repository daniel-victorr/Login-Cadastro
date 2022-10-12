function getUser(){
  axios.get('http://localhost:3001/home/listar_todos')
  .then( response => {
   const data = response.data.credenciais
    localStorage.setItem('listUser',JSON.stringify(data));
  })
  .catch(error => console.log(error))
  }

getUser();

function login() {
  let usuario = document.getElementById('usuario');
  let userLabel = document.getElementById('userLabel');
  let senha = document.getElementById('senha');
  let senhaLabel = document.getElementById('senhaLabel');
  let msgError = document.getElementById('msgError');  
  
  let listUser = []
  let userValid = {
    nome: '',  
    user: '',
    senha: ''
  }

  listUser = JSON.parse(localStorage.getItem('listUser'));

  listUser.forEach((item) => {
    if(usuario.value == item.usuario && senha.value == item.senha){
      userValid = {
        nome:item.nome,
        user:item.usuario,
        senha:item.senha
      }
    }
   })

   if(usuario.value == '' && senha.value == ''){
      msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de fazer login!</strong>'
      msgError.setAttribute('style', 'display: block')
      userLabel.setAttribute('style', 'color: #f0ffffde')
      senhaLabel.setAttribute('style', 'color: #f0ffffde')
   }
    else if (usuario.value == userValid.user && senha.value == userValid.senha){ 
      let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
      localStorage.setItem('token', token)

      msgError.innerHTML = ''
      msgError.setAttribute('style', 'display: none')
      userLabel.setAttribute('style', 'color: #00ff88')
      senhaLabel.setAttribute('style', 'color: #00ff88')
      hr.setAttribute('style', 'box-shadow: 0px 0px 5px 0px #00ff88')
      setTimeout(()=>{
        location.href = '';
       },1000)
   }else{
      userLabel.setAttribute('style', 'color: red')
      senhaLabel.setAttribute('style', 'color: red')
      msgError.innerHTML = '<Strong>Usuário ou senha incorretos!</Strong>'
      msgError.setAttribute('style', 'display: block')
      let hr = document.getElementById('hr')
      hr.setAttribute('style', 'box-shadow: 0px 0px 5px 0px #ff0000')
      usuario.focus()
   }
 }



 