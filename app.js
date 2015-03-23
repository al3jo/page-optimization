"use strict";

var compression = require('compression');
var express = require('express');
var app = express();
var oneYear = 31536000; // 60 * 60 * 24 * 365 --> seconds * minutes * hours * days

app.use(compression());
app.use(express.static(__dirname + '/', {maxAge: oneYear}));
app.set('etag', 'strong');

app.listen(process.env.PORT || 8080);
