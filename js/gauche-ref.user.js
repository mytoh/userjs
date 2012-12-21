// Generated by CoffeeScript 1.4.0
/*
// ==UserScript==
// @name           gauche-ref
// @include        http://www.callcc.net/gauche/refj/*
// @include        http://practical-scheme.net/gauche/man/*
// @require        lib/cssjson.js
// ==/UserScript==
*/

var cssJsonString, main;

cssJsonString = {
  'body': {
    'color': '#aaaaaa !important',
    'background-color': '#121212 !important'
  },
  'a': {
    'color': '#384878 !important'
  },
  'dl dt u': {
    'color': '#49483e !important'
  },
  'dl dt b': {
    'color': '#fd971f !important'
  },
  'dl dt i': {
    'color': '#555577 !important'
  },
  '.example': {
    'background-color': '#212121',
    'border-radius': '10px'
  }
};

main = function() {
  return addCssJsonStyle(cssJsonString);
};

main();

/*
// monokai colors
//  #ae81ff
//   #49483e
//  #e6db74
//  #a6e22e
//  #66d9ef
//  #fd971f
//  #f92672
// #204a87
*/

