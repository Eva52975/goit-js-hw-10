import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const n=document.querySelector('input[type = "number"]'),t=document.querySelectorAll('input[type= "radio"]'),u=document.querySelector(".form");u.addEventListener("submit",m);function m(c){c.preventDefault();let o;const i=n.value.trim();for(let e=0;e<t.length;e++)if(t[e].checked){o=t[e].value,console.log(o);break}const l=new Promise((e,r)=>{setTimeout(()=>{o==="fulfilled"&&e(`Fulfilled promise in ${i} ms`),o==="rejected"&&r(`Rejected promise in ${i} ms`)},parseInt(i))});console.log(l),l.then(e=>{s.success({title:"Fulfilled",message:e,position:"topRight"})}).catch(e=>{s.error({title:"Rejected",message:e,position:"topRight"})}),t[0].checked=!1,t[1].checked=!1,n.value=""}
//# sourceMappingURL=commonHelpers2.js.map
