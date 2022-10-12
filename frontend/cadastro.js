let nome = window.document.getElementById('nome')
let nomeLabel = window.document.getElementById('nomeLabel')
let validNome = false;

let usuario = window.document.getElementById('usuario')
let usuarioLabel = window.document.getElementById('usuarioLabel')
let validUsuario = false;

let senha = window.document.getElementById('senha')
let senhaLabel = window.document.getElementById('senhaLabel')
let validSenha = false;

let confirmarSenha = window.document.getElementById('confirmarSenha')
let confirmarSenhaLabel = window.document.getElementById('confirmarSenhaLabel')
let validconfirmarSenha = false;

let msgError = window.document.getElementById('msgError')
let msgSuccess = window.document.getElementById('msgSuccess')

nome.addEventListener('keyup',()=>{
  if(nome.value.length <= 3){
    nomeLabel.setAttribute('style', 'color: red')
    nomeLabel.innerHTML = 'Nome *Insira no mínimo 4 caracteres'; 
    validNome = false;
  }else{
    nomeLabel.setAttribute('style', 'color: #00ff88')
    nomeLabel.innerHTML = 'Nome';
    validNome = true;
  }
})

usuario.addEventListener('keyup',()=>{
    if(usuario.value.length <= 4){
      usuarioLabel.setAttribute('style', 'color: red')
      usuarioLabel.innerHTML = 'Usuario *Insira no mínimo 5 caracteres';
      validUsuario = false;
    }else{
      usuarioLabel.setAttribute('style', 'color: #00ff88')
      usuarioLabel.innerHTML = 'Usuario';
      validUsuario = true;
    }
  })

  senha.addEventListener('keyup',()=>{
    if(senha.value.length <= 5){
      senhaLabel.setAttribute('style', 'color: red')
      senhaLabel.innerHTML = 'Senha *Insira no mínimo 6 caracteres';
      validSenha = false;
    }else{
      senhaLabel.setAttribute('style', 'color: #00ff88')
      senhaLabel.innerHTML = 'Senha';
      validSenha = true;
    }
  })

  confirmarSenha.addEventListener('keyup',()=>{
    if(confirmarSenha.value != senha.value || senha.value.length <= 5){ 
      senhaLabel.setAttribute('style', 'color: red')
      senhaLabel.innerHTML = 'Senha *Incorreta'; 
      confirmarSenhaLabel.setAttribute('style', 'color: red')
      confirmarSenhaLabel.innerHTML = 'Confirmar Senha *As senhas não conferem'; 
      validconfirmarSenha = false;
    }else{
      senhaLabel.setAttribute('style', 'color: #00ff88')
      senhaLabel.innerHTML = 'Senha'; 
      confirmarSenhaLabel.setAttribute('style', 'color: #00ff88')
      confirmarSenhaLabel.innerHTML = 'Confirmar Senha'; 
      validconfirmarSenha = true;
    }
  })

function cadastrar(){
  if(validNome && validSenha && validUsuario && validconfirmarSenha){
      
     const user = {
     nome :nome.value,
     usuario: usuario.value,
     senha: senha.value
     }

     JSON.stringify(user)
     console.log(user)

     await = axios.post('http://localhost:3001/home/cadastrar', user)
    .then(response => {})
    .catch(error => console.log(error))

     msgSuccess.setAttribute('style', 'display: block')
     msgSuccess.innerHTML ='<strong>Usuário cadastrado com sucesso!</strong>';
     msgError.setAttribute('style', 'display: none')
     msgError.innerHTML = ''

     setTimeout(() => {
       window.location.href = 'http://127.0.0.1:5500/Tela-de-Cadastro-master/login.html';
     },3000)
     
  }else{
     msgError.setAttribute('style', 'display: block')
     msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar!</strong>';
     msgSuccess.setAttribute('style', 'display: none')
     msgSuccess.innerHTML ='';
  }
}
