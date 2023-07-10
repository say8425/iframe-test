var jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here
require("jquery-ui-dist/jquery-ui.js");

// document.addEventListener("DOMContentLoaded", function () {
//   if (window.top !== window.top.parent) {
//     //   window.parent.postMessage(
//     //     {
//     //       event: "HISTORY_PUSH_STATE",
//     //       url: window.location.href,
//     //     },
//     //     "https://*.musinsa.com"
//     //   );
//     //   console.log("asdf");
//   }
// });

// this helps TypeScript to understand jQuery best !!!  otherwise It will confused .

$(document).ready(function () {
  window.parent.postMessage(
    {
      event: "HISTORY_PUSH_STATE",
      url: window.location.href,
    },
    "https://*.musinsa.com"
  );
});
