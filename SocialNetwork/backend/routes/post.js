const express = require('express')
const router = express.Router()
const file = require('../helpers/file')
const multer = require('multer')
const PostController = require('../database/controllers/post')
const UserController = require('../database/controllers/users')
const ComentController = require('../database/controllers/coment')
const Post = require('../database/models/post')
const Coment = require('../database/models/coment')
const verifier = require('../middleware/verify_token')
const fs = require('fs')
var jwt = require('jsonwebtoken');
const dir = 'http://localhost:3011/'

/* Adicionar post */
router.post('/', upload.array('photo',5) , (req, res) =>{
    var date_in = Date.now()
    let others = []
    let images = []
    console.log(req.body.owner)
    req.files.forEach(element => {
        if(file.checkFile(element.originalname)){ 
            images.push(dir + element.path)
        }else{
            others.push(dir + element.path)
        }
    });
    let photo
    UserController.userByName(req.body.owner)
        .then((dados) => {
            if(dados){
                photo = dados.photo
            }
            else{
                photo = null
            }

            const newPost = new Post({
                title   : req.body.title,
                owner   : req.body.owner,
                content : req.body.content,
                date    : date_in,
                ownerPhoto: photo,
                classification: req.body.classification,
                hashList: req.body.hashList,
                file    : others,
                likes   : 0,
                image   : images,
                comments: null
            }) 
        
            PostController.addPost(newPost)
                .then((dados) => {
                    res.status(201).jsonp(dados)
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).jsonp(err)
                })
        })
        .catch(err =>{
            console.log(err)
            res.status(500).jsonp(err)
        })
})

/* router que permite incrementar o numero de likes*/
router.post('/like/:id', (req,res) => {
    PostController.updateLikes(req.params.id)
        .then((dados)=>{
            res.status(202).jsonp({ status: "OK" })
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


/* Rota que permite obter todos os posts por filtros */
router.get('/filter', (req,res) =>{
    const owner = req.query.owner
    const hashtag = req.query.hashtag
    let result
    PostController.allPosts()
        .then((dados) =>{
            if(owner){
                result = dados.filter(post => post.owner === owner)
            }else if(hashtag){
                result = dados.filter(post => post.hashList.includes(hashtag))
            }
            res.status(200).json(result)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
})

/* Rota que permite obter todos os posts de um user */
router.get('/user/:username',verifier, (req,res)=>{
    console.log(req.params.username)
    PostController.postsByUser(req.params.username)
        .then((dados)=>{
            res.status(200).json(dados)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/:id/coment', upload.array('file',5),(req,res) =>{
    var date_in = Date.now()
    let others = []
    let images = []

    req.files.forEach(element => {
        if(file.checkFile(element.originalname)){
            others.push(element.path) 
        }else{
            images.push(element.path)
        }
    })

    newComent = new Coment({
        parentId: req.params.id,
        owner: req.body.owner,
        description: req.body.description,
        date: date_in,
        likes: 0,
        file: others,
        images: images,
    })

    ComentController.addComent(newComent)
        .then((dados) =>{
            res.status(200).json(dados)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

/* Rota que permite obter posts por hashtag*/ 
router.get('/hashtag/:hash',verifier, (req,res) =>{
   PostController.postsByHashtag(req.params.hash)
        .then((dados)=>{
            res.status(200).json(dados)
        })
        .catch(err =>{
            res.status(404).json(err)
        })
})

/* Rota que permite obter todos os posts (em principio ordenados por data)*/
router.get('/',verifier, (req,res) =>{
    PostController.allPosts()
        .then((dados)=>{ res.status(200).json(dados)})
        .catch(err => {
            res.status(500).json(err)
        })
})

/* Rota que permite obter um post especifico */
router.get('/:id',verifier, (req,res)=>{
    PostController.consult(req.params.id)
        .then((dados)=>{ res.status(200).json(dados)})
        .catch(err => {
            res.status(404).json(err)
        })
})


/* Rota que permite eliminar um post */
router.delete('/:id',verifier, (req,res)=>{
    PostController.deletePost(req.params.id)
        .then((dados)=>{ res.status(200).json(dados)})
        .catch(err =>{
            res.status(404).json(err)
        })
})

/* Rota que permite alterar um post */
router.patch('/:id',verifier, (req,res)=>{
    PostController.updatePost(req.params.id, req.body.title, req.body.content, req.body.hashtag)
        .then((dados) => res.status(202).jsonp({ status: "OK" }))
        .catch(err => {           
            res.status(404).json(err)
    })
})




module.exports = router