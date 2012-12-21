###
// ==UserScript==
// @name           futaba-catalog
// @include        http://jun.2chan.net/b/*
// @include        http://may.2chan.net/b/*
// @include        http://dec.2chan.net/b/*
// @require        lib/cssjson.js
// ==/UserScript==
###


cssJsonString =
  "body":
    "background-color": "#121212"
  "body,tr,td,th":
    "font-size": "10pt !important"
  "a.del":
    "color": "#222222"
   "a:hover":
     "color": "#888888"
   ".delform":
     "position": "absolute"
     "right": 0
     "white-space": "nowrap"
     "text-align": "center"
   td:
     "color": "#aaaacc !important"
     "background-color": "#222222 !important"
     " border-radius": "10px"
     " -moz-border-radius": "10px"
     " max-width": "800px"
    ".threadid":
      " font-size": "7pt"
      " color": "#fb8def"
      ###
      remove ads
      ###
  ".ama":
    "display": "none"
  ".chui div":
    "display": "none"
  ".chui > ul":
    "padding-left": "30px"
  ul:
    "margin": "0px"
  ".ftbl":
    "table-layout": "fixed"
    "width": "476px"
    "margin": "0 auto"


addThreadId = ->
    tds = document.getElementsByTagName "td"
    for i of tds
        threadId = document.createElement "span"
        threadId.setAttribute "class", "threadid"
        matches = tds[i].childNodes[0].getAttribute("href").match(/\d+/)
        threadId.innerHTML = ":" + matches
        tds[i].appendChild threadId
        console.log threadId


main = ->
  ###
  addGlobalStyle(cssString);
  ###
  addCssJsonStyle cssJsonString
  addThreadId()

main();

