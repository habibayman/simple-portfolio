"use strict";

(() => {
  (function () {
    emailjs.init("Hc68ZzPsz7Hq0UtuB");
  })(); // init with my Public key
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("service_h8kflf6", "template_u6g3z5m", this).then(
      function (response) {
        console.log("Email sent!", response.status, response.text);
        alert("Email sent successfully!");
      },
      function (error) {
        console.error("Error sending email:", error);
        alert("Oops! Something went wrong.");
      }
    );
  });

let lastScroll;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  const currScroll = window.scrollY || document.documentElement.scrollTop;

  navbar.style.top = currScroll > lastScroll ? "-300px" : "0";

  lastScroll = currScroll;
});
