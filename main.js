(()=>{const e=document.getElementById("practice-tab"),t=(document.getElementById("short-term-tab"),document.getElementById("long-term-tab"),document.querySelector(".sidebar"));document.querySelector(".main-content"),e.addEventListener("click",(()=>{const e=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],d=document.createElement("div"),n=document.createElement("ul");d.setAttribute("id","days-div"),n.setAttribute("id","days-list"),t.appendChild(d),d.appendChild(n);for(let t in e){let d=document.createElement("li");d.textContent=`${e[t]}`,d.classList.add("days-list-item"),n.appendChild(d)}}))})();