

addGlobalStyle = (styles) ->
  # http://www.userscritps.org/scriptts/review/55433
  oStyle = document.createElement 'style'
  oStyle.setAttribute 'type', 'text\/css'
  oStyle.appendChild document.createTextNode(styles)
  document.getElementsByTagName('head')[0].appendChild oStyle

addCssJsonStyle = (cssjson) ->
  # // http://www.featureblend.com/css-json.html
  styleStr = ''
  for i of cssjson
      styleStr += i + ' {\n'
      for j of cssjson[i]
        if j is 'CSSJSON-INHERIT-SELECTOR'
          for k of cssjson[cssjson[i][j]]
            styleStr += '    ' + k + ':' + cssjson[cssjson[i][j]][k] + ';\n'
        else
          styleStr += "     #{j}:#{cssjson[i][j]};\n"
      styleStr += '}\n'
    addGlobalStyle(styleStr)
    console.log(styleStr)
    0

