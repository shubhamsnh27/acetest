'use strict';

const webpack = require('webpack'),

path = require('path');

let config = {

  entry: {

    myPage: './SPL/SPLLexer.js',

    myPage2: './SPL/SPLParser.js',

    myPage3: './SPL/SPLParserListener.js'

  },

  output: {

    path: '/dist',

    filename: 'index.js'

  },

};

module.exports = config;
