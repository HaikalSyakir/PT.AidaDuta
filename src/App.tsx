/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState, useEffect, createContext, useContext } from "react";
import { 
  Menu, X, MapPin, Mail, Phone, ArrowRight, CheckCircle2, 
  Users, History, GraduationCap, Gavel, Globe, ShieldCheck,
  Eye, Rocket, MessageCircle
} from "lucide-react";

type Lang = "id" | "en" | "zh";

const translations = {
  id: {
    nav: { home: "Beranda", about: "Tentang", services: "Layanan", network: "Jaringan Global", lpk: "LPK", gallery: "Galeri", contact: "Hubungi Kami" },
    hero: { badge: "INTEGRITAS YANG TELAH TERBUKTI", title: "PT Aida Duta Indonesia Sejahtera", subtitle: "Membangun Masa Depan dengan Integritas dan Jangkauan Global", btnExplore: "JELAJAHI SOLUSI", btnLegacy: "WARISAN KAMI" },
    about: { badge: "SIAPA KAMI", title: "Meningkatkan Standar Global dalam Penempatan Profesional", p1: "PT Aida Duta Indonesia Sejahtera adalah agen rekrutmen dan penempatan kerja internasional terkemuka yang berdedikasi menjembatani kesenjangan antara talenta Indonesia dan peluang global.", p2: "Fondasi kami dibangun di atas integritas mutlak, memastikan setiap profesional yang kami tempatkan dan setiap mitra yang kami layani mendapatkan tingkat keunggulan yang melampaui batas." },
    vision: { visionTitle: "Visi Kami", visionText: "Menjadi pemimpin global dalam solusi sumber daya manusia profesional, diakui atas standar etika yang teguh dan kemampuan kami untuk memberdayakan generasi profesional Indonesia berikutnya di panggung dunia.", missionTitle: "Misi Kami", missionItems: ["Menyediakan pelatihan dan sertifikasi kelas dunia bagi tenaga kerja Indonesia.", "Membangun kemitraan berkelanjutan dengan industri internasional.", "Memastikan proses rekrutmen yang adil, transparan, dan legal bagi semua pemangku kepentingan."] },
    services: { badge: "KEAHLIAN KAMI", title: "Layanan Profesional yang Komprehensif", items: [{ title: "Rekrutmen Global", desc: "Pencarian dan seleksi strategis profesional Indonesia berkaliber tinggi untuk pasar internasional." }, { title: "Penempatan Kerja", desc: "Mencocokkan keahlian dengan permintaan industri global di bidang perhotelan, kesehatan, dan teknik." }, { title: "Pelatihan Kompetensi", desc: "Program pelatihan terstandarisasi melalui fasilitas LPK kami untuk memenuhi tolok ukur internasional." }, { title: "Kepatuhan Hukum", desc: "Memastikan semua kegiatan penempatan mematuhi hukum ketenagakerjaan Indonesia dan internasional." }, { title: "Dukungan Migrasi", desc: "Layanan dokumentasi, pengurusan visa, dan orientasi pra-keberangkatan dari awal hingga akhir." }, { title: "Konsultasi Karir", desc: "Perencanaan dan pengembangan karir terpandu bagi profesional yang mencari pertumbuhan global jangka panjang." }] },
    network: { badge: "JANGKAUAN LUAS", title: "Menghubungkan Benua", desc: "Dengan jaringan mitra yang mencakup Eropa, Asia, dan Timur Tengah, jangkauan kami benar-benar global. Kami menjaga hubungan kuat dengan konglomerat industri dan penyedia layanan kelas atas di pusat-pusat ekonomi utama.", countries: "NEGARA MITRA", corps: "KORPORASI GLOBAL" },
    lpk: { badge: "PUSAT PELATIHAN PROFESIONAL", title: "LPK: Pembelajaran Lanjutan untuk Keunggulan Profesional", desc: "Pusat pelatihan kami dilengkapi dengan fasilitas canggih yang dirancang untuk mensimulasikan lingkungan kerja internasional nyata. Kami berfokus pada kemampuan bahasa, adaptasi budaya, dan penguasaan teknis.", features: ["Sertifikasi Standar Internasional", "Instruktur Bahasa Asli", "Jaminan Penempatan Langsung"] },
    gallery: { badge: "DOKUMENTASI", title: "Momen Keunggulan", viewAll: "LIHAT SEMUA UPDATE" },
    contact: { title: "Mulai Perjalanan Global Anda", desc: "Hubungi tim kami untuk menjelajahi peluang internasional atau bermitra dengan kami untuk kebutuhan rekrutmen Anda.", address: "Jl. Raya Global No. 88, Jakarta Selatan, Indonesia", namePlaceholder: "NAMA LENGKAP", emailPlaceholder: "ALAMAT EMAIL", messagePlaceholder: "PESAN", nameInput: "John Doe", emailInput: "john@example.com", messageInput: "Pesan Anda di sini...", whatsapp: "DUKUNGAN WHATSAPP", send: "KIRIM PERTANYAAN" },
    footer: { copy: "© 2024 PT Aida Duta Indonesia Sejahtera. Seluruh Hak Cipta Dilindungi.", links: ["Kebijakan Privasi", "Syarat Layanan", "Karir"] },
  },
  en: {
    nav: { home: "Home", about: "About", services: "Services", network: "Global Network", lpk: "LPK", gallery: "Gallery", contact: "Contact Us" },
    hero: { badge: "ESTABLISHED INTEGRITY", title: "PT Aida Duta Indonesia Sejahtera", subtitle: "Building the Future with Integrity and Global Reach", btnExplore: "EXPLORE SOLUTIONS", btnLegacy: "OUR LEGACY" },
    about: { badge: "WHO WE ARE", title: "Elevating Global Standards in Professional Placement", p1: "PT Aida Duta Indonesia Sejahtera is a premier international recruitment and job placement agency dedicated to bridging the gap between Indonesian talent and global opportunities.", p2: "Our foundation is built on absolute integrity, ensuring that every professional we place and every partner we serve experiences a level of excellence that transcends borders." },
    vision: { visionTitle: "Our Vision", visionText: "To be the global leader in professional human resource solutions, recognized for our unwavering ethical standards and our ability to empower the next generation of Indonesian professionals on the world stage.", missionTitle: "Our Mission", missionItems: ["Providing world-class training and certification for Indonesian workers.", "Building sustainable partnerships with international industries.", "Ensuring fair, transparent, and legal recruitment processes for all stakeholders."] },
    services: { badge: "OUR EXPERTISE", title: "Comprehensive Professional Services", items: [{ title: "Global Recruitment", desc: "Strategic sourcing and vetting of high-caliber Indonesian professionals for international markets." }, { title: "Job Placement", desc: "Matching skillsets with global industry demands in hospitality, healthcare, and engineering." }, { title: "Competency Training", desc: "Standardized training programs through our specialized LPK facility to meet international benchmarks." }, { title: "Legal Compliance", desc: "Ensuring all placement activities adhere to Indonesian and international labor laws strictly." }, { title: "Migration Support", desc: "End-to-end documentation, visa processing, and pre-departure orientation services." }, { title: "Career Consultancy", desc: "Guided career pathing and development for professionals seeking long-term global growth." }] },
    network: { badge: "EXPANSIVE REACH", title: "Bridging Continents", desc: "With partner networks spanning Europe, Asia, and the Middle East, our reach is truly global. We maintain strong ties with top-tier industrial conglomerates and service providers across major economic hubs.", countries: "PARTNER COUNTRIES", corps: "GLOBAL CORPORATIONS" },
    lpk: { badge: "PROFESSIONAL TRAINING CENTER", title: "LPK: Advanced Learning for Professional Excellence", desc: "Our specialized training center is equipped with state-of-the-art facilities designed to simulate real-world international working environments. We focus on language proficiency, cultural adaptation, and technical mastery.", features: ["International Standard Certification", "Native Language Instructors", "Direct Placement Guarantee"] },
    gallery: { badge: "DOCUMENTATION", title: "Moments of Excellence", viewAll: "VIEW ALL UPDATES" },
    contact: { title: "Start Your Global Journey", desc: "Connect with our team to explore international opportunities or to partner with us for your recruitment needs.", address: "Jl. Raya Global No. 88, Jakarta Selatan, Indonesia", namePlaceholder: "FULL NAME", emailPlaceholder: "EMAIL ADDRESS", messagePlaceholder: "MESSAGE", nameInput: "John Doe", emailInput: "john@example.com", messageInput: "Your message here...", whatsapp: "WHATSAPP SUPPORT", send: "SEND INQUIRY" },
    footer: { copy: "© 2024 PT Aida Duta Indonesia Sejahtera. All Rights Reserved.", links: ["Privacy Policy", "Terms of Service", "Careers"] },
  },
  zh: {
    nav: { home: "首页", about: "关于我们", services: "服务", network: "全球网络", lpk: "培训中心", gallery: "图库", contact: "联系我们" },
    hero: { badge: "诚信立业", title: "PT Aida Duta Indonesia Sejahtera", subtitle: "以诚信为本，构建全球发展未来", btnExplore: "探索解决方案", btnLegacy: "我们的历史" },
    about: { badge: "关于我们", title: "提升专业人才安置的全球标准", p1: "PT Aida Duta Indonesia Sejahtera 是一家顶级的国际招聘与职业安置机构，致力于搭建印度尼西亚人才与全球机遇之间的桥梁。", p2: "我们以绝对诚信为基础，确保每一位被安置的专业人士和每一位合作伙伴都能体验到超越国界的卓越服务。" },
    vision: { visionTitle: "我们的愿景", visionText: "成为专业人力资源解决方案领域的全球领导者，以坚定不移的道德标准和赋能下一代印尼专业人士走向世界舞台的能力而著称。", missionTitle: "我们的使命", missionItems: ["为印尼劳动者提供世界级培训与认证。", "与国际行业建立可持续的合作伙伴关系。", "确保所有安置活动对所有利益相关方公平、透明且合法。"] },
    services: { badge: "我们的专长", title: "全面的专业服务", items: [{ title: "全球招聘", desc: "为国际市场战略性地搜寻和审核高素质的印尼专业人才。" }, { title: "职业安置", desc: "将专业技能与酒店、医疗和工程等全球行业需求精准匹配。" }, { title: "能力培训", desc: "通过我们专业的培训中心提供标准化培训项目，以满足国际基准要求。" }, { title: "法律合规", desc: "严格确保所有安置活动遵守印尼及国际劳动法律法规。" }, { title: "移民支持", desc: "提供从头到尾的文件办理、签证申请和出发前培训服务。" }, { title: "职业咨询", desc: "为寻求长期全球发展的专业人士提供有针对性的职业规划与发展指导。" }] },
    network: { badge: "广泛覆盖", title: "连接各大洲", desc: "我们的合作伙伴网络遍布欧洲、亚洲和中东，触达真正意义上的全球范围。我们与主要经济中心的顶级工业集团和服务提供商保持着紧密联系。", countries: "合作国家", corps: "全球企业" },
    lpk: { badge: "专业培训中心", title: "LPK培训中心：迈向卓越的进阶学习", desc: "我们的专业培训中心配备了最先进的设施，旨在模拟真实的国际工作环境。我们专注于语言能力、文化适应和技术精通。", features: ["国际标准认证", "母语教学讲师", "直接就业保障"] },
    gallery: { badge: "留存记录", title: "卓越时刻", viewAll: "查看所有动态" },
    contact: { title: "开启您的全球之旅", desc: "联系我们的团队，探索国际机会，或与我们合作满足您的招聘需求。", address: "Jl. Raya Global No. 88, Jakarta Selatan, Indonesia", namePlaceholder: "全名", emailPlaceholder: "电子邮件地址", messagePlaceholder: "留言", nameInput: "张三", emailInput: "zhangsan@example.com", messageInput: "请在此输入您的留言...", whatsapp: "WHATSAPP 客服", send: "发送询问" },
    footer: { copy: "© 2024 PT Aida Duta Indonesia Sejahtera 版权所有。", links: ["隐私政策", "服务条款", "诚聘英才"] },
  },
};

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "id", setLang: () => {} });
const useLang = () => useContext(LangContext);

const LangSwitcher = () => {
  const { lang, setLang } = useLang();
  const options: { code: Lang; label: string; flag: string }[] = [
    { code: "id", label: "ID", flag: "🇮🇩" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "zh", label: "中文", flag: "🇨🇳" },
  ];
  return (
    <div className="flex items-center gap-1 bg-surface-container/80 border border-secondary/20 p-1">
      {options.map((opt) => (
        <button key={opt.code} onClick={() => setLang(opt.code)}
          className={`flex items-center gap-1 px-2 py-1 text-[10px] font-bold tracking-wider uppercase transition-all duration-200
            ${lang === opt.code ? "bg-secondary text-surface-container-lowest" : "text-on-surface/60 hover:text-secondary"}`}>
          <span>{opt.flag}</span><span>{opt.label}</span>
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const { lang } = useLang();
  const t = translations[lang];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: t.nav.home, href: "#home" }, { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" }, { name: t.nav.network, href: "#network" },
    { name: t.nav.lpk, href: "#lpk" }, { name: t.nav.gallery, href: "#gallery" },
  ];
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 font-body ${isScrolled ? "bg-surface-container-low/90 backdrop-blur-xl border-b border-secondary/10 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop flex justify-between items-center">
        <div className="font-display text-2xl md:text-3xl text-secondary tracking-tighter font-medium underline decoration-secondary/30 underline-offset-8">Aida Duta</div>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[10px] font-bold tracking-[0.15em] uppercase text-on-surface/70 hover:text-secondary transition-colors duration-300">{link.name}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <LangSwitcher />
          <button className="hidden sm:block bg-secondary text-surface-container-lowest font-bold text-[10px] tracking-widest uppercase px-6 py-3 hover:bg-glow-gold transition-all duration-300">{t.nav.contact}</button>
          <button className="md:hidden text-secondary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-surface-container-high border-b border-secondary/10">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[10px] font-bold tracking-[0.15em] uppercase text-on-surface/70 hover:text-secondary">{link.name}</a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { lang } = useLang();
  const t = translations[lang].hero;
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-gradient-to-b from-muted-maroon to-surface">
      <div className="absolute inset-0 z-0">
        <img src="https://hongyan-web.sgp1.cdn.digitaloceanspaces.com/companies/banner/76e5ff41-33fc-478b-94b0-03c1dea3b926.png" alt="Futuristic globe" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>
      <div className="relative z-10 text-center px-6">
        <motion.span key={lang+"-badge"} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-[10px] md:text-xs font-bold text-secondary tracking-[0.4em] mb-6 block uppercase">{t.badge}</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-display text-4xl md:text-7xl font-bold text-on-surface mb-8 max-w-5xl mx-auto leading-tight">{t.title}</motion.h1>
        <motion.p key={lang+"-sub"} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="font-body text-lg md:text-xl text-on-surface/80 max-w-2xl mx-auto mb-12">{t.subtitle}</motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-secondary text-surface-container-lowest font-body font-bold text-[10px] tracking-widest uppercase px-10 py-4 hover:scale-105 transition-transform duration-300">{t.btnExplore}</button>
          <button className="border border-secondary text-secondary font-body font-bold text-[10px] tracking-widest uppercase px-10 py-4 hover:bg-secondary/10 transition-all duration-300">{t.btnLegacy}</button>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const { lang } = useLang();
  const t = translations[lang].about;
  return (
    <section id="about" className="py-section-gap px-6 md:px-margin-desktop bg-surface">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="font-body text-[10px] md:text-xs font-bold text-secondary tracking-widest mb-4 block uppercase font-mono">{t.badge}</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-on-surface mb-8 leading-tight">{t.title}</h2>
          <p className="font-body text-lg text-on-surface/70 mb-6 leading-relaxed">{t.p1}</p>
          <p className="font-body text-lg text-on-surface/70 leading-relaxed">{t.p2}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[400px] md:h-[600px] glass-card p-4 overflow-hidden">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbesjk83sycbpoIHwzfDnXIgkEKt_LeJAE8_1Kml-ujyJ5fIC9-hT8brBrXAobNL6XXCendeb82vU2I7x_8w7usX0ns4lxZFypejUUwmBVwQSZxXZA2B8tMzjd2sPBOij71jRiGudTS7tuvPvSdYyvDOs23yXrmt-Ejk0LTrphS3oUO1n7xlfpVSHMBtOeWMYED2lvDiXhi092GBtzKC0xDXZ6XIP505sFnp48uQB1erEFbqVp47pMeCemfrTzYyP7rsXjdyWK_ks" alt="Corporate Skyscraper" className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
        </motion.div>
      </div>
    </section>
  );
};

const VisionMission = () => {
  const { lang } = useLang();
  const t = translations[lang].vision;
  return (
    <section className="py-section-gap px-6 md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div whileHover={{ y: -10 }} className="glass-card p-8 md:p-12 gold-glow transition-all duration-500 border border-secondary/10">
          <Eye className="text-secondary w-12 h-12 mb-8" />
          <h3 className="font-display text-2xl md:text-3xl font-medium text-on-surface mb-6">{t.visionTitle}</h3>
          <p className="font-body text-lg text-on-surface/70 leading-relaxed">{t.visionText}</p>
        </motion.div>
        <motion.div whileHover={{ y: -10 }} className="glass-card p-8 md:p-12 gold-glow transition-all duration-500 border border-secondary/10">
          <Rocket className="text-secondary w-12 h-12 mb-8" />
          <h3 className="font-display text-2xl md:text-3xl font-medium text-on-surface mb-6">{t.missionTitle}</h3>
          <ul className="space-y-6">
            {t.missionItems.map((item, i) => (
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
};

const ServicesList = () => {
  const { lang } = useLang();
  const t = translations[lang].services;
  const icons = [<Users />, <History />, <GraduationCap />, <Gavel />, <Globe />, <ShieldCheck />];
  return (
    <section id="services" className="py-section-gap px-6 md:px-margin-desktop bg-surface">
      <div className="text-center mb-24">
        <span className="font-body text-xs font-bold text-secondary tracking-widest mb-4 block uppercase">{t.badge}</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-on-surface">{t.title}</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-secondary/10">
        {t.items.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 border-b border-r border-secondary/10 hover:bg-primary-container/20 transition-all duration-500 group">
            <div className="text-secondary mb-6 group-hover:scale-110 transition-transform">{icons[i]}</div>
            <h4 className="font-display text-2xl text-on-surface mb-4">{s.title}</h4>
            <p className="text-on-surface/60 font-body text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Network = () => {
  const { lang } = useLang();
  const t = translations[lang].network;
  return (
    <section id="network" className="py-section-gap px-6 md:px-margin-desktop bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div className="order-2 md:order-1">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
            <motion.img initial={{ filter: "grayscale(100%)", opacity: 0.5 }} whileInView={{ filter: "grayscale(0%)", opacity: 0.8 }} viewport={{ once: true }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbUu8KQqDn-LVkP_HEZhtkLW_0BOB3loKRxi2HZD7LanBVUOi0HaZiEVnSMkMaFjC0samFFhpR-LWgsMBWeHRKxQzd-JbxB_DIR5YJ2rShbBpHNvl2T5uNtsEqG1OSvrwHfAjn88gDMztoiwy_XWVZafCqfjyi3nvBRku-YuTschtMb2MURRHUnwmzqTjlBx6amM9gut-YKy35AJ81gd1BWUqgflk80OPRhpM4R47G6PZaB93bIhKTw1HDlpXauQO1tnxMS4IhcIk" alt="Global Connectivity" className="w-full glass-card border-none" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="font-body text-xs font-bold text-secondary tracking-widest mb-4 block uppercase">{t.badge}</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-on-surface mb-8">{t.title}</h2>
          <p className="font-body text-lg text-on-surface/70 mb-12 leading-relaxed">{t.desc}</p>
          <div className="grid grid-cols-2 gap-8">
            <div><div className="text-secondary font-display text-4xl mb-2">25+</div><div className="font-body text-[10px] font-bold text-on-surface/50 tracking-widest uppercase">{t.countries}</div></div>
            <div><div className="text-secondary font-display text-4xl mb-2">500+</div><div className="font-body text-[10px] font-bold text-on-surface/50 tracking-widest uppercase">{t.corps}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LPKTraining = () => {
  const { lang } = useLang();
  const t = translations[lang].lpk;
  return (
    <section id="lpk" className="py-section-gap px-6 md:px-margin-desktop bg-surface">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-7xl mx-auto glass-card flex flex-col md:flex-row overflow-hidden border-secondary/10">
        <div className="md:w-1/2 min-h-[400px]">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwJ9h3y-d2tRN6MfeqFusT3QpQZOQvIWaU2mNVem348AFWNuf9lWWV9W1UKPVZ8Ud7rQvd0P6rEhiJDbk0zAUuQSxNYS70o7CWl7O0IQ6-4XbK2EFLBhBtmj2KMLA2zwIJn1VaVjbtOfkqBvdr1h5-veVd2zj2jHjnT-lva7jN-aTNo3u0LeyDIXSNsqKaLmD9KOk2NdGqHYmOzdHBhcmCWDDS_Ei8BuQpunuRrywg7yprvqnaeL7_Bo8gBQtvfKTW_OojiBCdXic" alt="Training Center" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <span className="font-body text-xs font-bold text-secondary tracking-widest mb-6 block uppercase">{t.badge}</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-on-surface mb-8">{t.title}</h2>
          <p className="font-body text-lg text-on-surface/70 mb-10 leading-relaxed">{t.desc}</p>
          <div className="space-y-4">
            {t.features.map((text, i) => (
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
};

const GalleryGrid = () => {
  const { lang } = useLang();
  const t = translations[lang].gallery;
  return (
    <section id="gallery" className="py-section-gap px-6 md:px-margin-desktop bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-on-surface">
          <div>
            <span className="font-body text-xs font-bold text-secondary tracking-widest mb-4 block uppercase">{t.badge}</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">{t.title}</h2>
          </div>
          <button className="text-secondary font-body text-xs font-bold tracking-widest uppercase border-b border-secondary pb-1 flex items-center gap-2 hover:gap-4 transition-all">{t.viewAll} <ArrowRight className="w-4 h-4" /></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          <div className="md:col-span-2 md:row-span-2 overflow-hidden glass-card border-none"><img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArq-dpzJLVA2n6-qjhNl1E3QOMhW8VhQR0gaRjgkbBu97PZEODTzOrTabO5cCheSbKU9Dfvp9ZTYuhzX1c0q1xtVhXaYrzxviXXTvkL9rJCMBvtLgtkahPmze5oenhDWznvGOz61mf0rOk8hmxJ76yg-EA-12zT5FexuZN4xvvV5KzDuQNXUr1t2BkIgQKbVFjEKGx6x5qP89V9YIyqw54ECwoBc4fQngrHZu2ZLdr4oNND1IBh04-BPd5n7AVXE6eKpTjCzdDCf8" alt="Boardroom" referrerPolicy="no-referrer" /></div>
          <div className="overflow-hidden glass-card border-none"><img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFbHLvD9_eeM-rl47Nzp7YIeozHeTlJfEqSZPYbRJchj1DAqw5jckysvGDV2Jdwd028Yt8kQvYudXsMU3BanyKomKEM1SFuI0VcfTr1GZdQmedRq4Rhv3Hg-OtGnb5nheoKIB2wF9GPRkP_6n_42LF2RI9hhZZWsM5XHihS4by4RpmgmCZvQUv8nCevBxGEITnTXcCDSP7aFFW5S5J-3rENsEiX2W3KVPx5P1ZLGR3ao-ybWeOPomYX8MG2lLsW8b--jyuW75vzbY" alt="Handshake" referrerPolicy="no-referrer" /></div>
          <div className="md:row-span-2 overflow-hidden glass-card border-none"><img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXV8UjfR2qcLesWLi_CyFahmgj4LoROaESSJwJjMnpZsAcOKos66lObfENbWpwN-VGs7wulPIZP57gs9ZzkecXl874OMdoL-xrSNkStxr_KXcHP1_xitYJXlLLqpgZiy_6svF7zgA0Mw3s_-mcUYnf9e4b4bnAwTyx0MguOfFB72W9D4qwDmqWHb5cf4mkWvg9gLPhBkUbfFs1glu_KMaImg3YByTdUih9bsbIj8GIMIRU5n27HxgXY4bOyurqLbv8v_M-qYBc96k" alt="Graduates" referrerPolicy="no-referrer" /></div>
          <div className="overflow-hidden glass-card border-none"><img className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnyjTiXbC_Da2aO9ivmhgULDxWlTrzse1p3U0Z2YstgKF2M_5HUuPR0A-7-3JZanNi0QEKO15BIUKWgkE4YkHts8cmHLFgmmx-qXpUhYouj-U-EV_8PlbznS_XzDWBjYRq7Nb8z6jdyOshr0ZFEbM0Z7cjWNl1HebPA-JvRYr_Hva5Kf2gY_rVfDtu-ziCTrkoGvDFC6sXExMPft1Vkvdh6rvgLaqQ3hLjYzTrnS4Ztfba5FmCEmqLkjIGy_w32rg8wiG2wM6wL3E" alt="Contract Signing" referrerPolicy="no-referrer" /></div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const { lang } = useLang();
  const t = translations[lang].contact;
  return (
    <section className="py-section-gap px-6 md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-on-surface mb-8">{t.title}</h2>
          <p className="font-body text-lg text-on-surface/70 mb-12 leading-relaxed">{t.desc}</p>
          <div className="space-y-8 mb-12">
            {[
              { icon: <MapPin className="text-secondary w-5 h-5" />, text: t.address },
              { icon: <Mail className="text-secondary w-5 h-5" />, text: "contact@aidaduta.co.id" },
              { icon: <Phone className="text-secondary w-5 h-5" />, text: "+62 21 555 1234" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="p-3 bg-primary-container/30 border border-secondary/20 group-hover:bg-secondary/10 transition-colors">{item.icon}</div>
                <span className="text-on-surface font-body text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <button className="flex items-center gap-4 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-[#25D366]/20 font-body text-sm tracking-wide">
            <MessageCircle className="w-5 h-5 fill-current" />{t.whatsapp}
          </button>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8 md:p-12 border border-secondary/10">
          <div className="space-y-8">
            <div className="space-y-2">
              <label className="font-body text-[10px] font-bold text-on-surface/50 tracking-widest uppercase block">{t.namePlaceholder}</label>
              <input className="w-full bg-transparent border-b border-secondary/30 focus:border-secondary outline-none py-2 text-on-surface font-body transition-colors" type="text" placeholder={t.nameInput} />
            </div>
            <div className="space-y-2">
              <label className="font-body text-[10px] font-bold text-on-surface/50 tracking-widest uppercase block">{t.emailPlaceholder}</label>
              <input className="w-full bg-transparent border-b border-secondary/30 focus:border-secondary outline-none py-2 text-on-surface font-body transition-colors" type="email" placeholder={t.emailInput} />
            </div>
            <div className="space-y-2">
              <label className="font-body text-[10px] font-bold text-on-surface/50 tracking-widest uppercase block">{t.messagePlaceholder}</label>
              <textarea className="w-full bg-transparent border-b border-secondary/30 focus:border-secondary outline-none py-2 text-on-surface font-body transition-colors resize-none" rows={4} placeholder={t.messageInput}></textarea>
            </div>
            <button className="w-full bg-secondary text-surface-container-lowest font-body font-bold text-[10px] tracking-widest uppercase py-4 hover:bg-glow-gold transition-colors">{t.send}</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Foot = () => {
  const { lang } = useLang();
  const t = translations[lang].footer;
  return (
    <footer className="w-full px-6 md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 font-body">
          <div className="text-center md:text-left">
            <div className="font-display text-3xl text-secondary mb-4">Aida Duta</div>
            <p className="text-[10px] text-on-surface/40 tracking-wider uppercase font-bold">{t.copy}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {t.links.map((link) => (
              <a key={link} href="#" className="text-[10px] font-bold text-on-surface/40 hover:text-secondary tracking-widest uppercase transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Lang>("id");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
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
    </LangContext.Provider>
  );
}
