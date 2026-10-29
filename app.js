(function () {
  "use strict";

  const P = window.PERSONAS;
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const eur = (n) => n.toLocaleString("es-ES") + " €";
  const initials = (name) => name.split(" ").filter((w) => /^[A-ZÁÉÍÓÚÑ]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
  const ORG = { renfe: "Renfe", adif: "Adif", ministerio: "Ministerio" };
  const avatarCls = (org) => (org === "ministerio" ? "min" : org);

  const ICON = {
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>',
    half: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 4v16"/></svg>',
    warn: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4 2.5 20h19z"/><path d="M12 10v4M12 17v.5"/></svg>',
    q: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5M12 16.5v.5"/></svg>',
    link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
    gavel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 4 6 6M11 7l6 6M8 20h10M4 16l7-7"/></svg>'
  };

  const VEREDICTO = {
    cualificado: ["b-good", ICON.check, "Cualificado"],
    parcial: ["b-warn", ICON.half, "Cualificación parcial"],
    cuestionable: ["b-bad", ICON.warn, "Idoneidad dudosa"],
    "sin-datos": ["", ICON.q, "Sin datos suficientes"],
    na: ["", ICON.q, "Cargo político"]
  };
  const VINCULO = {
    directo: ["b-bad", "Vínculo directo con Puente"],
    politico: ["b-warn", "Nombramiento político"],
    prensa: ["b-warn", "Afinidad alegada (prensa)"],
    ninguno: ["", "Sin vínculo documentado"]
  };
  const JUDICIAL = {
    ninguna: ["b-good", "Sin causa judicial"],
    archivada: ["", "Causa archivada (2018)"],
    investigado: ["b-bad", "Investigado"],
    condenado: ["b-bad", "Condenado"]
  };
  const TIPO = { judicial: "Judicial", hecho: "Hecho", prensa: "Prensa", politica: "Política" };

  document.querySelectorAll("#fecha, .fecha").forEach((el) => (el.textContent = window.FECHA_CORTE));

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  $("#themeBtn").addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  /* ---------- Findings ---------- */
  const cupula = P.filter((p) => p.org !== "ministerio");
  const nInvest = cupula.filter((p) => p.judicial === "investigado" || p.judicial === "condenado").length;
  const nPuente = cupula.filter((p) => p.vinculo === "directo").length;
  const nNoFerro = cupula.filter((p) => p.ferroviaria === 0).length;
  const nDudosa = cupula.filter((p) => p.veredicto === "cuestionable" || p.veredicto === "parcial").length;
  $("#findings").innerHTML = [
    ["okish", nInvest, `de ${cupula.length} directivos actuales están investigados judicialmente`],
    ["alert", nPuente, "llegan desde el entorno directo de Puente (Valladolid o su ministerio), todos a Renfe"],
    ["alert", nNoFerro, `de ${cupula.length} no tenían experiencia ferroviaria previa`],
    ["", nDudosa, `de ${cupula.length} tienen una cualificación parcial o dudosa para su puesto`]
  ].map(([c, n, t]) => `<div class="stat ${c}"><b>${n}</b><span>${esc(t)}</span></div>`).join("");

  /* ---------- Personas ---------- */
  const state = { org: "all", flags: new Set(), q: "" };

  function badge([cls, icon, txt]) {
    return `<span class="badge ${cls}">${icon || ""}${esc(txt)}</span>`;
  }
  function meter(label, v, key) {
    const dots = [0, 1, 2].map((i) => `<i class="${i < v ? "on" : ""}"></i>`).join("");
    return `<div class="meter ${key === "ferro" && v === 0 ? "f0" : ""}" aria-label="${label}: ${v} de 3"><span>${label}</span><div class="dots">${dots}</div></div>`;
  }

  function card(p) {
    const v = VEREDICTO[p.veredicto];
    const vi = VINCULO[p.vinculo];
    const j = JUDICIAL[p.judicial];
    const s = p.sueldo;
    const polem = p.polemicas.length
      ? `<ul class="polem">${p.polemicas.map((x) => `<li><span class="tag t-${x.tipo}">${TIPO[x.tipo]}</span><span>${esc(x.txt)}</span></li>`).join("")}</ul>`
      : "<p>No se han encontrado polémicas.</p>";
    return `
      <article class="card" id="p-${p.id}">
        <div class="card-top">
          <span class="avatar ${avatarCls(p.org)}" aria-hidden="true">${initials(p.nombre)}</span>
          <div>
            <span class="org ${p.org}">${ORG[p.org]}</span>
            <h3>${esc(p.nombre)}</h3>
            <p class="role">${esc(p.cargo)}</p>
          </div>
        </div>
        <div class="badges">
          ${badge(v)}
          ${badge([vi[0], ICON.link, vi[1]])}
          ${badge([j[0], ICON.gavel, j[1]])}
        </div>
        <div class="meters">
          ${meter("Gestión", p.gestion, "ges")}
          ${meter("Ferroviaria", p.ferroviaria, "ferro")}
          ${meter("Formación técnica", p.tecnica, "tec")}
        </div>
        <div class="pay-line">
          <span class="lbl">Sueldo</span>
          <span class="val ${s.verificado ? "" : "unv"}">${esc(s.txt)}</span>
        </div>
        <details class="more">
          <summary>Ver análisis completo</summary>
          <div class="body">
            <h4>Nombramiento</h4>
            <p>Desde ${esc(p.desde)}. ${esc(p.nombradoPor)}.</p>
            <h4>Formación</h4>
            <p>${esc(p.formacion)}</p>
            <h4>Experiencia previa</h4>
            <ul>${p.trayectoria.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
            <h4>Vinculación con Puente o con la política</h4>
            <ul>${p.vinculoTxt.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
            <h4>Polémicas y causas</h4>
            ${polem}
            ${s.anio ? `<h4>Retribución</h4><p>${esc(s.txt)}. ${esc(s.anio)}.</p>` : ""}
            <div class="verdict">
              <h4>¿Cualificado para el puesto?</h4>
              <p>${esc(p.valoracion)}</p>
            </div>
            <h4>Fuentes</h4>
            <div class="srcs">${p.fuentes.map(([t, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a>`).join("")}</div>
          </div>
        </details>
      </article>`;
  }

  function matches(p) {
    if (state.org !== "all" && p.org !== state.org) return false;
    if (state.flags.has("puente") && !["directo", "politico", "prensa"].includes(p.vinculo)) return false;
    if (state.flags.has("noferro") && p.ferroviaria !== 0) return false;
    if (state.flags.has("cuest") && !["cuestionable", "parcial"].includes(p.veredicto)) return false;
    if (state.flags.has("polem") && !p.polemicas.some((x) => x.tipo !== "hecho")) return false;
    if (state.q) {
      const hay = [p.nombre, p.cargo, p.formacion, ...p.trayectoria, ...p.vinculoTxt].join(" ").toLowerCase()
        .normalize("NFD").replace(/[̀-ͯ]/g, "");
      if (!hay.includes(state.q)) return false;
    }
    return true;
  }

  function renderCards() {
    const list = P.filter(matches);
    $("#count").textContent = `${list.length} ${list.length === 1 ? "persona" : "personas"}`;
    $("#cards").innerHTML = list.length ? list.map(card).join("") : '<p class="empty">Ninguna persona cumple estos filtros.</p>';
  }

  $("#orgSeg").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    state.org = b.dataset.org;
    $("#orgSeg").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    renderCards();
  });
  $("#flagChips").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    const f = b.dataset.flag;
    state.flags.has(f) ? state.flags.delete(f) : state.flags.add(f);
    b.setAttribute("aria-pressed", state.flags.has(f));
    renderCards();
  });
  $("#q").addEventListener("input", (e) => {
    state.q = e.target.value.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    renderCards();
  });

  /* ---------- Red ---------- */
  const byId = Object.fromEntries(P.map((p) => [p.id, p]));
  $("#paths").innerHTML = window.RED.map((r) => {
    const p = byId[r.id];
    const steps = r.pasos.map((s, i) => `<li>${i ? '<span class="arr" aria-hidden="true">→</span>' : ""}<span class="step">${esc(s)}</span></li>`).join("");
    return `<li class="path ${r.tipo}">
      <div class="path-card">
        <div class="path-head">
          <span class="avatar ${avatarCls(p.org)}" aria-hidden="true">${initials(p.nombre)}</span>
          <div><strong>${esc(p.nombre)}</strong><small>${r.tipo === "doc" ? "Vínculo documentado" : "Vínculo alegado por prensa"} · <a href="#p-${p.id}" data-goto="${p.id}">ver ficha</a></small></div>
        </div>
        <ol class="steps">${steps}</ol>
      </div>
    </li>`;
  }).join("");
  $("#paths").addEventListener("click", (e) => {
    const a = e.target.closest("[data-goto]"); if (!a) return;
    e.preventDefault();
    state.org = "all"; state.flags.clear(); state.q = ""; $("#q").value = "";
    document.querySelectorAll("#orgSeg button").forEach((x) => x.setAttribute("aria-pressed", x.dataset.org === "all"));
    document.querySelectorAll("#flagChips button").forEach((x) => x.setAttribute("aria-pressed", "false"));
    renderCards();
    show("personas", false);
    const el = document.getElementById("p-" + a.dataset.goto);
    if (el) { el.querySelector("details").open = true; el.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });

  /* ---------- Sueldos ---------- */
  const max = Math.max(...window.SUELDOS.map((s) => s.valor));
  const tip = $("#tip");
  $("#chart").innerHTML = window.SUELDOS.map((s, i) => `
    <div class="bar-row" tabindex="0" data-i="${i}" aria-label="${esc(s.label)}: ${eur(s.valor)}${s.verificado ? "" : " (estimación)"}, ${esc(s.anio)}">
      <div class="bar-lbl"><span>${esc(s.label)}</span><b class="${s.verificado ? "" : "unv"}">${s.verificado ? "" : "≈"}${eur(s.valor)}</b></div>
      <div class="bar-track"><div class="bar-fill ${s.verificado ? "" : "hatch"}" style="width:${(s.valor / max) * 100}%"></div></div>
    </div>`).join("");

  function showTip(row, x, y) {
    const s = window.SUELDOS[row.dataset.i];
    tip.innerHTML = `<strong>${esc(s.label)}</strong><br>${eur(s.valor)} · ${esc(s.anio)}<br>${esc(s.nota)}${s.verificado ? "" : "<br><em>No verificado</em>"}`;
    tip.hidden = false;
    const w = tip.offsetWidth, h = tip.offsetHeight;
    tip.style.left = Math.max(8, Math.min(x + 12, innerWidth - w - 8)) + "px";
    tip.style.top = Math.max(8, y - h - 12) + "px";
  }
  const chart = $("#chart");
  chart.addEventListener("pointermove", (e) => { const r = e.target.closest(".bar-row"); r ? showTip(r, e.clientX, e.clientY) : (tip.hidden = true); });
  chart.addEventListener("pointerleave", () => (tip.hidden = true));
  chart.addEventListener("focusin", (e) => { const r = e.target.closest(".bar-row"); if (r) { const b = r.getBoundingClientRect(); showTip(r, b.left + 20, b.top); } });
  chart.addEventListener("focusout", () => (tip.hidden = true));
  addEventListener("scroll", () => (tip.hidden = true), { passive: true });

  const PAGO = [
    ["Presidentes de Renfe y Adif", "Mensual + variable anual",
      "El RD 451/2012 fija una retribución básica y un complemento de puesto, que se cobran cada mes, y un complemento variable ligado a objetivos que se liquida una vez al año. Este sueldo es incompatible con cobrar dietas por asistir a consejos. No se publica cuántas pagas son ni qué parte es variable.",
      "https://www.boe.es/eli/es/rd/2012/03/05/451/con"],
    ["Directores generales (alta dirección)", "Mensual + variable",
      "Tienen contrato de alta dirección (RD 1382/1985) con la misma estructura del RD 451/2012. Las convocatorias de Adif fijaban unos 74.104 € de base más 24.026 € de complemento y un variable. Las cifras individuales no se publican.",
      "https://blog.comoserferroviario.es/2025/02/07/oep-adif-2025-estructura-de-direccion-convocatoria.html"],
    ["Ministro de Transportes", "12 mensualidades",
      "Los Presupuestos fijan su sueldo en 12 mensualidades sin pagas extraordinarias, más la antigüedad, con las subidas generales (+2,5 % en 2025 y +1,5 % en 2026). Como diputado puede cobrar además indemnizaciones exentas de IRPF.",
      "https://www.iberley.es/legislacion/articulo-21-2023-pge"],
    ["Consejeros de filiales de Renfe", "Por reunión asistida",
      "Cobran una dieta por cada sesión, de unos 1.000 a 1.090 €, con un máximo de 11 sesiones al año: hasta 11.994 € en las filiales del grupo 1 (Viajeros, Mercancías, Mantenimiento). Según su web, los consejeros de Adif no cobran dietas (no verificado).",
      "https://www.vozpopuli.com/economia/transporte/los-consejeros-de-renfe-cobran-1000-euros-por-reunion-con-las-incidencias-disparadas.html"]
  ];
  $("#payGrid").innerHTML = PAGO.map(([t, w, d, u]) => `
    <article class="pay"><span class="when">${esc(w)}</span><h4>${esc(t)}</h4><p>${esc(d)}</p><a href="${esc(u)}" target="_blank" rel="noopener">Fuente</a></article>`).join("");
  $("#histTbl tbody").innerHTML = window.HISTORICO.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("");

  /* ---------- Casos ---------- */
  const ESTADO = { condenado: ["b-bad", "Condenado"], investigado: ["b-warn", "Investigado"], prensa: ["", "Solo prensa"] };
  let caseFilter = "all";
  function renderCases() {
    const list = window.CASOS.filter((c) => caseFilter === "all" || c.estado === caseFilter);
    $("#cases").innerHTML = list.map((c) => `
      <li class="case ${c.estado}">
        <div class="case-head"><div><strong>${esc(c.nombre)}</strong><small>${esc(c.rol)}</small></div>${badge([ESTADO[c.estado][0], ICON.gavel, ESTADO[c.estado][1]])}</div>
        <p>${esc(c.txt)}</p>
        <a href="${esc(c.url)}" target="_blank" rel="noopener">Fuente</a>
      </li>`).join("");
  }
  $("#caseChips").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    caseFilter = b.dataset.estado;
    $("#caseChips").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    renderCases();
  });

  /* ---------- Tabs ---------- */
  const TABS = ["personas", "red", "sueldos", "casos", "metodo"];
  function show(tab, scroll = true) {
    if (!TABS.includes(tab)) tab = "personas";
    TABS.forEach((t) => {
      $("#panel-" + t).hidden = t !== tab;
      const a = document.querySelector(`[data-tab="${t}"]`);
      a.setAttribute("aria-selected", t === tab);
    });
    if (location.hash !== "#" + tab) history.replaceState(null, "", "#" + tab);
    if (scroll) {
      const top = $("#main").getBoundingClientRect().top + scrollY - (innerWidth >= 720 ? 60 : 8);
      if (scrollY > top) scrollTo(0, top);
    }
  }
  document.querySelector(".tabs").addEventListener("click", (e) => {
    const a = e.target.closest("[data-tab]"); if (!a) return;
    e.preventDefault(); show(a.dataset.tab);
  });
  addEventListener("hashchange", () => show(location.hash.slice(1)));

  renderCards();
  renderCases();
  show(location.hash.slice(1), false);
})();
