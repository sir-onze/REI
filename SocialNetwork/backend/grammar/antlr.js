
const http = require('http');
const antlr4 = require('antlr4/index');
const ChatLexer = require('./ChatLexer').ChatLexer;
const ChatParser = require('./ChatParser').ChatParser;
const HtmlChatListener = require('./HtmlChatListener').HtmlChatListener;
const ChatVisitor = require('./ChatVisitor').ChatVisitor;
const fs = require('fs')

var campo = {}
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html' 
    });

    res.write('<html><body>');

    /** Valor de input de acordo com a DSL criada para o parser receber como input */
    var input = null;
    var temp = null;
    var final = null
    fs.readFile('Input.txt', (err, data) => { 
        if (err) throw err; 
        else{
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
    fs.readFile('Output.txt', (err, data) => { 
        if (err) throw err; 
        else{
            input = data.toString()
            /** Sacar os elementos necessários para a criação do utilzador */
            for(var i=0;i<3;i++){
                //agora aqui guarda os elementos para enviar para a rota do register
                campo= input.match(/:[a-z]+/gm)[i].replace(':','')
                console.log(campo)
            }
        }
         
    })  
res.end();
}).listen(1337);
