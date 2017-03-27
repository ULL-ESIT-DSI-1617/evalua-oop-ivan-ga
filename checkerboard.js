'use strict'

var dt = require("./lyingoutatable.js");
var dp = require("./text-cell.js");
var TextCell = dp.TextCell;
var drawTable = dt.drawTable;

var rows = [0, 5].range( 
  (i) =>  [0, 5].range( 
    (j) => new TextCell(((j + i) % 2 == 0)? '##\n##' : '  '))
);
console.log(drawTable(rows));
