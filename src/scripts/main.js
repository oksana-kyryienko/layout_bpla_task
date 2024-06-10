"use strict";

// animation

// document.addEventListener("DOMContentLoaded", function () {
//   const observer = new IntersectionObserver(
//     function (entries) {
//       entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//           const index = Array.from(entry.target.parentElement.children).indexOf(
//             entry.target
//           );
//           setTimeout(function () {
//             entry.target.classList.add("visible");
//           }, index * 500);
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.1 }
//   );

//   const cards = document.querySelectorAll(".card, .text");
//   cards.forEach(function (card) {
//     observer.observe(card);
//   });
// });


"use strict";

// animation
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const index = Array.from(entry.target.parentElement.children).indexOf(
            entry.target
          );
          setTimeout(function () {
            entry.target.classList.add("visible");
          }, index * 500);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  const cards = document.querySelectorAll(".card, .text, .profit__content, .profit__image-container");
  cards.forEach(function (card) {
    observer.observe(card);
  });
});
