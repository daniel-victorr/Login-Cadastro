const mongoose = require('mongoose')
const Cadastro = require('../models/Cadastro')
const express = require('express')
const router = express('Router')

//CRUD Página home

router.post('/cadastrar', async (req, res)=>{
    try {
       const credenciais = await Cadastro.create(req.body)
       res.status(201).json({error: false, credenciais:credenciais})
    } catch (err) {
       res.status(500).json({erro: true, message: err.message})
    }
})

router.delete('/deletar/:id', async (req, res)=>{
    try {
        const id = req.params.id; 
        const credenciais = await Cadastro.findByIdAndRemove(id)
       res.status(201).json({error: false, credenciais:credenciais})
    } catch (err) {
       res.status(500).json({erro: true, message: err.message})
    }
})

router.put('/atualizar/:id', async (req, res)=>{
    try {
        const id = req.params.id; 
        const credenciais = await Cadastro.findByIdAndUpdate(id, req.body, {new: true})
       res.status(201).json({error: false, credenciais:credenciais})
    } catch (err) {
       res.status(500).json({erro: true, message: err.message})
    }
})

router.get('/listar/:id', async (req, res)=>{
    try {
        const id = req.params.id; 
        const credenciais = await Cadastro.findById(id)
       res.status(201).json({error: false, credenciais:credenciais})
    } catch (err) {
       res.status(500).json({erro: true, message: err.message})
    }
})

router.get('/listar_todos', async (req, res)=>{
    try {
        const credenciais = await Cadastro.find({})
       res.status(201).json({error: false, credenciais:credenciais})
    } catch (err) {
       res.status(500).json({erro: true, message: err.message})
    }
})

module.exports = router