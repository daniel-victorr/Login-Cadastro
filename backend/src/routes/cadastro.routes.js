const mongoose = require('mongoose')
const Cadastro = require('../models/Cadastro')
const express = require('express')
const router = express('Router')

//Página cadastro

router.post('/', async (req, res)=>{
     try {
        const credenciais = await Cadastro.create(req.body)
        res.status(201).json({error: false, credenciais:credenciais})
     } catch (err) {
        res.status(500).json({erro: true, message: err.message})
     }
})


module.exports = router;