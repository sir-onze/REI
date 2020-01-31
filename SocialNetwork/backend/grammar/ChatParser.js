// Generated from Chat.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ChatListener = require('./ChatListener').ChatListener;
var ChatVisitor = require('./ChatVisitor').ChatVisitor;

var grammarFileName = "Chat.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000f6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004\u001e\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0002",
    "\u0002\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0002\u0002.\u0002",
    "\u0012\u0003\u0002\u0002\u0002\u0004\u0014\u0003\u0002\u0002\u0002\u0006",
    "\u0018\u0003\u0002\u0002\u0002\b!\u0003\u0002\u0002\u0002\n%\u0003\u0002",
    "\u0002\u0002\f)\u0003\u0002\u0002\u0002\u000e-\u0003\u0002\u0002\u0002",
    "\u00101\u0003\u0002\u0002\u0002\u0012\u0013\u0005\u0004\u0003\u0002",
    "\u0013\u0003\u0003\u0002\u0002\u0002\u0014\u0015\u0007\t\u0002\u0002",
    "\u0015\u0016\u0005\u0006\u0004\u0002\u0016\u0017\u0007\r\u0002\u0002",
    "\u0017\u0005\u0003\u0002\u0002\u0002\u0018\u0019\u0005\b\u0005\u0002",
    "\u0019\u001a\u0005\n\u0006\u0002\u001a\u001b\u0005\f\u0007\u0002\u001b",
    "\u001d\u0005\u0010\t\u0002\u001c\u001e\u0005\u000e\b\u0002\u001d\u001c",
    "\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e\u001f",
    "\u0003\u0002\u0002\u0002\u001f \u0007\u0003\u0002\u0002 \u0007\u0003",
    "\u0002\u0002\u0002!\"\u0007\u0007\u0002\u0002\"#\u0007\u000e\u0002\u0002",
    "#$\u0007\u000b\u0002\u0002$\t\u0003\u0002\u0002\u0002%&\u0007\u0005",
    "\u0002\u0002&\'\u0007\u000e\u0002\u0002\'(\u0007\u000b\u0002\u0002(",
    "\u000b\u0003\u0002\u0002\u0002)*\u0007\u0006\u0002\u0002*+\u0007\u000e",
    "\u0002\u0002+,\u0007\u000b\u0002\u0002,\r\u0003\u0002\u0002\u0002-.",
    "\u0007\u0004\u0002\u0002./\u0007\u000e\u0002\u0002/0\u0007\f\u0002\u0002",
    "0\u000f\u0003\u0002\u0002\u000212\u0007\b\u0002\u000223\u0007\u000e",
    "\u0002\u000234\u0007\u000b\u0002\u00024\u0011\u0003\u0002\u0002\u0002",
    "\u0003\u001d"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'.'", "'idade'", "'username'", "'password'", 
                     "'email'", "'tipo'", "'import user:'", "','", null, 
                     null, "'end import'", "':'" ];

var symbolicNames = [ null, "POINT", "IDADE", "USERNAME", "PASSWORD", "EMAIL", 
                      "TIPO", "BEGIN", "SEPARATOR", "STRING", "INT", "END", 
                      "COLLON", "WS" ];

var ruleNames =  [ "social", "value", "infos", "email", "username", "password", 
                   "idade", "tipo" ];

function ChatParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ChatParser.prototype = Object.create(antlr4.Parser.prototype);
ChatParser.prototype.constructor = ChatParser;

Object.defineProperty(ChatParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ChatParser.EOF = antlr4.Token.EOF;
ChatParser.POINT = 1;
ChatParser.IDADE = 2;
ChatParser.USERNAME = 3;
ChatParser.PASSWORD = 4;
ChatParser.EMAIL = 5;
ChatParser.TIPO = 6;
ChatParser.BEGIN = 7;
ChatParser.SEPARATOR = 8;
ChatParser.STRING = 9;
ChatParser.INT = 10;
ChatParser.END = 11;
ChatParser.COLLON = 12;
ChatParser.WS = 13;

ChatParser.RULE_social = 0;
ChatParser.RULE_value = 1;
ChatParser.RULE_infos = 2;
ChatParser.RULE_email = 3;
ChatParser.RULE_username = 4;
ChatParser.RULE_password = 5;
ChatParser.RULE_idade = 6;
ChatParser.RULE_tipo = 7;


function SocialContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_social;
    return this;
}

SocialContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SocialContext.prototype.constructor = SocialContext;

SocialContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

SocialContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterSocial(this);
	}
};

SocialContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitSocial(this);
	}
};

SocialContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ChatVisitor ) {
        return visitor.visitSocial(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ChatParser.SocialContext = SocialContext;

ChatParser.prototype.social = function() {

    var localctx = new SocialContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ChatParser.RULE_social);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.BEGIN = function() {
    return this.getToken(ChatParser.BEGIN, 0);
};

ValueContext.prototype.infos = function() {
    return this.getTypedRuleContext(InfosContext,0);
};

ValueContext.prototype.END = function() {
    return this.getToken(ChatParser.END, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ChatVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ChatParser.ValueContext = ValueContext;

ChatParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ChatParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.match(ChatParser.BEGIN);
        this.state = 19;
        this.infos();
        this.state = 20;
        this.match(ChatParser.END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InfosContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_infos;
    return this;
}

InfosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InfosContext.prototype.constructor = InfosContext;

InfosContext.prototype.email = function() {
    return this.getTypedRuleContext(EmailContext,0);
};

InfosContext.prototype.username = function() {
    return this.getTypedRuleContext(UsernameContext,0);
};

InfosContext.prototype.password = function() {
    return this.getTypedRuleContext(PasswordContext,0);
};

InfosContext.prototype.tipo = function() {
    return this.getTypedRuleContext(TipoContext,0);
};

InfosContext.prototype.POINT = function() {
    return this.getToken(ChatParser.POINT, 0);
};

InfosContext.prototype.idade = function() {
    return this.getTypedRuleContext(IdadeContext,0);
};

InfosContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterInfos(this);
	}
};

InfosContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitInfos(this);
	}
};

InfosContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ChatVisitor ) {
        return visitor.visitInfos(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ChatParser.InfosContext = InfosContext;

ChatParser.prototype.infos = function() {

    var localctx = new InfosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ChatParser.RULE_infos);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.email();
        this.state = 23;
        this.username();
        this.state = 24;
        this.password();
        this.state = 25;
        this.tipo();
        this.state = 27;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ChatParser.IDADE) {
            this.state = 26;
            this.idade();
        }

        this.state = 29;
        this.match(ChatParser.POINT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EmailContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_email;
    return this;
}

EmailContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmailContext.prototype.constructor = EmailContext;

EmailContext.prototype.EMAIL = function() {
    return this.getToken(ChatParser.EMAIL, 0);
};

EmailContext.prototype.COLLON = function() {
    return this.getToken(ChatParser.COLLON, 0);
};

EmailContext.prototype.STRING = function() {
    return this.getToken(ChatParser.STRING, 0);
};

EmailContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterEmail(this);
	}
};

EmailContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitEmail(this);
	}
};

EmailContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ChatVisitor ) {
        return visitor.visitEmail(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ChatParser.EmailContext = EmailContext;

ChatParser.prototype.email = function() {

    var localctx = new EmailContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ChatParser.RULE_email);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
        this.match(ChatParser.EMAIL);
        this.state = 32;
        this.match(ChatParser.COLLON);
        this.state = 33;
        this.match(ChatParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UsernameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_username;
    return this;
}

UsernameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsernameContext.prototype.constructor = UsernameContext;

UsernameContext.prototype.USERNAME = function() {
    return this.getToken(ChatParser.USERNAME, 0);
};

UsernameContext.prototype.COLLON = function() {
    return this.getToken(ChatParser.COLLON, 0);
};

UsernameContext.prototype.STRING = function() {
    return this.getToken(ChatParser.STRING, 0);
};

UsernameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterUsername(this);
	}
};

UsernameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitUsername(this);
	}
};

UsernameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ChatVisitor ) {
        return visitor.visitUsername(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ChatParser.UsernameContext = UsernameContext;

ChatParser.prototype.username = function() {

    var localctx = new UsernameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ChatParser.RULE_username);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this.match(ChatParser.USERNAME);
        this.state = 36;
        this.match(ChatParser.COLLON);
        this.state = 37;
        this.match(ChatParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PasswordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_password;
    return this;
}

PasswordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PasswordContext.prototype.constructor = PasswordContext;

PasswordContext.prototype.PASSWORD = function() {
    return this.getToken(ChatParser.PASSWORD, 0);
};

PasswordContext.prototype.COLLON = function() {
    return this.getToken(ChatParser.COLLON, 0);
};

PasswordContext.prototype.STRING = function() {
    return this.getToken(ChatParser.STRING, 0);
};

PasswordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterPassword(this);
	}
};

PasswordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitPassword(this);
	}
};

PasswordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ChatVisitor ) {
        return visitor.visitPassword(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ChatParser.PasswordContext = PasswordContext;

ChatParser.prototype.password = function() {

    var localctx = new PasswordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ChatParser.RULE_password);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this.match(ChatParser.PASSWORD);
        this.state = 40;
        this.match(ChatParser.COLLON);
        this.state = 41;
        this.match(ChatParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdadeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_idade;
    return this;
}

IdadeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdadeContext.prototype.constructor = IdadeContext;

IdadeContext.prototype.IDADE = function() {
    return this.getToken(ChatParser.IDADE, 0);
};

IdadeContext.prototype.COLLON = function() {
    return this.getToken(ChatParser.COLLON, 0);
};

IdadeContext.prototype.INT = function() {
    return this.getToken(ChatParser.INT, 0);
};

IdadeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterIdade(this);
	}
};

IdadeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitIdade(this);
	}
};

IdadeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ChatVisitor ) {
        return visitor.visitIdade(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ChatParser.IdadeContext = IdadeContext;

ChatParser.prototype.idade = function() {

    var localctx = new IdadeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ChatParser.RULE_idade);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.match(ChatParser.IDADE);
        this.state = 44;
        this.match(ChatParser.COLLON);
        this.state = 45;
        this.match(ChatParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TipoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_tipo;
    return this;
}

TipoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TipoContext.prototype.constructor = TipoContext;

TipoContext.prototype.TIPO = function() {
    return this.getToken(ChatParser.TIPO, 0);
};

TipoContext.prototype.COLLON = function() {
    return this.getToken(ChatParser.COLLON, 0);
};

TipoContext.prototype.STRING = function() {
    return this.getToken(ChatParser.STRING, 0);
};

TipoContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterTipo(this);
	}
};

TipoContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitTipo(this);
	}
};

TipoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ChatVisitor ) {
        return visitor.visitTipo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ChatParser.TipoContext = TipoContext;

ChatParser.prototype.tipo = function() {

    var localctx = new TipoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ChatParser.RULE_tipo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.match(ChatParser.TIPO);
        this.state = 48;
        this.match(ChatParser.COLLON);
        this.state = 49;
        this.match(ChatParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ChatParser = ChatParser;
