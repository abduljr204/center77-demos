/* ============================================================
   CONFIG — edit this file to change the business, prices and texts.
   Everything on the page is built from this file, so you can reuse
   the project for another car wash by changing only the values here.
   NOTE: services, prices, hours and the phone number are SAMPLES.
   ============================================================ */
window.SITE = {
  // WhatsApp number in international format, digits only (no + or spaces).
  // Libya = 218. Example: 218 91 000 0000  ->  "218910000000"
  whatsapp: "218910000000",
  whatsappDisplay: { ar: "+218 91 000 0000", en: "+218 91 000 0000" },

  name:     { ar: "مركز 77",              en: "Center 77" },
  subtitle: { ar: "للعناية بالسيارات",     en: "Car Care" },
  city:     { ar: "طرابلس",               en: "Tripoli" },
  hours:    { ar: "يومياً 8:00 ص – 10:00 م", en: "Daily 8:00 AM – 10:00 PM" },   // sample

  currency: { ar: "د.ل", en: "LYD" },

  // Sample services and prices (change them to the real ones).
  services: [
    { id: "exterior", price: 20,  ar: "غسيل خارجي",              en: "Exterior wash",
      descAr: "غسيل يدوي للهيكل والإطارات مع تجفيف.",       descEn: "Hand wash of the body and wheels, with drying." },
    { id: "full",     price: 40,  ar: "غسيل كامل (داخلي وخارجي)", en: "Full wash (interior + exterior)",
      descAr: "تنظيف داخلي وخارجي مع تلميع الزجاج.",         descEn: "Interior and exterior cleaning with glass polish." },
    { id: "seats",    price: 80,  ar: "تنظيف المقاعد بالبخار",    en: "Seat steam cleaning",
      descAr: "تنظيف عميق للمقاعد والسجاد.",                 descEn: "Deep cleaning for seats and carpets." },
    { id: "engine",   price: 50,  ar: "تنظيف المحرك",             en: "Engine cleaning",
      descAr: "تنظيف آمن لحجرة المحرك.",                     descEn: "Safe cleaning of the engine bay." },
    { id: "polish",   price: 120, ar: "تلميع الطلاء",             en: "Paint polish",
      descAr: "تلميع لإزالة الخدوش الخفيفة وإعادة اللمعان.",   descEn: "Polishing to remove light scratches and restore shine." }
  ],

  // Time slots offered to customers (24-hour format).
  slots: ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]
};
