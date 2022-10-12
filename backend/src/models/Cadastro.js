const mongoose = require('mongoose')
const cadastroSchema = new mongoose.Schema({
      nome:{
        type: String,
        required:true,
        minlength:4
      },
      usuario:{
        type:String,
        required:true,
        minlength:5
      },
      senha:{
        type:String,
        required:true,
        minlength:6
      }   
})
const Cadastro = mongoose.model('cadastro', cadastroSchema)
module.exports = Cadastro;