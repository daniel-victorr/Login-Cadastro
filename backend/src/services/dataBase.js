const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Login-Cadastro',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Conexão de banco de dados realizada com sucesso!')
}).catch((error)=>{
    console.log('Conexão de banco de dados realizada com erro!')
});

module.exports = mongoose;
