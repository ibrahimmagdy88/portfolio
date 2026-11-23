/* Generated cover artwork for each featured project.
   Devices are sized in container-height units, and everything inside them in em,
   so a cover scales cleanly from a phone-width card to the full case-study view. */

(function () {
  const stb = (dark) => `<div class="stb${dark ? " d" : ""}"><b>9:41</b><span class="sig"><i></i><i></i><i></i><i></i></span><span class="bat"></span></div>`;
  const P = (s, pos, theme, inner, attrs = "") =>
    `<div class="dv ph ${theme}" style="--s:${s};${pos}" ${attrs}><div class="scr"><span class="isl"></span>${stb(theme.includes("dk"))}${inner}</div></div>`;
  const W = (s, pos, theme, url, inner) =>
    `<div class="dv win ${theme}" style="--s:${s};${pos}"><div class="wbar"><i></i><i></i><i></i><span class="url">${url}</span></div><div class="wbody">${inner}</div></div>`;
  const T = (s, pos, theme, inner) =>
    `<div class="dv tab ${theme}" style="--s:${s};${pos}"><div class="scr">${inner}</div></div>`;
  const A = (txt, pos, cls = "") => (cls = cls === "sel" ? "blue" : cls, `<span class="anno ${cls}" style="${pos}">${txt}</span>`);
  const bars = (vals, cls = "") => `<div class="bars ${cls}">${vals.map((v, i) => `<i style="--h:${v}%;--d:${i}"></i>`).join("")}</div>`;
  const tabbar = (n = 5, on = 0) => `<div class="tbar">${Array.from({ length: n }, (_, i) => `<i class="${i === on ? "on" : ""}"></i>`).join("")}</div>`;

  /* tiny line icons used inside mockups */
  const I = {
    seat: '<svg viewBox="0 0 24 24"><path d="M7 4v9h9l2 6M7 13l-1 6"/></svg>',
    box: '<svg viewBox="0 0 24 24"><path d="M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8"/></svg>',
    sofa: '<svg viewBox="0 0 24 24"><path d="M4 11V8a2 2 0 012-2h12a2 2 0 012 2v3M3 11h18v6H3zM5 17v2M19 17v2"/></svg>',
    paw: '<svg viewBox="0 0 24 24"><circle cx="7" cy="9" r="1.6"/><circle cx="12" cy="6.5" r="1.6"/><circle cx="17" cy="9" r="1.6"/><path d="M8 17c0-3 2-5 4-5s4 2 4 5c0 1.5-1.5 2-4 2s-4-.5-4-2z"/></svg>',
    drop: '<svg viewBox="0 0 24 24"><path d="M12 3s6 7 6 11a6 6 0 01-12 0c0-4 6-11 6-11z"/></svg>',
    car: '<svg viewBox="0 0 24 24"><path d="M4 15l2-6h12l2 6v3H4zM4 15h16M7 18v1.5M17 18v1.5"/><circle cx="8" cy="15.5" r=".6"/><circle cx="16" cy="15.5" r=".6"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/></svg>',
    bell: '<svg viewBox="0 0 24 24"><path d="M6 16V11a6 6 0 0112 0v5l1.5 2h-15zM10 20h4"/></svg>',
    bag: '<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 016 0v2"/></svg>',
    swap: '<svg viewBox="0 0 24 24"><path d="M7 7h12l-3-3M17 17H5l3 3"/></svg>',
    back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z"/></svg>',
    plane: '<svg viewBox="0 0 24 24"><path d="M3 13l18-7-5 14-3-6zM13 14l-2 5"/></svg>'
  };

  const covers = {
    /* ------------------------------------------------------------ travel */
    travel: {
      bg: ["#06182b", "#0d5f73", "#1b3f8f"], ac: "#0b6bcb",
      html: () =>
        W(76, "left:5%;top:12%", "lt", "bookto.com/flights/cai-jed", `
          <div class="tv-nav"><b class="logo">bookto</b>
            <span class="tv-tabs"><span class="on">Flights</span><span>Hotels</span><span>Transfers</span><span>Activities</span><span>Sports</span></span>
            <span class="sp"></span><span class="s">EN · ع</span><span class="chip">Sign in</span></div>
          <div class="tv-search">
            <div class="fld"><span class="xs">From</span><b>Cairo (CAI)</b></div>
            <span class="swap">${I.swap}</span>
            <div class="fld"><span class="xs">To</span><b>Jeddah (JED)</b></div>
            <div class="fld"><span class="xs">Depart</span><b>Tue, 12 Nov</b></div>
            <div class="fld"><span class="xs">Travellers</span><b>1 Adult · Economy</b></div>
            <span class="btn">Search</span></div>
          <div class="tv-body">
            <aside class="tv-fil"><b class="t">Filters</b>
              <span class="xs upc">Stops</span>
              <span class="cb on"><i></i>Direct <em>SAR 1,240</em></span>
              <span class="cb"><i></i>1 stop <em>SAR 980</em></span>
              <span class="xs upc">Departure</span>
              <span class="row g4"><span class="chip on">Morning</span><span class="chip">Evening</span></span>
              <span class="xs upc">Price</span>
              <span class="range"><i></i></span>
            </aside>
            <div class="tv-res">
              <div class="row g4"><span class="chip on">Cheapest · SAR 1,240</span><span class="chip">Fastest · 2h 05m</span><span class="chip">Best value</span></div>
              ${[["SV", "#127a55", "08:40", "11:05", "2h 25m · Direct", "1,240", "Cheapest"],
                 ["MS", "#1b4fa3", "13:15", "15:20", "2h 05m · Direct", "1,385", "Fastest"],
                 ["XY", "#7a2bd1", "19:50", "00:35", "4h 45m · 1 stop RUH", "980", ""]]
                .map(([c, col, a, b, d, p, tag]) => `
                <div class="tv-r"><span class="al" style="--c:${col}">${c}</span>
                  <div class="col g2"><b>${a} <span class="xs">→</span> ${b}</b><span class="xs">CAI – JED · ${d}</span></div>
                  ${tag ? `<span class="tagx">${tag}</span>` : ""}<span class="sp"></span>
                  <div class="col g2 ar"><b>SAR ${p}</b><span class="xs">per adult</span></div><span class="btn sm">Select</span></div>`).join("")}
            </div>
          </div>`) +
        P(84, "right:5%;top:8%", "lt ar-ui", `
          <div class="img-hotel"><i class="sun"></i><i class="b1"></i><i class="b2"></i><i class="b3"></i><i class="b4"></i><i class="sea"></i>
            <span class="ib l">${I.back}</span><span class="ib r">${I.heart}</span><span class="deal">خصم ١٥٪</span></div>
          <div class="pad col g6 mt">
            <b class="hh">فندق كورنيش جدة</b>
            <span class="s">الكورنيش، جدة · ٢٫٤ كم من المركز</span>
            <div class="row g6"><span class="rate">٤٫٦</span><span class="s">ممتاز · ١٬٢٠٤ تقييم</span></div>
            <div class="row g4 wrap"><span class="chip">واي فاي مجاني</span><span class="chip">مسبح</span><span class="chip">إفطار</span></div>
            <div class="crd col g4"><b class="t">غرفة ديلوكس بسرير كبير</b><span class="xs okc">إلغاء مجاني حتى ١٠ نوفمبر</span><span class="row"><span class="xs">٢ بالغين · ٣٢ م²</span><span class="sp"></span><b class="t">٦٤٠ ر.س</b></span></div>
          </div>
          <div class="ph-cta"><div class="col g2"><span class="xs">الإجمالي لـ ٧ ليالٍ</span><b>٤٬٤٨٠ ر.س</b></div><span class="btn">اختر الغرفة</span></div>`) +
        A("RTL · Arabic", "right:7%;bottom:6%", "sel")
    },

    /* ------------------------------------------------------------ tasahl */
    tasahl: {
      bg: ["#0d0616", "#5b1a8f", "#c2185b"], ac: "#8b5cf6",
      html: () => {
        const screen = (dark) => `
          <div class="pad row tl-top"><b class="logo">tasahl</b><span class="sp"></span><span class="ic">${I.bell}</span><span class="ic">${I.bag}<em>2</em></span></div>
          <div class="pad"><div class="srch">${I.search}<span>Search games, consoles…</span></div></div>
          <div class="pad"><span class="seg"><span class="on">New</span><span>Used</span><span>Stores</span></span></div>
          <div class="pad row mt"><b class="h3">Trending this week</b><span class="sp"></span><span class="xs">See all</span></div>
          <div class="pad grid2">
            ${[["#ff3d81", "#6c2cff", "o", "Shadow Realm", "189", "Used · Like new", "4.8"],
               ["#00c2ff", "#1238ff", "c", "Wireless controller", "245", "New · Official store", "4.9"],
               ["#ffb300", "#ff3d00", "s", "Galaxy Racer 24", "159", "Used · Good", "4.6"],
               ["#18e6a1", "#0b6e8a", "k", "Console · 1TB", "1,899", "New · Verified", "4.9"]]
              .map(([g1, g2, sh, n, p, b, r]) => `
              <div class="pc"><div class="pimg ${sh}" style="--g1:${g1};--g2:${g2}"><i></i></div>
                <span class="xs">${b}</span><b class="t1">${n}</b>
                <div class="row"><b class="t1 acc">SAR ${p}</b><span class="sp"></span><span class="xs">★ ${r}</span></div></div>`).join("")}
          </div>${tabbar(5, 0)}`;
        return P(72, "left:7%;top:17%;transform:rotate(-7deg)", "lt", screen(false)) +
          P(88, "left:37%;top:6%", "dk", screen(true)) +
          `<div class="vars wide-only" style="right:4%;top:24%">
            <div class="vh"><span>Variables</span><span class="modes"><b>Light</b><b class="on">Dark</b></span></div>
            ${[["surface/base", "#FFFFFF", "#0E0F14"], ["surface/raised", "#F3F2F7", "#191A22"], ["text/primary", "#14121C", "#F2F1F7"], ["brand/accent", "#7C4DFF", "#9A7BFF"]]
              .map(([n, a, b]) => `<div class="vr"><span>${n}</span><i style="background:${a}"></i><i style="background:${b}"></i></div>`).join("")}
          </div>` +
          A("Light + dark modes", "left:7%;bottom:6%", "sel");
      }
    },

    /* ------------------------------------------------------------ ratio */
    ratio: {
      bg: ["#140c07", "#7a4a2b", "#c79a6b"], ac: "#6f4325",
      html: () =>
        W(80, "left:4%;top:10%", "lt cream", "ops.ratio.sa/overview", `
          <div class="db">
            <aside class="db-side"><b class="logo">ratio</b>
              ${["Overview", "Branches", "Employees", "Attendance", "Leave", "Tasks", "Reports"].map((x, i) => `<span class="${i === 0 ? "on" : ""}"><i></i>${x}</span>`).join("")}
            </aside>
            <div class="db-main">
              <div class="row"><b class="hh">Overview</b><span class="sp"></span><span class="chip">This week</span><span class="chip">All regions</span></div>
              <div class="kpis">
                ${[["Branches", "72", "+3 this quarter"], ["Staff on shift", "1,186", "of 1,240"], ["Attendance", "96.4%", "▲ 1.2%"], ["Open tasks", "38", "12 overdue"]]
                  .map(([a, b, c]) => `<div class="kpi"><span class="xs">${a}</span><b>${b}</b><span class="xs">${c}</span></div>`).join("")}
              </div>
              <div class="row g8 grow">
                <div class="crd grow col"><div class="row"><b class="t">Branch performance</b><span class="sp"></span><span class="xs">Score / 100</span></div>
                  ${bars([62, 78, 70, 88, 92, 74, 66, 81, 95, 72, 69, 84, 90, 77, 58, 86, 93, 71, 80, 67, 89, 76, 83, 97], "brown")}</div>
                <div class="crd col g6 w30"><b class="t">Top branches</b>
                  ${[["Olaya · Riyadh", "98%"], ["Corniche · Jeddah", "96%"], ["Khobar North", "95%"], ["Hittin · Riyadh", "94%"]]
                    .map(([a, b]) => `<div class="row"><span class="xs">${a}</span><span class="sp"></span><b class="xs b">${b}</b></div><span class="prog"><i style="width:${b}"></i></span>`).join("")}
                </div>
              </div>
            </div>
          </div>`) +
        P(82, "right:5%;top:9%", "lt cream", `
          <div class="pad col g2 mt"><span class="xs">Good morning</span><b class="hh">Sara Al-Qahtani</b><span class="xs">Barista · Olaya branch</span></div>
          <div class="checkin"><div class="ring"><div class="core"><span class="xs">Check in</span><b>07:58</b><span class="xs okc">Inside branch</span></div></div></div>
          <div class="pad"><div class="crd row"><div class="col g2"><span class="xs">Today's shift</span><b class="t">08:00 – 16:00</b></div><span class="sp"></span><span class="chip on">On time</span></div></div>
          <div class="pad col g6 mt"><b class="t">Tasks</b>
            ${[["Calibrate espresso grinder", 1], ["Receive milk delivery", 1], ["Count cash drawer", 0]]
              .map(([t, d]) => `<span class="cb ${d ? "on" : ""}"><i>${d ? I.check : ""}</i>${t}</span>`).join("")}
          </div>${tabbar(4, 0)}`) +
        A("70+ branches", "left:6%;bottom:6%", "sel")
    },

    /* ------------------------------------------------------------ igold */
    igold: {
      bg: ["#0b0905", "#6b5221", "#d6ad55"], ac: "#c9993b",
      html: () =>
        T(78, "left:4%;top:12%", "dk gold", `
          <div class="ticker">${[["24K", "277.40", "▲ 0.8%"], ["22K", "254.30", "▲ 0.8%"], ["21K", "242.70", "▲ 0.7%"], ["18K", "208.05", "▲ 0.7%"]]
            .map(([k, v, d]) => `<span><b>${k}</b> ${v} <em>${d}</em></span>`).join("")}<span class="sp"></span><span class="xs">SAR / gram · live</span></div>
          <div class="pos">
            <div class="pos-l">
              <div class="row g4"><span class="chip on">All</span><span class="chip">Rings</span><span class="chip">Necklaces</span><span class="chip">Bracelets</span><span class="chip">Sets</span></div>
              <div class="pgrid">
                ${[["ring", "Solitaire ring", "21K · 6.20 g"], ["neck", "Rope necklace", "18K · 9.80 g"], ["brac", "Bangle", "21K · 12.4 g"],
                   ["ring2", "Band ring", "22K · 4.10 g"], ["ear", "Hoop earrings", "18K · 3.60 g"], ["brac2", "Link bracelet", "21K · 8.90 g"]]
                  .map(([k, n, w]) => `<div class="pi"><span class="jw ${k}"></span><b class="t1">${n}</b><span class="xs">${w}</span></div>`).join("")}
              </div>
            </div>
            <div class="pos-r">
              <div class="row"><b class="t">Current sale</b><span class="sp"></span><span class="xs">#S-20418</span></div>
              ${[["Solitaire ring", "21K · 6.20 g", "1,504.74"], ["Bangle", "21K · 12.4 g", "3,009.48"], ["Rope necklace", "18K · 9.80 g", "2,038.89"]]
                .map(([n, w, p]) => `<div class="cl"><div class="col g2"><b class="t1">${n}</b><span class="xs">${w}</span></div><span class="sp"></span><b class="t1">${p}</b></div>`).join("")}
              <div class="sum"><div class="row"><span class="xs">Workmanship</span><span class="sp"></span><span class="xs">360.00</span></div>
                <div class="row"><span class="xs">VAT 15%</span><span class="sp"></span><span class="xs">1,036.97</span></div>
                <div class="row"><b class="t">Total</b><span class="sp"></span><b class="t">SAR 7,950.08</b></div></div>
              <span class="btn">Charge · Card</span>
            </div>
          </div>`) +
        P(78, "right:6%;top:11%", "lt ivory", `
          <div class="jw-hero"><span class="jw brac big"></span></div>
          <div class="pad col g6">
            <div class="row"><b class="hh">Bangle · 21K</b><span class="sp"></span><span class="ic">${I.heart}</span></div>
            <span class="xs">Al Noor Jewellers · Riyadh</span>
            <div class="row g4"><span class="chip on">12.4 g</span><span class="chip">14.0 g</span><span class="chip">16.2 g</span></div>
            <div class="crd col g4">
              <div class="row"><span class="xs">Gold value (21K)</span><span class="sp"></span><span class="xs b">SAR 3,009.48</span></div>
              <div class="row"><span class="xs">Workmanship</span><span class="sp"></span><span class="xs b">SAR 120.00</span></div>
              <div class="row"><b class="t">Total</b><span class="sp"></span><b class="t">SAR 3,129.48</b></div>
            </div>
          </div>
          <div class="ph-cta"><span class="xs">Price updates with live gold rate</span><span class="btn">Add to cart</span></div>`) +
        A("POS · Inventory", "left:6%;bottom:7%", "sel")
    },

    /* ------------------------------------------------------------ highway */
    highway: {
      bg: ["#050b18", "#0f3b4a", "#164e3a"], ac: "#18c48f",
      html: () =>
        P(88, "left:9%;top:6%", "dk", `
          <div class="map"><svg viewBox="0 0 240 300" preserveAspectRatio="xMidYMid slice">
              <g class="rd"><path d="M-10 60 L250 40"/><path d="M-10 150 L250 175"/><path d="M60 -10 L80 310"/><path d="M170 -10 L150 310"/><path d="M-10 250 C80 230 160 260 250 235"/><path d="M110 -10 C120 100 100 200 115 310"/></g>
              <path class="route" d="M48 230 C70 190 92 175 112 150 S160 92 190 62"/>
              <circle class="pin a" cx="48" cy="230" r="6"/><circle class="pin b" cx="190" cy="62" r="6"/>
              <circle class="carp" cx="112" cy="150" r="4"/>
            </svg>
            <span class="seg map-seg"><span class="on">Passenger</span><span>Driver</span></span>
            <span class="mtag a">Riyadh</span><span class="mtag b">Dammam</span>
          </div>
          <div class="sheet col g6">
            <span class="grab"></span>
            <div class="row"><b class="hh">Riyadh → Dammam</b><span class="sp"></span><b class="hh acc">SAR 90</b></div>
            <span class="xs">Tue, 14 Nov · 08:30 · about 4h 10m</span>
            <div class="row g6"><span class="av">KH</span><div class="col g2"><b class="t">Khalid · ★ 4.9</b><span class="xs">Hyundai Sonata · White</span></div><span class="sp"></span><span class="chip on">3 seats left</span></div>
            <span class="btn">Book a seat</span>
          </div>`) +
        P(76, "right:7%;top:15%", "lt ar-ui", `
          <div class="pad col g2 mt"><span class="xs">مرحباً، أحمد</span><b class="hh">ماذا تريد أن تنقل؟</b></div>
          <div class="pad svcg">
            ${[["seat", "رحلة"], ["box", "طرد"], ["sofa", "أثاث"], ["paw", "حيوان أليف"], ["drop", "مياه"], ["car", "مشوار"]]
              .map(([k, t], i) => `<div class="sv${i === 0 ? " on" : ""}"><span>${I[k]}</span><b class="xs">${t}</b></div>`).join("")}
          </div>
          <div class="pad"><div class="mode"><span class="xs">وضع السائق</span><span class="sw"><i></i></span></div></div>
          <div class="pad col g6 mt"><b class="t">رحلتك القادمة</b>
            <div class="crd col g4"><div class="row"><b class="t1">الرياض ← الدمام</b><span class="sp"></span><span class="chip on">مؤكدة</span></div><span class="xs">الثلاثاء ٨:٣٠ ص · مقعد ٢</span></div>
          </div>${tabbar(4, 0)}`) +
        A("Driver ⇄ passenger, one app", "right:6%;bottom:6%", "sel")
    },

    /* ------------------------------------------------------------ braheem */
    braheem: {
      bg: ["#0b0f15", "#30455e", "#b85a1c"], ac: "#e8661c",
      html: () =>
        T(82, "left:4%;top:9%", "lt", `
          <div class="kb-head"><b class="logo">AL BRAHEEM</b><span class="xs">Service floor · Olaya center</span><span class="sp"></span><span class="chip">Today</span><span class="btn sm">+ New job card</span></div>
          <div class="kb">
            ${[["Received", 6, [["Toyota Camry 2021", "ABC 1234", "Oil change · Brakes", "", 0]]],
               ["In service", 9, [["Nissan Patrol 2019", "KSA 5521", "Engine diagnostics", "Omar", 64], ["Hyundai Elantra 2022", "RHD 7710", "AC repair", "Faisal", 32]]],
               ["Quality check", 3, [["Kia Sportage 2020", "JED 3390", "Suspension", "Sami", 92]]],
               ["Ready", 4, [["GMC Yukon 2018", "DMM 8812", "Insurance claim · Al Rajhi", "", 100]]]]
              .map(([c, n, cards]) => `
              <div class="kc"><div class="row"><b class="t1">${c}</b><span class="cnt">${n}</span></div>
                ${cards.map(([car, plate, job, tech, pr]) => `
                  <div class="kcard"><div class="row"><b class="t1">${car}</b></div><span class="plate">${plate}</span><span class="xs">${job}</span>
                    ${tech ? `<div class="row g4"><span class="av sm">${tech[0]}</span><span class="xs">${tech}</span><span class="sp"></span><span class="xs mono">${pr === 92 ? "QC" : "01:24"}</span></div><span class="prog"><i style="width:${pr}%"></i></span>` : pr === 100 ? `<span class="chip on">Ready for pickup</span>` : `<span class="chip">Assign technician</span>`}
                  </div>`).join("")}
              </div>`).join("")}
          </div>`) +
        P(74, "right:6%;top:17%", "dk", `
          <div class="pad col g2 mt"><span class="xs">Your car</span><b class="hh">Toyota Camry · ABC 1234</b></div>
          <div class="pad"><div class="steps">
            ${[["Received", 1], ["In service", 2], ["Quality check", 0], ["Ready", 0]].map(([t, s]) => `<div class="st s${s}"><i></i><span class="xs">${t}</span></div>`).join("")}
          </div></div>
          <div class="pad"><div class="crd col g4"><span class="xs">Estimated ready</span><b class="hh">4:30 pm</b><span class="xs">Oil change · Brake pads · 2 of 3 done</span><span class="prog"><i style="width:66%"></i></span></div></div>
          <div class="pad col g6 mt"><span class="btn ghost">Request towing</span><span class="btn">Chat with service advisor</span></div>${tabbar(4, 1)}`) +
        A("8 connected products", "right:6%;bottom:6%", "sel")
    },

    /* ------------------------------------------------------------ adelco */
    adelco: {
      bg: ["#06140c", "#1f6b3c", "#a7d36b"], ac: "#1f9d55",
      html: () =>
        T(68, "right:3%;top:22%", "lt", `
          <div class="kb-head"><b class="t">Picking list #4821</b><span class="xs">Route 7 · 18 items</span><span class="sp"></span><span class="chip on">12 / 18 picked</span></div>
          <div class="pk">
            <div class="pk-h xs"><span>Item</span><span>Bin</span><span>Qty</span><span></span></div>
            ${[["Basmati rice 5kg", "A-12", "24", 1], ["Sunflower oil 1.5L", "B-04", "36", 1], ["Whole milk 1L", "C-21", "48", 1], ["Tomato paste 400g", "A-07", "60", 0], ["Dates 1kg", "D-02", "12", 0], ["Sugar 2kg", "B-18", "30", 0]]
              .map(([n, b, q, d]) => `<div class="pk-r ${d ? "done" : ""}"><b class="t1">${n}</b><span class="xs mono">${b}</span><b class="t1">${q}</b><span class="cbx">${d ? I.check : ""}</span></div>`).join("")}
          </div>`) +
        P(86, "left:8%;top:7%", "lt", `
          <div class="pad col g2 mt"><span class="xs">Deliver to</span><b class="t">Al Malaz store · Riyadh ▾</b></div>
          <div class="pad"><div class="srch">${I.search}<span>Search 2,400 products</span></div></div>
          <div class="pad row g4"><span class="chip on">Rice</span><span class="chip">Oils</span><span class="chip">Dairy</span><span class="chip">Canned</span></div>
          <div class="pad grid2">
            ${[["#f1e3c2", "#d9b98a", "Basmati rice", "5 kg · Carton of 4", "212"], ["#ffe08a", "#f5b400", "Sunflower oil", "1.5 L · Carton of 6", "96"],
               ["#e9f4ff", "#b9d8f5", "Whole milk", "1 L · Carton of 12", "64"], ["#ffd2c2", "#ff7a59", "Tomato paste", "400 g · Carton of 24", "88"]]
              .map(([a, b, n, s, p]) => `<div class="pc lt"><div class="pimg prod" style="--g1:${a};--g2:${b}"><i></i></div><b class="t1">${n}</b><span class="xs">${s}</span><div class="row"><b class="t1">SAR ${p}</b><span class="sp"></span><span class="add">+</span></div></div>`).join("")}
          </div>
          <div class="cartbar"><span>3 items</span><span class="sp"></span><b>View cart · SAR 372</b></div>`) +
        A("6 products · 1 backbone", "left:6%;bottom:6%", "sel")
    },

    /* ------------------------------------------------------------ madroos */
    madroos: {
      bg: ["#04101c", "#0c4a48", "#1d3f8c"], ac: "#13b38a",
      html: () =>
        P(86, "left:9%;top:7%", "dk", `
          <div class="pad row mt"><b class="hh">Your finances</b><span class="sp"></span><span class="ic">${I.bell}</span></div>
          <div class="gauge"><div class="arc"></div><div class="gv"><b>712</b><span class="xs okc">Good</span><span class="xs">Updated today</span></div></div>
          <div class="pad row"><span class="xs">300</span><span class="sp"></span><span class="xs">850</span></div>
          <div class="pad col g6 mt"><div class="row"><b class="t">Offers for you</b><span class="sp"></span><span class="xs">4 banks</span></div>
            ${[["AB", "#2a6df4", "Personal finance", "from 3.9% APR · up to SAR 250k"], ["RB", "#0fa47a", "Mortgage", "from 4.4% APR · 25 years"], ["NB", "#b34cff", "Credit card", "No annual fee for year one"]]
              .map(([a, c, t, s]) => `<div class="ofr"><span class="bk" style="--c:${c}">${a}</span><div class="col g2"><b class="t1">${t}</b><span class="xs">${s}</span></div><span class="sp"></span><span class="xs acc">Apply</span></div>`).join("")}
          </div>${tabbar(4, 0)}`) +
        P(76, "right:8%;top:14%", "lt ar-ui", `
          <div class="pad col g2 mt"><span class="xs">طلب رقم ٤٨٢١٠</span><b class="hh">تمويل عقاري</b><span class="xs">٨٥٠٬٠٠٠ ر.س · ٢٥ سنة</span></div>
          <div class="pad"><div class="vsteps">
            ${[["تم استلام الطلب", "١٢ نوفمبر · ١٠:٢٠ ص", 1], ["التحقق من المستندات", "اكتمل", 1], ["مراجعة البنك", "قيد المراجعة · متوقع خلال يومين", 2], ["عرض التمويل", "", 0], ["التوقيع", "", 0]]
              .map(([t, s, st]) => `<div class="vs s${st}"><i>${st === 1 ? I.check : ""}</i><div class="col g2"><b class="t1">${t}</b>${s ? `<span class="xs">${s}</span>` : ""}</div></div>`).join("")}
          </div></div>
          <div class="pad mt"><span class="btn ghost">رفع مستند إضافي</span></div>`) +
        A("Customers · banks · admins", "left:7%;bottom:6%", "sel")
    }
  };

  const hues = {
    mohandes: ["#0a0f1f", "#2442a8"], carrier: ["#0d0f12", "#a24d16"], amen: ["#07121a", "#1c7a8c"], fantastic: ["#0b0b14", "#3a37a8"],
    heavyhub: ["#120d05", "#a37812"], mohamikom: ["#0b0f17", "#3d4f6b"], rafaa: ["#160a10", "#9c3d63"], vrt: ["#05101a", "#156f9e"],
    fantasy: ["#12061a", "#7a26a8"], fork: ["#170b07", "#b0461f"], jenan: ["#06130e", "#2a7a55"], tabibak: ["#061318", "#1a8a9c"],
    khwarizmi: ["#0d0c16", "#55479c"], udacity: ["#06121a", "#1b6aa0"]
  };

  window.coverHTML = function (p) {
    const img = p.video
      ? `<video class="cover-img" src="${p.video}"${p.poster ? ` poster="${p.poster}"` : ""} autoplay muted loop playsinline preload="metadata" aria-hidden="true" onerror="this.remove()"></video>`
      : p.image ? `<img class="cover-img" src="${p.image}" alt="" loading="lazy" onerror="this.remove()">` : "";
    const c = covers[p.id];
    if (c) return c.html() + img;
    const [a, b] = hues[p.id] || ["#0b0d12", "#2b3b66"];
    return `<div class="mini" style="--m1:${a};--m2:${b}"><span class="mini-n">${p.name}</span>
      <div class="mini-p">${p.platforms.map((x) => `<span>${x}</span>`).join("")}</div></div>` + img;
  };
  window.coverStyle = function (p) {
    const c = covers[p.id];
    if (!c) return "";
    return `--bg1:${c.bg[0]};--bg2:${c.bg[1]};--bg3:${c.bg[2]};--ac:${c.ac}`;
  };
})();
