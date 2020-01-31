// Generated from Chat.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
const fs = require('fs')

// This class defines a complete generic visitor for a parse tree produced by ChatParser.
var count = 0

function ChatVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ChatVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ChatVisitor.prototype.constructor = ChatVisitor;

// Visit a parse tree produced by ChatParser#social.
ChatVisitor.prototype.visitSocial = function(ctx) {
  this.visitChildren(ctx);
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ChatParser#value.
ChatVisitor.prototype.visitValue = function(ctx) {
  if(count==0){
    count+=1;
    return this.visitInfos(ctx);
  }
  else{
    return null
  }
};


// Visit a parse tree produced by ChatParser#infos.
ChatVisitor.prototype.visitInfos = function(ctx) {
  const r =this.visitIdade(ctx)
  console.log("a fucnionar")
  fs.writeFile('./grammar/output.txt', r, (err) => { 
    if (err) throw err; 
}) 
  return null;
};


// Visit a parse tree produced by ChatParser#email.
ChatVisitor.prototype.visitEmail = function(ctx) {
  return this.visitTerminal(ctx);
};


// Visit a parse tree produced by ChatParser#username.
ChatVisitor.prototype.visitUsername = function(ctx) {
  return this.visitTerminal(ctx);
};

ChatVisitor.prototype.visitEMAIL = function(ctx) {
  return this.visitTerminal(ctx);
};

// Visit a parse tree produced by ChatParser#password.
ChatVisitor.prototype.visitPassword = function(ctx) {
  return this.visitTerminal(ctx);
};  


// Visit a parse tree produced by ChatParser#idade.
ChatVisitor.prototype.visitIdade = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ChatParser#tipo.
ChatVisitor.prototype.visitTipo = function(ctx) {
  return this.visitChildren(ctx);
};

ChatVisitor.prototype.visitTerminal = function(ctx) {
  if(ctx.getText().localeCompare('import user:')==0 || ctx.getText().localeCompare('end import')==0 || ctx.getText().localeCompare('.')==0){}
  else{
    if(ctx.getText().localeCompare(':')==0){
      return ctx.getText();
    }
    else{
      return ctx.getText();
    }
  }
  
  
  
  //console.log(result)
};

exports.ChatVisitor = ChatVisitor;