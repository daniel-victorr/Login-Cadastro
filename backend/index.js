const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const my_database = require('./src/services/dataBase')
const cors = require('cors')


//Rotas
const cadastroRouter = require('./src/routes/cadastro.routes')
const homeRouter = require('./src/routes/home.routes')

//Midleware

 app.use(bodyParser.json())
 app.use(cors())
// app.use((req, res, next)=>{
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// })


app.use('/cadastro', cadastroRouter)
app.use('/home', homeRouter)

//Porta
app.listen(3001, ()=>{
    console.log('Servidor rodando na porta 3001 http://localhost:3001')
})