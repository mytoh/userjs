// ==UserScript==
// @name           gauche-ref
// @include        http://www.callcc.net/gauche/refj/*
// @include        http://practical-scheme.net/gauche/man/*
// @require        lib/cssjson.js
// ==/UserScript==

var cssJsonString = {
  'body': {
    'color': '#aaaaaa !important',
    'background-color': '#121212 !important'
  },

  'a': {
    'color': '#204a87 !important'
  },

  /*Function: funcname arg1 arg2 */
  /* Function: */
  'dl dt u': {
    'color': '#49483e !important'
  },

  /* funcname */
  'dl dt b': {
    'color': '#fd971f !important'
  },

  /* arg1 arg2 */
  'dl dt i': {
    // 'color': '#555577 !important'
    'color': '#555577 !important'
  },

  /* code examples */
  '.example': {
    'background-color': '#212121',
    'border-radius': '10px'
  }
};



function main() {
  addCssJsonStyle(cssJsonString);
}

main();

// monokai colors
//  #ae81ff
//   #49483e
//  #e6db74
//  #a6e22e
//  #66d9ef
//  #fd971f
//  #f92672
 // #204a87
