/* Interactions for the portfolio. Plain JS; GSAP + ScrollTrigger and Lenis are optional enhancements. */
(function () {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FINE = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const G = window.gsap;
  const ST = G && window.ScrollTrigger;
  if (ST) G.registerPlugin(ST);
  const root = document.documentElement;
  try { if (window.self !== window.top) root.classList.add("in-frame"); } catch (e) { root.classList.add("in-frame"); }

  const S = window.SITE, PROJECTS = window.PROJECTS || [];
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured).sort((a, b) => b.date.localeCompare(a.date));
  const ORDER = featured.concat(rest);
  const byId = Object.fromEntries(PROJECTS.map((p) => [p.id, p]));
  const ARROW = '<svg class="i arr" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';
  const AR = window.AR || { TEXT: {}, UI: {}, projects: {} };
  let LANG = "en";
  try { LANG = localStorage.getItem("im-lang") || LANG; } catch (e) {}
  if (location.hash === "#ar") LANG = "ar"; else if (location.hash === "#en") LANG = "en";
  if (!window.AR) LANG = "en";
  const isAr = () => LANG === "ar";
  const norm = (s) => s.replace(/\s+/g, " ").trim();
  const tr = (en) => (isAr() && AR.TEXT[norm(en)]) || en;
  const ui = (k, en) => (isAr() && AR.UI[k]) || en;
  const loc = (p) => (isAr() && AR.projects[p.id] ? Object.assign({}, p, AR.projects[p.id]) : p);
  const count = (n) => !isAr() ? `${n} ${n > 1 ? "products" : "product"}` : n === 1 ? "منتج واحد" : n === 2 ? "منتجان" : n <= 10 ? `${n} منتجات` : `${n} منتجاً`;
  const EXT = '<svg class="i" viewBox="0 0 16 16"><path d="M5 11L11 5M6 5h5v5"/></svg>';
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ------------------------------------------------------------------ render content */
  function renderWork() {
    $("#workGrid").innerHTML = featured.map(loc).map((p, i) => `
      <a class="card${i % 4 === 1 || i % 4 === 2 ? " n" : ""}" href="#${p.id}" data-ruler aria-label="${esc(p.name)}: open case study">
        <div class="cover" style="${coverStyle(p)}">
          <div class="cover-art">${coverHTML(p)}</div>
          <span class="spot"></span>
          <span class="peek">${ui("open", "Open case study")} ${ARROW}</span>
        </div>
        <div class="meta">
          <h3>${esc(p.name)}</h3><span class="yr mono">${esc(p.year)}</span>
          <p>${esc(p.summary)}</p>
          <div class="tags"><span class="tag k">${esc(p.sector)}</span><span class="tag">${esc(p.company)}</span><span class="tag">${count(p.platforms.length)}</span></div>
        </div>
      </a>`).join("");

    $("#liveList").innerHTML = (window.LIVE || []).map((l) => `
      <span class="lp"><span><b>${esc(l.name)}</b> <small>${esc(l.by)}</small></span>
        ${l.links.map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${esc(l.name)} ${t}">${t} ↗</a>`).join("")}</span>`).join("");

    const all = PROJECTS.slice().sort((a, b) => b.date.localeCompare(a.date)).map(loc);
    $("#tblBody").innerHTML = all.map((p) => `
      <button type="button" class="tr" data-id="${p.id}" data-ruler>
        <span class="y">${p.date.slice(0, 4)}</span>
        <span class="p">${esc(p.name)}${p.links && p.links.length ? `<span class="lv">${ui("live", "Live")}</span>` : ""}</span>
        <span class="d">${esc(p.short)}</span>
        <span class="s">${esc(p.sector)}</span>
        <span class="n">${count(p.platforms.length)}</span>
        <span class="go"><svg class="i arr" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg></span>
      </button>`).join("");

    const XP = (window.EXPERIENCE || []).map((x, i) => (isAr() && AR.EXPERIENCE ? Object.assign({}, x, AR.EXPERIENCE[i], { company: AR.EXPERIENCE_CO[i] }) : x));
    const openIdx = $$(".xp-i").map((e, i) => (e.classList.contains("open") ? i : -1)).filter((i) => i >= 0);
    $("#xp").innerHTML = XP.map((x, i) => `
      <div class="xp-i${(openIdx.length ? openIdx.includes(i) : i === 0) ? " open" : ""}">
        <button type="button" class="xp-h" aria-expanded="${openIdx.length ? openIdx.includes(i) : i === 0}">
          <span><b>${esc(x.company)}</b><small>${esc(x.title)}</small></span>
          <span class="mono">${esc(x.when)}</span><span class="xp-x" aria-hidden="true"></span>
        </button>
        <div class="xp-b"><div><p>${esc(x.intro)}</p>${x.points.length ? `<ul>${x.points.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : "<p></p>"}</div></div>
      </div>`).join("");
    $("#edu").innerHTML = ((isAr() && AR.EDUCATION) || window.EDUCATION || []).map(([a, b, c]) => `<li><b>${esc(a)}</b><span>${esc(b)}</span><em>${esc(c)}</em></li>`).join("");

    const sectorsEn = ["Travel", "Fintech", "Logistics", "E-commerce", "Healthcare", "Legal", "Education", "Food & beverage", "Automotive", "Hospitality", "Recruitment", "Mobility", "Jewelry", "Construction", "Gaming"];
    const sectors = isAr() && AR.sectors ? AR.sectors : sectorsEn;
    const names = ["Bookto", "Wyanaa", "Alkhamees", "Tasahl", "Ratio", "iGold", "Highway", "Al Braheem", "Adelco", "Madroos", "Mohmmecom", "Heavy Hub", "Amen", "Jenan", "Rafaa", "Fork", "Tabibak", "Al Mohandes"];
    const setA = sectors.map((t, i) => `<span class="it${i % 2 ? " o" : ""}">${esc(t)}<span class="sep">❖</span></span>`).join("");
    const setB = names.map((t) => `<span class="it">${esc(t)}<span class="sep">/</span></span>`).join("");
    $("#mqA").innerHTML = `<div class="mq-set">${setA}</div><div class="mq-set" aria-hidden="true">${setA}</div>`;
    $("#mqB").innerHTML = `<div class="mq-set">${setB}</div><div class="mq-set" aria-hidden="true">${setB}</div>`;
  }

  /* ------------------------------------------------------------------ clock */
  function clock() {
    const els = $$("[data-clock]"), tz = $$("[data-tz]");
    let off = "GMT+2";
    try {
      const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Africa/Cairo", timeZoneName: "shortOffset" }).formatToParts(new Date());
      off = (parts.find((p) => p.type === "timeZoneName") || {}).value || off;
    } catch (e) {}
    tz.forEach((e) => (e.textContent = off));
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Cairo", hour: "2-digit", minute: "2-digit" });
    const tick = () => { const t = fmt.format(new Date()); els.forEach((e) => (e.textContent = t)); };
    tick(); setInterval(tick, 15000);
  }

  /* ------------------------------------------------------------------ WebGL flow field (after React Bits Pro's ShaderFlow) */
  const VS = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
  const FS = `precision highp float;
uniform vec2 uR;uniform float uT;uniform vec2 uV;uniform float uS;uniform float uB;uniform int uIt;
uniform vec3 uLow;uniform vec3 uHigh;uniform vec3 uAcc;uniform vec3 uBg;uniform vec4 uFade;uniform vec2 uM;
float h(vec2 p){return sin(p.x+sin(p.y+uT*uV.x))*sin(p.y*p.x*.1+uT*uV.y);}
void main(){
  vec2 f=gl_FragCoord.xy/uR;vec2 p=f-.5;p.x*=uR.x/uR.y;p*=uS;p+=uM*.35;
  float ms=uT*.25;vec2 d=vec2(sin(ms),cos(ms))*.1;
  vec2 e=vec2(.05,0.);vec2 r=vec2(0.);
  for(int i=0;i<24;i++){if(i>=uIt)break;float a=h(p);float b=h(p+e.xy);float c=h(p+e.yx);vec2 q=vec2(b-a,c-a)*20.;p+=vec2(-q.y,q.x)*.5+q*.005+d;r=q;}
  float t=clamp(length(r)*.5,0.,1.);
  vec3 col=mix(uLow,uHigh,smoothstep(0.,1.,t));
  col=mix(col,uAcc,smoothstep(.55,1.,t)*.6);
  col*=uB;
  vec2 n=vec2(f.x,1.-f.y);float as=uR.x/uR.y;
  float dx=((n.x-uFade.x)*as)/uFade.z;float dy=(n.y-uFade.y)/uFade.w;
  float fa=clamp(1.-sqrt(dx*dx+dy*dy),0.,1.);fa=fa*fa*(3.-2.*fa);
  gl_FragColor=vec4(mix(uBg,col,fa),1.);
}`;
  function Flow(canvas, o) {
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "high-performance" });
    if (!gl) return null;
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null; };
    const v = sh(gl.VERTEX_SHADER, VS), f = sh(gl.FRAGMENT_SHADER, FS);
    if (!v || !f) return null;
    const pr = gl.createProgram(); gl.attachShader(pr, v); gl.attachShader(pr, f); gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return null;
    gl.useProgram(pr);
    const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const U = {}; ["uR", "uT", "uV", "uS", "uB", "uIt", "uLow", "uHigh", "uAcc", "uBg", "uFade", "uM"].forEach((k) => (U[k] = gl.getUniformLocation(pr, k)));
    gl.uniform2f(U.uV, o.speed[0], o.speed[1]); gl.uniform1f(U.uS, o.scale); gl.uniform1f(U.uB, o.bright); gl.uniform1i(U.uIt, o.iter);
    gl.uniform3fv(U.uLow, o.low); gl.uniform3fv(U.uHigh, o.high); gl.uniform3fv(U.uAcc, o.acc); gl.uniform3fv(U.uBg, o.bg); gl.uniform4fv(U.uFade, o.fade);
    let w = 0, h = 0, on = true, raf = 0, mx = 0, my = 0, tx = 0, ty = 0;
    const t0 = performance.now() - (o.offset || 0) * 1000;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, o.dpr || 1);
      w = Math.max(1, Math.round(canvas.clientWidth * dpr)); h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      gl.viewport(0, 0, w, h); gl.uniform2f(U.uR, w, h);
    };
    const draw = (now) => {
      mx = lerp(mx, tx, 0.04); my = lerp(my, ty, 0.04);
      gl.uniform1f(U.uT, (now - t0) / 1000); gl.uniform2f(U.uM, mx, my);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const loop = (now) => { raf = 0; if (on && !document.hidden) draw(now); if (on) raf = requestAnimationFrame(loop); };
    resize();
    new ResizeObserver(() => { resize(); if (RM) draw(performance.now()); }).observe(canvas);
    if (RM) { draw(t0 + 8000); }
    else {
      new IntersectionObserver((es) => { es.forEach((e) => { on = e.isIntersecting; if (on && !raf) raf = requestAnimationFrame(loop); }); }, { rootMargin: "120px" }).observe(canvas);
      if (o.pointer) addEventListener("pointermove", (e) => { tx = (e.clientX / innerWidth - 0.5); ty = -(e.clientY / innerHeight - 0.5); }, { passive: true });
    }
    canvas.classList.add("on");
    return { draw };
  }
  function shaders() {
    const bg = [8 / 255, 9 / 255, 13 / 255];
    const hero = $("#flow");
    if (hero) Flow(hero, { speed: [0.1, 0.2], scale: 5.2, bright: 1, iter: 14, low: [0.05, 0.06, 0.09], high: [0.5, 0.55, 0.68], acc: [0.2, 0.48, 1.0], bg, fade: [0.62, 0.4, 1.15, 0.78], dpr: 1, pointer: FINE });
    const ct = $("#flow2");
    if (ct) Flow(ct, { speed: [0.12, 0.18], scale: 3.2, bright: 1, iter: 12, low: [0.05, 0.06, 0.09], high: [0.42, 0.48, 0.64], acc: [0.2, 0.48, 1.0], bg: [13 / 255, 15 / 255, 21 / 255], fade: [0.8, 0.3, 1.25, 1.15], dpr: 1, offset: 20 });
  }

  /* ------------------------------------------------------------------ hero name: variable type that reacts to the cursor */
  function heroName() {
    const vis = $(".name-v"), sel = $("#sel"), wrap = $(".sel-wrap"), dim = $("#dim"), mc = $("#mc");
    if (!vis) return;
    $$(".w", vis).forEach((w) => { w.innerHTML = Array.from(w.textContent).map((ch) => `<span class="c">${ch}</span>`).join(""); });
    const chars = $$(".c", vis);
    const MIN = [84, 380], MAX = [125, 900];
    const state = chars.map(() => ({ wd: 108, wg: 700 }));
    const apply = (i, wd, wg) => { const c = chars[i].style; c.setProperty("--wd", wd.toFixed(1)); c.setProperty("--wg", wg.toFixed(0)); };

    function fit() {
      chars.forEach((_, i) => apply(i, MAX[0], MAX[1]));
      vis.parentElement.style.setProperty("--name-fs", "100px");
      const stacked = innerWidth < 900;
      const span = (list) => list[list.length - 1].getBoundingClientRect().right - list[0].getBoundingClientRect().left;
      const widest = stacked ? Math.max(...$$(".w", vis).map((w) => span($$(".c", w)))) : span(chars);
      const avail = wrap.clientWidth - (stacked ? 34 : 40);
      const fs = clamp((avail / widest) * 100, 40, 300);
      vis.parentElement.style.setProperty("--name-fs", fs.toFixed(2) + "px");
      state.forEach((s, i) => apply(i, s.wd, s.wg));
    }
    fit();
    addEventListener("resize", fit);
    if (document.fonts) document.fonts.ready.then(fit);

    let px = -9999, py = -9999, active = 0, target = 0, last = 0, heroOn = true, frame = 0;
    const hero = $(".hero");
    if (FINE) {
      hero.addEventListener("pointermove", (e) => { px = e.clientX; py = e.clientY; target = 1; });
      hero.addEventListener("pointerleave", () => { target = 0; });
    }
    new IntersectionObserver((es) => (heroOn = es[0].isIntersecting)).observe(hero);

    /* multiplayer cursor that "owns" the selection */
    let cx = null, cy = null;
    const updDim = () => { const r = $("#name").getBoundingClientRect(); dim.textContent = `${Math.round(r.width)} × ${Math.round(r.height)}`; };

    if (RM) {
      chars.forEach((_, i) => apply(i, 110, 720)); fit(); updDim();
      const r = sel.getBoundingClientRect(); mc.style.transform = `translate(${r.width + 10}px, ${r.height + 6}px)`;
      return;
    }
    const t0 = performance.now(), IDLE0 = FINE ? 0.5 : 0.74;
    function loop(now) {
      requestAnimationFrame(loop);
      if (!heroOn || document.hidden) return;
      const t = (now - t0) / 1000;
      active = lerp(active, target, 0.06);
      const fs = parseFloat(vis.parentElement.style.getPropertyValue("--name-fs")) || 120;
      const R = fs * 1.7;
      chars.forEach((c, i) => {
        let infl;
        const idle = IDLE0 + (1 - IDLE0) * ((Math.sin(t * 1.25 - i * 0.62) + 1) / 2);
        if (active > 0.01) {
          const r = c.getBoundingClientRect();
          const d = Math.hypot(px - (r.left + r.width / 2), py - (r.top + r.height / 2));
          const prox = 1 - clamp(d / R, 0, 1);
          infl = lerp(idle, 0.25 + 0.75 * prox * prox * (3 - 2 * prox), active);
        } else infl = idle;
        const s = state[i];
        s.wd = lerp(s.wd, MIN[0] + (MAX[0] - MIN[0]) * infl, 0.14);
        s.wg = lerp(s.wg, MIN[1] + (MAX[1] - MIN[1]) * infl, 0.14);
        apply(i, s.wd, s.wg);
      });
      if (++frame % 3 === 0) updDim();
      // cursor drifts around the bottom-right handle
      const sr = sel.getBoundingClientRect();
      const tx = sr.width + 8 + Math.sin(t * 0.9) * 10, ty = sr.height + 4 + Math.cos(t * 1.3) * 7;
      if (cx === null) { cx = sr.width * 0.55; cy = sr.height + 170; }
      const k = t < 1.2 ? 0 : 0.045;
      cx = lerp(cx, tx, k); cy = lerp(cy, ty, k);
      mc.style.transform = `translate(${cx.toFixed(1)}px, ${cy.toFixed(1)}px)`;
    }
    requestAnimationFrame(loop);
  }

  /* ------------------------------------------------------------------ rotating words */
  function rotator() {
    if (RM) return;
    let i = 0;
    setInterval(() => {
      const el = $("#rot");
      if (document.hidden || !el) return;
      const words = rotWords();
      i = (i + 1) % words.length;
      const old = el.firstElementChild, nu = document.createElement("span");
      old.classList.add("out"); nu.textContent = words[i]; el.appendChild(nu);
      const o = { duration: 700, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" };
      old.animate([{ transform: "translateY(0)", opacity: 1 }, { transform: "translateY(-110%)", opacity: 0 }], o).onfinish = () => old.remove();
      nu.animate([{ transform: "translateY(110%)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }], o);
    }, 2600);
  }

  /* ------------------------------------------------------------------ count up */
  function counters() {
    const els = $$("[data-count]");
    if (RM) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const el = e.target, n = +el.dataset.count, t0 = performance.now(), d = 1600;
      const step = (now) => { const k = clamp((now - t0) / d, 0, 1); el.textContent = Math.round(n * (1 - Math.pow(1 - k, 4))); if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }), { threshold: 0.4 });
    els.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------ smooth scroll */
  let lenis = null;
  function smooth() {
    if (RM || !window.Lenis) return;
    lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true });
    if (ST) { lenis.on("scroll", ST.update); G.ticker.add((t) => lenis.raf(t * 1000)); G.ticker.lagSmoothing(0); }
    else { const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
  }
  function scrollToEl(el) {
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: el.id === "top" ? -200 : -24, duration: 1.4 });
    else window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 24, behavior: RM ? "auto" : "smooth" });
  }
  function anchors() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      if (byId[id]) { e.preventDefault(); openProject(id, a); return; }
      const el = id ? document.getElementById(id) : null;
      if (el) { e.preventDefault(); closeMenu(); scrollToEl(el); }
    });
  }

  /* ------------------------------------------------------------------ reveals */
  function reveals() {
    // split headings into words for a staggered rise
    splitAll();
    const sr = $("#sr");
    if (!ST || RM) { paintSR(1); return; }
    srST = ST.create({ trigger: sr, start: "top 85%", end: "bottom 45%", scrub: true, onUpdate: (self) => paintSR(self.progress) });

    $$(".split").forEach((h) => {
      G.fromTo($$(".wd", h), { yPercent: 35, opacity: 0.2 }, { yPercent: 0, opacity: 1, duration: 1.1, ease: "expo.out", stagger: 0.05, scrollTrigger: { trigger: h, start: "top 88%", once: true } });
    });
    const items = $$(".sh .eyebrow, .sh-note, .card, .live, .bx, .svc, .xp-i, .edu li, .ct, .about-l > p, .skills, .tbl .tr, .manifest .eyebrow");
    G.set(items, { y: 44, opacity: 0.2 });
    ST.batch(items, { start: "top 92%", once: true, onEnter: (b) => G.to(b, { y: 0, opacity: 1, duration: 1.1, ease: "expo.out", stagger: 0.07, overwrite: true }) });

    // hero entrance
    const tl = G.timeline({ defaults: { ease: "expo.out" } });
    tl.from(".hero-meta > *", { y: 16, opacity: 0, duration: 1, stagger: 0.08 }, 0.1)
      .from(".name .c", { yPercent: 60, opacity: 0, duration: 1.2, stagger: 0.035 }, 0.15)
      .from(".sel-box", { scale: 0.96, opacity: 0, duration: 0.9 }, 0.55)
      .from(".hd", { scale: 0, duration: 0.5, stagger: 0.05, ease: "back.out(3)" }, 0.8)
      .from(".sel-lbl, .sel-dim", { opacity: 0, y: 6, duration: 0.6 }, 0.9)
      .from(".hero-foot > *, .stats", { y: 24, opacity: 0, duration: 1, stagger: 0.1 }, 0.5);
  }

  /* ------------------------------------------------------------------ marquee driven by scroll velocity */
  function marquee() {
    const rows = [[$("#mqA"), 1, 0.045], [$("#mqB"), -1, 0.06]];
    if (RM) return;
    let vel = 0, lastY = scrollY, on = true;
    new IntersectionObserver((es) => (on = es[0].isIntersecting)).observe($(".mq"));
    const xs = [0, 0];
    let last = performance.now();
    function loop(now) {
      requestAnimationFrame(loop);
      const dt = Math.min(64, now - last); last = now;
      const y = scrollY; vel = lerp(vel, (y - lastY) / Math.max(dt, 1), 0.1); lastY = y;
      if (!on) return;
      rows.forEach(([el, dir, base], k) => {
        const half = el.scrollWidth / 2;
        xs[k] -= dir * (base + Math.min(Math.abs(vel) * 0.9, 2.4)) * dt * (vel < -0.02 ? -1 : 1);
        if (xs[k] <= -half) xs[k] += half; if (xs[k] > 0) xs[k] -= half;
        el.style.transform = `translate3d(${xs[k].toFixed(2)}px,0,0)`;
      });
    }
    requestAnimationFrame(loop);
  }

  /* ------------------------------------------------------------------ cards: tilt, spotlight, cursor label */
  function bindCards() {
    if (!FINE) return;
    $$(".card").forEach((card) => {
      const cv = $(".cover", card);
      card.addEventListener("pointermove", (e) => {
        const r = cv.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
        cv.style.setProperty("--mx", x + "px"); cv.style.setProperty("--my", y + "px");
        cv.style.setProperty("--px", x + "px"); cv.style.setProperty("--py", y + "px");
        if (!RM) cv.style.transform = `perspective(1400px) rotateX(${((y / r.height - 0.5) * -3.2).toFixed(2)}deg) rotateY(${((x / r.width - 0.5) * 4).toFixed(2)}deg) translateZ(0)`;
      });
      card.addEventListener("pointerleave", () => { cv.style.transform = ""; });
      cv.style.transition = "transform .6s cubic-bezier(.22,1,.36,1)";
    });
  }
  function cards() {
    bindCards();
    if (!FINE) return;
    const bento = $("#bento");
    bento.addEventListener("pointermove", (e) => {
      $$(".bx", bento).forEach((b) => { const r = b.getBoundingClientRect(); b.style.setProperty("--mx", e.clientX - r.left + "px"); b.style.setProperty("--my", e.clientY - r.top + "px"); });
    });
    bento.addEventListener("pointerleave", () => $$(".bx", bento).forEach((b) => { b.style.setProperty("--mx", "-999px"); b.style.setProperty("--my", "-999px"); }));
    // magnetic buttons
    if (!RM) $$(".mag").forEach((b) => {
      b.addEventListener("pointermove", (e) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1)}px, ${((e.clientY - r.top - r.height / 2) * 0.32).toFixed(1)}px)`; });
      b.addEventListener("pointerleave", () => (b.style.transform = ""));
    });
  }

  /* ------------------------------------------------------------------ rulers in the frame */
  function rulers() {
    const frame = $(".frame"), rnum = $("#rnum"), hx = $("#rhx"), hy = $("#rhy"), thumb = $("#rscroll");
    if (!frame || getComputedStyle(frame).display === "none") return;
    const nums = () => { let h = ""; for (let x = 0; x < innerWidth; x += 100) h += `<span style="left:${x}px">${x}</span>`; rnum.innerHTML = h; };
    nums(); addEventListener("resize", nums);
    let cur = null;
    const place = () => {
      if (cur) {
        const r = cur.getBoundingClientRect();
        hx.style.left = r.left + "px"; hx.style.width = r.width + "px";
        const top = clamp(r.top, 0, innerHeight), bot = clamp(r.bottom, 0, innerHeight);
        hy.style.top = top + "px"; hy.style.height = Math.max(0, bot - top) + "px";
      }
      const docH = document.documentElement.scrollHeight, vh = innerHeight, track = vh - 16;
      const th = Math.max(36, (vh / docH) * track);
      thumb.style.height = th + "px";
      thumb.style.transform = `translateY(${((scrollY / Math.max(1, docH - vh)) * (track - th)).toFixed(1)}px)`;
    };
    if (FINE) {
      document.addEventListener("pointerover", (e) => { const t = e.target.closest("[data-ruler], .btn"); if (t !== cur) { cur = t; frame.classList.toggle("hi", !!t); place(); } });
    }
    addEventListener("scroll", () => requestAnimationFrame(place), { passive: true });
    place();
  }

  /* ------------------------------------------------------------------ nav pill + scramble + mobile menu */
  function nav() {
    const pill = $("#pill"), ind = $("#pillInd"), links = $$("a", pill);
    const ids = links.map((a) => a.getAttribute("href").slice(1));
    let active = null;
    const moveTo = (a) => { if (!a) { ind.style.opacity = 0; return; } ind.style.opacity = 1; ind.style.width = a.offsetWidth + "px"; ind.style.transform = `translateX(${a.offsetLeft}px)`; };
    const update = () => {
      let cur = null;
      ids.forEach((id, i) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < innerHeight * 0.45) cur = links[i]; });
      const contact = $("#contact"); if (contact && contact.getBoundingClientRect().top < innerHeight * 0.45) cur = null;
      if (cur !== active) { links.forEach((l) => l.classList.toggle("on", l === cur)); active = cur; moveTo(cur); }
    };
    const navEl = $("#nav");
    addEventListener("scroll", () => requestAnimationFrame(() => { update(); navEl.classList.toggle("scrolled", scrollY > 240); }), { passive: true });
    update();
    links.forEach((a) => a.addEventListener("mouseenter", () => moveTo(a)));
    navRemeasure = () => { active = null; update(); };
    pill.addEventListener("mouseleave", () => moveTo(active));

    const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=/<>0123456789";
    $$("[data-scramble]").forEach((a) => {
      const txt = a.textContent; let raf = 0;
      a.addEventListener("mouseenter", () => {
        if (RM) return;
        cancelAnimationFrame(raf); const t0 = performance.now();
        const step = (now) => {
          const k = (now - t0) / 420, n = Math.floor(k * txt.length);
          a.textContent = txt.split("").map((c, i) => (i < n ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0])).join("");
          if (k < 1) raf = requestAnimationFrame(step); else a.textContent = txt;
        };
        raf = requestAnimationFrame(step);
      });
    });

    const btn = $("#menuBtn"), menu = $("#menu");
    btn.addEventListener("click", () => (menu.hidden ? openMenu() : closeMenu()));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !menu.hidden) closeMenu(); });
  }
  let navRemeasure = null;
  function openMenu() {
    const btn = $("#menuBtn"), menu = $("#menu");
    menu.hidden = false; btn.setAttribute("aria-expanded", "true"); if (lenis) lenis.stop();
    if (!RM) $$(".menu-links a", menu).forEach((a, i) => a.animate([{ transform: "translateY(40%)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 700, delay: 60 * i, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" }));
  }
  function closeMenu() {
    const btn = $("#menuBtn"), menu = $("#menu");
    if (!menu || menu.hidden) return;
    menu.hidden = true; btn.setAttribute("aria-expanded", "false"); if (lenis && !drawerOpen) lenis.start();
  }

  /* ------------------------------------------------------------------ journey */
  function journeyArt() {
    const svg = (inner) => `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${inner}</svg>`;
    const art = {
      pixel() {
        const map = ["..........", ".......SS.", ".......SS.", "...M......", "..MMM..M..", ".MMMMMMMMM", "MMMMMMMMMM"];
        let s = "";
        map.forEach((row, y) => row.split("").forEach((c, x) => {
          const cls = c === "M" ? "ja-hi" : c === "S" ? "ja-sun" : "ja-f";
          s += `<rect class="${cls}" x="${52 + x * 30}" y="${40 + y * 30}" width="26" height="26" rx="2"/>`;
        }));
        const sx = 52 + 3 * 30, sy = 40 + 3 * 30;
        s += `<rect class="ja-sel" x="${sx - 3}" y="${sy - 3}" width="32" height="32"/>`;
        [[sx - 3, sy - 3], [sx + 29, sy - 3], [sx - 3, sy + 29], [sx + 29, sy + 29]].forEach(([x, y]) => (s += `<rect class="ja-hd" x="${x - 3}" y="${y - 3}" width="6" height="6"/>`));
        s += `<rect class="ja-acc" x="${sx - 10}" y="${sy - 26}" width="46" height="15" rx="3"/><text x="${sx + 13}" y="${sy - 15.5}" text-anchor="middle" style="fill:#fff;font:500 8.5px var(--f-mono)">26 × 26</text>`;
        s += `<text class="ja-t" x="52" y="272">Banners · posters · first UI in Adobe XD</text>`;
        return svg(s);
      },
      screen() {
        let s = `<rect class="ja-f" x="150" y="26" width="100" height="248" rx="16"/>
          <rect class="ja-hi" x="162" y="52" width="76" height="58" rx="5" style="opacity:.55"/>
          <rect class="ja-hi" x="162" y="124" width="56" height="8" rx="2"/>
          <rect class="ja-f" x="162" y="140" width="76" height="5" rx="2"/><rect class="ja-f" x="162" y="151" width="62" height="5" rx="2"/>
          <rect class="ja-f" x="162" y="172" width="76" height="34" rx="5"/>
          <rect class="ja-acc" x="162" y="240" width="76" height="20" rx="6"/>
          <line class="ja-red" x1="150" y1="81" x2="162" y2="81"/><text class="ja-redt" x="156" y="76" text-anchor="middle">12</text>
          <line class="ja-red" x1="200" y1="110" x2="200" y2="124"/><text class="ja-redt" x="210" y="120">14</text>
          <line class="ja-red" x1="162" y1="215" x2="238" y2="215"/><text class="ja-redt" x="200" y="228" text-anchor="middle">76</text>`;
        s += `<g transform="translate(262 96)"><rect class="ja-f" width="118" height="26" rx="6"/><text class="ja-t" x="10" y="16.5" style="fill:var(--ember)">✕ Hover on mobile</text></g>
          <g transform="translate(22 196)"><rect class="ja-f" width="118" height="26" rx="6"/><text class="ja-t" x="10" y="16.5" style="fill:var(--ember)">✕ No components</text></g>
          <g transform="translate(262 196)"><rect class="ja-f" width="118" height="26" rx="6"/><text class="ja-t" x="10" y="16.5" style="fill:var(--ember)">✕ No research</text></g>`;
        return svg(s);
      },
      flow() {
        const st = [["#ffd666", "Interviews", -3], ["#ff9db0", "Survey", 2], ["#8fd3ff", "Competitors", -2], ["#b7f0a3", "Info. arch.", 3]];
        let s = st.map(([c, t, r], i) => `<g transform="translate(${62 + i * 72} 26) rotate(${r} 30 22)"><rect class="ja-sticky" width="60" height="44" rx="3" style="fill:${c}"/><text x="7" y="16" style="fill:#2a2208;font:600 8px var(--f-body)">${t}</text><rect x="7" y="24" width="40" height="3" rx="1" style="fill:rgba(0,0,0,.18)"/><rect x="7" y="31" width="30" height="3" rx="1" style="fill:rgba(0,0,0,.18)"/></g>`).join("");
        s += `<path class="ja" d="M200 80 V100" style="stroke-dasharray:3 4"/>`;
        [["Browse", 34], ["Cart", 162], ["Checkout", 290]].forEach(([t, x], i) => {
          s += `<rect class="ja-f" x="${x}" y="108" width="76" height="132" rx="10"/>
            <rect class="ja-hi" x="${x + 9}" y="122" width="40" height="6" rx="2"/>
            <rect class="ja-f" x="${x + 9}" y="136" width="58" height="${i === 1 ? 20 : 38}" rx="4"/>
            ${i === 1 ? `<rect class="ja-f" x="${x + 9}" y="162" width="58" height="20" rx="4"/>` : ""}
            <rect class="${i === 2 ? "ja-acc" : "ja-f"}" x="${x + 9}" y="214" width="58" height="14" rx="4"/>
            <text class="ja-t" x="${x + 38}" y="262" text-anchor="middle">${t}</text>`;
        });
        s += `<path class="ja-flow" d="M112 174 C 130 174, 140 174, 160 174"/><path class="ja-flow" d="M240 174 C 258 174, 268 174, 288 174"/>`;
        return svg(s);
      },
      system() {
        const nodes = ["Customer app", "Tow driver", "Reception", "Technician", "Insurance", "HR", "Accounting", "Admin"];
        let s = "";
        nodes.forEach((n, i) => {
          const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2, x = 200 + Math.cos(a) * 140, y = 150 + Math.sin(a) * 104;
          s += `<path class="ja-flow" d="M200 150 L${x.toFixed(1)} ${y.toFixed(1)}" style="animation-delay:${-i * 0.2}s"/>`;
        });
        nodes.forEach((n, i) => {
          const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2, x = 200 + Math.cos(a) * 140, y = 150 + Math.sin(a) * 104;
          s += `<rect class="ja-f" x="${(x - 40).toFixed(1)}" y="${(y - 12).toFixed(1)}" width="80" height="24" rx="7" style="fill:var(--ink-3)"/><text class="ja-tb" x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="middle" style="font-size:9.5px">${n}</text>`;
        });
        s += `<circle class="ja-acc" cx="200" cy="150" r="30"/><text x="200" y="147" text-anchor="middle" style="fill:#fff;font:600 10px var(--f-body)">One</text><text x="200" y="160" text-anchor="middle" style="fill:#fff;font:600 10px var(--f-body)">backbone</text>`;
        return svg(s);
      },
      loop() {
        const P = "M200 54 A96 96 0 1 1 199.9 54";
        let s = `<circle class="ja" cx="200" cy="150" r="96" style="stroke-dasharray:2 5"/>`;
        [["Frame", 200, 54], ["Design", 296, 150], ["Ship", 200, 246], ["Measure", 104, 150]].forEach(([t, x, y]) => {
          s += `<rect x="${x - 36}" y="${y - 13}" width="72" height="26" rx="13" style="fill:var(--ink-3);stroke:var(--line-2)"/><text class="ja-tb" x="${x}" y="${y + 4}" text-anchor="middle" style="font-size:10px">${t}</text>`;
        });
        s += `<polyline points="160,172 176,164 190,168 204,150 220,154 240,128" style="fill:none;stroke:var(--select);stroke-width:2;stroke-linecap:round;stroke-linejoin:round"/>
          <circle cx="240" cy="128" r="3.5" class="ja-acc"/>
          <text class="ja-t" x="200" y="196" text-anchor="middle">Live product</text>`;
        if (!RM) s += `<circle r="5" style="fill:var(--ember)"><animateMotion dur="7s" repeatCount="indefinite" path="${P}"/></circle>`;
        return svg(s);
      }
    };
    $$("[data-art]").forEach((el) => (el.innerHTML = art[el.dataset.art]()));
  }
  function journey() {
    journeyArt();
    const zoom = $("#zoomVal"), chs = $$(".ch[data-zoom]");
    const setZoom = (z) => { if (zoom.textContent === z) return; zoom.textContent = z; if (!RM) zoom.animate([{ transform: "scale(1.25)", color: "#86b4ff" }, { transform: "none" }], { duration: 500, easing: "cubic-bezier(.22,1,.36,1)" }); };
    const horizontal = ST && !RM && innerWidth >= 900 && innerHeight >= 560;
    if (horizontal) {
      root.classList.add("j-h");
      const track = $("#jTrack"), view = $("#jView");
      const dist = () => Math.max(0, track.scrollWidth - view.clientWidth);
      G.to(track, {
        x: () => -dist(), ease: "none",
        scrollTrigger: {
          trigger: "#jPin", start: "top top", end: () => "+=" + dist(), pin: true, scrub: 0.7, invalidateOnRefresh: true, anticipatePin: 1,
          onUpdate: (self) => {
            $("#jBar").style.transform = `scaleX(${self.progress.toFixed(4)})`;
            const x = self.progress * dist();
            let cur = chs[0];
            chs.forEach((c) => { if (c.offsetLeft - x < view.clientWidth * 0.5) cur = c; });
            setZoom(cur.dataset.zoom);
            $("#jLbl").textContent = `${chs.indexOf(cur) + 1} / ${chs.length}`;
          }
        }
      });
    } else {
      const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setZoom(e.target.dataset.zoom); }), { rootMargin: "-45% 0px -45% 0px" });
      chs.forEach((c) => io.observe(c));
    }
  }

  /* ------------------------------------------------------------------ bento demos */
  function bento() {
    // RTL demo
    const card = $("#rtlCard"), rtlBtns = $$(".b-rtl .seg-ui button");
    let rtlAuto = !RM, dsAuto = !RM;
    const setDir = (dir) => {
      rtlBtns.forEach((b) => b.classList.toggle("on", b.dataset.dir === dir));
      card.classList.add("swap");
      setTimeout(() => {
        card.dir = dir;
        $$("[data-en]", card).forEach((el) => (el.textContent = dir === "rtl" ? el.dataset.ar : el.dataset.en));
        card.classList.remove("swap");
      }, RM ? 0 : 220);
    };
    rtlBtns.forEach((b) => b.addEventListener("click", () => { rtlAuto = false; setDir(b.dataset.dir); }));
    // design-system modes
    const demo = $("#dsDemo"), dsBtns = $$(".b-ds .seg-ui button");
    const setMode = (m) => { dsBtns.forEach((b) => b.classList.toggle("on", b.dataset.mode === m)); demo.classList.toggle("light", m === "light"); demo.classList.toggle("dark", m === "dark"); };
    dsBtns.forEach((b) => b.addEventListener("click", () => { dsAuto = false; setMode(b.dataset.mode); }));
    // live-ish bars
    const md = $("#mdBars"); const N = 16;
    const vals = () => Array.from({ length: N }, (_, i) => 30 + Math.round(55 * Math.abs(Math.sin(i * 0.9 + Date.now() / 4000)) + Math.random() * 12));
    md.innerHTML = vals().map((v) => `<i style="--h:${v}%"></i>`).join("");
    let on = false;
    new IntersectionObserver((es) => (on = es[0].isIntersecting)).observe($("#bento"));
    if (!RM) {
      let k = 0;
      setInterval(() => {
        if (!on || document.hidden) return;
        k++;
        $$("i", md).forEach((b, i) => b.style.setProperty("--h", vals()[i] + "%"));
        if (k % 2 === 0 && rtlAuto) setDir(card.dir === "rtl" ? "ltr" : "rtl");
        if (k % 2 === 1 && dsAuto) setMode(demo.classList.contains("light") ? "dark" : "light");
      }, 2200);
    }
    // contrast ratio computed from this page's own tokens
    const lum = (hex) => { const n = parseInt(hex.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }).reduce((a, v, i) => a + v * [0.2126, 0.7152, 0.0722][i], 0); };
    const cs = getComputedStyle(root);
    const fg = cs.getPropertyValue("--fg").trim(), bg = cs.getPropertyValue("--ink").trim();
    if (/^#[0-9a-f]{6}$/i.test(fg) && /^#[0-9a-f]{6}$/i.test(bg)) { const a = lum(fg), b = lum(bg); $("#ratio").textContent = ((Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)).toFixed(1) + " : 1"; }
  }

  /* ------------------------------------------------------------------ experience accordion */
  function accordion() {
    $("#xp").addEventListener("click", (e) => {
      const b = e.target.closest(".xp-h"); if (!b) return;
      const it = b.parentElement, open = !it.classList.contains("open");
      it.classList.toggle("open", open); b.setAttribute("aria-expanded", open);
      setTimeout(() => ST && ST.refresh(), 650);
    });
  }

  /* ------------------------------------------------------------------ case-study drawer */
  let drawerOpen = false, opener = null, curId = null;
  const drawer = $("#drawer");
  function sec(title, body, cls = "") { return `<section class="dr-sec ${cls}"><h4>${title}</h4>${body}</section>`; }
  function ul(list) { return `<ul>${list.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`; }
  function renderProject(p) {
    const i = ORDER.indexOf(p), next = loc(ORDER[(i + 1) % ORDER.length]);
    p = loc(p);
    $("#drCount").textContent = `${String(i + 1).padStart(2, "0")} / ${String(ORDER.length).padStart(2, "0")}`;
    $("#drBody").innerHTML = `
      <div class="cover" style="${coverStyle(p)}"><div class="cover-art">${coverHTML(p)}</div></div>
      <h2 class="dr-h" id="drTitle">${esc(p.name)}</h2>
      <p class="dr-sum">${esc(p.summary)}</p>
      <dl class="dr-meta"><div><dt>${ui("year", "Year")}</dt><dd>${esc(p.year)}</dd></div><div><dt>${ui("company", "Company")}</dt><dd>${esc(p.company)}</dd></div><div><dt>${ui("role", "Role")}</dt><dd>${esc(p.role)}</dd></div><div><dt>${ui("sector", "Sector")}</dt><dd>${esc(p.sector)}</dd></div></dl>
      ${sec(`${ui("designed", "What I designed")} · ${count(p.platforms.length)}`, `<div class="dr-plat">${p.platforms.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>`)}
      ${p.context ? sec(ui("context", "Context"), `<p>${esc(p.context)}</p>`) : ""}
      ${p.did && p.did.length ? sec(ui("work", "My work"), ul(p.did)) : ""}
      ${p.gallery && p.gallery.length ? sec(ui("gallery", "Screens"), `<div class="dr-gal">${p.gallery.map((g) => `<img src="${g}" alt="" loading="lazy" onerror="this.remove()">`).join("")}</div>`) : ""}
      ${p.challenges && p.challenges.length ? sec(ui("hard", "The hard parts"), ul(p.challenges), "ch-l") : ""}
      ${p.learned ? sec(ui("learned", "What I took away"), `<p class="dr-learn">${esc(p.learned)}</p>`) : ""}
      ${p.links && p.links.length ? sec(ui("seeLive", "See it live"), `<div class="dr-links">${p.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${esc(l.label)} ${EXT}</a>`).join("")}</div>`) : ""}
      <button type="button" class="dr-next" data-goto="${next.id}"><span><small>${ui("next", "Next project")}</small><b>${esc(next.name)}</b></span>${ARROW}</button>`;
    $("#drBody").scrollTop = 0;
    curId = p.id;
  }
  /* ------------------------------------------------------------------ language */
  const EN_TITLE = document.title;
  const NOW_EN = ["Now", "Designing", "at Techeffic"];
  const ROT_EN = ["travel booking flows", "B2B dashboards", "a multi-product design system", "RTL-first interfaces", "checkout & payments"];
  const rotWords = () => (isAr() && AR.rot) || ROT_EN;
  let textNodes = [], ledeEN = "", srST = null;
  function splitInto(el, cls) {
    if (!el.dataset.en) el.dataset.en = norm(el.textContent);
    const txt = tr(el.dataset.en);
    el.innerHTML = txt.split(" ").map((w) => `<span class="${cls}">${esc(w)}</span>`).join(" ");
  }
  function splitAll() { $$(".split").forEach((h) => splitInto(h, "wd")); splitInto($("#sr"), "srw"); }
  function paintSR(progress) {
    const words = $$(".srw"), p = progress * (words.length + 6);
    words.forEach((w, i) => w.style.setProperty("--o", (0.2 + 0.8 * clamp(p - i, 0, 1)).toFixed(3)));
  }
  function collectText() {
    const skip = "#workGrid,#liveList,#tblBody,#xp,#edu,#mqA,#mqB,#drBody,[data-keep],#rot,[data-clock],[data-tz],[data-count],svg,.frame,.rtl-card,.split,.sr,.lede,.now,.wordmark,#mailAddr,script,style";
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) { if (norm(n.textContent) && AR.TEXT[norm(n.textContent)] && !n.parentElement.closest(skip)) textNodes.push([n, n.textContent]); }
    ledeEN = $(".lede").innerHTML;
  }
  function paintStatic() {
    root.lang = LANG; root.dir = isAr() ? "rtl" : "ltr";
    document.title = isAr() ? AR.title : EN_TITLE;
    textNodes.forEach(([n, en]) => { const k = norm(en), t = tr(k); n.textContent = t === k ? en : (en.match(/^\s*/)[0] + t + en.match(/\s*$/)[0]); });
    $(".lede").innerHTML = isAr() ? AR.lede : ledeEN;
    const nw = isAr() ? AR.now : NOW_EN;
    $(".now").innerHTML = `<span class="mono">${nw[0]}</span><span>${nw[1]} <span class="rot" id="rot" aria-live="off"><span>${esc(rotWords()[0])}</span></span> ${nw[2]}</span>`;
    const b = $("#langBtn");
    b.textContent = isAr() ? "EN" : "ع"; b.lang = isAr() ? "en" : "ar";
    b.setAttribute("aria-label", isAr() ? "View the site in English" : "عرض الموقع بالعربية");
  }
  function setLang(l) {
    LANG = l;
    try { localStorage.setItem("im-lang", l); } catch (e) {}
    paintStatic();
    splitAll();
    paintSR(srST ? srST.progress : 1);
    renderWork(); bindCards();
    if (drawerOpen && curId) renderProject(byId[curId]);
    if (refreshLayout) refreshLayout();
  }
  let refreshLayout = null;
  function openProject(id, from) {
    const p = byId[id]; if (!p) return;
    renderProject(p);
    if (!drawerOpen) {
      opener = from || document.activeElement;
      drawer.hidden = false; drawerOpen = true;
      requestAnimationFrame(() => requestAnimationFrame(() => drawer.classList.add("open")));
      if (lenis) lenis.stop();
      document.body.style.overflow = "hidden";
      setTimeout(() => $(".dr-b[data-close]", drawer).focus({ preventScroll: true }), 60);
    }
    try { history.replaceState(null, "", "#" + id); } catch (e) {}
  }
  function closeProject() {
    if (!drawerOpen) return;
    drawer.classList.remove("open"); drawerOpen = false;
    document.body.style.overflow = "";
    if (lenis) lenis.start();
    setTimeout(() => { if (!drawerOpen) drawer.hidden = true; }, RM ? 0 : 700);
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
    if (opener && opener.focus) opener.focus({ preventScroll: true });
  }
  function drawerEvents() {
    const step = (d) => { const i = ORDER.findIndex((p) => p.id === curId); openProject(ORDER[(i + d + ORDER.length) % ORDER.length].id); };
    drawer.addEventListener("click", (e) => {
      if (e.target.closest("[data-close]")) closeProject();
      const g = e.target.closest("[data-goto]"); if (g) openProject(g.dataset.goto);
    });
    $("#drPrev").addEventListener("click", () => step(-1));
    $("#drNext").addEventListener("click", () => step(1));
    document.addEventListener("keydown", (e) => {
      if (!drawerOpen) return;
      if (e.key === "Escape") closeProject();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "Tab") { // keep focus inside the dialog
        const f = $$('button, a[href]', $(".dr-panel")).filter((x) => x.offsetParent !== null);
        if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    });
    $("#tblBody").addEventListener("click", (e) => { const r = e.target.closest(".tr"); if (r) openProject(r.dataset.id, r); });
  }

  /* ------------------------------------------------------------------ copy email + toast */
  let toastT = 0;
  function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("on"), 2200); }
  function copyMail() {
    const btn = $("#copyMail"), addr = $("#mailAddr");
    btn.addEventListener("click", () => {
      const done = () => { $("span", btn).textContent = tr("Copied"); toast(ui("copied", "Email copied to clipboard")); setTimeout(() => ($("span", btn).textContent = tr("Copy email")), 2000); };
      const fallback = () => { const r = document.createRange(); r.selectNodeContents(addr); const s = getSelection(); s.removeAllRanges(); s.addRange(r); toast(ui("select", "Selected. Press Ctrl+C or ⌘C to copy")); };
      try { navigator.clipboard.writeText(S.email).then(done, fallback); } catch (e) { fallback(); }
    });
  }

  /* ------------------------------------------------------------------ footer reveal */
  function footer() {
    const f = $("#foot"), main = $("#main"), wm = $(".wordmark", f);
    const fitWM = () => {
      wm.style.setProperty("--wm-fs", "100px");
      wm.style.display = "inline-block";
      const w = wm.offsetWidth, avail = wm.parentElement.clientWidth - parseFloat(getComputedStyle(wm.parentElement).paddingLeft) * 2;
      wm.style.display = "";
      wm.style.setProperty("--wm-fs", ((avail / w) * 100 * 0.995).toFixed(2) + "px");
    };
    const set = () => {
      fitWM();
      const h = f.offsetHeight;
      const fixed = h < innerHeight * 0.8;
      f.classList.toggle("static", !fixed);
      main.style.marginBottom = fixed ? h + "px" : "";
    };
    set(); addEventListener("resize", set);
    if (document.fonts) document.fonts.ready.then(() => { set(); ST && ST.refresh(); });
    refreshLayout = () => { set(); if (navRemeasure) navRemeasure(); if (ST) ST.refresh(); };
  }

  /* ------------------------------------------------------------------ boot */
  collectText();
  paintStatic();
  renderWork();
  clock();
  smooth();
  anchors();
  nav();
  heroName();
  rotator();
  counters();
  journey();
  reveals();
  marquee();
  cards();
  bento();
  accordion();
  drawerEvents();
  copyMail();
  footer();
  rulers();
  shaders();
  $("#langBtn").addEventListener("click", () => setLang(isAr() ? "en" : "ar"));

  const h = location.hash.slice(1);
  if (byId[h]) openProject(h);
  else if (h && document.getElementById(h)) setTimeout(() => scrollToEl(document.getElementById(h)), 400);
  addEventListener("load", () => ST && ST.refresh());
})();
