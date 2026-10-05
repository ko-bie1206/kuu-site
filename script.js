/* ==========================================================
   ここを書き換えるだけでサイトの内容を更新できます
   ========================================================== */

// SNS・連絡先（url を空 "" にするとそのボタンは非表示）
const LINKS = {
  x:       { url: "https://x.com/",       label: "X (Twitter)" },  // TODO: アカウントURL
  youtube: { url: "https://youtube.com/", label: "YouTube" },      // TODO
  tiktok:  { url: "https://tiktok.com/",  label: "TikTok" },       // TODO
  mail:    { url: "mailto:example@example.com", label: "メール" },  // TODO: 受付用メールアドレス
  form:    { url: "",                     label: "お問い合わせフォーム" }, // TODO: Googleフォーム等のURL
};

// 制作実績
//   type : "thumb"（サムネイル） / "long"（動画編集） / "short"（ショート）
//   img  : 画像パス（例: "works/thumb01.jpg"）。空ならダミー表示
//   url  : 動画やXポストへのリンク（任意）
const WORKS = [
  { type: "thumb", title: "雑談配信サムネイル",   client: "個人勢Vtuber 様", img: "", url: "" },
  { type: "long",  title: "ゲーム実況 編集",       client: "個人勢Vtuber 様", img: "", url: "" },
  { type: "short", title: "配信切り抜きショート", client: "個人勢Vtuber 様", img: "", url: "" },
  { type: "thumb", title: "歌枠サムネイル",       client: "企業所属Vtuber 様", img: "", url: "" },
  { type: "thumb", title: "記念配信サムネイル",   client: "個人勢Vtuber 様", img: "", url: "" },
  { type: "long",  title: "企画動画 編集",         client: "企業所属Vtuber 様", img: "", url: "" },
];

// 料金（TODO: 仮の金額です。実際の料金に変更してください）
const PRICES = [
  {
    badge: "Thumbnail", name: "サムネイル制作", yen: "5,000", unit: "1枚あたり",
    items: ["構成案のご提案つき", "修正2回まで無料", "納期 3〜5日目安"],
  },
  {
    badge: "Long Video", name: "動画編集（横長）", yen: "10,000", unit: "〜10分 1本あたり",
    items: ["カット・テロップ・SE・BGM", "素材演出（くー独自）", "10分以降は尺に応じてお見積り"],
  },
  {
    badge: "Short Video", name: "ショート動画制作", yen: "4,000", unit: "〜60秒 1本あたり",
    items: ["縦型テロップ・演出", "冒頭フック構成のご提案", "まとめてのご依頼で割引あり"],
  },
];

/* ========================================================== */

const ICONS = {
  x: '<svg viewBox="0 0 24 24"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.2l7.3-8.3L1 2h6.4l4.4 5.8L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-3.2.5-4.8s-.1-3.2-.5-4.8ZM9.7 15.1V8.9L15.5 12l-5.8 3.1Z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24"><path d="M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.2a6.3 6.3 0 1 0 5.4 6.2V8.6a8 8 0 0 0 4.6 1.5V6.7A4.6 4.6 0 0 1 16.6 2Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><path d="M3 4h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 3.2V18h18V7.2l-9 5.6-9-5.6ZM4.6 6l7.4 4.6L19.4 6H4.6Z"/></svg>',
  form: '<svg viewBox="0 0 24 24"><path d="M5 2h10l5 5v15H5V2Zm9 1.5V8h4.5L14 3.5ZM8 12v2h9v-2H8Zm0 4v2h9v-2H8Z"/></svg>',
};
const TYPE_LABEL = { thumb: "サムネ", long: "動画編集", short: "ショート" };

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const ext = (url) => url.startsWith("http") ? ' target="_blank" rel="noopener"' : "";

// SNSアイコン
document.getElementById("sns").innerHTML = ["x", "youtube", "tiktok", "mail"]
  .filter((k) => LINKS[k].url)
  .map((k) => `<li><a href="${esc(LINKS[k].url)}"${ext(LINKS[k].url)} aria-label="${esc(LINKS[k].label)}">${ICONS[k]}</a></li>`)
  .join("");

// お問い合わせボタン
const contactBtns = [
  ["x", "btn--main", "X(Twitter)のDMで相談"],
  ["form", "btn--olive", "フォームから依頼"],
  ["mail", "btn--sub", "メールで問い合わせ"],
];
document.getElementById("contact-btns").innerHTML = contactBtns
  .filter(([k]) => LINKS[k].url)
  .map(([k, cls, text]) => `<a class="btn ${cls}" href="${esc(LINKS[k].url)}"${ext(LINKS[k].url)}>${ICONS[k]}${text}</a>`)
  .join("");

// 実績
document.getElementById("works-grid").innerHTML = WORKS.map((w, i) => {
  const media = w.img
    ? `<img src="${esc(w.img)}" alt="${esc(w.title)}" loading="lazy">`
    : `<div class="work__ph"><div><span>SAMPLE ${String(i + 1).padStart(2, "0")}</span><small>準備中</small></div></div>`;
  const play = w.type === "thumb" ? "" : '<span class="work__play" aria-hidden="true"></span>';
  const tag = w.url ? "a" : "div";
  const href = w.url ? ` href="${esc(w.url)}"${ext(w.url)}` : "";
  return `<article class="work card work--${w.type}" data-type="${w.type}">
    <${tag} class="work__media"${href}>${media}${play}</${tag}>
    <div class="work__meta">
      <span class="work__type">${TYPE_LABEL[w.type]}</span><span class="work__title">${esc(w.title)}</span>
      <span class="work__client">${esc(w.client)}</span>
    </div>
  </article>`;
}).join("");

// 実績の絞り込み
document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-selected", b === btn);
    });
    const f = btn.dataset.filter;
    document.querySelectorAll(".work").forEach((el) => {
      el.classList.toggle("is-hidden", f !== "all" && el.dataset.type !== f);
    });
  });
});

// 料金
document.getElementById("prices").innerHTML = PRICES.map((p) => `
  <article class="price card">
    <span class="price__badge">${esc(p.badge)}</span>
    <h3>${esc(p.name)}</h3>
    <div class="price__yen">¥${esc(p.yen)}<small>〜</small></div>
    <div class="price__unit">${esc(p.unit)}</div>
    <ul>${p.items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
  </article>`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

// スクロールで表示
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// 現在地のメニューをハイライト
const navLinks = [...document.querySelectorAll(".nav a")];
const navIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    navLinks.forEach((a) => a.classList.toggle("is-current", a.getAttribute("href") === "#" + e.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => navIO.observe(s));
