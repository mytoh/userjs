// Generated by CoffeeScript 1.4.0
var addCssJsonStyle, addGlobalStyle;

addGlobalStyle = function(styles) {
  var oStyle;
  oStyle = document.createElement('style');
  oStyle.setAttribute('type', 'text\/css');
  oStyle.appendChild(document.createTextNode(styles));
  return document.getElementsByTagName('head')[0].appendChild(oStyle);
};

addCssJsonStyle = function(cssjson) {
  var i, j, k, styleStr;
  styleStr = '';
  for (i in cssjson) {
    styleStr += i + ' {\n';
    for (j in cssjson[i]) {
      if (j === 'CSSJSON-INHERIT-SELECTOR') {
        for (k in cssjson[cssjson[i][j]]) {
          styleStr += '    ' + k + ':' + cssjson[cssjson[i][j]][k] + ';\n';
        }
      } else {
        styleStr += "     " + j + ":" + cssjson[i][j] + ";\n";
      }
    }
    styleStr += '}\n';
  }
  addGlobalStyle(styleStr);
  console.log(styleStr);
  return 0;
};
