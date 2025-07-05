"use client";
import React, { useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// Modern, marketing-optimized color palette
const accent = "#A0E7E5";         // Light aqua (main accent)
const accentDark = "#007B8A";     // Teal (strong accent)
const accentLight = "#FDFDFD";    // Almost white (background)
const highlight = "#FFF685";      // Soft yellow (highlight)
const secondary = "#FFC1A1";      // Peach (secondary accent)
const textPrimary = "#333843";    // Deep blue-gray (main text)
const textSecondary = "#007B8A";  // Teal (secondary text)

// Simple translations for navigation and home page
const translations = {
  en: {
    nav: { home: "Home", about: "About", contact: "Contact" },
    welcome: "Welcome to Dr.Hakim Dental Clinic",
    welcomeText: "Where your comfort, health, and confidence come first. Step into a modern, friendly clinic dedicated to gentle, expert dental care for all ages.",
    clinic: "Our Clinic",
    clinicText: "Discover a calming, high-tech environment designed for your peace of mind. Our clinic blends comfort, cleanliness, and the latest dental technology.",
    why: "Why Choose Us?",
    whyList: [
      "Cutting-edge digital dentistry",
      "Gentle, patient-centered approach",
      "Transparent pricing & flexible scheduling",
      "Multilingual, friendly staff"
    ],
    whyText: "Your comfort and satisfaction are our top priorities. Discover a new era of dental care—futuristic, compassionate, and always professional.",
    work: "Smile Transformations",
    workText: "See real results from our patients—restored confidence, brighter smiles, and improved dental health. We’re proud to help you achieve your dream smile with expert care and artistry.",
    book: "Book Appointment",
    bookMsg: "We look forward to welcoming you to Dr.Hakim Dental Clinic!",
    about: {
      title: "About Us",
      doctor: {
        name: "Dr.Hakim",
        title: "Principal Dentist",
        bio: "With over 15 years of experience, Dr.Hakim specializes in cosmetic and family dentistry. He is dedicated to gentle, personalized care and creating beautiful smiles."
      },
      nurse: {
        name: "Nurse Amina",
        title: "Dental Nurse",
        bio: "Nurse Amina brings warmth and professionalism to every visit. She ensures patient comfort and assists in all dental procedures with care and expertise."
      },
      features: [
        "Modern, comfortable office",
        "State-of-the-art equipment",
        "Friendly, professional staff",
        "Flexible appointment scheduling"
      ]
    },
    contact: {
      title: "Contact Us",
      phone: "(123) 456-7890",
      email: "info@drhakimdental.com",
      address: "123 Smile Ave, New York, NY, USA",
      hours: "Mon-Fri 9:00 AM - 5:00 PM",
      saturday: "First Saturday each month: 9:00 AM - 2:00 PM",
      mapNote: "Find us on Google Maps"
    }
  },
  bs: {
    nav: { home: "Početna", about: "O nama", contact: "Kontakt" },
    welcome: "Dobrodošli u Stomatološku ordinaciju Dr.Hakim",
    welcomeText: "Vaša udobnost, zdravlje i samopouzdanje su na prvom mjestu. Dobrodošli u modernu, prijateljsku ordinaciju posvećenu nježnoj i stručnoj stomatološkoj njezi za sve uzraste.",
    clinic: "Naša ordinacija",
    clinicText: "Uživajte u smirujućem, tehnološki naprednom okruženju dizajniranom za vaše potpuno povjerenje. Naša ordinacija spaja udobnost, čistoću i najnoviju stomatološku tehnologiju.",
    why: "Zašto izabrati nas?",
    whyList: [
      "Savremena digitalna stomatologija",
      "Nježan, individualan pristup pacijentu",
      "Transparentne cijene i fleksibilno zakazivanje",
      "Višejezično, ljubazno osoblje"
    ],
    whyText: "Vaša udobnost i zadovoljstvo su naš prioritet. Otkrijte novu eru stomatološke njege—futurističku, saosjećajnu i uvijek profesionalnu.",
    work: "Transformacije osmijeha",
    workText: "Pogledajte stvarne rezultate naših pacijenata—povećano samopouzdanje, blistaviji osmijeh i poboljšano oralno zdravlje. Ponosni smo što vam pomažemo da ostvarite osmijeh iz snova uz stručnu njegu i umjetnost.",
    book: "Zakažite termin",
    bookMsg: "Radujemo se vašem dolasku u ordinaciju Dr.Hakim!",
    about: {
      title: "O nama",
      doctor: {
        name: "Dr.Hakim",
        title: "Glavni stomatolog",
        bio: "Sa više od 15 godina iskustva, dr.Hakim je specijaliziran za estetsku i porodičnu stomatologiju. Posvećen je nježnoj, personaliziranoj njezi i stvaranju lijepih osmijeha."
      },
      nurse: {
        name: "Sestra Amina",
        title: "Stomatološka sestra",
        bio: "Sestra Amina donosi toplinu i profesionalnost svakom posjetu. Brine o udobnosti pacijenata i pomaže u svim stomatološkim zahvatima s pažnjom i stručnošću."
      },
      features: [
        "Moderna, udobna ordinacija",
        "Savremena oprema",
        "Ljubazno, profesionalno osoblje",
        "Fleksibilno zakazivanje termina"
      ]
    },
    contact: {
      title: "Kontaktirajte nas",
      phone: "(123) 456-7890",
      email: "info@drhakimdental.com",
      address: "Hifzi Bjelevca 118, Sarajevo, BiH",
      hours: "Pon-Pet 9:00 - 17:00",
      saturday: "Prva subota u mjesecu: 9:00 - 14:00",
      mapNote: "Pronađite nas na Google mapi"
    }
  },
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", contact: "اتصل بنا" },
    welcome: "مرحبًا بكم في عيادة د. حكيم لطب الأسنان",
    welcomeText: "راحتكم وصحتكم وثقتكم هي أولويتنا. عيادتنا الحديثة والودية مكرسة للعناية اللطيفة والخبيرة لجميع الأعمار.",
    clinic: "عيادتنا",
    clinicText: "اكتشف بيئة هادئة وعالية التقنية مصممة لراحتك. عيادتنا تجمع بين الراحة والنظافة وأحدث تقنيات طب الأسنان.",
    why: "لماذا تختارنا؟",
    whyList: [
      "طب أسنان رقمي متطور",
      "نهج لطيف يركز على المريض",
      "أسعار شفافة وجدولة مرنة",
      "طاقم متعدد اللغات وودود"
    ],
    whyText: "راحتك ورضاك هما أولويتنا. اكتشف عصرًا جديدًا من رعاية الأسنان—مستقبليًا، متعاطفًا، واحترافيًا دائمًا.",
    work: "تحولات الابتسامة",
    workText: "شاهد نتائج حقيقية لمرضانا—ثقة متجددة، ابتسامات أكثر إشراقًا، وصحة فموية محسنة. نحن فخورون بمساعدتك في تحقيق ابتسامتك المثالية برعاية وخبرة عالية.",
    book: "احجز موعدًا",
    bookMsg: "نتطلع للترحيب بكم في عيادة د. حكيم لطب الأسنان!",
    about: {
      title: "من نحن",
      doctor: {
        name: "د. حكيم",
        title: "طبيب أسنان رئيسي",
        bio: "يتمتع د. حكيم بخبرة تزيد عن 15 عامًا في طب الأسنان التجميلي والعائلي. يكرس وقته للرعاية اللطيفة والشخصية وخلق ابتسامات جميلة."
      },
      nurse: {
        name: "الممرضة أمينة",
        title: "ممرضة أسنان",
        bio: "تجلب الممرضة أمينة الدفء والاحترافية في كل زيارة. تضمن راحة المرضى وتساعد في جميع الإجراءات بعناية وخبرة."
      },
      features: [
        "عيادة حديثة ومريحة",
        "معدات متطورة",
        "طاقم ودود ومحترف",
        "جدولة مواعيد مرنة"
      ]
    },
    contact: {
      title: "اتصل بنا",
      phone: "(123) 456-7890",
      email: "info@drhakimdental.com",
      address: "118 حفزي بيليفيتشا، سراييفو، البوسنة والهرسك",
      hours: "الإثنين-الجمعة 9:00 ص - 5:00 م",
      saturday: "أول سبت من كل شهر: 9:00 ص - 2:00 م",
      mapNote: "اعثر علينا على خرائط جوجل"
    }
  }
};

// Language flag map for SVGs
const flagMap = {
  en: { src: "https://flagcdn.com/gb.svg", alt: "UK flag", label: "English" },
  bs: { src: "https://flagcdn.com/ba.svg", alt: "Bosnian flag", label: "Bosanski" },
  ar: { src: "https://flagcdn.com/sa.svg", alt: "Saudi Arabia flag", label: "العربية" },
} as const;

type Language = keyof typeof translations;

export default function DentistSPA() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [langDropdown, setLangDropdown] = useState(false);

  const handleNavClick = (id: string) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center font-sans relative" style={{background: `linear-gradient(120deg, ${accentLight} 0%, #f0fdfa 60%, ${accentLight} 100%)`}}>
      {/* Decorative SVG background */}
      <svg className="absolute top-0 left-0 w-full h-64 pointer-events-none z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.18}} preserveAspectRatio="none">
        <defs>
          <linearGradient id="futuristicGradient" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#48dec8" />
            <stop offset="1" stopColor="#fffbe6" />
          </linearGradient>
        </defs>
        {/* Responsive wave path, always starts at left edge */}
        <path fill="url(#futuristicGradient)" fillOpacity="1" d="M0,160 C360,240 1080,80 1440,160 L1440,0 L0,0Z" />
        <circle cx="1200" cy="60" r="40" fill="#48dec8" opacity="0.12" />
        <rect x="100" y="40" width="80" height="80" rx="24" fill="#fffbe6" opacity="0.13" />
        <ellipse cx="700" cy="100" rx="60" ry="24" fill="#48dec8" opacity="0.09" />
      </svg>
      {/* Navigation Bar */}
      <nav className="w-full fixed top-0 left-0 z-20" style={{backdropFilter: 'blur(12px)'}}>
        <div className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#e0fcf7] via-white/80 to-[#b2f0e6] rounded-b-2xl shadow-xl border-b border-[rgba(72,222,200,0.18)] relative overflow-visible" style={{boxShadow: `0 4px 24px 0 ${accent}22`}}>
          <span className="text-2xl font-extrabold tracking-tight select-none flex items-center gap-2" style={{color: accentDark, letterSpacing: ".02em"}}>
            {/* Premium, modern, anatomically correct tooth icon */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="-mb-1" style={{display: 'inline'}} xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3.5c-3.7 0-7 3.2-7 8.2 0 5.5 2.7 15.3 5.2 15.3 1.1 0 1.5-1.7 2.3-4.7.2-.7 1.2-.7 1.4 0 .8 3 1.2 4.7 2.3 4.7 2.5 0 5.2-9.8 5.2-15.3 0-5-3.3-8.2-7-8.2z" fill="#fff" stroke="#1a8c7c" strokeWidth="2"/>
              <ellipse cx="16" cy="10.5" rx="4.7" ry="2.1" fill="#b2f0e6"/>
              <path d="M12.2 7.7C13.5 6.2 18.5 6.2 19.8 7.7" stroke="#e0fcf7" strokeWidth="1" strokeLinecap="round"/>
              <path d="M14.5 5.5c.5-.5 2.5-.5 3 0" stroke="#b2f0e6" strokeWidth="0.7" strokeLinecap="round"/>
            </svg>
            Dr.Hakim
          </span>
          {/* Navigation Menu with Language Switcher */}
          <div className="flex items-center gap-2 md:gap-3 ml-2 relative">
            <div className="hidden md:flex gap-6 relative">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`px-4 py-2 rounded-full transition font-semibold text-lg focus:outline-none focus-visible:ring-2 hover:scale-105 hover:shadow-lg relative`}
                  style={active === section.id
                    ? {background: accent, color: "white", boxShadow: `0 2px 8px 0 ${accentLight}`}
                    : {background: "rgba(255,255,255,0.7)", color: accentDark, border: `1px solid ${accent}`, boxShadow: "none"}}
                  onClick={() => handleNavClick(section.id)}
                >
                  {translations[language].nav[section.id as keyof typeof translations[Language]['nav']]}

                  {active === section.id && (
                    <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-6 h-1 rounded-full animate-pulse" style={{background: accentDark, boxShadow: `0 2px 8px 0 ${accent}33`}}></span>
                  )}
                </button>
              ))}
              {/* Wavy underline for dental theme */}
              <svg className="absolute left-0 -bottom-4 w-full h-4 pointer-events-none" viewBox="0 0 320 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8 Q40 16 80 8 T160 8 T240 8 T320 8" stroke="#48dec8" strokeWidth="2.5" fill="none" opacity="0.18"/>
              </svg>
            </div>
            {/* Language Switcher - always in nav bar, responsive size */}
            <div className="relative ml-2">
              <button
                aria-label="Select language"
                className="rounded-full focus:outline-none focus-visible:ring-2 transition hover:scale-110 border-2 border-[#48dec8] shadow-md bg-white p-0 relative
                  w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
                onClick={() => setLangDropdown((v) => !v)}
                tabIndex={0}
              >
                <img src={flagMap[language].src} alt={flagMap[language].alt} className="object-cover rounded-full w-6 h-6 md:w-8 md:h-8" />
              </button>
              {langDropdown && (
                <div className="absolute right-0 mt-2 bg-white border border-[#48dec8]/30 rounded-xl shadow-lg flex flex-col z-50 animate-fadeIn min-w-[120px]">
                  {(['en','bs','ar'] as Language[]).map((lang, idx) => (
                    <button
                      key={lang}
                      aria-label={flagMap[lang].label}
                      onClick={() => { setLanguage(lang); setLangDropdown(false); }}
                      className={`flex items-center gap-2 px-3 py-2 hover:bg-[#e0fcf7] transition ${language===lang ? 'bg-[#e0fcf7]' : ''} ${idx===0 ? 'rounded-t-xl' : ''} ${idx===2 ? 'rounded-b-xl' : ''}`}
                    >
                      <span className="rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center overflow-hidden border-2 border-[#48dec8] bg-white">
                        <img src={flagMap[lang].src} alt={flagMap[lang].alt} className="object-cover rounded-full w-6 h-6 md:w-8 md:h-8" />
                      </span>
                      <span className="text-xs md:text-base font-semibold text-black">{flagMap[lang].label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Hamburger Icon */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none focus-visible:ring-2 border border-[rgba(72,222,200,0.4)] bg-white/80 shadow"
              aria-label="Open menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className={`block h-0.5 w-6 transition-all rounded-full`} style={{background: accentDark, ...(menuOpen ? {transform: "rotate(45deg) translateY(8px)"} : {})}}></span>
              <span className={`block h-0.5 w-6 transition-all rounded-full`} style={{background: accentDark, ...(menuOpen ? {opacity: 0} : {})}}></span>
              <span className={`block h-0.5 w-6 transition-all rounded-full`} style={{background: accentDark, ...(menuOpen ? {transform: "-rotate-45 -translate-y-2"} : {})}}></span>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 border-t border-[rgba(72,222,200,0.18)] flex flex-col items-center gap-2 py-4 animate-fadeIn shadow-xl rounded-b-2xl">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`w-40 px-4 py-2 rounded-full transition font-semibold text-lg focus:outline-none focus-visible:ring-2 hover:scale-105 hover:shadow-lg relative`}
                style={active === section.id
                  ? {background: accent, color: "white", boxShadow: `0 2px 8px 0 ${accentLight}`}
                  : {background: "rgba(255,255,255,0.7)", color: accentDark, border: `1px solid ${accent}`, boxShadow: "none"}}
                onClick={() => handleNavClick(section.id)}
              >
                {translations[language].nav[section.id as keyof typeof translations[Language]['nav']]}
                {active === section.id && (
                  <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-6 h-1 rounded-full animate-pulse" style={{background: accentDark, boxShadow: `0 2px 8px 0 ${accent}33`}}></span>
                )}
              </button>
            ))}
          </div>
        )}
      </nav>
      {/* Spacer for fixed nav */}
      <div className="h-24" />
      {/* Main Content */}
      <main className="w-full max-w-3xl flex-1 flex flex-col items-center justify-center relative z-10 px-2 sm:px-4">
        {active === "home" && (
          <>
            {/* Hero Section - Brief Welcome */}
            <header className="w-full max-w-3xl mx-auto py-6 sm:py-8 flex flex-col items-center justify-center text-center relative z-10 px-2">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-tight w-full text-center" style={{color: accentDark}}>{translations[language].welcome}</h1>
              <p className="text-base sm:text-lg md:text-xl mb-4 text-center max-w-2xl mx-auto" style={{color: textSecondary}}>
                {translations[language].welcomeText}
              </p>
            </header>
            {/* Clinic Photos Slideshow - right after welcome */}
            <section className="w-full max-w-3xl mx-auto mt-4 flex flex-col items-center gap-3 sm:gap-4 px-1">
              <h2 className="text-lg sm:text-2xl font-bold mb-2" style={{color: accentDark}}>{translations[language].clinic}</h2>
              <Slideshow images={[
                '/clinic/clinic1.jpg',
                '/clinic/clinic2.jpg',
                '/clinic/clinic3.jpg',
                '/clinic/clinic4.jpg',
                '/clinic/clinic5.jpg',
                '/clinic/clinic6.jpg',
                '/clinic/clinic7.jpg',
                '/clinic/clinic8.jpg',
              ]} altText="Clinic photo" />
              <p className="max-w-xl text-sm sm:text-base mt-2" style={{color: textPrimary}}>
                {translations[language].clinicText}
              </p>
            </section>
            {/* Context/Values Section - between slideshows */}
            <section className="w-full max-w-3xl mx-auto mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 bg-white/80 rounded-2xl shadow-lg p-4 sm:p-8 border" style={{borderColor: accentLight}}>
              <h2 className="text-base sm:text-xl font-semibold mb-1" style={{color: accentDark}}>{translations[language].why}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full text-left text-sm sm:text-base" style={{color: textPrimary}}>
                {translations[language].whyList.map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full bg-[#48dec8] mr-2"></span> {item}</li>
                ))}
              </ul>
              <p className="mt-2 text-center text-xs sm:text-base" style={{color: textSecondary}}>
                {translations[language].whyText}
              </p>
            </section>
            {/* Our Work Slideshow - after context */}
            <section className="w-full max-w-3xl mx-auto mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 px-1">
              <h2 className="text-lg sm:text-2xl font-bold mb-2" style={{color: accentDark}}>{translations[language].work}</h2>
              <Slideshow images={[
                '/images/img1.png',
                '/images/img2.png',
                '/images/img3.png',
              ]} altText="Smile transformation" />
              <p className="max-w-xl text-sm sm:text-base mt-2" style={{color: textPrimary}}>
                {translations[language].workText}
              </p>
            </section>
            {/* Book Appointment CTA at the end */}
            <section className="w-full max-w-3xl mx-auto mt-8 sm:mt-10 flex flex-col items-center justify-center gap-2 sm:gap-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg shadow transition hover:scale-105 bg-gradient-to-r from-[#48dec8] to-[#1a8c7c] text-white border-2 border-[#48dec8] focus:outline-none focus:ring-2 focus:ring-[#48dec8]"
                style={{letterSpacing: '.01em'}}>
                {translations[language].book}
              </button>
              <span className="text-xs sm:text-base mt-1" style={{color: textSecondary}}>{translations[language].bookMsg}</span>
            </section>
          </>
        )}
        {active === "about" && (
          <section className="animate-fadeIn flex flex-col items-center text-center gap-6 sm:gap-8 bg-white/90 rounded-2xl shadow-xl p-4 sm:p-10 border w-full" style={{borderColor: accentLight}}>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 sm:w-32 sm:h-32" style={{background: accent, opacity: 0.10, borderRadius: '9999px', filter: 'blur(32px)'}}></div>
            <h2 className="text-lg sm:text-2xl font-bold" style={{color: accentDark}}>{translations[language].about.title}</h2>
            {/* Doctor Card - Centered and prominent */}
            <div className="flex flex-col items-center w-full max-w-xs sm:max-w-md mx-auto mb-4 sm:mb-6">
              <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 sm:p-8 border-2 w-full" style={{borderColor: accentDark, boxShadow: `0 8px 32px 0 ${accentDark}22`}}>
                <img src="/staff/doctor.jpg" alt="Dr.Hakim" className="w-20 h-20 sm:w-28 sm:h-28 rounded-full mb-3 sm:mb-4 shadow-xl object-cover border-4 border-[#48dec8]" />
                <h3 className="text-lg sm:text-2xl font-bold mb-1" style={{color: accentDark}}>{translations[language].about.doctor.name}</h3>
                <p className="text-xs sm:text-base mb-1 sm:mb-2 font-medium" style={{color: textSecondary}}>{translations[language].about.doctor.title}</p>
                <p className="text-xs sm:text-base" style={{color: textPrimary}}>
                  {translations[language].about.doctor.bio}
                </p>
              </div>
            </div>
            {/* Nurse Card - Below, less prominent */}
            <div className="flex flex-col items-center w-full max-w-[180px] sm:max-w-xs mx-auto opacity-90">
              <div className="flex flex-col items-center bg-white rounded-xl shadow p-2 sm:p-4 border w-full" style={{borderColor: accentLight}}>
                <img src="/staff/nurse.jpg" alt="Nurse Amina" className="w-14 h-14 sm:w-20 sm:h-20 rounded-full mb-1 sm:mb-2 shadow object-cover" />
                <h3 className="text-base sm:text-lg font-semibold mb-1" style={{color: accentDark}}>{translations[language].about.nurse.name}</h3>
                <p className="text-[10px] sm:text-xs mb-1" style={{color: textSecondary}}>{translations[language].about.nurse.title}</p>
                <p className="text-xs sm:text-sm" style={{color: textPrimary}}>
                  {translations[language].about.nurse.bio}
                </p>
              </div>
            </div>
            <ul className="text-left list-disc list-inside mt-4 sm:mt-6 text-xs sm:text-base" style={{color: accentDark}}>
              {translations[language].about.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </section>
        )}
        {active === "contact" && (
          <section id="contact" className="animate-fadeIn flex flex-col items-center text-center gap-6 sm:gap-10 rounded-2xl shadow-2xl p-4 sm:p-10 border relative overflow-hidden w-full" style={{borderColor: accentDark, background: `radial-gradient(ellipse at 60% 20%, #e0fcf7 60%, #b2f0e6 100%)`}}>
            {/* Decorative SVG for extra distinction */}
            <svg className="absolute -top-8 sm:-top-10 -right-8 sm:-right-10 w-32 h-32 sm:w-56 sm:h-56 z-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.13}}>
              <ellipse cx="100" cy="100" rx="100" ry="80" fill="#48dec8" />
            </svg>
            <div className="absolute -bottom-8 sm:-bottom-10 -left-8 sm:-left-10 w-24 h-24 sm:w-40 sm:h-40 z-0" style={{background: accentDark, opacity: 0.08, borderRadius: '9999px', filter: 'blur(16px)'}}></div>
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight mb-2 z-10" style={{color: accentDark, letterSpacing: ".01em"}}>{translations[language].contact.title}</h2>
            <div className="flex flex-col md:flex-row md:justify-center gap-6 sm:gap-10 w-full items-stretch z-10">
              <div className="flex-1 flex flex-col gap-4 sm:gap-6 items-center md:items-start justify-center">
                {/* Phone */}
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-lg w-full max-w-xs mx-auto justify-start md:justify-start pl-6 sm:pl-8">
                  <svg width="24" height="24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" style={{stroke: accent}}><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z"/></svg>
                  <a href="tel:+1234567890" className="font-semibold text-black hover:text-[#48dec8] transition">{translations[language].contact.phone}</a>
                </div>
                {/* Email */}
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-lg w-full max-w-xs mx-auto justify-start md:justify-start pl-6 sm:pl-8">
                  <svg width="24" height="24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" style={{stroke: accent}}><rect x="2" y="4" width="20" height="16" rx="4"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a href="mailto:info@drhakimdental.com" className="font-semibold text-black hover:text-[#48dec8] transition">{translations[language].contact.email}</a>
                </div>
                {/* Address */}
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-lg w-full max-w-xs mx-auto justify-start md:justify-start pl-6 sm:pl-8">
                  <svg width="24" height="24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" style={{stroke: accent}}><path d="M17.657 16.657L13.414 12.414a4 4 0 1 0-1.414 1.414l4.243 4.243a1 1 0 0 0 1.414-1.414z"/><circle cx="11" cy="11" r="8"/></svg>
                  <span className="font-semibold text-black">{translations[language].contact.address}</span>
                </div>
                {/* Hours */}
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-lg w-full max-w-xs mx-auto justify-start md:justify-start pl-6 sm:pl-8">
                  <svg width="24" height="24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" style={{stroke: accent}}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span className="font-semibold text-black">{translations[language].contact.hours}</span>
                </div>
                {/* Saturday - ensure same alignment and icon size */}
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-lg w-full max-w-xs mx-auto justify-start md:justify-start pl-6 sm:pl-8">
                  <svg width="24" height="24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1" style={{stroke: accent}}><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 2v4M16 2v4"/><path d="M4 10h16"/></svg>
                  <div className="flex flex-col text-left w-full">
                    <span className="font-semibold text-black">{translations[language].contact.saturday.split(":")[0]}:</span>
                    <span className="font-semibold text-black mt-0.5">{translations[language].contact.saturday.split(":").slice(1).join(":").trim()}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center w-full gap-2 sm:gap-4 mt-4 sm:mt-0">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-lg border bg-white/90 flex flex-col items-center p-1 sm:p-2" style={{borderColor: accent, boxShadow: `0 8px 32px 0 ${accentDark}22`}}>
                  <iframe
                    title="Dr.Hakim Dental Clinic Location"
                    src="https://www.google.com/maps?q=Hifzi+Bjelevca+118,+Sarajevo+71000&output=embed"
                    width="100%"
                    height="180"
                    className="rounded-xl"
                    style={{ border: 0, minHeight: '120px', minWidth: '120px', borderRadius: '0.75rem', boxShadow: `0 4px 24px 0 ${accent}22` }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <span className="mt-2 text-xs sm:text-sm" style={{color: textSecondary}}>{translations[language].contact.mapNote}</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <footer className="w-full max-w-3xl mx-auto py-6 text-center text-gray-500 text-sm relative z-10">
        &copy; {new Date().getFullYear()} Dr.Hakim Dental Clinic. All rights reserved.
      </footer>
    </div>
  );
}

// Slideshow component (at bottom of file)
function Slideshow({ images, altText }: { images: string[]; altText: string }) {
  const [index, setIndex] = React.useState(0);
  const [fadeInIndex, setFadeInIndex] = React.useState<number | null>(null);
  const [fadeIn, setFadeIn] = React.useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const fadeDuration = 700; // ms (global standard for smoothness)
  const displayDuration = 5000; // ms (5 seconds per image)

  // Start/reset auto-slide interval
  function startInterval() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      triggerFade(index === images.length - 1 ? 0 : index + 1);
    }, displayDuration);
  }
  function resetInterval() {
    startInterval();
  }

  // Only fade in new image, never fade out current
  function triggerFade(newIdx: number) {
    setFadeInIndex(newIdx);
    setFadeIn(false); // Start at opacity 0
  }

  // When fadeInIndex changes, trigger fade-in after mount
  React.useEffect(() => {
    if (fadeInIndex !== null) {
      const timeout = setTimeout(() => setFadeIn(true), 20); // allow DOM paint
      const finish = setTimeout(() => {
        setIndex(fadeInIndex);
        setFadeIn(false);
        setFadeInIndex(null);
      }, fadeDuration + 20);
      return () => { clearTimeout(timeout); clearTimeout(finish); };
    }
  }, [fadeInIndex]);

  const prev = () => {
    triggerFade(index === 0 ? images.length - 1 : index - 1);
    resetInterval();
  };
  const next = () => {
    triggerFade(index === images.length - 1 ? 0 : index + 1);
    resetInterval();
  };

  React.useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current!);
    // eslint-disable-next-line
  }, [images.length, index]);

  return (
    <div className="relative w-full max-w-xs sm:max-w-xl aspect-[16/9] rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
      {/* Current image always visible */}
      <img
        src={images[index]}
        alt={altText}
        className="object-cover w-full h-full absolute top-0 left-0 select-none"
        style={{ borderRadius: '0.75rem', zIndex: 1, opacity: 1, transition: 'none' }}
        draggable={false}
      />
      {/* Next image fades in over current */}
      {fadeInIndex !== null && (
        <img
          src={images[fadeInIndex]}
          alt={altText}
          className="object-cover w-full h-full absolute top-0 left-0 select-none pointer-events-none"
          style={{
            borderRadius: '0.75rem',
            zIndex: 2,
            opacity: fadeIn ? 1 : 0,
            transition: `opacity ${fadeDuration}ms ease-in-out`,
          }}
          draggable={false}
        />
      )}
      {/* Navigation arrows always on top */}
      <button onClick={prev} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-[#48dec8]/80 text-[#1a8c7c] rounded-full p-2 shadow-md focus:outline-none focus:ring-2 transition">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button onClick={next} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-[#48dec8]/80 text-[#1a8c7c] rounded-full p-2 shadow-md focus:outline-none focus:ring-2 transition">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
        {images.map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === index ? 'bg-[#48dec8]' : 'bg-white/70 border border-[#48dec8]'}`}></span>
        ))}
      </div>
    </div>
  );
}
