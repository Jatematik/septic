!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{const e=document.querySelectorAll(".call-btn"),t=document.querySelector(".popup-call"),n=document.querySelectorAll(".popup-dialog input");e.forEach(n=>{e[0]!==n&&e[e.length-1]!==n||n.addEventListener("click",e=>{e.preventDefault(),t.style.display="block"})}),t.addEventListener("click",e=>{e.preventDefault();let l=e.target;l.matches(".popup-close")?(n.forEach(e=>{e.value=""}),t.style.display="none"):(l=l.closest(".popup-dialog"),l||(n.forEach(e=>{e.value=""}),t.style.display="none"))})};var o=()=>{const e=document.getElementById("form1"),t=document.getElementById("form2"),n=document.getElementById("phone_3"),l=document.createElement("div");l.style.cssText="font-size: 2rem;\n    color: black;",n.addEventListener("input",()=>{n.value=n.value.replace(/(?!^\+|[0-9])\D/g,""),n.value.length>=12&&(n.value=n.value.substring(0,12))}),t.addEventListener("input",e=>{let t=e.target;t.matches("#name_2")&&(t.value=t.value.replace(/(?!\s|[а-яА-Я])\D|[0-9]/g,"")),t.matches("#phone_2")&&(t.value=t.value.replace(/(?!^\+|[0-9])\D/g,""),t.value.length>=12&&(t.value=t.value.substring(0,12)))}),e.addEventListener("submit",t=>{t.preventDefault(),e.appendChild(l),l.textContent="Идет отправка...";const a=new FormData(e);let r={};a.forEach((e,t)=>{r[t]=e}),o(r).then(e=>{if(200!==e.status)throw new Error("status network not 200.");l.textContent="Отправлено! Мы скоро с вами свяжемся!";let t=setInterval((function(){l.remove(),clearInterval(t)}),5e3)}).catch(e=>{l.textContent="Ошибка, что-то пошло не так...",console.log(e);let t=setInterval((function(){l.remove(),clearInterval(t)}),5e3)}).finally(()=>{n.value=""})}),t.addEventListener("submit",e=>{e.preventDefault(),t.appendChild(l),l.textContent="Идет отправка...";const a=new FormData(t);let r={};a.forEach((e,t)=>{r[t]=e}),o(r).then(e=>{if(200!==e.status)throw new Error("status network not 200.");l.textContent="Отправлено! Мы скоро с вами свяжемся!";let t=setInterval((function(){l.remove(),clearInterval(t)}),5e3)}).catch(e=>{l.textContent="Ошибка, что-то пошло не так...",console.log(e);let t=setInterval((function(){l.remove(),clearInterval(t)}),5e3)}).finally(()=>{n.value=""})});const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var a=()=>{const e=document.querySelectorAll(".discount-btn"),t=document.querySelector(".popup-discount"),n=t.querySelectorAll("input");e.forEach(e=>{e.addEventListener("click",()=>{t.style.display="block"})}),t.addEventListener("click",e=>{e.preventDefault();let l=e.target;l.matches(".popup-close")?(n.forEach(e=>{e.value=""}),t.style.display="none"):(l=l.closest(".popup-dialog"),l||(n.forEach(e=>{e.value=""}),t.style.display="none"))})};var r=()=>{const e=document.querySelector(".check-btn"),t=document.querySelector(".popup-check"),n=t.querySelectorAll("input");e.addEventListener("click",()=>{t.style.display="block"}),t.addEventListener("click",e=>{e.preventDefault();let l=e.target;l.matches(".popup-close")?(n.forEach(e=>{e.value=""}),t.style.display="none"):(l=l.closest(".popup-dialog"),l||(n.forEach(e=>{e.value=""}),t.style.display="none"))})};var c=()=>{const e=document.querySelector(".popup-consultation"),t=(document.querySelector(".consultation-btn"),document.querySelector(".director-form")),n=t.querySelector("input"),l=document.createElement("div");l.style.cssText="font-size: 2rem;\n        color: white;\n        text-align: center;",t.addEventListener("submit",a=>{a.preventDefault(),t.appendChild(l),l.textContent="Идет отправка сообщения...",e.style.display="block";const r=new FormData(t);let c={};r.forEach((e,t)=>{c[t]=e}),o(c,()=>{l.textContent="Сообщение отправлено! Мы скоро с вами свяжемся!";let e=setInterval((function(){l.remove(),clearInterval(e)}),5e3)},e=>{l.textContent="Ошибка, что-то пошло не так...",console.error(e);let t=setInterval((function(){l.remove(),clearInterval(t)}),5e3)}),n.value=""});const o=(e,t,n)=>{const l=new XMLHttpRequest;l.addEventListener("readystatechange",()=>{4===l.readyState&&(200===l.status?t():n(l.status))}),l.open("POST","./server.php"),l.setRequestHeader("Content-Type","application/json"),l.send(JSON.stringify(e))};e.addEventListener("click",t=>{t.preventDefault();let n=t.target;n.matches(".popup-close")?e.style.display="none":(n=n.closest(".popup-dialog"),n||(e.style.display="none"))})};var s=()=>{const e=document.getElementById("accordion-two"),t=e.querySelectorAll(".panel-heading"),n=e.querySelectorAll(".panel-collapse");e.addEventListener("click",e=>{e.preventDefault();let l=e.target;l=l.closest(".panel-heading"),l&&t.forEach((e,t)=>{e===l&&(e=>{for(let t=0;t<n.length;t++)e===t?n[t].classList.add("in"):n[t].classList.remove("in")})(t)})})};var i=()=>{const e=document.querySelector(".add-sentence-btn"),t=document.querySelector(".sentence"),n=t.querySelector(".visible-sm-block");let l=t.querySelectorAll(".hidden");console.log(),e.addEventListener("click",()=>{e.parentElement.style.transform="translateY(50%)",e.style.transform="translateY(-50%)",n.classList.contains("visible-sm-block")?n.classList.remove("visible-sm-block"):(l.forEach((e,t)=>{0===t&&e.classList.remove("hidden")}),l=t.querySelectorAll(".hidden")),0===l.length&&(e.style.display="none")})};var u=()=>{const e=document.getElementById("accordion"),t=e.querySelectorAll(".panel-heading"),n=e.querySelectorAll(".panel-collapse"),l=e.querySelectorAll(".panel-default .construct-btn"),o=e=>{for(let t=0;t<n.length;t++)e===t?n[t].classList.add("in"):n[t].classList.remove("in")};l.forEach((e,t)=>{e.addEventListener("click",n=>{let a=n.target;a=a.closest(".active"),e.classList.contains("active")&&l.forEach((e,n)=>{l.length-1===t&&e===a?o(n):e===a?(o(n+1),e.classList.remove("active")):e.classList.add("active")})})}),t.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();let n=e.target;n=n.closest(".panel-heading"),n&&t.forEach((e,t)=>{e===n&&(o(t),(e=>{for(let t=0;t<l.length;t++)e===t?l[t].classList.add("active"):l[t].classList.remove("active")})(t))})})});const a=document.getElementById("myonoffswitch"),r=document.getElementById("myonoffswitch-two"),c=e.querySelector(".nonactive"),s=e.querySelectorAll(".nonactive"),i=document.getElementById("diameter1"),u=document.getElementById("diameter2"),d=document.getElementById("quantity1"),p=document.getElementById("quantity2"),v=document.getElementById("calc-result"),y=document.querySelector(".popup-discount"),m=y.querySelectorAll(".popup-dialog input"),f=e.querySelector(".call-btn");let h={};v.value=11e3,c.style.display="none",s.forEach(e=>{e.style.display="none"});const g=(e=1e4)=>{let t,n,l=0;const o=parseFloat(i.options[i.selectedIndex].value),y=parseInt(d.options[d.selectedIndex].value),m=parseFloat(u.options[u.selectedIndex].value),f=parseInt(p.options[p.selectedIndex].value),g=document.getElementById("meters");a.classList.contains("on")?(n="нет",t="двухкамерный",c.style.display="inline-block",s.forEach(e=>{e.style.display="inline-block"}),l=e+=5e3,2===o&&(l+=.2*l),2===m&&(l+=.2*l),2===y?l+=3e3:3===y&&(l+=5e3),2===f?l+=1e3:3===f&&(l+=2e3),r.classList.contains("on")&&(l+=.2*l,n="есть"),h={"Тип септика":t,"Диаметр первого колодца":o,"Кол-во колец первого колодца":y,"Диаметр второго колодца":m,"Кол-во колец второго колодца":f,"Наличие днища колодца":n,"Расстояние от септика до дома":g.value}):(n="нет",t="однокамерный",l=e,c.style.display="none",s.forEach(e=>{e.style.display="none"}),l=e,2===o&&(l+=.2*l),2===y?l+=3e3:3===y&&(l+=5e3),r.classList.contains("on")&&(l+=.1*l,n="есть"),h={"Тип септика":t,"Диаметр первого колодца":o,"Кол-во колец первого колодца":y,"Наличие днища колодца":n,"Расстояние от септика до дома":g.value}),v.value=l,h["Итоговая стоимость"]=v.value};e.addEventListener("change",e=>{let t=e.target;t===a&&(a.classList.toggle("on"),g()),t===r&&(r.classList.toggle("on"),g()),(t.matches("select")||t.matches("input")||t.matches(".call-btn"))&&g()}),f.addEventListener("click",e=>{e.preventDefault(),y.style.display="block"}),y.addEventListener("click",e=>{let t=e.target;t.matches(".popup-close")?(m.forEach(e=>{e.value=""}),y.style.display="none"):(t=t.closest(".popup-dialog"),t||(m.forEach(e=>{e.value=""}),y.style.display="none"))});const E=document.getElementById("popup-discount"),b=document.createElement("div");b.style.cssText="font-size: 2rem;\n    color: black;",E.addEventListener("submit",e=>{e.preventDefault(),E.appendChild(b),b.textContent="Идет отправка...";new FormData(E).forEach((e,t)=>{h[t]=e}),console.log(h),S(h).then(e=>{if(200!==e.status)throw new Error("status network not 200.");b.textContent="Отправлено! Мы скоро с вами свяжемся!";let t=setInterval((function(){b.remove(),clearInterval(t)}),5e3)}).catch(e=>{b.textContent="Ошибка, что-то пошло не так...",console.log(e);let t=setInterval((function(){b.remove(),clearInterval(t)}),5e3)}).finally(()=>{E.querySelectorAll("input").value=""})});const S=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};(()=>{console.log("Работает")})(),l(),o(),a(),r(),c(),s(),i(),u()}]);