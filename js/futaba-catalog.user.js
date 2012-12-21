// Generated by CoffeeScript 1.4.0
/*
==UserScript==
@name           futaba-catalog
@include        http://jun.2chan.net/b/*
@include        http://may.2chan.net/b/*
@include        http://dec.2chan.net/b/*
@require        lib/cssjson.js
==/UserScript==
*/

var addThreadId, cssJsonString, main;

cssJsonString = {
  "body": {
    "background-color": "#121212"
  },
  "bodytrtdth": {
    "font-size": "10pt !important"
  },
  "a.del": {
    "color": "#222222"
  },
  "a:hover": {
    "color": "#888888"
  },
  ".delform": {
    "position": "absolute",
    "right": 0,
    "white-space": "nowrap",
    "text-align": "center"
  },
  td: {
    "color": "#aaaacc !important",
    "background-color": "#222222 !important",
    " border-radius": "10px",
    " -moz-border-radius": "10px",
    " max-width": "800px"
  },
  ".threadid": {
    " font-size": "7pt",
    " color": "#fb8def"
    /*
          remove ads
    */

  },
  ".ama": {
    "display": "none"
  },
  ".chui div": {
    "display": "none"
  },
  ".chui > ul": {
    "padding-left": "30px"
  },
  ul: {
    "margin": "0px"
  },
  ".ftbl": {
    "table-layout": "fixed",
    "width": "476px",
    "margin": "0 auto"
  }
};

addThreadId = function() {
  var i, matches, tds, threadId, _fn, _i, _len;
  tds = document.getElementsByTagName('td');
  _fn = function(i) {};
  for (_i = 0, _len = tds.length; _i < _len; _i++) {
    i = tds[_i];
    _fn(i);
    threadId = document.createElement('span');
    threadId.setAttribute('class', 'threadid');
    matches = tds[i].childNodes[0].getAttribute('href').match(/\d+/);
    threadId.innerHTML = ':' + matches;
    tds[i].appendChild(threadId);
  }
  return console.log('threadId');
};

main = function() {
  /*
    addGlobalStyle(cssString);
  */
  addCssJsonStyle(cssJsonString);
  return addThreadId();
};

main();
