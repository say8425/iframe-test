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

Jquery(document).ready(function () {
  window.parent.postMessage(
    {
      event: "HISTORY_PUSH_STATE",
      url: window.location.href,
    },
    "https://*.musinsa.com"
  );
});
