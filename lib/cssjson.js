
function addGlobalStyle(/* String */ styles) {
  //http://www.userscritps.org/scriptts/review/55433
  let oStyle = document.createElement("style");
  oStyle.setAttribute("type", "text\/css");
  oStyle.appendChild(document.createTextNode(styles));
  document.getElementsByTagName("head")[0].appendChild(oStyle);
}

function addCssJsonStyle(cssjson) {
// http://www.featureblend.com/css-json.html
  var styleStr = '';
  for (let i in cssjson) {
    styleStr += i + ' {\n';
      for (let j in cssjson[i]) {
        if (j=='CSSJSON-INHERIT-SELECTOR') {
          for (let k in cssjson[cssjson[i][j]]) {
            styleStr += '    ' + k + ':' + cssjson[cssjson[i][j]][k] + ';\n';
          }
        } else {
          styleStr += '    ' + j + ':' + cssjson[i][j] + ';\n';
        }
      }
    styleStr += "}\n";
    }
    addGlobalStyle(styleStr);
    console.log(styleStr);
}

