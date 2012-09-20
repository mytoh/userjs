
var CssJson = {
  addGlobalStyle: addGlobalStyle,
  addCssJsonStyle: addCssJsonStyle
};

var addGlobalStyle = function(/* String */ styles) {
  //http://www.userscritps.org/scriptts/review/55433
  var oStyle = document.createElement('style');
  oStyle.setAttribute('type', 'text\/css');
  oStyle.appendChild(document.createTextNode(styles));
  document.getElementsByTagName('head')[0].appendChild(oStyle);
};

var addCssJsonStyle = function(cssjson) {
// http://www.featureblend.com/css-json.html
  var styleStr = '';
  for (var i in cssjson) {
    styleStr += i + ' {\n';
      for (var j in cssjson[i]) {
        if (j == 'CSSJSON-INHERIT-SELECTOR') {
          for (var k in cssjson[cssjson[i][j]]) {
            styleStr += '    ' + k + ':' + cssjson[cssjson[i][j]][k] + ';\n';
          }
        } else {
          styleStr += '    ' + j + ':' + cssjson[i][j] + ';\n';
        }
      }
    styleStr += '}\n';
    }
    this.addGlobalStyle(styleStr);
    console.log(styleStr);
};
