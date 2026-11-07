// Original Between Us card library. Cards are stored locally in the app; no player data is sent anywhere.
const stageNames=["Reconnect","Rediscover","Intrigue","Explore","Tempt","Uninhibited"];
const raw={
Closer:[
[
"What ordinary moment in our life together feels quietly precious to you?",
"When have you felt most understood by me without needing to explain yourself?",
"What is one small thing I do that makes a place feel like home?",
"What do you think we have learned to do well as a team?",
"What memory of us would you put in a time capsule?",
"What is something about our daily rhythm you genuinely love?",
"When do you feel most at ease in my presence?",
"What part of our relationship deserves more celebration?",
"What is one kindness from me you still remember?",
"If we had a completely free day together, how would you want it to unfold?"
],
[
"What did younger you believe adulthood or love would look like?",
"What side of yourself took you a long time to feel comfortable sharing?",
"What experience changed the way you see the world?",
"What is a belief you have softened or changed over the years?",
"What do you wish people understood about the way your mind works?",
"What personal ambition deserves a little more room in our life?",
"What kind of adventure would make you feel more alive?",
"What is something you want to learn simply because it fascinates you?",
"What do you miss about a past chapter of your life?",
"What would you like the next five years to feel like, beyond what we accomplish?"
],
[
"What was the first moment you remember feeling genuinely drawn to me?",
"What do I do that makes you feel attractive or appreciated?",
"What kind of compliment from me lands most deeply?",
"What is your favorite kind of lingering kiss?",
"What outfit or look of mine lives rent-free in your memory?",
"What makes an ordinary evening feel romantic to you?",
"When do you feel the strongest spark between us?",
"DARE: Hold eye contact for twenty seconds, then tell each other what you noticed.",
"HUMOR: If our flirting had a technical support hotline, what would the most common complaint be?",
"What is a subtle way I could let you know I want your attention?"
],
[
"What helps you feel emotionally safe enough to be unguarded?",
"What kind of touch helps you relax after a stressful day?",
"What makes you feel desired without feeling pressured?",
"What conversation about intimacy would you like us to make easier?",
"What does being fully present with each other look like?",
"What helps you move from busy mode into connection mode?",
"DARE: Offer a hand, neck, or shoulder massage; let your partner choose.",
"What is one affectionate ritual we could make our own?",
"What makes you feel cherished outside of special occasions?",
"HUMOR: What ridiculous award would we each win for our romantic habits?"
],
[
"What kind of anticipation or build-up do you find especially exciting?",
"What setting would make a date feel deliciously different?",
"What kind of playful teasing feels fun rather than frustrating?",
"What is a romantic scenario you would enjoy planning together?",
"What is something new you might be curious to explore at your own pace?",
"What makes you comfortable being the one who initiates?",
"DARE: Whisper a sincere, specific compliment that you have not said out loud before.",
"What is a yes, maybe, and not-for-me when it comes to trying something new?",
"What kind of atmosphere makes you feel most confident and attractive?",
"HUMOR: Invent a ridiculously dramatic name for our next date night."
],
[
"What desire is exciting to talk about even if it stays a fantasy?",
"What does trust look like when one of us is trying something vulnerable?",
"What kind of check-in would help you feel cared for during an adventurous moment?",
"What would make it easier to say 'not tonight' without either of us feeling rejected?",
"What boundaries help curiosity feel safe?",
"What kind of aftercare or reconnection feels meaningful to you?",
"DARE: Ask your partner what kind of affectionate attention they would enjoy right now; honor the answer.",
"What is one fantasy category you would like to understand better about each other?",
"What would help us keep playfulness and communication in balance?",
"HUMOR: If our private life had a user manual, what would the first safety note say?"
]
],
Bolder:[
[
"What truth about our relationship makes you proud?",
"What do you think we make look easier than it really is?",
"When have I surprised you by showing up in exactly the right way?",
"What is a challenge we handled that deserves more credit?",
"What do you hope never changes about how we treat each other?",
"What is one question you wish couples asked each other more often?",
"What does a really good ordinary Tuesday together look like?",
"What is something we should stop postponing?",
"What have you learned about love from being with me?",
"What would you like us to protect more fiercely in our schedule?"
],
[
"What part of your identity are you still figuring out?",
"What would you attempt if embarrassment were impossible?",
"What is a risk you are glad you took?",
"What do you envy in other people's lives that might reveal a desire of your own?",
"What kind of recognition matters to you more than you admit?",
"What old story about yourself are you ready to rewrite?",
"What would a more courageous version of our life include?",
"What topic do you want us to become better at discussing?",
"What is a dream that feels both thrilling and intimidating?",
"What do you want to be remembered for by the people closest to you?"
],
[
"What do I do that instantly gets your attention?",
"What memory of our chemistry would you happily replay?",
"What kind of confident energy do you find irresistible?",
"What is a moment you wanted to kiss me but had to behave?",
"What makes you feel pursued in a way you enjoy?",
"What is your favorite way to build anticipation?",
"DARE: Tell your partner exactly what you find magnetic about them today.",
"What kind of spontaneous affection would make you grin?",
"HUMOR: If we had to flirt using only terrible movie quotes, who would win?",
"What would make you feel bold enough to make the first move?"
],
[
"What is a need you sometimes struggle to ask for?",
"What does good communication during intimacy sound like to you?",
"What helps you stay curious instead of self-conscious?",
"What is a misconception about your desires you wish I understood?",
"What kind of affection do you want more of when life gets hectic?",
"What does confidence in your own body mean to you?",
"DARE: Let your partner choose a song and share a slow dance, wherever you are.",
"What makes an intimate conversation feel respectful and exciting?",
"What is one thing you would like to initiate more often?",
"HUMOR: Give our couple chemistry a scientific name and describe its side effects."
],
[
"Which appeals more as a fantasy: taking the lead, surrendering control, or switching roles?",
"What kind of playful power exchange would you be comfortable discussing?",
"What roleplay premise sounds fun because it lets us be different versions of ourselves?",
"What is the difference between thrilling nerves and uncomfortable pressure for you?",
"What would make a flirtatious challenge feel genuinely optional?",
"What kind of teasing is exciting, and what kind crosses a line?",
"DARE: Each name one thing that would make tonight feel more intentional; no promises required.",
"What would you want to negotiate before experimenting with restraint or sensation play?",
"What would help you feel confident exploring a new side of yourself?",
"HUMOR: What is the least intimidating safe word you can invent?"
],
[
"What consensual dynamic or power exchange would you be curious to discuss in detail?",
"What does surrendering control mean to you, emotionally?",
"What does responsible leadership look like in an intimate dynamic?",
"What would be on your personal hard-no list, and how should we communicate it?",
"What would you want to know before considering a new toy or sensation?",
"How should we handle a pause, stop signal, or change of mind?",
"DARE: Have a no-pressure negotiation: each share one yes, one maybe, and one no.",
"What would meaningful aftercare look like after an intense experience?",
"What fantasy should remain a fantasy, and how can we enjoy talking about it?",
"HUMOR: If consent had a catchphrase for our household, what would it be?"
]
],
Chemistry:[
[
"What makes you feel like we are dating each other, not just managing life together?",
"What kind of surprise makes you feel seen rather than overwhelmed?",
"What would our ideal secret escape day include?",
"What is a tiny tradition we could start this week?",
"What kind of shared challenge would bring out our best teamwork?",
"What do you wish we made more time to laugh about?",
"What is a place you would love to revisit together?",
"What is one thing you would love to hear me say more often?",
"What would make our next date feel unlike any other?",
"DARE: Plan a ten-minute mini-date using only what is already in the room."
],
[
"What side of your personality comes out only when you feel completely free?",
"What is a curiosity you have never had the right moment to bring up?",
"What would you do with a month off and no obligations?",
"What kind of new experience makes you feel deliciously out of your depth?",
"What is a fantasy version of our future that makes you smile?",
"What is a skill you would love for us to learn together?",
"What social expectation would you happily ignore for a day?",
"What does adventure mean to you at this point in your life?",
"What would you like to be more spontaneous about?",
"HUMOR: What absurd reality show would we accidentally dominate?"
],
[
"What kind of eye contact makes you feel a spark?",
"What is your favorite way to be kissed when we have nowhere to be?",
"What kind of voice, phrase, or tone gets your attention?",
"What is a scent or setting that you associate with attraction?",
"What is something you find sexy that has nothing to do with appearance?",
"What kind of playful message would make your day?",
"DARE: Give a ten-second kiss, then ask whether your partner wants another.",
"What kind of anticipation makes you smile before anything happens?",
"What is a memory when the chemistry between us felt unmistakable?",
"HUMOR: If attraction were a competitive sport, what would our signature move be?"
],
[
"What kind of sensory experience would you like to explore together: music, texture, scent, taste, or atmosphere?",
"What helps you feel comfortable being playful and a little silly?",
"What kind of massage or touch would you like to receive more often?",
"What makes a private moment feel luxurious without spending money?",
"What is something you would like to communicate more clearly about pleasure?",
"What would a perfect slow evening together look like?",
"DARE: Take turns choosing a song that captures your current mood for each other.",
"What helps you feel confident asking for what you like?",
"What is one way we could make affection more spontaneous?",
"HUMOR: Design a five-star review for our best-ever date night."
],
[
"What kind of playful challenge would you enjoy receiving from me?",
"What kind of costume, character, or role would be fun to try on for a date?",
"What is a setting that feels adventurous but still private and comfortable?",
"What kind of teasing should always come with a clear way to opt out?",
"What would you want to explore about sensation play before deciding anything?",
"What does a fun balance of control and choice look like to you?",
"DARE: Invite your partner to choose a song for a private, playful dance.",
"What kind of romantic surprise would feel daring but still safe?",
"What is a fantasy involving a different atmosphere or version of ourselves?",
"HUMOR: Invent a ridiculous code phrase that means 'I am flirting with you.'"
],
[
"What would you want to discuss before trying blindfolds or sensory restriction?",
"What are your personal boundaries around being watched, photographed, or recorded?",
"What does privacy mean to you when sharing intimate fantasies?",
"What would make a power-exchange conversation feel balanced and respectful?",
"What would you want to know about safer practices before trying a new activity?",
"What is a clear signal that means 'check in with me now'?",
"DARE: Each share one boundary you appreciate the other person respecting.",
"What kind of aftercare helps you feel grounded and connected?",
"What is something adventurous you are curious about but not ready to decide on?",
"HUMOR: Name the imaginary committee that approves our most questionable date ideas."
]
],
"After Dark":[
[
"What makes you feel most confident and desirable?",
"What kind of private attention makes you feel especially wanted?",
"What is a desire you have become more comfortable owning over time?",
"What would help us make space for intimacy without making it another obligation?",
"What kind of invitation feels exciting rather than demanding?",
"What helps you feel at home in your own sensuality?",
"What is a private compliment you wish I gave you more often?",
"What would make you feel pursued and still completely in control of your choices?",
"DARE: Tell your partner one thing you would love to do together on a future date, with no pressure to agree.",
"HUMOR: What would our alter egos be called on a very dramatic night out?"
],
[
"What part of your sensual self would you like to understand better?",
"What makes a fantasy feel safe to share?",
"What is something you used to feel shy about discussing but no longer do?",
"What kind of attention makes you feel powerful?",
"What does feeling uninhibited mean to you, personally?",
"What would you like to learn about your partner's turn-ons without assumptions?",
"What kind of conversation would make it easier to talk about jealousy or comparison?",
"What does confidence look like when you are asking for what you want?",
"What is a curiosity you want treated with openness rather than judgment?",
"HUMOR: If your confidence had a theme song, what would play?"
],
[
"What kind of confident initiation do you find most attractive?",
"What is a look or gesture that communicates desire to you?",
"What kind of teasing creates anticipation in the best way?",
"What do you find compelling about taking the lead?",
"What do you find compelling about letting someone else lead by agreement?",
"What kind of praise feels affirming rather than performative?",
"DARE: Describe a fantasy date night in three cinematic details.",
"What kind of flirtation would you like more of when we are out together?",
"What makes a kiss feel unforgettable?",
"HUMOR: Give your best over-the-top villain laugh, then explain what makes you feel irresistible."
],
[
"What does enthusiastic consent look and sound like for you in the moment?",
"What are your boundaries around marks, restraint, or intense sensation?",
"What would help you communicate changing comfort levels during play?",
"What is the difference between a fantasy you enjoy discussing and an activity you might try?",
"What would you want to agree on before experimenting with toys?",
"What does respectful dominance mean to you?",
"DARE: Practice saying 'pause', 'slower', and 'stop' and agree how each will be honored.",
"What does respectful submission mean to you, if that dynamic interests you?",
"What kind of environment helps you feel safe enough to experiment?",
"HUMOR: Create a very serious-sounding title for our imaginary intimacy safety officer."
],
[
"What kind of roleplay dynamic would you be curious to build together?",
"What boundaries would need to be clear before exploring a consensual power exchange?",
"What appeals to you about restraint as a fantasy, and what would be off-limits?",
"What kind of sensation play sounds intriguing to discuss, and what needs research first?",
"What agreements would matter if a fantasy involved another person?",
"What are your thoughts about consensual non-monogamy as a topic of conversation, whether or not it fits us?",
"What would you need to discuss before exploring voyeurism or exhibitionism, including privacy and legality?",
"How should we handle safer-sex conversations if a fantasy involves additional people?",
"DARE: Share one 'curious about', one 'not for me', and one 'need more information' without debating the answers.",
"HUMOR: Invent a ridiculous but memorable name for our imaginary private members club."
],
[
"What would a thorough negotiation look like before any intense BDSM scene?",
"What safe word system and nonverbal stop signal would make sense for us?",
"What would be essential to discuss before any restraint activity, including physical limits and emergency release?",
"What does aftercare mean to each of us, and how might our needs differ?",
"What privacy rules should apply to intimate photos, videos, devices, and shared fantasies?",
"What would make a fantasy involving an audience or another person an absolute no?",
"What would we need to learn from reliable safety resources before trying anything unfamiliar?",
"What signs would tell us to stop, reconnect, and revisit the conversation another day?",
"DARE: Make a shared 'green / yellow / red' list for one topic, with no pressure to move any item.",
"HUMOR: Write the first rule of our imaginary after-dark club. Make it absurd but wise."
]
]
};
const typeFor=(stage,i,text)=>text.startsWith("DARE:")?"DARE":text.startsWith("HUMOR:")?"HUMOR":stage<=2?"QUESTION":stage===3?"FLIRTY":stage===4?"INTIMACY":"FANTASY";
const packs={};
for(const [name,stages] of Object.entries(raw)){
  packs[name]=stages.flatMap((items,si)=>items.map((entry,i)=>{const text=entry.replace(/^(DARE|HUMOR):\s*/,"");return {id:name.toLowerCase().replace(/[^a-z]/g,"")+"-"+(si+1)+"-"+(i+1),stage:si+1,type:typeFor(si+1,i,entry),text};}));
}
window.BETWEEN_US_PACKS=packs;
window.BETWEEN_US_STAGE_NAMES=stageNames;
