(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let c=null;const m=r=>{const n=()=>{c=n,r(),c=null};n()},p=r=>{const n=new Set;return[()=>(c&&n.add(c),r),s=>{r=s;for(const o of n)o()}]},[u,f]=p(0),a=document.createElement("h1");m(()=>a.innerText=`Count is ${u()}`);const l=document.createElement("button");l.innerText="Increment";l.onclick=()=>f(u()+1);const d=document.createElement("button");d.innerText="Double";d.onclick=()=>f(u()*2);document.body.append(a,l,d);
