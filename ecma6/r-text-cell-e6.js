var TextCell = import('/.text-cell-e6.js')


class RTextCell extends TextCell{
  constructor(text) {
        this.text = text;
  }

  draw() {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(" ".repeat(width - line.length) + line);
    }
    return result;
  }

}
