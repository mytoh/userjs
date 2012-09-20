// ==UserScript==
// @name           futaba-catalog
// @include        http://jun.2chan.net/b/*
// @include        http://may.2chan.net/b/*
// @require        lib/cssjson.js
// ==/UserScript==



var cssJsonString = {
  'body': {
    'background-color': '#121212'
  },
  'body,tr,td,th': {
    'font-size': '10pt !important'
  },
  ' a.del': {
    'color': '#222222'
  },
   'a:hover': {
     'color': '#888888'
   },
   '.delform': {
     'position': 'absolute',
     'right': 0,
     'white-space': 'nowrap',
     'text-align': 'center'
   },
   'td': {
     'color': '#aaaacc !important',
     'background-color': '#222222 !important',
     ' border-radius': '10px,',
     ' -moz-border-radius': '10px',
     ' max-width': '800px'
   },
    '.threadid': {
      ' font-size': '7pt',
      ' color': '#fb8def'
    },
    // remove ads
  '.ama': {
    'display': 'none'
  },
  '.chui div': {
    'display': 'none'
  },
  ' .chui>ul': {
    'padding-left': '30px'
  },
  'ul': {
    'margin': '0px'
  },
  '.ftbl': {
    'table-layout': 'fixed',
    'width': '476px',
    'margin': '0 auto'
  }

};

function addThreadId() {
  var tds = document.getElementsByTagName('td');
  for (var i in tds) {
    var threadId = document.createElement('span');
    threadId.setAttribute('class', 'threadid');
    threadId.innerHTML = ':' + tds[i].childNodes[0].getAttribute('href').match(/\d+/);
    tds[i].appendChild(threadId);
  }

}

var cssString = [
  /* small { font-size:10pt } */
  /* .chui {font-size:small;} */
  ' .ftdc {background-color:#993;width:4.5em;white-space:nowrap;}',
  ' #ftxa {width:388px;height:130px;}',
  ' form { margin:0px; }',
  ' table.deleted{display:none;}',
  /* "#ddel{font-size:8pt}" */
  ' #ddbut{cursor:pointer;text-decoration:underline;}',
  ' #contres{position:relative;left:1.5em;}',
  /* "#contdisp{font-size:10pt;}", */
  ' #reszb{cursor:pointer;text-decoration:underline;}',
  ' blockquote{word-wrap:break-word;word-break:break-all;max-width:800px;}'
      ].join('');


function main() {
  // addGlobalStyle(cssString);
  addCssJsonStyle(cssJsonString);
  addThreadId();
  console.log(styleStr);
  // // reload page every 1 minute
  // setTimeout(location.reload(), 60000);
}

main();

