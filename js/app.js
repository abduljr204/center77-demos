/* Center 77 demo — page logic: language toggle, services list, WhatsApp booking message.
   No libraries, no server. Business data lives in js/config.js. */
(function () {
  "use strict";
  var S = window.SITE;

  /* ---------- texts (Arabic / English) ---------- */
  var T = {
    ar: {
      nav_services: "الخدمات", nav_gallery: "المعرض", nav_book: "احجز",
      eyebrow: "مركز للعناية بالسيارات في طرابلس",
      h1: "سيارة نظيفة،<br><em>ولمعان يليق بها.</em>",
      lead: "غسيل وتلميع وتنظيف داخلي. احجز موعدك بسهولة عبر واتساب.",
      cta_book: "احجز عبر واتساب", cta_services: "الخدمات والأسعار",
      info_hours: "ساعات العمل", info_location: "الموقع", info_whatsapp: "واتساب",
      svc_kick: "الخدمات", svc_title: "اختر الخدمة المناسبة",
      svc_sub: "خدمات واضحة وأسعار معروفة، حتى تعرف ما تحجزه قبل أن تأتي.",
      svc_note: "الأسعار تجريبية للعرض فقط.", choose: "اختر هذه الخدمة",
      gal_kick: "المعرض", gal_title: "اللمعان الذي نطمح إليه",
      gal_1: "غسيل خارجي", gal_2: "حماية ولمعان",
      gal_note: "صور توضيحية من Unsplash لهذا التصميم التجريبي.",
      book_kick: "الحجز", book_title: "احجز موعدك",
      book_sub: "اختر الخدمة واليوم والوقت، ثم أرسل الطلب عبر واتساب.",
      step1: "اختر الخدمة", step2: "حدد اليوم والوقت", step3: "أرسل الحجز عبر واتساب",
      f_service: "الخدمة", f_date: "اليوم", f_name: "الاسم", f_time: "الوقت",
      f_send: "أرسل الحجز عبر واتساب",
      f_hint: "سيفتح واتساب والرسالة جاهزة، ويؤكد المركز موعدك.",
      err_date: "اختر اليوم من فضلك.", err_time: "اختر الوقت من فضلك.", err_past: "اختر يوماً من اليوم فصاعداً.",
      footer: "تصميم تجريبي لمركز 77 للعناية بالسيارات — وليس الموقع الرسمي. الأسعار والمواعيد أمثلة. تصميم: ABDULRHMAN.DEV",
      msg: function (v) {
        return "السلام عليكم، أريد حجز: " + v.service + "\nاليوم: " + v.date + "\nالوقت: " + v.time +
          (v.name ? "\nالاسم: " + v.name : "") + "\nشكراً.";
      }
    },
    en: {
      nav_services: "Services", nav_gallery: "Gallery", nav_book: "Book",
      eyebrow: "Car care center in Tripoli",
      h1: "A cleaner car,<br><em>a better shine.</em>",
      lead: "Washing, polishing and interior cleaning. Book your time easily on WhatsApp.",
      cta_book: "Book on WhatsApp", cta_services: "Services & prices",
      info_hours: "Opening hours", info_location: "Location", info_whatsapp: "WhatsApp",
      svc_kick: "Services", svc_title: "Choose the right service",
      svc_sub: "Clear services and known prices, so you know what you are booking before you come.",
      svc_note: "Sample prices for demonstration only.", choose: "Choose this service",
      gal_kick: "Gallery", gal_title: "The finish we aim for",
      gal_1: "Exterior wash", gal_2: "Protection and shine",
      gal_note: "Illustration photos from Unsplash for this design concept.",
      book_kick: "Booking", book_title: "Book your appointment",
      book_sub: "Pick a service, day and time, then send your request on WhatsApp.",
      step1: "Choose a service", step2: "Pick a day and time", step3: "Send the booking on WhatsApp",
      f_service: "Service", f_date: "Day", f_name: "Name", f_time: "Time",
      f_send: "Send booking on WhatsApp",
      f_hint: "WhatsApp opens with your message ready, and the center confirms your time.",
      err_date: "Please choose a day.", err_time: "Please choose a time.", err_past: "Please choose today or a later day.",
      footer: "Demo design for Center 77 Car Care — not the official website. Prices and times are examples. Design: ABDULRHMAN.DEV",
      msg: function (v) {
        return "Hello, I would like to book: " + v.service + "\nDay: " + v.date + "\nTime: " + v.time +
          (v.name ? "\nName: " + v.name : "") + "\nThank you.";
      }
    }
  };

  var lang = "ar";
  try { lang = localStorage.getItem("c77_lang") || "ar"; } catch (e) {}
  var selService = S.services[1].id;   // default: full wash
  var selTime = "";

  var $ = function (id) { return document.getElementById(id); };

  /* ---------- rendering ---------- */
  function price(p) { return p + " <small>" + S.currency[lang] + "</small>"; }

  function renderStatic() {
    var t = T[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = S.name[lang] + " " + S.subtitle[lang] + " (Demo)";
    $("langBtn").textContent = lang === "ar" ? "EN" : "عربي";
    $("logoName").textContent = S.name[lang];
    $("logoSub").textContent = S.subtitle[lang];
    $("infoHours").textContent = S.hours[lang];
    $("infoCity").textContent = S.city[lang];
    $("infoPhone").textContent = S.whatsappDisplay[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t[el.getAttribute("data-i18n")]; });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { el.innerHTML = t[el.getAttribute("data-i18n-html")]; });
  }

  function renderServices() {
    var grid = $("svcGrid"), sel = $("service");
    grid.innerHTML = ""; sel.innerHTML = "";
    S.services.forEach(function (s) {
      var card = document.createElement("div");
      card.className = "card";
      card.innerHTML = "<h3>" + s[lang] + "</h3><p>" + (lang === "ar" ? s.descAr : s.descEn) + "</p>" +
        '<div class="price">' + price(s.price) + "</div>";
      var b = document.createElement("button");
      b.type = "button"; b.textContent = T[lang].choose;
      b.addEventListener("click", function () {
        selService = s.id; sel.value = s.id;
        $("book").scrollIntoView({ behavior: "smooth" });
      });
      card.appendChild(b);
      grid.appendChild(card);

      var o = document.createElement("option");
      o.value = s.id; o.textContent = s[lang] + " — " + s.price + " " + S.currency[lang];
      sel.appendChild(o);
    });
    sel.value = selService;
  }

  function renderSlots() {
    var box = $("slots"); box.innerHTML = "";
    S.slots.forEach(function (tm) {
      var b = document.createElement("button");
      b.type = "button"; b.textContent = tm; b.dir = "ltr";
      if (tm === selTime) b.className = "on";
      b.setAttribute("aria-pressed", tm === selTime ? "true" : "false");
      b.addEventListener("click", function () { selTime = tm; renderSlots(); });
      box.appendChild(b);
    });
  }

  function setDateLimits() {
    var d = new Date(), y = d.getFullYear(), m = ("0" + (d.getMonth() + 1)).slice(-2), day = ("0" + d.getDate()).slice(-2);
    var today = y + "-" + m + "-" + day;
    $("date").min = today;
    if (!$("date").value) {
      var t = new Date(Date.now() + 86400000);
      $("date").value = t.getFullYear() + "-" + ("0" + (t.getMonth() + 1)).slice(-2) + "-" + ("0" + t.getDate()).slice(-2);
    }
    return today;
  }

  function prettyDate(iso) {
    try {
      var d = new Date(iso + "T12:00:00");
      var loc = lang === "ar" ? "ar-LY-u-nu-latn" : "en-GB";
      return d.toLocaleDateString(loc, { weekday: "long", day: "numeric", month: "long" });
    } catch (e) { return iso; }
  }

  function showError(msg) { var e = $("err"); e.textContent = msg; e.hidden = !msg; }

  /* ---------- events ---------- */
  $("langBtn").addEventListener("click", function () {
    lang = lang === "ar" ? "en" : "ar";
    try { localStorage.setItem("c77_lang", lang); } catch (e) {}
    renderStatic(); renderServices(); renderSlots(); showError("");
  });

  $("service").addEventListener("change", function (e) { selService = e.target.value; });

  $("bookForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var today = setDateLimits();
    var date = $("date").value;
    if (!date) return showError(T[lang].err_date);
    if (date < today) return showError(T[lang].err_past);
    if (!selTime) return showError(T[lang].err_time);
    showError("");
    var svc = S.services.filter(function (s) { return s.id === $("service").value; })[0] || S.services[0];
    var text = T[lang].msg({
      service: svc[lang] + " (" + svc.price + " " + S.currency[lang] + ")",
      date: prettyDate(date), time: selTime, name: $("name").value.trim()
    });
    window.open("https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent(text), "_blank", "noopener");
  });

  /* ---------- start ---------- */
  renderStatic(); renderServices(); renderSlots(); setDateLimits();
})();
