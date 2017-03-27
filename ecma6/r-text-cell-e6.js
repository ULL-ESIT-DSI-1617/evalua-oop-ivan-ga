'use strict'
var dp = require('./text-cell-e6.js')
var TextCell = dp.TextCell


class RTextCell extends TextCell{
  constructor(text) {
       super(text);
  }

  draw(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(" ".repeat(width - line.length) + line);
    }
    return result;
  }

}

module.exports ={
  RTextCell: RTextCell
}
