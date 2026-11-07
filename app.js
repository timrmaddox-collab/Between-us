(() => {
"use strict";
const packs=window.BETWEEN_US_PACKS||{};
const stages=window.BETWEEN_US_STAGE_NAMES||["Reconnect","Rediscover","Intrigue","Explore","Tempt","Uninhibited"];
const $=id=>document.getElementById(id);
const safeLoad=(key,fallback)=>{try{return JSON.parse(localStorage.getItem("bu-"+key))??fallback}catch{return fallback}};
const asArray=value=>Array.isArray(value)?value:[];
const state={deck:"Closer",stage:1,drawn:[],current:null,paused:false,favorites:asArray(safeLoad("favorites",[])),custom:asArray(safeLoad("custom",[])),history:asArray(safeLoad("history",[])),tab:"favorites"};
const save=(key,value)=>{try{localStorage.setItem("bu-"+key,JSON.stringify(value))}catch(e){console.warn("Local save unavailable:",e)}};
function showError(error){
 console.error("Between Us error:",error);
 let box=$("app-error");
 if(!box){box=document.createElement("div");box.id="app-error";box.setAttribute("role","alert");box.style.cssText="background:#6b1f32;color:#fff;padding:14px;border-radius:12px;margin:12px 0;font-size:14px;line-height:1.45";const host=$("welcome")||document.querySelector("main");host.prepend(box)}
 box.textContent="Something interrupted the app: "+(error&&error.message?error.message:String(error))+". Try closing and reopening Between Us. If it keeps happening, send us this message.";
}
window.addEventListener("error",event=>showError(event.error||event.message));
window.addEventListener("unhandledrejection",event=>showError(event.reason));
const allCards=()=>[...asArray(packs[state.deck]),...state.custom.filter(c=>c&&c.deck===state.deck&&typeof c.text==="string")];
function filtered(){return allCards().filter(c=>Number(c.stage)===state.stage)}
function setDeck(name){if(!Array.isArray(packs[name]))return;state.deck=name;document.querySelectorAll(".deck-choice").forEach(b=>b.classList.toggle("selected",b.dataset.deck===name))}
function draw(){
 const cards=filtered();
 if(!cards.length)throw new Error("There are no cards for "+state.deck+" at stage "+state.stage+".");
 let pool=cards.filter(c=>!state.drawn.includes(c.id));
 if(!pool.length){state.drawn=[];pool=cards}
 const card=pool[Math.floor(Math.random()*pool.length)];
 if(!card)throw new Error("A card could not be selected.");
 state.drawn.push(card.id);state.current=card;renderCard();
 save("session",{deck:state.deck,stage:state.stage,drawn:state.drawn});
}
function renderCard(){
 const c=state.current;if(!c)return;
 $("deck-label").textContent=state.deck.toUpperCase();
 $("stage-label").textContent="STAGE "+c.stage+" · "+stages[c.stage-1].toUpperCase();
 $("type-label").textContent=c.type;$("prompt").textContent=c.text;
 $("card-stage").textContent="BETWEEN US · "+stages[c.stage-1];
 $("count-label").textContent=state.drawn.length+" / "+filtered().length;
 $("progress-fill").style.width=Math.min(100,state.drawn.length/Math.max(1,filtered().length)*100)+"%";
 $("remaining").textContent=Math.max(0,filtered().length-state.drawn.length)+" cards remaining before reshuffle";
 const fav=state.favorites.some(x=>x&&x.id===c.id);
 $("favorite").textContent=fav?"★":"☆";$("favorite").classList.toggle("is-favorite",fav);
}
function start(){
 try{
  state.stage=Number($("start-stage").value)||1;state.drawn=[];state.current=null;
  draw();
  $("welcome").hidden=true;$("library").hidden=true;$("game").hidden=false;
 }catch(error){showError(error)}
}
function next(){try{if(state.current){state.history.unshift({...state.current,deck:state.deck,when:new Date().toISOString()});state.history=state.history.slice(0,100);save("history",state.history)}draw()}catch(error){showError(error)}}
function toggleFavorite(){if(!state.current)return;const i=state.favorites.findIndex(x=>x&&x.id===state.current.id);if(i>=0)state.favorites.splice(i,1);else state.favorites.unshift({...state.current,deck:state.deck});save("favorites",state.favorites);renderCard()}
function showLibrary(tab="favorites"){$("welcome").hidden=true;$("game").hidden=true;$("library").hidden=false;state.tab=tab;document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));renderLibrary()}
function renderLibrary(){
 const items=state.tab==="favorites"?state.favorites:state.tab==="custom"?state.custom:state.history;
 $("library-content").innerHTML="";
 if(!items.length){$("library-content").innerHTML='<p class="empty">Nothing here yet. Save a card with ☆ while playing, or add your own below.</p>';return}
 items.forEach((c,i)=>{const row=document.createElement("article");row.className="saved-card";const meta=document.createElement("small");meta.textContent=(c.deck||"CUSTOM")+" · "+(c.type||"CARD")+" · STAGE "+(c.stage||"—");const p=document.createElement("p");p.textContent=c.text||"";row.append(meta,p);if(state.tab!=="history"){const del=document.createElement("button");del.className="text-button";del.textContent="Remove";del.addEventListener("click",()=>{items.splice(i,1);save(state.tab,items);renderLibrary()});row.append(del)}$("library-content").append(row)});
}
function on(id,event,handler){const el=$(id);if(!el){console.error("Missing app element:",id);return}el.addEventListener(event,()=>{try{handler()}catch(error){showError(error)}})}
function init(){
 document.querySelectorAll(".deck-choice").forEach(b=>b.addEventListener("click",()=>setDeck(b.dataset.deck)));
 on("start","click",start);on("next","click",next);on("pass","click",next);on("favorite","click",toggleFavorite);
 on("home","click",()=>{$("game").hidden=true;$("library").hidden=true;$("welcome").hidden=false});
 on("how","click",()=>$("rules").showModal());on("close-rules","click",()=>$("rules").close());
 on("pause","click",()=>$("pause-dialog").showModal());on("resume","click",()=>$("pause-dialog").close());
 on("lower","click",()=>{state.stage=Math.max(1,state.stage-1);state.drawn=[];draw()});
 on("higher","click",()=>{state.stage=Math.min(6,state.stage+1);state.drawn=[];draw()});
 on("history-open","click",()=>showLibrary("history"));
 on("compare-open","click",()=>{$("answer-one").value="";$("answer-two").value="";$("answer-reveal").hidden=true;$("compare-dialog").showModal()});
 on("reveal-answers","click",()=>{const one=$("answer-one").value.trim(),two=$("answer-two").value.trim();if(!one||!two){$("answer-reveal").hidden=true;return}$("reveal-one").textContent=one;$("reveal-two").textContent=two;$("answer-reveal").hidden=false});
 on("close-compare","click",()=>{$("answer-one").value="";$("answer-two").value="";$("answer-reveal").hidden=true;$("compare-dialog").close()});
 on("library-close","click",()=>{$("library").hidden=true;$("welcome").hidden=false});
 document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>showLibrary(b.dataset.tab)));
 on("add-custom","click",()=>{const text=$("custom-text").value.trim();if(!text)return;state.custom.unshift({id:"custom-"+Date.now(),deck:$("custom-deck").value,stage:Math.max(1,state.stage),type:$("custom-type").value,text});save("custom",state.custom);$("custom-text").value="";if(state.tab==="custom")renderLibrary();else showLibrary("custom")});
 setDeck(state.deck);
 if("serviceWorker"in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("./sw.js").catch(error=>console.warn("Service worker registration:",error));
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();