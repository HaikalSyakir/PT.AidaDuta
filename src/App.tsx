/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  History, 
  GraduationCap, 
  Gavel, 
  Globe, 
  ShieldCheck,
  Eye,
  Rocket,
  MessageCircle
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Global Network", href: "#network" },
    { name: "LPK", href: "#lpk" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 font-body ${isScrolled ? "bg-surface-container-low/90 backdrop-blur-xl border-b border-secondary/10 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop flex justify-between items-center">
        <div className="font-display text-2xl md:text-3xl text-secondary tracking-tighter font-medium underline decoration-secondary/30 underline-offset-8">
          Aida Duta
        </div>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-[10px] font-bold tracking-[0.15em] uppercase text-on-surface/70 hover:text-secondary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-secondary text-surface-container-lowest font-bold text-[10px] tracking-widest uppercase px-6 py-3 hover:bg-glow-gold transition-all duration-300">
            Contact Us
          </button>
          <button 
            className="md:hidden text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface-container-high border-b border-secondary/10"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[10px] font-bold tracking-[0.15em] uppercase text-on-surface/70 hover:text-secondary"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-gradient-to-b from-muted-maroon to-surface">
    <div className="absolute inset-0 opacity-40 z-0">
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHp99DE45eR6S5kZTuRRryBvbp5TQSShCLWmGF8IyDuTJQi0XBR_0fBWOB3mVxSvgntQBlxXZ5D1bfpKrWtuf5DSdbDqYdHR-m-XswxrFYFDrItA7rXUQB9-KsgUSgFOA9gNimaIEfzPM2bXsSdfPt_h7ixK7K_Bwm1Bjgdw19iXdvl8MskWlqm2LU_hTN0Mvsv3qHY4PK5sHigMKScCx_UtvNcw5Cum11s6V6d1bXw-o6g3v2jXNaVkqgjU-yOHvcBHFQRErq48g" 
        alt="Futuristic globe"
        className="w-full h-full object-cover mix-blend-screen"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="relative z-10 text-center px-6">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-body text-[10px] md:text-xs font-bold text-secondary tracking-[0.4em] mb-6 block uppercase"
      >
        ESTABLISHED INTEGRITY
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-display text-4xl md:text-7xl font-bold text-on-surface mb-8 max-w-5xl mx-auto leading-tight"
      >
        PT Aida Duta Indonesia Sejahtera
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="font-body text-lg md:text-xl text-on-surface/80 max-w-2xl mx-auto mb-12"
      >
        Membangun Masa Depan dengan Integritas dan Jangkauan Global
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-6 justify-center"
      >
        <button className="bg-secondary text-surface-container-lowest font-body font-bold text-[10px] tracking-widest uppercase px-10 py-4 hover:scale-105 transition-transform duration-300">
          EXPLORE SOLUTIONS
        </button>
        <button className="border border-secondary text-secondary font-body font-bold text-[10px] tracking-widest uppercase px-10 py-4 hover:bg-secondary/10 transition-all duration-300">
          OUR LEGACY
        </button>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-section-gap px-6 md:px-margin-desktop bg-surface">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-on-surface mb-8 leading-tight">PT AIDA DUTA INDONESIA SEJAHTERA</h2>
        <p className="font-body text-lg text-on-surface/70 mb-6 leading-relaxed">
         PT Aida Duta Indonesia Sejahtera adalah perusahaan yang bergerak di bidang penempatan Pekerja Migran Indonesia (PMI) ke berbagai negara tujuan dengan komitmen tinggi terhadap kesejahteraan dan perlindungan tenaga kerja.
        </p>
        <p className="font-body text-lg text-on-surface/70 leading-relaxed">
          Kami berdedikasi untuk memberikan layanan profesional, transparan, dan aman bagi setiap pekerja yang ingin mencari peluang kerja di luar negeri.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative h-[400px] md:h-[600px] glass-card p-4 overflow-hidden"
      >
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbesjk83sycbpoIHwzfDnXIgkEKt_LeJAE8_1Kml-ujyJ5fIC9-hT8brBrXAobNL6XXCendeb82vU2I7x_8w7usX0ns4lxZFypejUUwmBVwQSZxXZA2B8tMzjd2sPBOij71jRiGudTS7tuvPvSdYyvDOs23yXrmt-Ejk0LTrphS3oUO1n7xlfpVSHMBtOeWMYED2lvDiXhi092GBtzKC0xDXZ6XIP505sFnp48uQB1erEFbqVp47pMeCemfrTzYyP7rsXjdyWK_ks" 
          alt="Corporate Skyscraper"
          className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  </section>
);

const VisionMission = () => (
  <section className="py-section-gap px-6 md:px-margin-desktop bg-surface-container-lowest">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      <motion.div 
        whileHover={{ y: -10 }}
        className="glass-card p-8 md:p-12 gold-glow transition-all duration-500 border border-secondary/10"
      >
        <Eye className="text-secondary w-12 h-12 mb-8" />
        <h3 className="font-display text-2xl md:text-3xl font-medium text-on-surface mb-6">VISI</h3>
        <p className="font-body text-lg text-on-surface/70 leading-relaxed">
          Menjadi perusahaan penempatan tenaga kerja yang terpercaya, profesional, dan berorientasi pada kesejahteraan pekerja migran Indonesia.
        </p>
      </motion.div>
      <motion.div 
        whileHover={{ y: -10 }}
        className="glass-card p-8 md:p-12 gold-glow transition-all duration-500 border border-secondary/10"
      >
        <Rocket className="text-secondary w-12 h-12 mb-8" />
        <h3 className="font-display text-2xl md:text-3xl font-medium text-on-surface mb-6">Misi</h3>
        <ul className="space-y-6">
          {[
            "Menyediakan layanan penempatan pekerja migran yang aman, transparan, dan sesuai dengan peraturan yang berlaku.",
            "Meningkatkan kompetensi tenaga kerja melalui pelatihan yang berkualitas sebelum diberangkatkan.",
            "Memberikan perlindungan dan pendampingan kepada pekerja migran sebelum, selama, dan setelah bekerja di luar negeri.",
            "Membangun kemitraan strategis dengan perusahaan pengguna tenaga kerja di luar negeri."
          ].map((item, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="text-secondary font-bold font-body">0{i + 1}</span>
              <p className="text-on-surface/70 font-body text-base">{item}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

const ServicesList = () => {
  const services = [
    { title: "Global Recruitment", desc: "Strategic sourcing and vetting of high-caliber Indonesian professionals for international markets.", icon: <Users /> },
    { title: "Job Placement", desc: "Matching skillsets with global industry demands in hospitality, healthcare, and engineering.", icon: <History /> },
    { title: "Competency Training", desc: "Standardized training programs through our specialized LPK facility to meet international benchmarks.", icon: <GraduationCap /> },
    { title: "Legal Compliance", desc: "Ensuring all placement activities adhere to Indonesian and international labor laws strictly.", icon: <Gavel /> },
    { title: "Migration Support", desc: "End-to-end documentation, visa processing, and pre-departure orientation services.", icon: <Globe /> },
    { title: "Career Consultancy", desc: "Guided career pathing and development for professionals seeking long-term global growth.", icon: <ShieldCheck /> },
  ];

  return (
    <section id="services" className="py-section-gap px-6 md:px-margin-desktop bg-surface">
      <div className="text-center mb-24">
        <span className="font-body text-xs font-bold text-secondary tracking-widest mb-4 block uppercase">OUR EXPERTISE</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-on-surface">Comprehensive Professional Services</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-secondary/10">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 border-b border-r border-secondary/10 hover:bg-primary-container/20 transition-all duration-500 group"
          >
            <div className="text-secondary mb-6 group-hover:scale-110 transition-transform">
              {s.icon}
            </div>
            <h4 className="font-display text-2xl text-on-surface mb-4">{s.title}</h4>
            <p className="text-on-surface/60 font-body text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Network = () => (
  <section id="network" className="py-section-gap px-6 md:px-margin-desktop bg-surface-container-lowest overflow-hidden">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
      <div className="order-2 md:order-1">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
          <motion.img 
            initial={{ filter: "grayscale(100%)", opacity: 0.5 }}
            whileInView={{ filter: "grayscale(0%)", opacity: 0.8 }}
            viewport={{ once: true }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbUu8KQqDn-LVkP_HEZhtkLW_0BOB3loKRxi2HZD7LanBVUOi0HaZiEVnSMkMaFjC0samFFhpR-LWgsMBWeHRKxQzd-JbxB_DIR5YJ2rShbBpHNvl2T5uNtsEqG1OSvrwHfAjn88gDMztoiwy_XWVZafCqfjyi3nvBRku-YuTschtMb2MURRHUnwmzqTjlBx6amM9gut-YKy35AJ81gd1BWUqgflk80OPRhpM4R47G6PZaB93bIhKTw1HDlpXauQO1tnxMS4IhcIk" 
            alt="Global Connectivity"
            className="w-full glass-card border-none"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="order-1 md:order-2">
        <span className="font-body text-xs font-bold text-secondary tracking-widest mb-4 block uppercase">EXPANSIVE REACH</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-on-surface mb-8">Bridging Continents</h2>
        <p className="font-body text-lg text-on-surface/70 mb-12 leading-relaxed">
          With partner networks spanning Europe, Asia, and the Middle East, our reach is truly global. We maintain strong ties with top-tier industrial conglomerates and service providers across major economic hubs.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-secondary font-display text-4xl mb-2">25+</div>
            <div className="font-body text-[10px] font-bold text-on-surface/50 tracking-widest uppercase">PARTNER COUNTRIES</div>
          </div>
          <div>
            <div className="text-secondary font-display text-4xl mb-2">500+</div>
            <div className="font-body text-[10px] font-bold text-on-surface/50 tracking-widest uppercase">GLOBAL CORPORATIONS</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LPKTraining = () => (
  <section id="lpk" className="py-section-gap px-6 md:px-margin-desktop bg-surface">
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto glass-card flex flex-col md:flex-row overflow-hidden border-secondary/10"
    >
      <div className="md:w-1/2 min-h-[400px]">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwJ9h3y-d2tRN6MfeqFusT3QpQZOQvIWaU2mNVem348AFWNuf9lWWV9W1UKPVZ8Ud7rQvd0P6rEhiJDbk0zAUuQSxNYS70o7CWl7O0IQ6-4XbK2EFLBhBtmj2KMLA2zwIJn1VaVjbtOfkqBvdr1h5-veVd2zj2jHjnT-lva7jN-aTNo3u0LeyDIXSNsqKaLmD9KOk2NdGqHYmOzdHBhcmCWDDS_Ei8BuQpunuRrywg7yprvqnaeL7_Bo8gBQtvfKTW_OojiBCdXic" 
          alt="Training Center"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <span className="font-body text-xs font-bold text-secondary tracking-widest mb-6 block uppercase">PROFESSIONAL TRAINING CENTER</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-on-surface mb-8">LPK: Advanced Learning for Professional Excellence</h2>
        <p className="font-body text-lg text-on-surface/70 mb-10 leading-relaxed">
          Our specialized training center is equipped with state-of-the-art facilities designed to simulate real-world international working environments. We focus on language proficiency, cultural adaptation, and technical mastery.
        </p>
        <div className="space-y-4">
          {["International Standard Certification", "Native Language Instructors", "Direct Placement Guarantee"].map((text, i) => (
            <div key={i} className="flex items-center gap-4 text-on-surface">
              <CheckCircle2 className="text-secondary w-5 h-5 flex-shrink-0" />
              <span className="font-body text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

const GalleryGrid = () => (
  <section id="gallery" className="py-section-gap px-6 md:px-margin-desktop bg-surface">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-on-surface">
        <div>
          <span className="font-body text-xs font-bold text-secondary tracking-widest mb-4 block uppercase">DOCUMENTATION</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Moments of Excellence</h2>
        </div>
        <button className="text-secondary font-body text-xs font-bold tracking-widest uppercase border-b border-secondary pb-1 flex items-center gap-2 hover:gap-4 transition-all">
          VIEW ALL UPDATES <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
        <div className="md:col-span-2 md:row-span-2 overflow-hidden glass-card border-none">
          <img 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArq-dpzJLVA2n6-qjhNl1E3QOMhW8VhQR0gaRjgkbBu97PZEODTzOrTabO5cCheSbKU9Dfvp9ZTYuhzX1c0q1xtVhXaYrzxviXXTvkL9rJCMBvtLgtkahPmze5oenhDWznvGOz61mf0rOk8hmxJ76yg-EA-12zT5FexuZN4xvvV5KzDuQNXUr1t2BkIgQKbVFjEKGx6x5qP89V9YIyqw54ECwoBc4fQngrHZu2ZLdr4oNND1IBh04-BPd5n7AVXE6eKpTjCzdDCf8" 
            alt="Boardroom"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="overflow-hidden glass-card border-none">
          <img 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFbHLvD9_eeM-rl47Nzp7YIeozHeTlJfEqSZPYbRJchj1DAqw5jckysvGDV2Jdwd028Yt8kQvYudXsMU3BanyKomKEM1SFuI0VcfTr1GZdQmedRq4Rhv3Hg-OtGnb5nheoKIB2wF9GPRkP_6n_42LF2RI9hhZZWsM5XHihS4by4RpmgmCZvQUv8nCevBxGEITnTXcCDSP7aFFW5S5J-3rENsEiX2W3KVPx5P1ZLGR3ao-ybWeOPomYX8MG2lLsW8b--jyuW75vzbY" 
            alt="Handshake"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:row-span-2 overflow-hidden glass-card border-none">
          <img 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXV8UjfR2qcLesWLi_CyFahmgj4LoROaESSJwJjMnpZsAcOKos66lObfENbWpwN-VGs7wulPIZP57gs9ZzkecXl874OMdoL-xrSNkStxr_KXcHP1_xitYJXlLLqpgZiy_6svF7zgA0Mw3s_-mcUYnf9e4b4bnAwTyx0MguOfFB72W9D4qwDmqWHb5cf4mkWvg9gLPhBkUbfFs1glu_KMaImg3YByTdUih9bsbIj8GIMIRU5n27HxgXY4bOyurqLbv8v_M-qYBc96k" 
            alt="Graduates"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="overflow-hidden glass-card border-none">
          <img 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnyjTiXbC_Da2aO9ivmhgULDxWlTrzse1p3U0Z2YstgKF2M_5HUuPR0A-7-3JZanNi0QEKO15BIUKWgkE4YkHts8cmHLFgmmx-qXpUhYouj-U-EV_8PlbznS_XzDWBjYRq7Nb8z6jdyOshr0ZFEbM0Z7cjWNl1HebPA-JvRYr_Hva5Kf2gY_rVfDtu-ziCTrkoGvDFC6sXExMPft1Vkvdh6rvgLaqQ3hLjYzTrnS4Ztfba5FmCEmqLkjIGy_w32rg8wiG2wM6wL3E" 
            alt="Contract Signing"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="py-section-gap px-6 md:px-margin-desktop bg-surface-container-lowest">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-on-surface mb-8">Start Your Global Journey</h2>
        <p className="font-body text-lg text-on-surface/70 mb-12 leading-relaxed">
          Connect with our team to explore international opportunities or to partner with us for your recruitment needs.
        </p>
        <div className="space-y-8 mb-12">
          {[
            { icon: <MapPin className="text-secondary w-5 h-5" />, text: "Jl. Raya Global No. 88, Jakarta Selatan, Indonesia" },
            { icon: <Mail className="text-secondary w-5 h-5" />, text: "contact@aidaduta.co.id" },
            { icon: <Phone className="text-secondary w-5 h-5" />, text: "+62 21 555 1234" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="p-3 bg-primary-container/30 border border-secondary/20 group-hover:bg-secondary/10 transition-colors">
                {item.icon}
              </div>
              <span className="text-on-surface font-body text-sm">{item.text}</span>
            </div>
          ))}
        </div>
        <button className="flex items-center gap-4 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-[#25D366]/20 font-body text-sm tracking-wide">
          <MessageCircle className="w-5 h-5 fill-current" />
          WHATSAPP SUPPORT
        </button>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-12 border border-secondary/10"
      >
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="font-body text-[10px] font-bold text-on-surface/50 tracking-widest uppercase block">FULL NAME</label>
            <input className="w-full bg-transparent border-b border-secondary/30 focus:border-secondary outline-none py-2 text-on-surface font-body transition-colors" type="text" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="font-body text-[10px] font-bold text-on-surface/50 tracking-widest uppercase block">EMAIL ADDRESS</label>
            <input className="w-full bg-transparent border-b border-secondary/30 focus:border-secondary outline-none py-2 text-on-surface font-body transition-colors" type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <label className="font-body text-[10px] font-bold text-on-surface/50 tracking-widest uppercase block">MESSAGE</label>
            <textarea className="w-full bg-transparent border-b border-secondary/30 focus:border-secondary outline-none py-2 text-on-surface font-body transition-colors resize-none" rows={4} placeholder="Your message here..."></textarea>
          </div>
          <button className="w-full bg-secondary text-surface-container-lowest font-body font-bold text-[10px] tracking-widest uppercase py-4 hover:bg-glow-gold transition-colors">
            SEND INQUIRY
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

const Foot = () => (
  <footer className="w-full px-6 md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-secondary/10">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 font-body">
        <div className="text-center md:text-left">
          <div className="font-display text-3xl text-secondary mb-4">Aida Duta</div>
          <p className="text-[10px] text-on-surface/40 tracking-wider uppercase font-bold">© 2024 PT Aida Duta Indonesia Sejahtera. All Rights Reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {["Privacy Policy", "Terms of Service", "Careers"].map((link) => (
            <a key={link} href="#" className="text-[10px] font-bold text-on-surface/40 hover:text-secondary tracking-widest uppercase transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-secondary/30">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <ServicesList />
      <Network />
      <LPKTraining />
      <GalleryGrid />
      <ContactSection />
      <Foot />
    </div>
  );
}

