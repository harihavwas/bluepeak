/* Blue Peak Skill Development Pvt. Ltd.: site interactions (vanilla JS, no dependencies).
   Programme data below is transcribed from the company profile brochure. */
(function () {
  "use strict";

  var PHONE = "918848261394";
  var EMAIL = "bluepeakskilldevelopment@gmail.com";

  /* ---------- Integrated UG courses with add-on programmes ---------- */
  var UG = [
    { c: "BBA", h: true, cat: "business aviation", img: "dip-business", a: ["Aviation and Airport Management", "Airline Cabin Crew and Airport Management", "Hospitality Management"] },
    // { c: "BBA Aviation", h: true, cat: "aviation", img: "dip-aviation", a: ["Airline Cabin Crew and Airport Management", "Travel & Tourism"] },
    { c: "BBA", h: true, cat: "business", img: "act-industrial-visit", a: ["Logistics & Supply Chain Management", "Export Management", "Artificial Intelligence & SAP"] },
    { c: "B.Com", h: true, cat: "business", img: "prog-handshake", a: ["Logistics & Supply Chain Management", "Export Management", "Artificial Intelligence & SAP"] },
    { c: "B.Com", cat: "business tech aviation", img: "dip-finance", a: ["ACCA", "CMA (USA / India)"] },
    { c: "BCA", h: true, cat: "tech", img: "dip-it", a: ["Artificial Intelligence (AI) & Data Science", "Artificial Intelligence (AI) & Data Analytics", "Artificial Intelligence (AI) & Machine Learning", "Cloud Computing", "Cyber Security & Ethical Hacking"] },
    { c: "B.Sc Computer Science", h: true, cat: "tech", img: "act-add-on", a: ["Artificial Intelligence (AI) & Data Science", "Artificial Intelligence (AI) & Data Analytics", "Artificial Intelligence (AI) & Machine Learning", "Cloud Computing", "Cyber Security & Ethical Hacking"] },
    // { c: "B.Sc Cyber Forensic", h: true, cat: "tech", img: "dip-forensic", a: ["Cloud Computing & Cyber Security"] },
    // { c: "B.Sc Electronics", h: true, cat: "tech", img: "act-personality", a: ["Cyber Security and Ethical Hacking", "Block Chain Technology"] },
    // { c: "B.Sc Geology", h: true, cat: "science tech", img: "act-adventure", a: ["Data Science & Data Analytics"] },
    { c: "B.Sc Psychology", h: true, cat: "science", img: "prog-counselling", a: ["Behaviour Therapy & Counselling", "Hospitality Administration", "Health Care Management"] },
    { c: "B.Sc Micro Biology", h: true, cat: "science", img: "dip-healthcare", a: ["Medical Coding"] },
    { c: "B.Sc Bio Technology", h: true, cat: "science", img: "dip-forensic", a: ["Food Processing & Entrepreneurship"] },
    { c: "B.Sc Food Technology", h: true, cat: "science", img: "act-orientation", a: ["Food Processing & Entrepreneurship"] },
    { c: "B.Sc Fashion Technology", h: true, cat: "arts", img: "dip-design", a: ["Fashion Designing"] },
    { c: "BA Multimedia", h: true, cat: "arts tech", img: "act-events", a: ["AI Prompt Engineering & Data Science"] }
    // { c: "BA Sociology", h: true, cat: "arts", img: "prog-team", a: ["Data Analytics"] },
    // { c: "BA English", h: true, cat: "arts tech", img: "dip-personality-lang", a: ["AI Prompt Engineering"] },
    // { c: "BTTM", h: true, cat: "aviation", img: "act-career-guidance", a: ["Hospitality Management, Aviation Management"] }
  ];
  var PG = [
    { c: "M.Com", sub: "Finance & Taxation", cat: "business", img: "dip-finance", a: ["ACCA, CMA (IND/USA), EA, CPA"] },
    { c: "M.Sc", sub: "Artificial Intelligence", cat: "tech", img: "act-add-on", a: ["GEN AI & Robotics"] },
    { c: "M.Sc", sub: "Microbiology", cat: "science", img: "dip-healthcare", a: ["Medical Coding"] }
  ];
  var DIPLOMAS = [
    { t: "Information Technology", d: "8 Months", img: "it", cat: "tech", a: ["Advanced Cybersecurity", "Ethical Hacking", "Network Security", "IT Support & Networking", "Cloud Computing", "Full Stack Development", "Artificial Intelligence", "Machine Learning", "Python Full Stack", "Data Science"] },
    { t: "Aviation & Hospitality", d: "1 Year", img: "aviation", cat: "aviation", a: ["Aviation Management", "Cabin Crew Training", "Airport Ground Staff", "Air Hostess Training", "Hospitality & Hotel Management", "Travel & Tourism Management"] },
    { t: "Business & Management", d: "1 Year", img: "business", cat: "business", a: ["Logistics & Supply Chain Management", "Business Administration", "Retail & Sales Management", "Human Resource Management", "Marketing & Digital Marketing"] },
    { t: "Designing & Creative Media", d: "10 Months", img: "design", cat: "arts tech", a: ["Graphic Design", "Animation & Multimedia", "Gaming & Game Development", "Video Editing & VFX", "Digital Media Production"] },
    { t: "Personality Development & Language Training", d: "1 Year", img: "personality-lang", cat: "arts", a: ["Soft Skills Training", "Spoken English", "Communication Skills", "Interview & Grooming Skills", "Corporate Personality Development"] },
    { t: "Forensic & Criminology Programs", d: "1 Year", img: "forensic", cat: "science", a: ["Forensic Science Basics", "Cyber Forensics", "Forensic Accounting"] },
    { t: "Healthcare & Allied Programs", d: "1 Year", img: "healthcare", cat: "science", a: ["Hospital Administration", "Healthcare Management"] },
    { t: "Finance & Accounting", d: "Duration varies", img: "finance", cat: "business", a: ["CMA India", "CMA USA", "ACCA", "CPA (USA)", "CA Foundation Support", "Financial Modeling", "Accounting & Taxation Training"] },
    { t: "Short-Term & Skill Development", d: "6 Months", img: "short-term", cat: "tech business", a: ["MS Office & Computer Basics", "Tally & GST", "Content Creation", "Social Media Management"] }
  ];

  /* ---------- What each add-on builds (used by the pathway finder) ---------- */
  var INFO = {
    "Aviation, Logistics & Supply Chain Management": [["Airport operations", "Cargo & freight", "Supply chain planning"], ["Airport Operations Executive", "Logistics Executive", "Cargo Handling Officer", "Supply Chain Analyst"]],
    "Airline Cabin Crew and Airport Management": [["In-flight service & safety", "Passenger handling", "Grooming & communication"], ["Cabin Crew", "Ground Staff", "Airport Customer Service", "Airline Operations Executive"]],
    "Hospitality Management": [["Front office & guest relations", "Food & beverage service", "Hotel operations"], ["Front Office Executive", "Guest Relations Executive", "Hotel Operations Trainee"]],
    "Travel & Tourism": [["Ticketing & reservations", "Tour planning", "Destination knowledge"], ["Travel Consultant", "Ticketing Executive", "Tour Coordinator"]],
    "Logistics & Supply Chain Management": [["Warehousing & inventory", "Shipping & freight", "Procurement"], ["Logistics Executive", "Warehouse Supervisor", "Supply Chain Analyst"]],
    "Export Management": [["Export documentation", "International trade", "Customs procedures"], ["Export Executive", "Documentation Executive", "Trade Operations Associate"]],
    "Behaviour Therapy & Counselling": [["Counselling techniques", "Behaviour therapy", "Case assessment"], ["Counsellor", "Behaviour Therapist (trainee)", "Student Counsellor"]],
    "Medical Coding": [["ICD & CPT coding", "Medical terminology", "Healthcare documentation"], ["Medical Coder", "Medical Billing Executive", "Healthcare Documentation Specialist"]],
    "Food Processing & Entrepreneurship": [["Food processing methods", "Quality & safety", "Starting a food business"], ["Food Production Executive", "Quality Control Associate", "Food Entrepreneur"]],
    "Fashion Designing": [["Design & illustration", "Garment construction", "Trend research"], ["Fashion Designer", "Merchandiser", "Stylist"]],
    "Data Science & Data Analytics": [["Python & SQL", "Statistics", "Data visualisation"], ["Data Analyst", "GIS / Data Associate", "Business Intelligence Analyst"]],
    "Full Stack AI Development": [["Front-end & back-end", "AI APIs & models", "Deploying apps"], ["Full Stack Developer", "AI Application Developer", "Software Engineer"]],
    "Artificial Intelligence (AI) & Data Science": [["Machine learning", "Python & data tools", "AI model building"], ["Data Scientist", "ML Engineer", "AI Analyst"]],
    "Cloud Computing & Cyber Security": [["Cloud platforms", "Network security", "Digital forensics tools"], ["Cloud Security Associate", "Cyber Security Analyst", "SOC Analyst"]],
    "Cloud Computing & Full Stack Development": [["Cloud deployment", "Web development", "Databases & APIs"], ["Full Stack Developer", "Cloud Engineer", "DevOps Associate"]],
    "Game Development & 3D Art Designing": [["Game engines", "3D modelling & animation", "Game design"], ["Game Developer", "3D Artist", "Animator"]],
    "Cyber Security and Ethical Hacking": [["Ethical hacking", "Penetration testing", "Network defence"], ["Ethical Hacker", "Security Analyst", "Network Security Engineer"]],
    "Block Chain Technology": [["Blockchain fundamentals", "Smart contracts", "Web3 development"], ["Blockchain Developer", "Smart Contract Developer", "Web3 Associate"]],
    "ACCA": [["International accounting", "Audit & assurance", "Financial reporting"], ["Accountant", "Audit Associate", "Financial Analyst"]],
    "CMA (USA / India)": [["Cost & management accounting", "Financial planning", "Performance analysis"], ["Cost Accountant", "Management Accountant", "Financial Planning Analyst"]],
    "AI Prompt Engineering & Data Science": [["Prompt design for AI tools", "Data analysis", "AI-assisted media"], ["Prompt Engineer", "AI Content Specialist", "Data Analyst"]],
    "Data Analytics": [["Excel & SQL", "Survey & social data", "Dashboards"], ["Data Analyst", "Research Analyst", "MIS Executive"]],
    "AI Prompt Engineering": [["Prompt writing", "AI content workflows", "Editing with AI tools"], ["Prompt Engineer", "AI Content Writer", "Content Strategist"]],
    "Hospitality Management, Aviation Management": [["Hotel operations", "Airport & airline operations", "Guest service"], ["Hospitality Executive", "Airport Operations Executive", "Travel Desk Executive"]],
    "ACCA, CMA (IND/USA), EA, CPA": [["Global accounting standards", "Taxation", "Audit & compliance"], ["Tax Consultant", "Accountant", "Audit Associate", "Finance Manager"]],
    "GEN AI & Robotics": [["Generative AI models", "Robotics & automation", "AI system design"], ["AI Engineer", "Robotics Engineer", "Gen AI Developer"]]
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var icon = function (id) { return '<svg aria-hidden="true"><use href="#' + id + '"/></svg>'; };
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fullName = function (x) { return x.c + (x.sub ? " " + x.sub : "") + (x.h ? " (Hons)" : ""); };

  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; }
  }
  function toast(msg) {
    var t = $("#toast"); if (!t) return;
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }
  function copy(text) {
    var done = function () { toast("Copied: " + text.split("\n")[0].slice(0, 40)); };
    var fallback = function () {
      var ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", "");
      ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast("Select the text to copy it"); }
      document.body.removeChild(ta);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
    else fallback();
  }

  /* ---------- Hand-off to the contact page ---------- */
  function presetInterest(v) { store("bp-interest", v); }
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-interest]"); if (a) presetInterest(a.getAttribute("data-interest"));
    var c = e.target.closest("[data-centre]"); if (c) store("bp-centre", c.getAttribute("data-centre"));
    var cp = e.target.closest("[data-copy]"); if (cp) copy(cp.getAttribute("data-copy"));
  });

  /* ---------- Light / dark switch (dark is the default look) ---------- */
  var root = document.documentElement, themeBtn = $("#themeToggle");
  var syncThemeBtn = function () {
    var light = root.getAttribute("data-theme") === "light";
    themeBtn.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
    themeBtn.setAttribute("aria-pressed", light);
  };
  if (themeBtn) {
    syncThemeBtn();
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next); store("bp-theme", next); syncThemeBtn();
      toast(next === "light" ? "Light mode on" : "Dark mode on");
      document.dispatchEvent(new Event("bp-theme"));
    });
  }

  /* ---------- Header ---------- */
  var menuBtn = $("#menuToggle"), links = $("#navLinks");
  menuBtn.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.innerHTML = icon(open ? "i-x" : "i-menu");
  });
  $("#toTop").addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }); });
  var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Neural network canvas (hero and page banners) ---------- */
  $$("canvas.net").forEach(function (cv) {
    var ctx = cv.getContext("2d"); if (!ctx) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2), W, H, nodes = [], mouse = { x: -999, y: -999 }, col = {};
    var readCol = function () {
      var cs = getComputedStyle(document.documentElement);
      col.line = cs.getPropertyValue("--net-line").trim() || "61, 214, 255";
      col.node = cs.getPropertyValue("--net-node").trim() || "rgba(120,200,255,.8)";
      col.hot = cs.getPropertyValue("--net-hot").trim() || "rgba(244,183,64,.95)";
    };
    readCol();
    document.addEventListener("bp-theme", function () { readCol(); if (reduced) draw(); });
    function size() {
      var r = cv.getBoundingClientRect(); W = r.width; H = r.height;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(90, W * H / 14000));
      nodes = []; for (var i = 0; i < n; i++) nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + .8 });
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < nodes.length; i++) {
        var p = nodes[i];
        if (!reduced) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1; }
        var dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dm < 140 && !reduced) { p.x += (mouse.x - p.x) * .004; p.y += (mouse.y - p.y) * .004; }
        for (var j = i + 1; j < nodes.length; j++) {
          var q = nodes[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) { ctx.strokeStyle = "rgba(" + col.line + "," + (0.25 * (1 - d / 120)) + ")"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
        ctx.fillStyle = dm < 140 ? col.hot : col.node;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduced) requestAnimationFrame(draw);
    }
    cv.parentElement.addEventListener("pointermove", function (e) { var r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    cv.parentElement.addEventListener("pointerleave", function () { mouse.x = mouse.y = -999; });
    window.addEventListener("resize", function () { size(); if (reduced) draw(); });
    size(); draw();
  });

  /* ---------- Robot: eyes follow the pointer ---------- */
  var bot = $(".bot");
  if (bot && !reduced) {
    var eyes = $$(".eye", bot);
    window.addEventListener("pointermove", function (e) {
      var r = bot.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height * .4;
      var dx = Math.max(-1, Math.min(1, (e.clientX - cx) / 400)), dy = Math.max(-1, Math.min(1, (e.clientY - cy) / 400));
      eyes.forEach(function (el) { el.style.transform = "translate(" + dx * 7 + "px," + dy * 5 + "px)"; });
    });
  }

  /* ---------- Terminal typer (home) ---------- */
  var term = $("#terminal");
  if (term) {
    var combos = [["BCA (Hons)", "Full Stack AI Development"], ["BBA Aviation (Hons)", "Airline Cabin Crew and Airport Management"], ["M.Sc Artificial Intelligence", "GEN AI & Robotics"], ["B.Sc Psychology (Hons)", "Behaviour Therapy & Counselling"], ["B.Com", "ACCA"], ["B.Sc Electronics (Hons)", "Block Chain Technology"]];
    var ci = 0;
    var lineEl = function (cls, txt) { var d = document.createElement("div"); if (cls) d.className = cls; d.textContent = txt; return d; };
    var typeLine = function (el, text, cb) {
      if (reduced) { el.textContent = text; cb(); return; }
      var i = 0; (function step() { el.textContent = text.slice(0, ++i); if (i < text.length) setTimeout(step, 22); else cb(); })();
    };
    var run = function () {
      var c = combos[ci % combos.length]; ci++;
      term.innerHTML = "";
      term.appendChild(lineEl("dim", "> bluepeak.match --student"));
      var l1 = term.appendChild(lineEl("", ""));
      typeLine(l1, "degree   : " + c[0], function () {
        var l2 = term.appendChild(lineEl("", ""));
        typeLine(l2, "add-on   : " + c[1], function () {
          var l3 = term.appendChild(lineEl("", ""));
          typeLine(l3, "status   : career path ready ✓", function () {
            var caret = document.createElement("span"); caret.className = "caret"; l3.appendChild(caret);
            if (!reduced) setTimeout(run, 2600);
          });
        });
      });
    };
    run();
  }

  /* ---------- Counters ---------- */
  function countUp(el) {
    var target = +el.getAttribute("data-count");
    if (reduced) { el.textContent = target; return; }
    var t0 = null, dur = 1200;
    (function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1); el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }

  /* ---------- Reveal on scroll ---------- */
  function setupReveal() {
    if (!("IntersectionObserver" in window) || reduced) return;
    document.body.classList.add("reveal-ready");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("in"); io.unobserve(e.target);
        $$("[data-count]", e.target).forEach(countUp);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
    $$(".reveal").forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in"); else io.observe(el);
    });
    var stats = $(".stats"); if (stats) io.observe(stats);
  }

  /* ---------- Programmes page ---------- */
  if ($("#progGrid")) {
    var grid = $("#progGrid"), dipGrid = $("#dipGrid"), activeTab = "ug", activeCat = "all";
    var ugCard = function (x, type) {
      var text = (fullName(x) + " " + x.a.join(" ")).toLowerCase();
      return '<article class="course panel hover" data-cat="' + x.cat + '" data-text="' + esc(text) + '">' +
        '<div class="holo"><img src="assets/img/' + x.img + '.webp" alt="" loading="lazy" width="560" height="320"></div>' +
        '<div class="course-top"><span class="course-type">' + type + '</span><h3>' + esc(x.c) +
        (x.sub ? ' <small>' + esc(x.sub) + '</small>' : '') + (x.h ? ' <small>(Hons)</small>' : '') + '</h3></div>' +
        '<ul class="addon-list">' + x.a.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + '</ul>' +
        '<div class="course-foot"><span class="tag">' + (type === "UG course" ? "Add-on" : "Specialisation") + (x.a.length > 1 ? "s: " + x.a.length : "") + '</span>' +
        '<a class="link-btn" href="contact.html" data-interest="' + esc(fullName(x) + " + " + x.a[0]) + '">Enquire ' + icon("i-arrow") + '</a></div></article>';
    };
    grid.innerHTML = UG.map(function (x) { return ugCard(x, "UG course"); }).join("") + PG.map(function (x) { return ugCard(x, "PG course"); }).join("");
    $$(".course", grid).forEach(function (el, i) { el.setAttribute("data-tab", i < UG.length ? "ug" : "pg"); });
    dipGrid.innerHTML = DIPLOMAS.map(function (d) {
      var text = (d.t + " " + d.a.join(" ")).toLowerCase();
      return '<article class="dip panel hover" data-cat="' + d.cat + '" data-text="' + esc(text) + '">' +
        '<div class="holo"><img src="assets/img/dip-' + d.img + '.webp" alt="" loading="lazy" width="480" height="300"></div>' +
        '<div class="dip-head"><span class="course-type">Advanced Diploma</span><h3>' + esc(d.t) + '</h3><div class="dip-meta"><span class="tag">' + esc(d.d) + '</span><span class="tag">' + d.a.length + ' courses</span></div></div>' +
        '<ul class="addon-list">' + d.a.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + '</ul></article>';
    }).join("");

    var apply = function () {
      var q = ($("#progSearch").value || "").trim().toLowerCase(), shown = 0;
      var cards = activeTab === "dip" ? $$(".dip", dipGrid) : $$(".course", grid);
      $$(".course", grid).forEach(function (el) { el.hidden = true; });
      $$(".dip", dipGrid).forEach(function (el) { el.hidden = true; });
      cards.forEach(function (el) {
        var okTab = activeTab === "dip" || el.getAttribute("data-tab") === activeTab;
        var okCat = activeCat === "all" || el.getAttribute("data-cat").split(" ").indexOf(activeCat) > -1;
        var okQ = !q || el.getAttribute("data-text").indexOf(q) > -1;
        el.hidden = !(okTab && okCat && okQ); if (!el.hidden) { shown++; el.classList.add("in"); }
      });
      grid.hidden = activeTab === "dip"; dipGrid.hidden = activeTab !== "dip";
      $("#progEmpty").hidden = shown > 0;
      var label = { ug: "UG courses", pg: "PG courses", dip: "advanced diploma tracks" }[activeTab];
      $("#progCount").innerHTML = "&gt; showing <b>" + shown + "</b> " + label;
    };
    var setTab = function (t) {
      activeTab = t;
      $$(".ptab").forEach(function (b) { b.setAttribute("aria-selected", b.getAttribute("data-tab") === t); });
      apply();
    };
    $$(".ptab").forEach(function (b) { b.addEventListener("click", function () { setTab(b.getAttribute("data-tab")); }); });
    $$("#progFilters .chip").forEach(function (b) {
      b.addEventListener("click", function () {
        activeCat = b.getAttribute("data-filter");
        $$("#progFilters .chip").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        apply();
      });
    });
    $("#progSearch").addEventListener("input", apply);
    var fromHash = function () { var h = location.hash.slice(1); if (["ug", "pg", "dip"].indexOf(h) > -1) setTab(h); };
    window.addEventListener("hashchange", fromHash);
    apply(); fromHash();
  }

  /* ---------- Pathway finder ---------- */
  if ($("#degList")) {
    var ALL = UG.map(function (x) { return { n: fullName(x), short: x.c + (x.sub ? " " + x.sub.split(" /")[0] : ""), lvl: "UG", a: x.a }; })
      .concat(PG.map(function (x) { return { n: fullName(x), short: x.c + " " + x.sub, lvl: "PG", a: x.a }; }));
    var degList = $("#degList"), addList = $("#addList"), selD = 5, selA = 0;
    degList.innerHTML = ALL.map(function (x, i) {
      return '<button class="opt" type="button" data-i="' + i + '" aria-pressed="false"><span>' + esc(x.short) + '</span><small>' + x.lvl + '</small></button>';
    }).join("");
    var renderPath = function () {
      var d = ALL[selD], a = d.a[selA], info = INFO[a] || [[], []];
      $("#pathTitle").textContent = d.short + " + " + a;
      $("#pathText").textContent = "You graduate with a " + (d.lvl === "UG" ? "degree" : "postgraduate degree") + " in " + d.n + " and practical, certified training in " + a + ".";
      $("#pathSkills").innerHTML = info[0].map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("");
      $("#pathRoles").innerHTML = info[1].map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("");
      $("#pathEnquire").setAttribute("data-interest", d.n + " + " + a);
      var pr = $("#pathProc");
      if (!reduced) { pr.textContent = "> analysing combination..."; setTimeout(function () { pr.textContent = "> match found ✓"; }, 500); }
    };
    var renderAdd = function () {
      var d = ALL[selD];
      if (selA >= d.a.length) selA = 0;
      addList.innerHTML = d.a.map(function (a, i) {
        return '<button class="opt" type="button" data-a="' + i + '" aria-pressed="' + (i === selA) + '"><span>' + esc(a) + '</span></button>';
      }).join("");
      $$(".opt", degList).forEach(function (b) { b.setAttribute("aria-pressed", +b.getAttribute("data-i") === selD); });
      renderPath();
    };
    degList.addEventListener("click", function (e) { var b = e.target.closest("[data-i]"); if (b) { selD = +b.getAttribute("data-i"); selA = 0; renderAdd(); } });
    addList.addEventListener("click", function (e) { var b = e.target.closest("[data-a]"); if (b) { selA = +b.getAttribute("data-a"); renderAdd(); } });
    renderAdd();
  }

  /* ---------- IELTS tabs + band picker ---------- */
  if ($("#panel-ielts")) {
    var MODULES = {
      listening: { t: "Listening", p: "Train your ear for different accents and question types, from form completion to maps and multiple choice.", l: ["Recordings in British, Australian and other accents", "Note-taking and prediction techniques", "Timed section practice and answer-transfer tips"] },
      reading: { t: "Reading", p: "Read faster and more accurately using strategies built for IELTS passages.", l: ["Skimming, scanning and locating answers quickly", "True / False / Not Given and matching headings", "Academic and General Training passages"] },
      writing: { t: "Writing", p: "Plan and write clear Task 1 and Task 2 answers that meet the band descriptors.", l: ["Graphs, letters and essay structures", "Coherence, vocabulary range and grammar accuracy", "Feedback on your practice answers"] },
      speaking: { t: "Speaking", p: "Build fluency and confidence for the face-to-face interview through regular practice.", l: ["Part 1, 2 and 3 practice with a trainer", "Pronunciation and natural, fluent answers", "Mock speaking tests with feedback"] }
    };
    var panel = $("#panel-ielts");
    var showModule = function (key) {
      var m = MODULES[key];
      $("#ieltsTitle").textContent = m.t; $("#ieltsText").textContent = m.p;
      $("#ieltsList").innerHTML = m.l.map(function (x) { return "<li>" + icon("i-check") + "<span>" + esc(x) + "</span></li>"; }).join("");
    };
    var tabs = $$(".tab");
    var setT = function (btn, focus) {
      tabs.forEach(function (t) { var on = t === btn; t.setAttribute("aria-selected", on); t.tabIndex = on ? 0 : -1; });
      panel.setAttribute("aria-labelledby", btn.id); showModule(btn.getAttribute("data-m")); if (focus) btn.focus();
    };
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { setT(t); });
      t.addEventListener("keydown", function (e) {
        var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (d) { e.preventDefault(); setT(tabs[(i + d + tabs.length) % tabs.length], true); }
      });
    });
    showModule("listening");
    var NOTES = { 5: "Band 5 to 5.5: a common requirement for some diploma courses and work routes.", 6: "Band 6 to 6.5: the usual range for undergraduate admission in many countries.", 7: "Band 7 and above: often needed for postgraduate study and professional registration.", 8: "Band 8 and above: very good user. We plan a focused, intensive schedule for this target." };
    var track = $("#bandTrack"), goal = 7;
    for (var b = 1; b <= 9; b++) { var s = document.createElement("span"); s.textContent = b; s.setAttribute("role", "radio"); s.setAttribute("data-b", b); track.appendChild(s); }
    var setBand = function (n) {
      goal = Math.max(1, Math.min(9, n));
      $$("span", track).forEach(function (s) {
        var v = +s.getAttribute("data-b");
        s.className = v === goal ? "goal" : v < goal && v >= 5 ? "reach" : "";
        s.setAttribute("aria-checked", v === goal); s.tabIndex = v === goal ? 0 : -1;
      });
      $("#bandNote").textContent = NOTES[Math.min(8, Math.max(5, goal))] + " Tell us your target and we will plan your preparation.";
    };
    track.addEventListener("click", function (e) { var s = e.target.closest("[data-b]"); if (s) setBand(+s.getAttribute("data-b")); });
    track.addEventListener("keydown", function (e) {
      var d = e.key === "ArrowRight" || e.key === "ArrowUp" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowDown" ? -1 : 0;
      if (d) { e.preventDefault(); setBand(goal + d); $('[data-b="' + goal + '"]', track).focus(); }
    });
    setBand(7);
  }

  /* ---------- Certificate zoom ---------- */
  var zoom = $("#zoom");
  if (zoom) {
    $$("[data-zoom]").forEach(function (b) {
      b.addEventListener("click", function () {
        $("#zoomImg").src = b.getAttribute("data-zoom"); $("#zoomImg").alt = b.getAttribute("aria-label") || "";
        if (zoom.showModal) zoom.showModal(); else zoom.setAttribute("open", "");
      });
    });
    var closeZ = function () { if (zoom.close) zoom.close(); else zoom.removeAttribute("open"); };
    $("#zoomClose").addEventListener("click", closeZ);
    zoom.addEventListener("click", function (e) { if (e.target === zoom) closeZ(); });
  }

  /* ---------- Enquiry form ---------- */
  if ($("#enquiryForm")) {
    var sel = $("#f-interest");
    var addGroup = function (label, items) {
      var g = document.createElement("optgroup"); g.label = label;
      items.forEach(function (o) { var op = document.createElement("option"); op.textContent = o; op.value = o; g.appendChild(op); });
      sel.appendChild(g);
    };
    var ugOpts = []; UG.forEach(function (x) { x.a.forEach(function (a) { ugOpts.push(fullName(x) + " + " + a); }); });
    var pgOpts = PG.map(function (x) { return fullName(x) + " + " + x.a[0]; });
    addGroup("UG course + add-on", ugOpts);
    addGroup("PG course + specialisation", pgOpts);
    addGroup("Advanced Diploma", DIPLOMAS.map(function (d) { return "Advanced Diploma: " + d.t; }));
    addGroup("Other", ["English / IELTS", "Career guidance", "Placement support", "Not sure yet"]);

    var hi = store("bp-interest"), hc = store("bp-centre");
    if (hi) { sel.value = hi; if (sel.value !== hi) sel.value = ""; store("bp-interest", ""); }
    if (hc) { $("#f-centre").value = hc; store("bp-centre", ""); }

    var form = $("#enquiryForm");
    var setErr = function (input, msg) {
      var f = input.closest(".field"); f.classList.toggle("invalid", !!msg); $(".err", f).textContent = msg || "";
      input.setAttribute("aria-invalid", !!msg);
    };
    var validate = function () {
      var ok = true, name = $("#f-name"), phone = $("#f-phone"), email = $("#f-email");
      if (name.value.trim().length < 2) { setErr(name, "Please enter your name."); ok = false; } else setErr(name);
      var digits = phone.value.replace(/\D/g, "");
      if (digits.length < 10 || digits.length > 13) { setErr(phone, "Enter a valid 10-digit mobile number."); ok = false; } else setErr(phone);
      if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { setErr(email, "Check the email address."); ok = false; } else setErr(email);
      if (!sel.value) { setErr(sel, "Choose what you are interested in."); ok = false; } else setErr(sel);
      return ok;
    };
    $$("input, select", form).forEach(function (el) { el.addEventListener("blur", function () { if (el.closest(".invalid")) validate(); }); });
    ["f-name", "f-phone", "f-email", "f-msg"].forEach(function (id) {
      var el = document.getElementById(id), v = store("bp-" + id); if (v && !el.value) el.value = v;
      el.addEventListener("input", function () { store("bp-" + id, el.value); });
    });
    var lastMsg = "";
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) { var bad = $(".invalid input, .invalid select", form); if (bad) bad.focus(); return; }
      var fd = new FormData(form);
      lastMsg = "Hello Blue Peak Skill Development,\n\nI would like to know more.\n" +
        "Name: " + fd.get("name").trim() + "\nPhone: " + fd.get("phone").trim() + "\n" +
        (fd.get("email") ? "Email: " + fd.get("email").trim() + "\n" : "") +
        "Interested in: " + fd.get("interest") + "\nPreferred mode: " + fd.get("mode") + "\nNearest centre: " + fd.get("centre") +
        (fd.get("message").trim() ? "\nMessage: " + fd.get("message").trim() : "");
      $("#sentText").textContent = lastMsg;
      $("#sendWa").href = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(lastMsg);
      $("#sendMail").href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Enquiry: " + fd.get("interest")) + "&body=" + encodeURIComponent(lastMsg);
      var box = $("#sentBox"); box.hidden = false;
      box.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
    });
    $("#copyMsg").addEventListener("click", function () { if (lastMsg) copy(lastMsg); });
  }

  setupReveal();
})();
