importScripts(location.origin+"/js/worker-base.js");
ace.define('ace/worker/my-worker',["require","exports","module","ace/lib/oop","ace/worker/mirror"], function(require, exports, module) {
    "use strict";

    var oop = require("ace/lib/oop");
    var Mirror = require("ace/worker/mirror").Mirror;

    var MyWorker = function(sender) {
        Mirror.call(this, sender);
        this.setTimeout(200);
        this.$dialect = null;
    };

    oop.inherits(MyWorker, Mirror);

    (function() {

        this.onUpdate = function() {
            var value = this.doc.getValue();
            var annotations = validate(value);
            this.sender.emit("annotate", annotations);
        };

    }).call(MyWorker.prototype);

    exports.MyWorker = MyWorker;
});

var ace_require = require;
require = undefined;
importScripts(location.origin+"/lib/require.js");
var antlr4_require = require;
require = ace_require;

var antlr4, SPL;
try {
    require = antlr4_require;
    antlr4 = require("antlr4/index");

    SPL = {
        lexer: require("js/SPL/SPLLexer").SPLLexer,
        parser: require("js/SPL/SPLParser").SPLParser,
        parserListener: require("js/SPL/SPLParserListener").SPLParserListener
    };
} finally {
    require = ace_require;
}

function validate(input) {
    var stream = new antlr4.InputStream(input);
    var lexer = new SPL.lexer(stream);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new SPL.parser(tokens);
    var errors = [];
    var listener = new SPLErrorListener(errors);
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    try {
        parser.splg();
    } catch(e) {
        console.log(e);
    }
    return errors;
};

// class for gathering errors and posting them to ACE editor
var SPLErrorListener = function(errors) {
    antlr4.error.ErrorListener.call(this);
    this.errors = errors;
    return this;
};

SPLErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
SPLErrorListener.prototype.constructor = SPLErrorListener;

SPLErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push({
        row: line - 1,
        column: column,
        text: msg,
        type: "error"
 });
};