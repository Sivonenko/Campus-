(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("modal"),n=document.getElementById("close-modal"),o=document.getElementById("start-btn");e.style.display="flex",o.addEventListener("click",()=>i(e)),n.addEventListener("click",()=>i(e)),document.getElementById("red-zone").addEventListener("click",d)});function i(e){e.style.display="none"}function d(){a("screen3");const e=document.getElementById("screen3");e.classList.add("screen-zoom-in"),e.addEventListener("animationend",()=>{e.classList.remove("screen-zoom-in")}),l()}function a(e){var n;document.querySelectorAll(".screen").forEach(o=>{o.classList.remove("active","screen-zoom-in")}),(n=document.getElementById(e))==null||n.classList.add("active")}function l(){const e=document.querySelector(".seats-grid");if(e){e.innerHTML="";for(let n=1;n<=28;n++){const o=document.createElement("div");o.classList.add("seat"),Math.random()<.3&&o.classList.add("booked"),o.addEventListener("click",()=>u(o,n)),e.appendChild(o)}}}function u(e,n){e.classList.contains("booked")?confirm(`Seat ${n} is already booked. Do you want to cancel it?`):e.classList.add("change")}
//# sourceMappingURL=main-Dl9TX6iU.js.map
