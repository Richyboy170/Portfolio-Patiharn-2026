'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { translations, Language } from './translations';
import Modal from '@/components/Modal';

type ModalType = 'usa-exchange' | 'kmutt' | 'uoft' | 'seed-scholarship' | 'cyber-warrior' | 'esan-hackathon' | 'tron-tracker' | 'crosswalk-app' | null;

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'th' : 'en');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Patiharn L.
          </h1>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">{t.nav.about}</a>
            <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors">{t.nav.skills}</a>
            <a href="#journey" className="text-slate-300 hover:text-cyan-400 transition-colors">{t.nav.journey}</a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">{t.nav.projects}</a>
            <a href="#awards" className="text-slate-300 hover:text-cyan-400 transition-colors">{t.nav.awards}</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">{t.nav.contact}</a>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-cyan-400 hover:bg-blue-500/20 transition-all duration-300 font-semibold"
            >
              {lang === 'en' ? '🇹🇭 ไทย' : '🇺🇸 EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-slate-300 text-sm">{t.hero.available}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent animate-fade-in">
            {t.hero.name}
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto font-semibold">
            {t.hero.title}
          </p>

          <p className="text-lg text-slate-400 mb-2">
            {t.hero.subtitle}
          </p>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            {t.hero.locations}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-cyan-300">
              {t.hero.gpa}
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-cyan-300">
              {t.hero.scholar}
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-cyan-300">
              {t.hero.uoft}
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-cyan-300">
              {t.hero.kmutt}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
            >
              {t.hero.cta2}
            </a>
          </div>

          {/* Vision Statement */}
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-2xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">{t.hero.visionTitle}</h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
              {t.hero.vision}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {t.about.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square relative rounded-2xl shadow-2xl shadow-blue-500/20 overflow-hidden border-4 border-cyan-500/30">
                <Image
                  src="/images/profile/profile-formal.jpg"
                  alt="Patiharn Liangkobkit"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">{t.about.heading}</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                {t.about.desc1}
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                {t.about.desc2}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400">{t.about.stat1}</div>
                  <div className="text-slate-400">{t.about.stat1Label}</div>
                </div>
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400">{t.about.stat2}</div>
                  <div className="text-slate-400">{t.about.stat2Label}</div>
                </div>
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400">{t.about.stat3}</div>
                  <div className="text-slate-400">{t.about.stat3Label}</div>
                </div>
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400">{t.about.stat4}</div>
                  <div className="text-slate-400">{t.about.stat4Label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI & Machine Learning */}
            <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{t.skills.aiTitle}</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Machine Learning (U of T)</li>
                <li>• Deep Learning & Neural Networks</li>
                <li>• LLMs & Transformers</li>
                <li>• TensorFlow & PyTorch</li>
                <li>• Computer Vision & NLP</li>
                <li>• Recommendation Systems</li>
              </ul>
            </div>

            {/* Data Science */}
            <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{t.skills.dataTitle}</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Data Modeling & Analysis</li>
                <li>• Python (3+ years)</li>
                <li>• SQL & NoSQL Databases</li>
                <li>• Data Visualization</li>
                <li>• Statistical Analysis</li>
                <li>• Big Data Processing</li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{t.skills.webTitle}</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Next.js & React</li>
                <li>• TypeScript & JavaScript</li>
                <li>• Tailwind CSS</li>
                <li>• RESTful APIs</li>
                <li>• Responsive Design</li>
                <li>• Figma (UI/UX)</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{t.skills.cloudTitle}</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Google Cloud Platform</li>
                <li>• Alibaba Cloud (ACA Certified)</li>
                <li>• Vercel Deployment</li>
                <li>• Git & GitHub</li>
                <li>• CI/CD Pipelines</li>
                <li>• Docker Basics</li>
              </ul>
            </div>

            {/* AI Tools & Frameworks */}
            <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{t.skills.aiToolsTitle}</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Claude API (Anthropic)</li>
                <li>• Hugging Face Transformers</li>
                <li>• BERT & Attention Mechanisms</li>
                <li>• Image Captioning Models</li>
                <li>• Encoder-Decoder Architecture</li>
                <li>• Edge AI & Visualization</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{t.skills.softTitle}</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Project Management</li>
                <li>• Team Collaboration</li>
                <li>• Teaching & Mentoring (TA)</li>
                <li>• Entrepreneurial Mindset</li>
                <li>• Problem Solving</li>
                <li>• English (IELTS 6.5, DET 125)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {t.journey.title}
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block"></div>

            <div className="space-y-12">
              {/* Thailand - High School */}
              <div className="relative flex items-center justify-end md:justify-start">
                <div className="md:w-1/2 md:pr-12">
                  <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">🇹🇭</div>
                      <div className="relative w-12 h-12">
                        <Image
                          src="/images/universities/bcc-logo.png"
                          alt="Bangkok Christian College"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">Bangkok Christian College</h3>
                    <p className="text-slate-400 text-sm mb-2">May 2011 - March 2023</p>
                    <p className="text-slate-300 mb-3">High School - Graduated with 3.85 GPA</p>
                    <ul className="text-slate-400 space-y-1">
                      <li>• Strong academic foundation</li>
                      <li>• Built passion for technology</li>
                      <li>• Prepared for international experience</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-950 hidden md:block"></div>
              </div>

              {/* United States */}
              <div className="relative flex items-center justify-start md:justify-end">
                <div className="md:w-1/2 md:pl-12">
                  <div
                    onClick={() => setActiveModal('usa-exchange')}
                    className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">🇺🇸</div>
                      <div className="relative w-14 h-14">
                        <Image
                          src="/images/universities/iowa-logo.png"
                          alt="South Side High School"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">South Side High School, Jackson TN</h3>
                    <p className="text-slate-400 text-sm mb-2">July 2021 - July 2022 (1 year)</p>
                    <p className="text-slate-300 mb-3">11th Grade Exchange Program</p>
                    <ul className="text-slate-400 space-y-1 mb-4">
                      <li>• First international experience</li>
                      <li>• Cultural immersion in United States</li>
                      <li>• Enhanced English proficiency</li>
                      <li>• Built global perspective</li>
                    </ul>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                          src="/images/journey/usa-host-family.jpg"
                          alt="With my American host family"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                          src="/images/journey/usa-classmates.jpg"
                          alt="With my American classmates"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="mt-4 text-cyan-400 text-sm font-semibold flex items-center gap-2">
                      <span>Click to see more details</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-950 hidden md:block"></div>
              </div>

              {/* Thailand - KMUTT */}
              <div className="relative flex items-center justify-end md:justify-start">
                <div className="md:w-1/2 md:pr-12">
                  <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">🇹🇭</div>
                      <div className="relative w-16 h-16">
                        <Image
                          src="/images/universities/kmutt-logo.png"
                          alt="KMUTT"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">KMUTT - King Mongkut&apos;s University</h3>
                    <p className="text-slate-400 text-sm mb-2">August 2023 - Present</p>
                    <p className="text-slate-300 mb-3">BE in Computer Engineering - Current GPA 3.72</p>
                    <ul className="text-slate-400 space-y-1">
                      <li>• Teacher Assistant at INNO-X Lab</li>
                      <li>• Formula Racing Team Member</li>
                      <li>• Multiple hackathon wins (Top 10)</li>
                      <li>• Data Science & ML specialization</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-950 hidden md:block"></div>
              </div>

              {/* Canada - Current */}
              <div className="relative flex items-center justify-start md:justify-end">
                <div className="md:w-1/2 md:pl-12">
                  <div className="p-6 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-2 border-cyan-500/50 rounded-xl shadow-xl shadow-cyan-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">🇨🇦</div>
                      <div className="relative w-16 h-16 bg-white rounded-lg p-2">
                        <Image
                          src="/images/universities/uoft-logo.png"
                          alt="University of Toronto"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-300 mb-2">University of Toronto - Current</h3>
                    <p className="text-slate-300 text-sm mb-2">Sep 2025 - Dec 2025 (1 term)</p>
                    <p className="text-slate-200 mb-3 font-semibold">SEED Scholarship Exchange Program ($10,200 CAD)</p>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Advanced Machine Learning</li>
                      <li>• Deep Learning Fundamentals</li>
                      <li>• Python Programming in Depth</li>
                      <li>• AI Conference attendance (UTMIST)</li>
                      <li>• International research exposure</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-950 animate-pulse hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {t.projects.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 - Tron Crypto Tracker */}
            <div
              onClick={() => setActiveModal('tron-tracker')}
              className="group p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="aspect-video relative rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/images/projects/tron-tracker.jpg"
                  alt="Cyber Warrior Hackathon 2025"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Tron Cryptocurrency Tracker</h3>
              <p className="text-slate-300 mb-4">Desktop application tracking scammer transactions - Cyber Warrior Hackathon 2025 (Top 10)</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Python</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Blockchain</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Cybersecurity</span>
              </div>
              <div className="text-yellow-400 text-sm mb-2">🏆 Honorable Mention Award - 10,000 THB</div>
              <div className="mt-4 text-cyan-400 text-sm font-semibold flex items-center gap-2">
                <span>Click for details</span>
                <span>→</span>
              </div>
            </div>

            {/* Project 2 - Crosswalk Safety App */}
            <div
              onClick={() => setActiveModal('crosswalk-app')}
              className="group p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="aspect-video relative rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/images/projects/crosswalk-app.jpg"
                  alt="E-SAN Hackathon Crosswalk Safety"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Crosswalk Safety Application</h3>
              <p className="text-slate-300 mb-4">AI-powered safety solution - E-SAN Thailand PMU-B Hackathon</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">AI/ML</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Mobile</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">IoT</span>
              </div>
              <div className="text-yellow-400 text-sm mb-2">🏆 Social Impact Award + Gold Certificate - 3,000 THB</div>
              <div className="mt-4 text-cyan-400 text-sm font-semibold flex items-center gap-2">
                <span>Click for details</span>
                <span>→</span>
              </div>
            </div>

            {/* Project 3 - English Vocabulary Website */}
            <div className="group p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">English Vocabulary Training Website</h3>
              <p className="text-slate-300 mb-4">Interactive learning platform with JSON data integration</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Next.js</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">TypeScript</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Tailwind CSS</span>
              </div>
              <a href="https://englishnewwords.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                View Live Site →
              </a>
            </div>

            {/* Project 4 - T-Shirt Showcase */}
            <div className="group p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="aspect-video relative rounded-lg mb-4 overflow-hidden bg-slate-900">
                <Image
                  src="/images/projects/tshirt-overview.png"
                  alt="T-Shirt Showcase Website"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">T-Shirt Showcase Website</h3>
              <p className="text-slate-300 mb-4">E-commerce showcase with Figma design system</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Next.js</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Figma</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">UI/UX</span>
              </div>
              <a href="https://crazyfabric-websitex.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                View Live Site →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {t.awards.title}
          </h2>

          <div className="space-y-6">
            {/* SEED Scholarship */}
            <div className="p-6 bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border-2 border-yellow-500/40 rounded-xl hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🏆</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">SEED Scholarship - Government of Canada</h3>
                  <p className="text-slate-300 mb-2">Canada-ASEAN Scholarships and Educational Exchanges for Development</p>
                  <p className="text-cyan-400 font-semibold mb-2">Prize: $10,200 CAD • Year: 2025</p>
                  <p className="text-slate-400">Competitive scholarship awarded by Global Affairs Canada for exchange program at University of Toronto</p>
                </div>
              </div>
            </div>

            {/* Cyber Warrior Hackathon */}
            <div
              onClick={() => setActiveModal('cyber-warrior')}
              className="p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">🥉</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Cyber Warrior Hackathon 2025 - Honorable Mention (Top 10)</h3>
                  <p className="text-slate-300 mb-2">Organized by KMUTT x Cyber Crime Investigation Bureau (CCIB)</p>
                  <p className="text-cyan-400 font-semibold mb-2">Prize: 10,000 THB • Year: 2025</p>
                  <p className="text-slate-400 mb-4">Team of 5 developed Tron Cryptocurrency tracking desktop application for scammer detection</p>
                  <div className="mt-4 text-cyan-400 text-sm font-semibold flex items-center gap-2">
                    <span>Click for full details</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* E-SAN Hackathon */}
            <div
              onClick={() => setActiveModal('esan-hackathon')}
              className="p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">🥇</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">E-SAN Thailand PMU-B Hackathon - Social Impact Award + Gold Certificate</h3>
                  <p className="text-slate-300 mb-2">Coding & AI Academy Season 2 by PMU-B x Khon Kaen University</p>
                  <p className="text-cyan-400 font-semibold mb-2">Prize: 3,000 THB • Year: 2025</p>
                  <p className="text-slate-400 mb-4">Team of 3 developed innovative crosswalk safety application with AI</p>
                  <div className="mt-4 text-cyan-400 text-sm font-semibold flex items-center gap-2">
                    <span>Click to view photo gallery and details</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top 20 Certificate */}
            <div className="p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🏅</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Top 20 Selected Teams - Outstanding Performance</h3>
                  <p className="text-slate-300 mb-2">Certificate of Accomplishment</p>
                  <p className="text-cyan-400 font-semibold mb-2">February 2025</p>
                  <p className="text-slate-400">Recognition of outstanding performance and achievement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Let&apos;s Build Something Amazing
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I&apos;m actively seeking Data Science, AI Engineering, and Machine Learning opportunities in Thailand.
            Let&apos;s connect and create innovative solutions together!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:patiharn.liang@gmail.com" className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-1">Email</h3>
              <p className="text-slate-400 text-sm">patiharn.liang@gmail.com</p>
            </a>

            <a href="https://github.com/Richyboy170" target="_blank" rel="noopener noreferrer" className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-1">GitHub</h3>
              <p className="text-slate-400 text-sm">@Richyboy170</p>
            </a>

            <a href="tel:+66636145491" className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-1">Phone</h3>
              <p className="text-slate-400 text-sm">+66 63-614-5491</p>
            </a>
          </div>

          <div className="p-8 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-cyan-500/40 rounded-2xl mb-8">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-2">Currently Based In</h3>
            <p className="text-xl text-slate-200 font-semibold">Bangkok, Thailand 🇹🇭</p>
            <p className="text-slate-400 mt-2">Bangkhuntian, Chomthong, Bangkok 10150</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-slate-300">
              IELTS: 6.5
            </div>
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-slate-300">
              Duolingo: 125
            </div>
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-slate-300">
              TOEFL iBT: 93-97
            </div>
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-slate-300">
              CEFR: B2
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950/80 border-t border-blue-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            {t.footer.copyright}
          </p>
          <p className="text-slate-500 text-sm mt-2">
            {t.footer.tagline}
          </p>
        </div>
      </footer>

      {/* Modals */}
      <Modal
        isOpen={activeModal === 'usa-exchange'}
        onClose={() => setActiveModal(null)}
        title="🇺🇸 USA Exchange Program - Jackson, Tennessee"
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-3">Program Details</h4>
              <ul className="text-slate-300 space-y-2">
                <li><strong className="text-cyan-400">Duration:</strong> July 2021 - July 2022 (1 year)</li>
                <li><strong className="text-cyan-400">School:</strong> South Side High School</li>
                <li><strong className="text-cyan-400">Location:</strong> Jackson, Tennessee, USA</li>
                <li><strong className="text-cyan-400">Grade:</strong> 11th Grade</li>
                <li><strong className="text-cyan-400">Program:</strong> Cultural Exchange</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-3">Key Experiences</h4>
              <ul className="text-slate-300 space-y-2">
                <li>• First international experience abroad</li>
                <li>• Complete cultural immersion in American life</li>
                <li>• Significant English language development</li>
                <li>• Built lifelong friendships across cultures</li>
                <li>• Developed global perspective and adaptability</li>
                <li>• Experienced American high school system</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/journey/usa-host-family.jpg"
                alt="With my American host family"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-sm">With my wonderful host family</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/journey/usa-classmates.jpg"
                alt="With my American classmates"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-sm">Making friends at South Side High School</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-950/30 border border-cyan-500/30 rounded-lg p-4">
            <p className="text-slate-300 leading-relaxed">
              This exchange program was a transformative experience that broadened my worldview and
              strengthened my English communication skills. Living with an American host family gave me
              deep insights into American culture, values, and daily life. This experience sparked my
              passion for international collaboration and laid the foundation for my future academic pursuits abroad.
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'cyber-warrior'}
        onClose={() => setActiveModal(null)}
        title="🥉 Cyber Warrior Hackathon 2025"
      >
        <div className="space-y-6">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src="/images/projects/tron-tracker.jpg"
              alt="Cyber Warrior Hackathon 2025 Group Photo"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-3">Competition Details</h4>
              <ul className="text-slate-300 space-y-2">
                <li><strong className="text-cyan-400">Event:</strong> Cyber Warrior Hackathon 2025</li>
                <li><strong className="text-cyan-400">Organizer:</strong> KMUTT x CCIB</li>
                <li><strong className="text-cyan-400">Achievement:</strong> Honorable Mention (Top 10)</li>
                <li><strong className="text-cyan-400">Prize:</strong> 10,000 THB</li>
                <li><strong className="text-cyan-400">Team Size:</strong> 5 members</li>
                <li><strong className="text-cyan-400">Date:</strong> January 2025</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-3">Project Overview</h4>
              <p className="text-slate-300 mb-4">
                Developed a desktop application for tracking Tron cryptocurrency transactions
                to identify and monitor scammer activities.
              </p>
              <h5 className="font-semibold text-cyan-400 mb-2">Technologies Used:</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Python</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Blockchain API</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Cybersecurity</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Data Analysis</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-950/30 border border-cyan-500/30 rounded-lg p-4">
            <h4 className="text-lg font-bold text-cyan-400 mb-2">Impact & Learning</h4>
            <p className="text-slate-300 leading-relaxed">
              This hackathon challenged us to address real-world cybercrime issues. Working alongside the
              Cyber Crime Investigation Bureau (CCIB) gave us insights into how technology can combat fraud.
              Our solution helps track suspicious cryptocurrency transactions on the Tron blockchain, providing
              valuable intelligence for investigating scam operations.
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'esan-hackathon'}
        onClose={() => setActiveModal(null)}
        title="🥇 E-SAN Hackathon - Social Impact Award"
      >
        <div className="space-y-6">
          {/* Hero Image Gallery */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/projects/crosswalk-app.jpg"
                alt="E-SAN Hackathon Group Photo"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-sm font-semibold">E-SAN Hackathon 2025 - Social Impact Winners</p>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/hackathon/esan-multiple-winners.jpg"
                alt="Multiple Award Winners on Stage"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-sm font-semibold">Award Ceremony - Two Winning Teams</p>
              </div>
            </div>
          </div>

          {/* Competition Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-3">Competition Details</h4>
              <ul className="text-slate-300 space-y-2">
                <li><strong className="text-cyan-400">Event:</strong> E-SAN Thailand PMU-B Hackathon</li>
                <li><strong className="text-cyan-400">Theme:</strong> Coding & AI Academy Season 2</li>
                <li><strong className="text-cyan-400">Organizer:</strong> PMU-B x Khon Kaen University</li>
                <li><strong className="text-cyan-400">Awards:</strong> Social Impact + Gold Certificate</li>
                <li><strong className="text-cyan-400">Prize:</strong> 3,000 THB (Team Full Moon Party)</li>
                <li><strong className="text-cyan-400">Team Size:</strong> 3 members</li>
                <li><strong className="text-cyan-400">Date:</strong> February 9-11, 2025</li>
                <li><strong className="text-cyan-400">Location:</strong> AVANI Khon Kaen Hotel & Convention Centre</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-3">Project: Smart Drive CCTV</h4>
              <p className="text-slate-300 mb-4">
                Developed an AI-powered crosswalk safety application combining mobile technology,
                IoT sensors, and machine learning to protect pedestrians at intersections.
              </p>
              <h5 className="font-semibold text-cyan-400 mb-2">Technologies:</h5>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">AI/ML</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Mobile App</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">IoT Sensors</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Computer Vision</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">CCTV Integration</span>
              </div>
            </div>
          </div>

          {/* Photo Gallery - Award Moments */}
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-4">Award Ceremony Moments</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
                <Image
                  src="/images/awards/esan-solo-award.jpg"
                  alt="Holding the Social Impact Award"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-xs">Proudly holding the Social Impact Award</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
                <Image
                  src="/images/awards/esan-award-ceremony.jpg"
                  alt="Award ceremony moment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-xs">Receiving award on stage</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
                <Image
                  src="/images/awards/esan-team-photo.jpg"
                  alt="Team celebrating together"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-xs">Team Full Moon Party celebration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hackathon Experience Gallery */}
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-4">Hackathon Experience</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <Image
                  src="/images/hackathon/esan-team-working.jpg"
                  alt="Team working during hackathon"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-sm">Intense coding session with our team</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <Image
                  src="/images/hackathon/esan-mentoring.jpg"
                  alt="Mentoring session"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-sm">Getting guidance from industry mentors</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <Image
                  src="/images/hackathon/esan-coding.jpg"
                  alt="Coding during competition"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-sm">Deep in development mode</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <Image
                  src="/images/hackathon/esan-demo.jpg"
                  alt="Demo presentation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-sm">Presenting demo to audience</p>
                </div>
              </div>
            </div>
          </div>

          {/* More Team Photos */}
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-4">Team & Networking</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src="/images/hackathon/esan-team-casual.jpg"
                  alt="Team casual photo"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-xs">Team bonding moments</p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src="/images/hackathon/esan-workspace.jpg"
                  alt="Workspace setup"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-xs">Our workspace setup</p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src="/images/hackathon/esan-all-winners.jpg"
                  alt="All winners on stage"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-xs">All winning teams together</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate */}
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-900/50 border-2 border-cyan-500/30">
            <Image
              src="/images/awards/esan-gold-certificate.png"
              alt="Gold Level Certificate"
              fill
              className="object-contain p-4"
            />
          </div>

          {/* Impact Section */}
          <div className="bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-cyan-500/30 rounded-xl p-6">
            <h4 className="text-2xl font-bold text-cyan-400 mb-4">Social Impact & Recognition</h4>
            <div className="space-y-3 text-slate-300">
              <p className="leading-relaxed">
                Our <strong className="text-cyan-400">Smart Drive CCTV</strong> project addressed a critical safety issue in Thailand
                where crosswalk accidents cause numerous injuries and fatalities each year. By combining AI-powered computer vision
                with real-time alert systems, we created a comprehensive solution that can save lives.
              </p>
              <p className="leading-relaxed">
                The Social Impact Award recognized our team&apos;s commitment to using technology for social good. Our solution
                demonstrated practical implementation potential and scalability across Thai cities, with judges particularly
                praising our focus on real-world deployment and community benefit.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-cyan-500/30">
                <div>
                  <h5 className="font-bold text-cyan-400 mb-2">Key Achievements:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Social Impact Award Winner</li>
                    <li>✓ Gold Level Certificate</li>
                    <li>✓ 3,000 THB Prize Money</li>
                    <li>✓ Recognition for innovative AI solution</li>
                    <li>✓ Networking with industry leaders</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-cyan-400 mb-2">Project Features:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Real-time pedestrian detection</li>
                    <li>• Smart traffic light integration</li>
                    <li>• Driver & pedestrian mobile alerts</li>
                    <li>• Analytics dashboard for city planning</li>
                    <li>• Emergency response integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'tron-tracker'}
        onClose={() => setActiveModal(null)}
        title="🔐 Tron Cryptocurrency Tracker"
      >
        <div className="space-y-6">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src="/images/projects/tron-tracker.jpg"
              alt="Cyber Warrior Hackathon Team"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-3">Project Overview</h4>
            <p className="text-slate-300 leading-relaxed mb-4">
              A desktop application designed to track and analyze Tron (TRX) cryptocurrency transactions
              to identify patterns associated with scam operations. Built during the Cyber Warrior Hackathon
              2025 in collaboration with Thailand&apos;s Cyber Crime Investigation Bureau (CCIB).
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-3">Technical Features</h4>
              <ul className="text-slate-300 space-y-2">
                <li>• Real-time blockchain transaction monitoring</li>
                <li>• Pattern recognition for suspicious activities</li>
                <li>• Transaction flow visualization</li>
                <li>• Wallet address tracking & analysis</li>
                <li>• Automated alert system for flagged transactions</li>
                <li>• Data export for investigation reports</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-3">Technology Stack</h4>
              <ul className="text-slate-300 space-y-2">
                <li><strong className="text-cyan-400">Language:</strong> Python</li>
                <li><strong className="text-cyan-400">Blockchain:</strong> Tron Network API</li>
                <li><strong className="text-cyan-400">Data Analysis:</strong> Pandas, NumPy</li>
                <li><strong className="text-cyan-400">Visualization:</strong> Matplotlib</li>
                <li><strong className="text-cyan-400">UI Framework:</strong> Tkinter/PyQt</li>
                <li><strong className="text-cyan-400">Database:</strong> SQLite</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-950/30 border border-cyan-500/30 rounded-lg p-4">
            <h4 className="text-lg font-bold text-cyan-400 mb-2">Achievement & Impact</h4>
            <p className="text-slate-300 leading-relaxed">
              Our team of 5 secured Honorable Mention (Top 10) and won 10,000 THB in prize money.
              The project demonstrates practical application of blockchain analysis in cybercrime prevention.
              Working with CCIB professionals gave us real-world context for how our tool could assist in
              ongoing fraud investigations involving cryptocurrency scams.
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'crosswalk-app'}
        onClose={() => setActiveModal(null)}
        title="🚦 Smart Drive CCTV - Crosswalk Safety"
      >
        <div className="space-y-6">
          {/* Main Hero Image */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-cyan-500/30">
            <Image
              src="/images/projects/crosswalk-app.jpg"
              alt="E-SAN Hackathon Team Presentation"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
              <h3 className="text-white text-lg font-bold">Team Full Moon Party - Social Impact Award Winners</h3>
            </div>
          </div>

          {/* Project Vision */}
          <div className="bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-cyan-500/30 rounded-xl p-6">
            <h4 className="text-2xl font-bold text-cyan-400 mb-3">Project Vision</h4>
            <p className="text-slate-300 leading-relaxed mb-4">
              Smart Drive CCTV is an intelligent pedestrian safety system that combines AI-powered computer vision,
              IoT sensors, and mobile technology to protect people at crosswalks. Our solution addresses the alarming
              rate of crosswalk accidents in Thailand by creating an ecosystem of real-time detection and alerts.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The system uses CCTV cameras equipped with AI to detect pedestrians approaching crosswalks, automatically
              communicates with smart traffic lights, and sends real-time notifications to both drivers and pedestrians
              through mobile applications, creating a comprehensive safety network.
            </p>
          </div>

          {/* System Architecture Gallery */}
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-4">Development & Implementation</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <Image
                  src="/images/hackathon/esan-team-working.jpg"
                  alt="Development session"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-sm font-semibold">Building the AI model and mobile interface</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <Image
                  src="/images/hackathon/esan-coding.jpg"
                  alt="Coding session"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-sm font-semibold">Intense development during the hackathon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-950/30 border border-cyan-500/30 rounded-xl p-5">
              <h4 className="text-xl font-bold text-cyan-400 mb-3">Core Features</h4>
              <ul className="text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>AI-powered pedestrian detection using computer vision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Real-time alerts to drivers via mobile app</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>IoT sensor integration with traffic lights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Pedestrian mobile app with safety notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Analytics dashboard for traffic management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Emergency response system integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-950/30 border border-cyan-500/30 rounded-xl p-5">
              <h4 className="text-xl font-bold text-cyan-400 mb-3">Technology Stack</h4>
              <ul className="text-slate-300 space-y-2">
                <li><strong className="text-cyan-400">AI/ML:</strong> TensorFlow, OpenCV, YOLO</li>
                <li><strong className="text-cyan-400">Mobile:</strong> React Native / Flutter</li>
                <li><strong className="text-cyan-400">IoT:</strong> Arduino, Raspberry Pi, ESP32</li>
                <li><strong className="text-cyan-400">Backend:</strong> Node.js, Python Flask</li>
                <li><strong className="text-cyan-400">Database:</strong> MongoDB, Firebase</li>
                <li><strong className="text-cyan-400">Cloud:</strong> Google Cloud Platform</li>
                <li><strong className="text-cyan-400">Vision:</strong> CCTV Integration, Edge AI</li>
              </ul>
            </div>
          </div>

          {/* Award Photos Gallery */}
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-4">Award Ceremony & Recognition</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
                <Image
                  src="/images/awards/esan-solo-award.jpg"
                  alt="Receiving the award"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-xs">Proudly holding the Social Impact Award</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
                <Image
                  src="/images/awards/esan-award-ceremony.jpg"
                  alt="On stage at award ceremony"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-xs">Receiving award on stage</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
                <Image
                  src="/images/awards/esan-team-photo.jpg"
                  alt="Team celebration"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                  <p className="text-white text-xs">Team Full Moon Party celebration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact & Achievement */}
          <div className="bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-cyan-500/30 rounded-xl p-6">
            <h4 className="text-2xl font-bold text-cyan-400 mb-4">Awards, Impact & Recognition</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold text-cyan-400 mb-3">Achievements:</h5>
                <ul className="text-slate-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">🏆</span>
                    <span><strong>Social Impact Award Winner</strong> - E-SAN Hackathon 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">🥇</span>
                    <span><strong>Gold Level Certificate</strong> - Outstanding Achievement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">💰</span>
                    <span><strong>3,000 THB Prize Money</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">🌟</span>
                    <span>Recognition for innovative AI solution addressing real social problems</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-cyan-400 mb-3">Social Impact:</h5>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  Our solution addresses Thailand&apos;s critical pedestrian safety crisis where crosswalk
                  accidents cause hundreds of injuries annually. By leveraging AI and IoT, we created a
                  scalable system deployable across Thai cities.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Judges praised our comprehensive approach combining multiple technologies with strong focus
                  on practical deployment and measurable community benefit. The project demonstrates how emerging
                  technologies can solve pressing urban safety challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
