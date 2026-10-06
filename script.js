"use strict";
/* ===== EDIT YOUR INFO HERE ===== */
const PROJECTS = [
  { name: "BloxCrow", role: "Head Staff", image: "bloxcrow.webp" },
  { name: "BetPet", role: "Head Staff", image: "betpet.png" },
  { name: "Pantry", role: "Co-Owner", image: "pantre.webp" },
  { name: "5Stars Stocks and Deals", role: "Staff", image: "5stars.webp" },
  { name: "Trouble's Stocks and Deals", role: "Staff", image: "" },
  { name: "1AM Stocks and Deals", role: "Staff", image: "" },
  { name: "Kraken.gg", role: "Site Developer & Server Manager", image: "kraken.webp" },
  { name: "Waves Stocks", role: "Founder", image: "waves.webp" }
  // Add a picture: put the file in /images and set image: "images/bloxcrow.png"
];
const CONTACTS = [
  { icon: "discord", label: "Discord: h2wa", href: "https://discord.com/users/1077969057313202357" },
  { icon: "instagram", label: "Instagram: @apriljobs4", href: "https://instagram.com/apriljobs4" },
  { icon: "x", label: "X: @april_sx", href: "https://x.com/april_sx?s=11" },
  { icon: "email", label: "aprilh2wa@gmail.com", href: "aprilh2wa@gmail.com" }
];
/* ================================= */

const grid = document.getElementById("grid");
PROJECTS.forEach(p => {
  const card = document.createElement("article");
  card.className = "card";
  const pic = document.createElement("div");
  pic.className = "pic";
  const showEmpty = () => { pic.textContent = "No pictures found"; };
  if (p.image) {
    const img = new Image();
    img.alt = p.name + " picture";
    img.loading = "lazy";
    img.onerror = showEmpty;
    img.src = p.image;
    pic.appendChild(img);
  } else showEmpty();
  const body = document.createElement("div");
  body.className = "body";
  const h = document.createElement("h3"); h.textContent = p.name;
  const r = document.createElement("span"); r.className = "role"; r.textContent = p.role;
  body.append(h, r);
  card.append(pic, body);
  grid.appendChild(card);
});

const NS = "http://www.w3.org/2000/svg";
const ICONS = {
  discord: [["path", { fill: "currentColor", d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" }]],
  x: [["path", { fill: "currentColor", d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" }]],
  instagram: [["rect", { x: 3, y: 3, width: 18, height: 18, rx: 5, fill: "none", stroke: "currentColor", "stroke-width": 2 }],
              ["circle", { cx: 12, cy: 12, r: 4.2, fill: "none", stroke: "currentColor", "stroke-width": 2 }],
              ["circle", { cx: 17.4, cy: 6.6, r: 1.2, fill: "currentColor" }]],
  email: [["rect", { x: 3, y: 5, width: 18, height: 14, rx: 2.5, fill: "none", stroke: "currentColor", "stroke-width": 2 }],
          ["polyline", { points: "3.5,7.5 12,13.5 20.5,7.5", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linejoin": "round" }]]
};
function makeIcon(name) {
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24"); svg.setAttribute("class", "ico"); svg.setAttribute("aria-hidden", "true");
  (ICONS[name] || []).forEach(([tag, attrs]) => {
    const el = document.createElementNS(NS, tag);
    Object.keys(attrs).forEach(k => el.setAttribute(k, attrs[k]));
    svg.appendChild(el);
  });
  return svg;
}
const contacts = document.getElementById("contacts");
CONTACTS.forEach(c => {
  const a = document.createElement("a");
  a.className = "btn"; a.href = c.href;
  a.target = "_blank"; a.rel = "noopener noreferrer";
  a.append(makeIcon(c.icon), document.createTextNode(c.label));
  contacts.appendChild(a);
});

/* Tabs */
const btns = document.querySelectorAll(".nav-btn"), tabs = document.querySelectorAll(".tab");
btns.forEach(b => b.addEventListener("click", () => {
  btns.forEach(x => x.classList.toggle("active", x === b));
  tabs.forEach(t => t.classList.toggle("active", t.id === b.dataset.tab));
}));

/* Loader: gates open, then reveal (shorter on repeat visits) */
const loader = document.getElementById("loader");
let seen = false;
try { seen = sessionStorage.getItem("seen") === "1"; sessionStorage.setItem("seen", "1"); } catch (e) {}
if (seen) loader.remove();
else setTimeout(() => { loader.classList.add("done"); setTimeout(() => loader.remove(), 700); }, 2800);
