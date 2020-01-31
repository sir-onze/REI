const express = require('express')
const router = express.Router()
const file = require('../helpers/file')
const multer = require('multer')
const ComentController = require('../database/controllers/coment')
const Coment = require('../database/models/coment')
const verifier = require('../middleware/verify_token')
const fs = require('fs')
var jwt = require('jsonwebtoken');

/* Rota que dá edita comentarios */
router.patch('/:id',verifier,(req,res) =>{
    ComentController.update(req.params.id, req.body.description, req.body.likes, req.body.hashList)
        .then((dados) => res.status(202).jsonp({ status: "OK" }))
        .catch(err => { res.status(404).json(err) })
})

/** Rota que permite ir buscar os comentarios por parent */
router.get('/parent/:id',verifier, (req,res) =>{
    ComentController.getByParent(req.params.id)
        .then((dados) => res.status(200).jsonp(dados))
        .catch(err => { res.status(404).json(err) })
})

/* Rota que permite eleminar um comentário especifico */
router.delete('/:id', verifier,(req,res) =>{
    ComentController.deleteById(req.params.id)
        .then((dados) => res.status(200).jsonp(dados))
        .catch(err => { res.status(404).json(err) })
})

router.delete('/parent/:id',verifier, (req,res) =>{
    console.log('delete by parent ' + req.params.id)
    ComentController.deleteByParent(req.params.id)
        .then((dados) =>{
            console.log(dados)
            res.status(200).jsonp(dados)
        })
        .catch(err => res.status(400).jsonp(err))
})

module.exports = router