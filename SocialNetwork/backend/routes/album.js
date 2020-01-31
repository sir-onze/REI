const express = require('express')
const router = express.Router()
const verifier = require('../middleware/verify_token')
const Album = require('../database/models/album')
const AlbumController = require('../database/controllers/album')
const file = require('../helpers/file')
const multer = require('multer')


/** Rota que permite obter todos os eventos  */
router.get('/',verifier, (req,res) => {
  AlbumController.list()
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

/** Rota que permite obter todos os albuns por tipo */
router.get('/type/:type', (req,res) =>{
  AlbumController.getByType(req.params.type)
    .then((dados) => res.status(200).jsonp(dados))
    .catch(err =>{
      console.log(err)
      res.status(404).jsonp(dados)
    })
})

/** Rota que permite obter um determinado evento  */
router.get('/:id',verifier, (req,res) => {
  AlbumController.consult(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

/** Rota que permite obter todos os albuns que o utilizador criou */
router.get('/user/:id',verifier,(req,res) => {
  AlbumController.getByOwner(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(404).jsonp(erro))
})

/** Rota que permite eleminar um determinado album */
router.delete('/:id',verifier, (req,res) =>{
  AlbumController.delete(req.params.id)
    .then( dados => res.status(200).jsonp(dados))
    .catch(err => res.status(404).jsonp(err))
})
  
/** Rota que adicionar um album que o utilizador criou */
router.post('/',verifier, upload.array('file',5), (req,res) => {
  var date_in = Date.now()
  let images = []
  req.files.forEach(element => {
    if(file.checkFile(element.originalname)){
      images.push(element.path)
    }
  });

  const newAlbum = new Album({ 
    tipe: req.body.tipe,
    tittle: req.body.tittle, 
    owner: req.body.owner,
    date: date_in,
    description:req.body.description,
    photos: images,
  })
  
  AlbumController.create(newAlbum)
    .then((dados) => {
      res.status(201).jsonp(dados)
    })
    .catch(err => {
      console.log(err)
      res.status(500).jsonp(err)
    })
  })
  
module.exports = router