const express = require('express')
const router = express.Router()
const multer = require('multer')
var jwt = require('jsonwebtoken');

const User = require('../database/models/user')
const UserController = require('../database/controllers/users')
const PostController = require('../database/controllers/post')
const verifier = require('../middleware/verify_token')

const path = require('path')
const file = require('../helpers/file')

const file_path = 'http://localhost:3011/files/images/'

/** Parte de gramáticas  */

const antlr4 = require('antlr4/index');
const ChatLexer = require('../grammar/ChatLexer').ChatLexer;
const ChatParser = require('../grammar/ChatParser').ChatParser;
const ChatVisitor = require('../grammar/ChatVisitor').ChatVisitor;
const fs = require('fs')

const DIR = './grammar/files';


const storage = multer.diskStorage({
    destination: DIR,
    filename: function(req,file,cb){
      cb(null,"input.txt")
    } 
});
  
var carrega = multer({
    storage: storage, //local onde os ficheiros vao ser guardados
    limits:{fileSize:1000000} //limitar o tamanho do ficheiro
});

/** Rota que permite o registo de um utilizador */
router.post('/register', async function(req, res, next) {
    const userExists = await User.findOne({email:req.body.email})
    console.log(userExists);
    if(userExists!=null){
      return res.send('user existe')
    }
    
    const new_user = new User({ 
      email: req.body.email, 
      password: req.body.password,
      username: req.body.username,
      age:req.body.age,
      position:req.body.position,
      tipe:req.body.tipe,
      friends:[]
    })
  
    new_user.save((err, savedUser) => {
      if (err) return res.json(err)
      res.send(savedUser)
  
  })
    console.log(req.body.email)
    console.log(req.body.password)
  
  });

  
  /** Rota que permite o registo de um utilizador */
router.post('/grammar',carrega.single('photo'), async function(req, res, next) {
      /** Valor de input de acordo com a DSL criada para o parser receber como input */
      var input = null;
      var email;
      var username;
      var password;
      var tipo;

      fs.readFile('./grammar/files/input.txt', (err, data) => { 
          if (err) throw err; 
          else{
              console.log("aqui")
              input = data.toString();
              /** Construção do lexer e parser para a construção da árvore de parsing */
              const chars = new antlr4.InputStream(input);
              const lexer = new ChatLexer(chars);
              const tokens = new antlr4.CommonTokenStream(lexer);
              const parser = new ChatParser(tokens);
              parser.buildParseTrees = true;
  
              /** Construção da árvore de parsing */
              const tree = parser.social();
              /** Correr o visitor */
              tree.accept(new ChatVisitor());
          }
      })
      fs.readFile('./grammar/output.txt', (err, data) => { 
          if (err) throw err; 
          else{
              input = data.toString()
              /** Sacar os elementos necessários para a criação do utilzador */
              for(var i=0;i<4;i++){
                  //agora aqui guarda os elementos para enviar para a rota do register
                  if(i==0){
                    email = input.match(/:[a-z]+/gm)[i].replace(':','')
                    console.log(email)
                  }
                  if(i==1){
                    username = input.match(/:[a-z]+/gm)[i].replace(':','')
                    console.log(username)
                  }
                  if(i==2){
                    password=input.match(/:[a-z]+/gm)[i].replace(':','')
                    console.log(password)
                  }
                 /* if(i==3){
                    tipo=input.match(/:[a-z]+/gm)[i].replace(':','')
                    console.log(tipo)
                  }*/
              }
          }
          console.log("email "+this.email)
          
          const new_user = new User({ 
            email: email, 
            password: password,
            username: username,
            age:0,
            position:'',
            tipe:1,
            friends:[]
          })
          console.log(new_user)
        
          new_user.save((err, savedUser) => {
            if (err) return res.json(err)
            res.send(savedUser)
        
        })
      })})
  
 
  




/* Rota que permite o login de um cliente */
router.post(
    '/login',
    async function (req, res, next) {
      const userExists = await UserController.consult(req.body.email)
      if(userExists==null){
        return res.send('email ou password errada')
      }
      if(req.body.password==userExists.password){
          // criar e enviar o token para o cliente
          // mudar o tempo de expiração 
          const token = jwt.sign({email:req.body.password},"JWT WORKS",{expiresIn:'3600s'});
          console.log("token enviado")
          res.header('token',token).send(token);
          
      }
    }
  )

/** Rota que permite obter todos os posts de um utilizador */
router.get('/posts/:id',verifier,(req,res) => {
  PostController.get_posts(req.params.id)
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))
})

/** Rota que permite obter todos os comentários de um utilizador !! */


/** Rota que permite obter todos os albuns criados por um utilizador !! */

/** Rota que permite efetuar o logout*/
router.post('/logout',verifier, (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

/** Rota para adicionar foto ao utilizador */
router.post('/pictures/:id',verifier, upload.single('photo'),(req,res) => {
    const url = 'http://localhost/3011' + req.get('host')
    console.log(req.params.id)
    console.log(JSON.stringify(req.file.filename))

    const mail = req.params.id
    const name = req.file.filename
    const photo = file_path+name;
    console.log(photo)
     
     //dar update no profile picture

    UserController.update_photo(mail,photo)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
   
})

/** Rota para alterar os dados de perfil de um utilizador */
router.post('/edit/:id',verifier,(req, res) => {
  const mail = req.params.id
  console.log(req.body)
  UserController.update_infos(mail,req.body.email,req.body.password,req.body.username,req.body.age,req.body.position)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
  });

/** Rota que permite obter todos os amigos */
router.get('/friends/:id',verifier,(req, res) => {
  UserController.consult_friends(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

/** Rota que permite obter todos os amigos */
router.get('/friendrequests/:id',verifier,(req, res) => {
  UserController.consult_friends_requests(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

/** Efetuar um pedido de amizade, introduzir nos pendentes dos 2 users */
router.post('/request/:id/:target',verifier,(req, res) => {
  const user1 = req.params.id
  console.log(user1)
  const user2 = req.params.target
  console.log(user2)
  // inserir no array dos unconfirmed
  //UserController.update_unconfirmed(user1,user2)
  UserController.update_unconfirmed(user2,user1)
  res.send("done")
});

router.post('/confirm/:id/:target',verifier,(req, res) => {
  const user1 = req.params.id
  const user2 = req.params.target
  // inserir no array dos confirmed do primeiro e remover dos unconfirmed do primeiro
  UserController.update_confirmed(user1,user2)
  UserController.update_confirmed(user2,user1)
  UserController.remove_unconfirmed(user2,user1)
  UserController.remove_unconfirmed(user1,user2)
  res.send("done")
});

/** Rota de verificação da autenticação */
router.get('/auth/:id', verifier,function(req, res, next) {
  console.log(req.params.id)
  UserController.consult(req.params.id)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
  });

router.get('/add/:id', verifier,function(req, res, next) {
  console.log(req.params.id)
  UserController.consult_all(req.params.id)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
  });
module.exports = router