

class TextCell{

  constructor(text){
    this.text = text.split("\n");
  }

  minWidth(){
    return this.text.reduce(function(width, line) {
      return Math.max(width, line.length);
    }, 0);
  }

  minHeight(){
    return this.text.length;
  }

  draw(){
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(line + " ".repeat(width - line.length));
    }
    return result;
  }

}
