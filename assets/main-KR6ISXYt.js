/* empty css              */import{g as p,s as m,u as y,p as q}from"./showToast-Cs4oU5FK.js";p();const g=(c,r,u)=>{let n=p();const a=document.querySelector(`#card${r}`);let e=a.querySelector(".productquantity").innerText,o=a.querySelector(".newprice").innerText;o=o.replace("₹"," ");let l=n.find(d=>d.id===r);if(l&&e>1){e=Number(l.quantity)+Number(e),o=Number(o*e);let d={id:r,quantity:e,price:o};d=n.map(i=>i.id===r?d:i),localStorage.setItem("cartproductLS",JSON.stringify(d)),m("add",r)}if(l)return!1;o=Number(o*e),e=Number(e),n.push({id:r,quantity:e,price:o}),localStorage.setItem("cartproductLS",JSON.stringify(n)),y(n),m("add",r)},S=(c,r,u)=>{const a=document.querySelector(`#card${r}`).querySelector(".productquantity");let e=parseInt(a.getAttribute("data-quantity"))||1;return c.target.className==="increment"&&(e<u?e+=1:e===u&&(e=u)),c.target.className==="decrement"&&e>1&&(e-=1),a.innerText=e,a.setAttribute("data-quantity",e),e},f=document.querySelector("#productContainer"),C=document.querySelector("#productTemplate"),w=c=>{if(!c)return!1;c.forEach(r=>{const{id:u,name:n,category:a,brand:e,price:o,stock:l,description:d,image:i}=r,t=document.importNode(C.content,!0);t.querySelector("#cardValue").setAttribute("id",`card${u}`),t.querySelector(".category").textContent=a,t.querySelector(".productname").textContent=n,t.querySelector(".productImg").src=i,t.querySelector(".productImg").alt=n,t.querySelector(".productstock").textContent=l,t.querySelector(".productdescrip").textContent=d,t.querySelector(".newprice").textContent=`₹${o}`,t.querySelector(".oldprice").textContent=`₹${o*2}`,t.querySelector(".stockElement").addEventListener("click",s=>{S(s,u,l)}),t.querySelector(".addToCart").addEventListener("click",s=>{g(s,u)}),f.append(t)})};w(q);function x(){document.getElementById("menu").classList.toggle("show")}window.toggleMenu=x;function N(){document.getElementById("menu").classList.remove("show")}window.closeMenu=N;