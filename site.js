/* ============ CONFIGURAÇÃO: troque estes dados pelos reais ============ */
const WHATSAPP_NUMBER = "5545999283319";      // DDI + DDD + número, só dígitos
const PHONE_DISPLAY   = "(45) 99928-3319";     // como aparece na tela
const INSTAGRAM_USER  = "leticia_ciusz_nails";        // @ do Instagram, sem o @

/* ============ Contatos ============ */
const waLink = msg => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);

document.querySelectorAll("[data-wa]").forEach(a => a.href = waLink(a.dataset.msg || "Olá, Letícia!"));
document.querySelectorAll("[data-ig]").forEach(a => a.href = "https://www.instagram.com/" + INSTAGRAM_USER);
document.querySelectorAll("[data-tel]").forEach(a => {
  a.textContent = PHONE_DISPLAY;
  a.href = "tel:+" + WHATSAPP_NUMBER;
});
document.getElementById("year").textContent = new Date().getFullYear();

/* ============ Menu mobile ============ */
const toggle = document.getElementById("navToggle"), navEl = document.getElementById("nav");
function closeMenu(){
  navEl.classList.remove("open");
  toggle.setAttribute("aria-expanded","false");
  toggle.setAttribute("aria-label","Abrir menu");
  toggle.firstElementChild.firstElementChild.setAttribute("href","#i-menu");
}
toggle.addEventListener("click", e => {
  e.stopPropagation();
  const open = navEl.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  toggle.firstElementChild.firstElementChild.setAttribute("href", open ? "#i-close" : "#i-menu");
});
document.addEventListener("click", e => { if(e.target.closest("a")) closeMenu(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeMenu(); });
