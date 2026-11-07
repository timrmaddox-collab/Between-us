const decks={Closer:[
{stage:1,type:"QUESTION",text:"What is one small moment with me that has stayed with you?"},
{stage:1,type:"QUESTION",text:"When do you feel most like we are on the same team?"},
{stage:1,type:"QUESTION",text:"What part of our everyday life would you miss most if it disappeared?"},
{stage:1,type:"QUESTION",text:"What is something I do that makes a hard day feel lighter?"},
{stage:2,type:"QUESTION",text:"What did you misunderstand about me when we first met?"},
{stage:2,type:"QUESTION",text:"Which version of yourself do you feel safest showing me?"},
{stage:2,type:"QUESTION",text:"What is a dream you have quietly kept alive?"},
{stage:2,type:"QUESTION",text:"What would we do more often if nobody else's expectations mattered?"},
{stage:3,type:"FLIRTY",text:"What was the first detail about me that caught your attention?"},
{stage:3,type:"FLIRTY",text:"What kind of kiss from me do you wish happened more often?"},
{stage:3,type:"QUESTION",text:"What makes you feel wanted beyond physical attraction?"},
{stage:3,type:"HUMOR",text:"If our relationship had a warning label, what would it say?"},
{stage:4,type:"INTIMACY",text:"What helps you feel relaxed enough to be fully present with me?"},
{stage:4,type:"INTIMACY",text:"What kind of touch would you like more of in ordinary moments?"},
{stage:4,type:"QUESTION",text:"What is something intimate you would like us to talk about without pressure?"},
{stage:4,type:"HUMOR",text:"What is your most ridiculous but oddly specific romantic fantasy?"},
{stage:5,type:"FANTASY",text:"What is a new setting or atmosphere you think could make a date feel electric?"},
{stage:5,type:"FANTASY",text:"Is there a playful role or dynamic you have been curious to discuss?"},
{stage:5,type:"QUESTION",text:"What boundary helps you feel safer when exploring something new?"},
{stage:5,type:"DARE",text:"Give your partner a slow, affectionate kiss. Ask first; either person can choose a cheek kiss instead."},
{stage:6,type:"FANTASY",text:"What desire feels exciting to share as a conversation, even if it never becomes a plan?"},
{stage:6,type:"QUESTION",text:"How should we signal 'slow down' or 'stop' when something feels uncertain?"},
{stage:6,type:"DARE",text:"Whisper one thing you find irresistible about your partner. Keep it sincere."},
{stage:6,type:"HUMOR",text:"If your bedroom had a customer review page, what would the funniest review say?"}
],Bolder:[
{stage:1,type:"QUESTION",text:"What is something you wish I asked you about more often?"},
{stage:1,type:"QUESTION",text:"When have you felt quietly proud of us?"},
{stage:1,type:"QUESTION",text:"What do you think we handle better together than we realize?"},
{stage:1,type:"QUESTION",text:"What is one way I have changed your idea of partnership?"},
{stage:2,type:"QUESTION",text:"What old version of yourself do you sometimes miss?"},
{stage:2,type:"QUESTION",text:"What truth about your ambitions do you rarely say out loud?"},
{stage:2,type:"QUESTION",text:"What would a brave next chapter look like for us?"},
{stage:2,type:"QUESTION",text:"What do you want to learn or experience before another decade passes?"},
{stage:3,type:"FLIRTY",text:"What do I do unintentionally that you find attractive?"},
{stage:3,type:"FLIRTY",text:"Describe a moment when you wanted to pull me closer but didn't."},
{stage:3,type:"QUESTION",text:"What makes anticipation more exciting than the event itself?"},
{stage:3,type:"HUMOR",text:"What would our friends say is our most predictable couple behavior?"},
{stage:4,type:"INTIMACY",text:"What kind of affection makes you feel pursued in the best way?"},
{stage:4,type:"INTIMACY",text:"What would make it easier to talk openly about changing needs?"},
{stage:4,type:"QUESTION",text:"What is a curiosity you would like me to hear without jumping to conclusions?"},
{stage:4,type:"HUMOR",text:"Invent a ridiculous secret code word for 'come flirt with me.'"},
{stage:5,type:"FANTASY",text:"Which sounds more intriguing to discuss: taking the lead, giving up control, or trading roles? Why?"},
{stage:5,type:"FANTASY",text:"What kind of playful anticipation or teasing would you enjoy exploring together?"},
{stage:5,type:"QUESTION",text:"What would be an absolute no, a maybe, and a yes worth discussing?"},
{stage:5,type:"DARE",text:"Offer your partner a 30-second shoulder or hand massage; let them choose and set the pressure."},
{stage:6,type:"FANTASY",text:"What consensual power dynamic or roleplay scenario intrigues you as a fantasy?"},
{stage:6,type:"QUESTION",text:"What check-in would help both of us feel secure after trying something vulnerable?"},
{stage:6,type:"DARE",text:"Tell your partner one desire you are comfortable discussing. They only need to listen."},
{stage:6,type:"HUMOR",text:"Name your imaginary couple's secret society and its most absurd rule."}
]};
const stages=["RECONNECT","REDISCOVER","INTRIGUE","EXPLORE","TEMPT","UNINHIBITED"];
let deck="Closer",drawn=[],current=null;
const $=id=>document.getElementById(id);
function draw(){const cards=decks[deck];if(drawn.length===cards.length)drawn=[];const pool=cards.map((c,i)=>({...c,i})).filter(c=>!drawn.includes(c.i));const card=pool[Math.floor(Math.random()*pool.length)];drawn.push(card.i);current=card;$("deck-label").textContent=deck.toUpperCase();$("stage-label").textContent="STAGE "+card.stage+" · "+stages[card.stage-1];$("type-label").textContent=card.type;$("prompt").textContent=card.text;}
$("start").addEventListener("click",()=>{$("welcome-title").textContent="Take your time. Stay curious.";$("welcome").hidden=true;$("game").hidden=false;draw();});
$("next").addEventListener("click",draw);$("pass").addEventListener("click",draw);
$("how").addEventListener("click",()=>$("rules").showModal());$("close-rules").addEventListener("click",()=>$("rules").close());
if("serviceWorker" in navigator && location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));