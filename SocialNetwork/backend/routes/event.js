const express = require('express')
const router = express.Router()
const verifier = require('../middleware/verify_token')
const Event = require('../database/models/events')
const EventController = require('../database/controllers/events')
const file = require('../helpers/file')

const file_path = 'http://localhost:3011/'

/** Rota que permite obter todos os eventos  */
router.get('/',verifier, (req,res) => {
  console.log(process.env.PATH)
  EventController.list()
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
})

/** Rota que permite obter um determinado evento  */
router.get('/get/:id',verifier, (req,res) => {
  EventController.consult(req.params.id)
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
})

/** Rota que permite obter todos os eventos em que um utilizador participou*/
router.get('/participation/:id',verifier,(req,res) => {
    EventController.get_participation(req.params.id)
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
  })
  
  /** Rota que permite obter todos os eventos que o utilizador organizou */
  router.get('/organization/:id',verifier,(req,res) => {
    EventController.get_events(req.params.id)
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
  })
  
  /** Rota que permite adicionar um participante a um evento */
router.post('/:id/participate/:user',verifier,(req,res) => {
    EventController.update_participation(req.params.id,req.params.user)
                  .then(dados => res.status(200).jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
 })
  
  router.delete('/participate/:post/:user',verifier,(req,res) => {
    const idPost = req.params.post;
    const user =req.params.user
    EventController.delete_participation(idPost,user)
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
  })
  router.delete('/:post',(req,res) => {
    const idPost = req.params.post;
    EventController.delete(idPost)
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
  })
  /** Rota que adicionar um evento que o utilizador organizou */
  router.post('/:tipe/:tittle/:owner/:description/:uc',upload.array('photo',5),(req,res) => {
    var date_in = Date.now()
    let others = []
    let images = []
    req.files.forEach(element => {
        if(file.checkFile(element.originalname)){
            others.push(file_path+element.path) 
        }else{
            images.push(file_path+element.path)
        }
    });
    console.log(others)

    const new_event = new Event({ 
      tipe    : req.params.tipe,
      tittle  : req.params.tittle,
      owner   : req.params.owner,
      date    : date_in, 
      description: req.params.description,
      photo: others[0],
      UC: req.params.uc,
      file: images[0],
    })
    console.log(new_event)
    EventController.addEvent(new_event)
    .then((dados) => {
      res.status(201).jsonp(dados)
  })
  .catch(err => {
      console.log(err)
      res.status(500).jsonp(err)
  })
  })
  
module.exports = router