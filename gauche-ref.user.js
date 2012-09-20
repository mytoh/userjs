// ==UserScript==
// @name           futaba-catalog
// @include        http://www.callcc.net/gauche/refj/*
// @include        http://practical-scheme.net/gauche/man/*
// @require        lib/cssjson.js
// ==/UserScript==

var cssJsonString = {
  'body': {
    'color': '#aaaaaa !important',
    'background-color': '#121212 !important'
  }

  'a': {
    'color': '#484878 !important'
  }

  /*Function: funcname arg1 arg2 */
  /* Function: */
  'dl dt u': {
    'color': '#333358 !important'
  }
  /* funcname */
  'dl dt b': {
    'color': '#aaaafa !important'
  }
  /* arg1 arg2 */
  'dl dt i': {
    'color': '#555577 !important'
  }

  /* code examples */
  '.example': {
    'background-color': '#212121',
    'border-radius': '10px'
  }
};



function main() {
  CssJson.addCssJsonStyle(cssJsonString);
}

main();
