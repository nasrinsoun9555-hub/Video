// ===== LINK SETTINGS — កែ Link នៅទីនេះបានងាយៗ =====
const LINKS = {
  community: 'https://t.me/journeywitme',
  telegram: 'https://t.me/Nasrin_Suon',
  signal: 'https://t.me/Learning_Forex_Nasrin',
  learningForex: 'https://t.me/open_acc026',
  facebook: 'https://www.facebook.com/profile.php?id=61587144250978',
  youtube: 'https://www.youtube.com/@nasrinsoun4532',
  yaiTrading: 'https://secure.yaitrading.pro/reffer/2025_jp3244'
};

function applyLinks(){
  document.querySelectorAll('[data-link]').forEach(el=>{
    const key=el.getAttribute('data-link');
    if(LINKS[key]) el.setAttribute('href',LINKS[key]);
  });
}

const lessons=[
["របៀបបង្កើត Account Y.A.I Trading 📊","video_01_yai_account.mp4","01"],
["របៀបបង្កើត Account Live MT5 📊","video_02_live_mt5.mp4","02"],
["របៀបភ្ជាប់ Account Y.A.I ទៅកាន់កម្មវិធី MT5 📊","video_03_connect_yai_mt5.mp4","03"],
["របៀបភ្ជាប់ Bank ធនាគារជាមួយ Y.A.I Trading 📊","video_04_bank_yai.mp4","04"],
["របៀបដាក់លុយជាមួយ Y.A.I Trading 📊","video_05_deposit_yai.mp4","05"],
["របៀបដកលុយជាមួយ Y.A.I Trading 📊","video_06_withdraw_yai.mp4","06"]
];
const howto=[
["មេរៀនទី 1 📖 មុខងារសំខាន់ៗនៅក្នុង App MT5 ✅","video_07_mt5_functions.mp4","01"],
["មេរៀនទី 2 📖 របៀបទិញលក់មាស (BUY / SELL) ✅","video_08_buy_sell_gold.mp4","02"],
["មេរៀនទី 3 📖 របៀបកាត់ ចំណេញ / ខាត ✅","video_09_profit_loss.mp4","03"],
["មេរៀនទី 4 📖 របៀបកំណត់ Buy Limit / Sell Limit ✅","video_10_buy_sell_limit.mp4","04"],
["មេរៀនទី 5 📖 របៀបកំណត់ Buy Stop / Sell Stop ✅","video_11_buy_sell_stop.mp4","05"],
["មេរៀនទី 6 📖 របៀបកំណត់ SL / TP ✅","video_12_sl_tp.mp4","06"]
];
let previousPage="lessons";
function cards(data,target){
 document.getElementById(target).innerHTML=data.map((x,i)=>`<article class="card" onclick="openVideo('${x[1]}','${escapeHtml(x[0])}','${target}')"><div class="thumb"><img src="cover_${x[1].replace("video_","").replace(".mp4",".jpg")}" alt="${x[0]}" loading="lazy"><span class="shade"></span><span class="num">${x[2]}</span><span class="play">▶</span></div><div class="card-body"><h3>${x[0]}</h3><div class="tag">VIDEO LESSON • ចុចដើម្បីមើល</div></div></article>`).join("");
}
function escapeHtml(s){return s.replace(/'/g,"\\'")}
function showPage(id){
 document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
 const map={home:0,lessons:1,howto:2};
 if(map[id]!==undefined) document.querySelectorAll(".nav-btn")[map[id]].classList.add("active");
 document.querySelector(".topbar")?.classList.remove("menu-open");
 window.scrollTo({top:0,behavior:"smooth"});
 if(id!=="player")previousPage=id;
}
function openVideo(src,title,from){previousPage=from==="howtoGrid"?"howto":"lessons";document.getElementById("playerTitle").textContent=title;const v=document.getElementById("videoPlayer");v.onerror=function(){
  document.getElementById("playerAction").innerHTML='<div class="video-error">⚠️ Video មិនអាចបើកបាន។ សូមពិនិត្យថា File នេះស្ថិតនៅក្នុង <b>GitHub Repository</b> ក្នុង GitHub ហើយឈ្មោះ File ត្រូវគ្នា។</div>';
};
v.src=src;document.getElementById("playerAction").innerHTML=(title.includes("Y.A.I Trading")&&title.includes("បង្កើត Account"))?`<a class="action" target="_blank" rel="noopener" href="${LINKS.yaiTrading}">🔗 បង្កើត Account Y.A.I Trading</a>`:"";showPage("player")}
function toggleMenu(){document.querySelector(".topbar").classList.toggle("menu-open")}
function backFromPlayer(){document.getElementById("videoPlayer").pause();document.getElementById("videoPlayer").removeAttribute("src");document.getElementById("videoPlayer").load();showPage(previousPage)}
function goHome(){showPage("home")}
applyLinks();
cards(lessons,"lessonGrid");cards(howto,"howtoGrid");
