// ==UserScript==
// @name           ylilauta
// @include        http://ylilauta.org/*
// @require        lib/cssjson.js
// ==/UserScript==

var cssJsonString = {
  '*': {
    'color': '#aaaaaa !important',
    'background': 'none !important',
    'background-color': '#222222 !important'
  },

  '.postsubject a': {
    'colour': '#00d0ef !important'
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
