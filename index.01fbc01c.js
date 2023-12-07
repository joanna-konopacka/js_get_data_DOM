document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".population"),e=0,n=0;t.forEach(function(t){var o=parseInt(t.textContent.replace(/,/g,""),10);!isNaN(o)&&(e+=o,n++)});var o=n>0?e/n:0,r=u(e),a=u(o.toFixed(2));function u(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}document.querySelector(".total-population").textContent=r,document.querySelector(".average-population").textContent=a});//# sourceMappingURL=index.01fbc01c.js.map

//# sourceMappingURL=index.01fbc01c.js.map
