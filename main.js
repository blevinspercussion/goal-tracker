(()=>{const e=document.getElementById("practice-tab"),t=(document.getElementById("short-term-tab"),document.getElementById("long-term-tab"),document.querySelector(".sidebar")),n=document.querySelector(".main-content");function d(){for(;n.firstChild;)n.removeChild(n.firstChild)}e.addEventListener("click",(()=>{d(),function(){for(;t.firstChild;)t.removeChild(t.firstChild)}();const e=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],i=document.createElement("div"),a=document.createElement("ul"),l=document.createElement("div"),c=document.createElement("p"),o=document.createElement("button");i.setAttribute("id","days-div"),a.setAttribute("id","days-list"),l.classList.add("welcome"),o.setAttribute("id","add-practice-button"),t.appendChild(i),i.appendChild(a),t.appendChild(o),n.appendChild(l),l.appendChild(c),c.textContent="Click on a day at the left to view your practice goals for that day.",o.textContent="Add Practice";for(let t in e){let n=document.createElement("li");n.textContent=`${e[t]}`,n.classList.add("days-list-item"),n.setAttribute("id",n.textContent),a.appendChild(n)}return(()=>{const e=(e,t,n="daily",d)=>({title:e,description:t,type:n,time:d}),t=document.getElementById("add-practice-button");document.querySelectorAll(".days-list-item"),t.addEventListener("click",(()=>{d();let t=document.createElement("h1"),i=document.createElement("form"),a=document.createElement("label"),l=document.createElement("input"),c=document.createElement("label"),o=document.createElement("select"),r=document.createElement("option"),u=document.createElement("option"),m=document.createElement("option"),p=document.createElement("option"),s=document.createElement("option"),C=document.createElement("label"),h=document.createElement("input"),b=document.createElement("label"),E=document.createElement("input"),y=document.createElement("button");t.textContent="Add New Practice",a.textContent="Title",c.textContent="Type",C.textContent="Description",b.textContent="Time (in minutes)",y.textContent="Add Practice",r.textContent="Warmup",u.textContent="Technique",m.textContent="Reading",p.textContent="Repertoire",s.textContent="Other",i.setAttribute("onsubmit","return false"),l.setAttribute("type","text"),r.setAttribute("value","Warmup"),u.setAttribute("value","Technique"),m.setAttribute("value","Reading"),p.setAttribute("value","Repertoire"),s.setAttribute("value","Other"),h.setAttribute("type","text"),h.setAttribute("rows","10"),h.setAttribute("cols","20"),E.setAttribute("type","number"),n.appendChild(t),n.appendChild(i),i.appendChild(a),i.appendChild(l),i.appendChild(c),i.appendChild(o),o.appendChild(r),o.appendChild(u),o.appendChild(m),o.appendChild(p),o.appendChild(s),i.appendChild(C),i.appendChild(h),i.appendChild(b),i.appendChild(E),i.appendChild(y),y.addEventListener("click",(()=>{let t=new e(l.value,h.value,E.value);return console.log(t),{practice:t}}))}))})(),{addPracticeButton:o}}))})();