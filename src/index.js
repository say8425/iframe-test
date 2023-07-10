import $ from "jquery";

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

$(document).ready(function () {
  window.parent.postMessage(
    {
      event: "HISTORY_PUSH_STATE",
      url: window.location.href,
    },
    "https://*.musinsa.com"
  );
});
