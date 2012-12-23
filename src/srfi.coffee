
###
// ==UserScript==
// @name           srfi
// @include        http://srfi.schemers.org/*
// @require        lib/cssjson.js
// ==/UserScript==
###

cssJsonString =
  'body':
    'color': '#aaaaaa !important'
    'background-color': '#121212 !important'
  'a':
    'color': '#384878 !important'
  # code examples
  'code var em':
    'background-color': '#212121'
    'border-radius': '10px'
  'pre.code-example':
    'background-color': '#212121'
    'border-radius': '10px'
  'code.proc-def':
    'color': '#fd971f !important'
    'border-radius': '10px'
  


main = ->
  addCssJsonStyle cssJsonString

main()
