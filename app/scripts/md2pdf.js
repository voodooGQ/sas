#!/usr/bin/env node

'use strict';

var markdownpdf = require('markdown-pdf');
var fs = require('fs');

markdownpdf().from(process.argv[2]).to(process.argv[3], function() {
  console.log('converted');
});
